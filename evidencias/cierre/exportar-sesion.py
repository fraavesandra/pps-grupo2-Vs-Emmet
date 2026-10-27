"""Exportación directa del JSONL original de esta sesión a un archivo nuevo.
Uso: python3 evidencias/cierre/exportar-sesion.py REGISTRO_JSONL
No toca exportaciones anteriores. Excluye herramientas, razonamiento y metadatos.
"""
import json
import re
import sys
from pathlib import Path

mensajes = []
with Path(sys.argv[1]).open() as origen:
    for linea in origen:
        evento = json.loads(linea)
        p = evento.get('payload', {})
        if evento.get('type') != 'response_item' or p.get('type') != 'message':
            continue
        if p.get('role') not in ('user', 'assistant') or p.get('channel') == 'analysis':
            continue
        texto = '\n'.join(c.get('text', '') for c in p.get('content', [])
                          if c.get('type') in ('input_text', 'output_text', 'text'))
        for tag in ['environment_context', 'external_codex_apps_open_page', 'in-app-browser-context']:
            texto = re.sub(r'<' + tag + r'\b[^>]*>.*?</' + tag + r'>', '', texto, flags=re.S)
        texto = texto.strip()
        if not texto:
            continue
        texto = re.sub(r'(?:/Users/|/home/)[^\s<>"\x27]+', '[ruta personal omitida]', texto)
        texto = re.sub(r'[A-Z]:\\Users\\[^\s<>"\x27]+', '[ruta personal omitida]', texto)
        texto = re.sub(r'[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}', '[correo omitido por privacidad]', texto)
        texto = re.sub(r'(?:gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|sk-[A-Za-z0-9]{20,}|AKIA[A-Z0-9]{16})', '[credencial omitida]', texto)
        mensajes.append((p['role'], evento.get('timestamp', ''), texto))
assert any('Vamos a cerrar el proyecto para entregarlo.' in t for _, _, t in mensajes)
cabecera = '''# Conversación original — cierre del proyecto, 27 de octubre de 2026

Exportación directa de los mensajes disponibles en el historial original JSONL de este mismo chat. Incluye el intercambio previo de auditoría, confirmaciones, revisión de novedades y petición de cierre. No es una reconstrucción ni un resumen. Se crea un archivo nuevo: las exportaciones anteriores no se reescriben ni se evalúan aquí.

Se conservan mensajes del usuario y respuestas conversacionales del asistente, incluidos avances y confirmaciones, salvo marcadores explícitos de privacidad. Se excluyen instrucciones internas, razonamiento, contexto automático de entorno/página, imágenes y llamadas/salidas de herramientas. Las aprobaciones del sandbox que no figuren como mensaje del usuario no se inventan como intervenciones. Las rutas personales, correos y patrones de credenciales se sustituyen por marcadores.

El corte precede al commit/push de este cierre y a su respuesta final, todavía no existentes al exportar. No se afirma conservar esos mensajes futuros. Para añadirlos, exportar nuevamente el historial original tras finalizar, sin reconstruirlo de memoria.

'''
cabecera += f'Intervenciones: {len(mensajes)}. Última marca temporal original (UTC): {mensajes[-1][1]}.\n\n'
contenido = cabecera + '\n'.join(f'## {i}. {"Usuario" if rol == "user" else "Asistente"}\n\n{texto}\n'
                                  for i, (rol, _, texto) in enumerate(mensajes, 1))
Path('conversaciones-ia/07-cierre-codex-2026-10-27.md').write_text(contenido)
print(f'Exportadas {len(mensajes)} intervenciones originales.')
