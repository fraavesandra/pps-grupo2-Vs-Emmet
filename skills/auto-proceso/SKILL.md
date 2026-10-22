---
name: auto-proceso
description: >-
  Skill para documentar automáticamente el archivo PROCESO.md del proyecto.
  Se activa cuando el usuario solicita registrar una fase, decisión o cambio
  en el proyecto. Analiza los archivos modificados, los commits recientes y
  las conversaciones de IA para generar o actualizar la sección correspondiente
  en PROCESO.md con el formato requerido por la rúbrica de evaluación.
  Sincroniza automáticamente con el repositorio remoto (git pull/push).
---

# Auto-Proceso: Documentación automática de PROCESO.md

## Propósito

Automatizar la escritura y actualización del archivo `PROCESO.md` del proyecto,
generando entradas estructuradas cada vez que se produce un cambio relevante
(nuevos archivos, modificaciones de código, decisiones de diseño, uso de IA, etc.).
Además, sincroniza automáticamente con el repositorio remoto para que todos los
integrantes del equipo trabajen siempre con la versión más reciente.

### Qué resuelve

- Evita que el equipo olvide documentar pasos importantes.
- Mantiene un formato coherente en todas las entradas.
- Vincula automáticamente los cambios del repositorio con las fases del proyecto.
- **Sincroniza con git** (pull antes, push después) para que nadie pierda cambios.

### Qué queda fuera

- No sustituye la revisión humana: el equipo debe verificar que la entrada
  generada es correcta y completa.
- No crea las conversaciones de IA; solo las referencia si existen.
- No resuelve conflictos de merge complejos (avisará al usuario si hay uno).

---

## Instrucciones

Cuando el usuario pida documentar un cambio o fase en `PROCESO.md`, sigue
**todos** estos pasos en orden. **No te saltes ningún paso.**

### Paso 0: Sincronizar repositorio (OBLIGATORIO — SIEMPRE PRIMERO)

**Antes de hacer cualquier otra cosa**, ejecuta estos comandos:

```bash
cd <directorio-del-proyecto>
git pull origin main
```

- Si el pull tiene éxito, continúa al Paso 1.
- Si hay un conflicto de merge, **PARA** e informa al usuario. Ayúdale a
  resolver el conflicto antes de continuar.
- Si falla por otro motivo (sin red, etc.), avisa al usuario pero permite
  continuar sin sincronizar si lo acepta.

### Paso 1: Recopilar contexto

1. Lee el archivo `PROCESO.md` actual para conocer las entradas existentes.
2. Ejecuta `git log --oneline -10` para ver los commits recientes.
3. Ejecuta `git diff --name-only HEAD~1 HEAD` para identificar archivos
   modificados en el último commit.
4. Ejecuta `git status` para ver si hay archivos sin commitear.
5. Lista el contenido de `conversaciones-ia/` para localizar conversaciones
   relacionadas.
6. Pregunta al usuario (si no lo ha indicado ya):
   - ¿A qué **fase** corresponde este cambio? (Fase 1–5 según el enunciado)
   - ¿Se usó alguna herramienta de IA? ¿Cuál?
   - ¿Quiénes participaron en la decisión?

### Paso 2: Determinar la fase

Identifica a cuál de las fases del proyecto corresponde el cambio:

| Fase | Nombre                  | Descripción breve                                    |
| ---- | ----------------------- | ---------------------------------------------------- |
| 1    | Comprender y delimitar  | Lectura del material, selección de secciones clave   |
| 2    | Planificar              | Estructura de la web, reparto de tareas              |
| 3    | Investigar y producir   | Elaboración de contenidos, uso de IA, creación de skills |
| 4    | Verificar               | Contrastar afirmaciones, probar ejemplos y enlaces   |
| 5    | Publicar y revisar      | GitHub Pages, revisión final                         |

### Paso 3: Generar la entrada

Crea una nueva sección en `PROCESO.md` con el siguiente formato exacto:

```markdown
## Fase X: <Nombre de la fase> — <Descripción breve del cambio>

**Fecha:** AAAA-MM-DD

**Objetivo:** <Qué se quería conseguir con este cambio.>

**Herramienta:** <Qué IA se utilizó y para qué tarea concreta. Si no se usó IA, indicar "Ninguna".>

**Prompt:** <La instrucción representativa utilizada con la IA. Si no se usó IA, indicar "N/A".>

**Resultado:** <Qué respuesta o propuesta relevante se obtuvo.>

**Decisión:** <Qué se aceptó, modificó o rechazó del resultado.>

**Justificación:** <Por qué se tomó esa decisión.>

**Verificación:** <Cómo se comprobó la información o el resultado y qué se observó.>

**Participación:** <Qué integrantes participaron en la decisión.>

**Conversación de origen:** <Nombre del archivo en `conversaciones-ia/` que contiene el intercambio original, o "N/A".>

**Archivos afectados:**
- `<ruta/archivo1>`
- `<ruta/archivo2>`
```

### Paso 4: Insertar en PROCESO.md

1. Si `PROCESO.md` está vacío, crea la cabecera:
   ```markdown
   # PROCESO.md — Registro del proceso de trabajo

   > Documento generado con ayuda de la skill `auto-proceso`.
   > Cada entrada documenta una fase o decisión relevante del proyecto.
   ```
2. Añade la nueva entrada **al final** del archivo, después de las entradas
   existentes.
3. Mantén el orden cronológico.

### Paso 5: Validar

Tras escribir la entrada, comprueba:

- [ ] Todos los campos obligatorios están rellenos.
- [ ] La fase indicada es coherente con el tipo de cambio.
- [ ] Los archivos afectados existen en el repositorio.
- [ ] Si se referencia una conversación, el archivo existe en `conversaciones-ia/`.
- [ ] No se incluyen datos personales completos (solo nombre e inicial).
- [ ] No se incluyen rutas locales del sistema ni tokens/contraseñas.

Si alguna validación falla, avisa al usuario y sugiere la corrección.

### Paso 6: Commit y push (OBLIGATORIO — SIEMPRE AL FINAL)

**Después de escribir la entrada en PROCESO.md**, ejecuta estos comandos:

```bash
cd <directorio-del-proyecto>
git add PROCESO.md
git commit -m "docs(proceso): <descripción breve del cambio documentado>"
git push origin main
```

- Si el push falla porque hay cambios remotos nuevos, ejecuta:
  ```bash
  git pull --rebase origin main
  git push origin main
  ```
- Si hay un conflicto de merge, **PARA** e informa al usuario. Ayúdale a
  resolverlo antes de reintentar el push.
- **Confirma al usuario** que el push se ha completado correctamente mostrando
  el resultado del comando.

### Paso 7: Recordatorio al usuario

Al finalizar, muestra este mensaje:

> ✅ **PROCESO.md actualizado y sincronizado con el repositorio remoto.**
>
> Tus compañeros recibirán los cambios la próxima vez que documenten algo
> (la skill hace `git pull` automáticamente al empezar).
>
> 📋 Recuerda: si has guardado una conversación de IA nueva, súbela también
> a `conversaciones-ia/` y haz push.

---

## Condiciones de uso

### Información de entrada necesaria

- Acceso al repositorio Git del proyecto.
- Conexión a internet (para git pull/push).
- El usuario debe indicar o confirmar: la fase, si se usó IA, y los participantes.

### Limitaciones

- La skill genera texto basándose en el contexto disponible (git, archivos).
  Si el usuario no da suficiente información, los campos quedarán como
  marcadores `<pendiente>` que deberán completarse manualmente.
- No puede detectar automáticamente qué herramienta de IA se usó a menos que
  se le indique o haya una conversación guardada.
- Necesita permisos de red para hacer git pull/push. Si la IA pide confirmación
  para ejecutar comandos con red, el usuario debe aceptar.

---

## Ejemplo

### Entrada de ejemplo

**Situación:** El equipo ha creado la estructura inicial de `index.html` para la
web sobre VS Code y Emmet, usando GitHub Copilot para generar el esqueleto HTML.

**Resultado esperado en PROCESO.md:**

```markdown
## Fase 3: Investigar y producir — Creación del esqueleto HTML de la web

**Fecha:** 2026-10-22

**Objetivo:** Crear la estructura base de `index.html` con las secciones
necesarias para explicar VS Code y Emmet.

**Herramienta:** GitHub Copilot Chat en VS Code. Se usó para generar el
esqueleto HTML inicial con secciones semánticas.

**Prompt:** "Genera un archivo index.html con estructura semántica HTML5 para
una web didáctica sobre VS Code y Emmet. Incluye secciones para: introducción,
ideas clave, glosario, demostración y fuentes."

**Resultado:** Copilot generó un HTML con las secciones solicitadas, usando
etiquetas `<section>`, `<nav>`, `<article>` y `<footer>`.

**Decisión:** Se aceptó la estructura general pero se modificó el orden de las
secciones y se añadió una sección de atajos de teclado que faltaba.

**Justificación:** El orden propuesto no seguía un flujo lógico de aprendizaje.
Se priorizó ir de lo general (qué es VS Code) a lo específico (Emmet).

**Verificación:** Se abrió el archivo en el navegador y se comprobó que todas
las secciones se renderizaban correctamente. Se validó con el inspector del
navegador que la estructura semántica era correcta.

**Participación:** Ana G., Luis M., María R.

**Conversación de origen:** `conversaciones-ia/copilot-estructura-html.md`

**Archivos afectados:**
- `index.html`
- `styles.css`
```

---

## Criterios de calidad

### Un resultado correcto cumple

1. **Completitud:** Todos los campos están rellenos con información concreta
   (no genérica).
2. **Coherencia:** La fase indicada corresponde al tipo de actividad realizada.
3. **Trazabilidad:** Se puede conectar la entrada con los commits del repo y
   las conversaciones de IA guardadas.
4. **Privacidad:** No contiene datos personales completos ni información
   sensible.
5. **Claridad:** Un lector externo puede entender qué se hizo, por qué y cómo
   se verificó.
6. **Sincronización:** El cambio se ha subido al repositorio remoto (push) y
   estaba actualizado (pull previo).

### Cuándo debe revisarse

- Si el usuario no ha proporcionado información sobre la herramienta de IA
  usada, el campo quedará como `<pendiente>` y debe completarse.
- Si los archivos referenciados no existen en el repositorio.
- Si la conversación de origen referenciada no existe en `conversaciones-ia/`.
- Si hay información sensible que deba eliminarse antes de hacer push.
- Si el git push ha fallado y los cambios no están en el repositorio remoto.
