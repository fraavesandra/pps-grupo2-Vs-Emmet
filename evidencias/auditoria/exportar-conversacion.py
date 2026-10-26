"""Exporta mensajes originales del JSONL indicado, sin reconstruirlos.
Uso: python3 evidencias/auditoria/exportar-conversacion.py REGISTRO_JSONL
La ruta privada de entrada no se guarda en la salida.
"""
import json,re,sys
from pathlib import Path
source=Path(sys.argv[1]); messages=[]
for line in source.read_text().splitlines():
 x=json.loads(line);p=x.get('payload',{})
 if x.get('type')!='response_item' or p.get('type')!='message' or p.get('role') not in ('user','assistant'):continue
 if p.get('channel')=='analysis':continue
 text='\n'.join(c.get('text','') for c in p.get('content',[]) if c.get('type') in ('input_text','output_text','text'))
 for tag in ['environment_context','external_codex_apps_open_page','in-app-browser-context']:
  text=re.sub(r'<'+tag+r'\b[^>]*>.*?</'+tag+r'>','',text,flags=re.S)
 text=text.strip()
 if not text:continue
 text=re.sub(r'(?:/Users/|/home/)[^\s<>"\x27]+','[ruta personal omitida]',text)
 text=re.sub(r'[A-Z]:\\Users\\[^\s<>"\x27]+','[ruta personal omitida]',text)
 text=re.sub(r'[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}','[correo omitido por privacidad]',text)
 text=re.sub(r'(?:gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|sk-[A-Za-z0-9]{20,}|AKIA[A-Z0-9]{16})','[credencial omitida]',text)
 messages.append((p['role'],x.get('timestamp',''),text))
assert any('Usa obligatoriamente nuestra skill' in m[2] for m in messages)
header='''# Conversación original de auditoría — 2026-10-26

Exportación mecánica del historial local original JSONL de esta sesión. No es una reconstrucción ni un resumen. Incluye mensajes de usuario y asistente disponibles hasta el corte indicado, incluidas confirmaciones conversacionales si existen. Se omiten mensajes internos de sistema/desarrollador, razonamiento, bloques automáticos de entorno/página y llamadas/salidas de herramientas. Las aprobaciones técnicas del sandbox no se convierten en supuestos mensajes de usuario: están fuera de esta exportación conversacional. No se exportan imágenes adjuntas ni pantallas de aplicaciones ajenas.

Las rutas personales, correos y patrones de credenciales se sustituyen por marcadores explícitos. No se modifican los originales. El corte precede al commit/push y a la respuesta final para evitar una exportación recursiva; esos mensajes posteriores no están incluidos. Para conservar también el cierre, exportar de nuevo el historial original después de terminar la sesión, revisar privacidad y añadirlo al repositorio.

'''
header+=f'Intervenciones exportadas: {len(messages)}. Última marca temporal del registro (UTC): {messages[-1][1]}.\n\n'
out=header+'\n'.join(f'## {i}. {"Usuario" if role=="user" else "Asistente"}\n\n{text}\n' for i,(role,ts,text) in enumerate(messages,1))
Path('conversaciones-ia/06-auditoria-codex-2026-10-26.md').write_text(out)
print('Intervenciones originales exportadas:',len(messages))
