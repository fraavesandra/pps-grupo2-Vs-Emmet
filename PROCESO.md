# PROCESO.md — Registro del proceso de trabajo

> Documento generado con ayuda de la skill `auto-proceso`.
> Cada entrada documenta una fase o decisión relevante del proyecto.

## Fase 1: Comprender y delimitar — Análisis del material y selección de contenidos

**Fecha:** 2026-10-22

**Objetivo:** Comprender el contenido asignado sobre Visual Studio Code y Emmet, identificar los conceptos más importantes y decidir qué información incluir en la página web. Organizar los contenidos para ponerlos en común con los compañeros y elegir una forma clara y visual de explicarlos.

**Herramienta:** ChatGPT, Claude y Antigravity (Google). Se usaron para analizar y resumir el material asignado, identificar las ideas principales, proponer una organización de los contenidos y obtener ideas sobre cómo presentar la información en la página web.

**Prompt:** "Créame el proyecto con los temas principales para luego ponerlo en común con mis compañeros. Lo de VS Code y Emmet es el tema que nos ha tocado. Quiero las ideas más importantes para luego compararlas con las de mis compañeros de grupo."

Posteriormente: "¿Me ayudas a elegir cómo ponerlo en la página? Habíamos pensado en poner la teoría e ir poniendo capturas de cada cosa, tipo cómo configurarlo, cómo instalar una extensión, cómo crear un archivo nuevo..."

**Resultado:** Las IAs ayudaron a identificar y organizar los contenidos principales del bloque. Los temas propuestos fueron:
- Introducción a Visual Studio Code: qué es y para qué sirve.
- Instalación y configuración: cómo instalar VS Code y conocer su entorno.
- Interfaz de VS Code: identificar sus partes y funciones principales.
- Gestión de archivos y carpetas: cómo crear y organizar un proyecto.
- Extensiones: qué son, cómo instalarlas y para qué sirven.
- Emmet: qué es y cómo facilita la escritura de HTML y CSS.
- Ejemplos prácticos de Emmet: abreviaturas y generación automática de código.

También se obtuvo la propuesta de combinar explicaciones teóricas breves con capturas de pantalla que mostraran los pasos de cada procedimiento.

**Decisión:** Se utilizó la propuesta de organización como punto de partida para compararla con las ideas de los compañeros. La página web tendrá explicaciones sencillas acompañadas de ejemplos visuales con capturas de pantalla. Se incluirán capturas para mostrar acciones como configurar VS Code, crear archivos, instalar extensiones y utilizar Emmet. No se incluirán funciones avanzadas, priorizando los aspectos básicos y más útiles para principiantes.

**Justificación:** Se eligieron estos contenidos por ser los más importantes para comprender cómo utilizar VS Code y Emmet en el desarrollo web. Combinar teoría con capturas de pantalla facilita el aprendizaje, ya que permite ver directamente dónde se encuentran las opciones y cómo se realizan las acciones. Los ejemplos prácticos de Emmet son importantes porque muestran cómo ahorrar tiempo al escribir código.

**Verificación:** La información propuesta por las IAs se contrastará con el material proporcionado por la profesora y con las aportaciones de los compañeros. Se comprobarán los procedimientos directamente en Visual Studio Code, realizando las acciones y tomando capturas de pantalla propias para verificar que los pasos funcionan y las explicaciones son correctas.

**Participación:** Raquel G., Sandra F., Pablo C., Alberto M.

**Conversación de origen:** `conversaciones-ia/conversacion_vscode_emmet.md`

**Archivos afectados:**
- `Fase1.md` (documento de trabajo original)
- `PROCESO.MD`

### Secciones prioritarias seleccionadas

1. **Introducción a VS Code:** para explicar qué herramienta vamos a utilizar.
2. **Instalación y configuración:** para que cualquier persona pueda preparar su entorno.
3. **Interfaz y gestión de archivos:** para aprender a moverse por el programa y empezar a trabajar.
4. **Extensiones:** para conocer cómo añadir funcionalidades al editor.
5. **Introducción y ejemplos de Emmet:** para aprender a escribir código HTML de forma más rápida.

Estas secciones siguen un orden de aprendizaje: primero conocemos la herramienta, después aprendemos a utilizarla y finalmente descubrimos cómo mejorar nuestra forma de trabajar con Emmet.

### Contenidos fuera del alcance

Se dejan fuera las configuraciones avanzadas de VS Code, la creación de extensiones propias y las funciones de Emmet demasiado complejas. Se priorizan ejemplos básicos y prácticos fáciles de comprender y reproducir.

---

## Fase 3: Investigar y producir — Creación de la skill propia `auto-proceso`

**Fecha:** 2026-10-22

**Objetivo:** Crear una skill propia del proyecto que automatice la documentación del archivo PROCESO.md, generando entradas con el formato exigido por la rúbrica cada vez que se produce un cambio relevante, e incluyendo sincronización automática con git (pull/push) para coordinación del equipo.

**Herramienta:** Antigravity (Claude Opus 4.6) en VS Code. Se usó para diseñar, redactar y estructurar la skill completa, incluyendo las instrucciones, el ejemplo, los criterios de calidad, la guía de uso para compañeros y la configuración para GitHub Copilot.

**Prompt:** "Ayudame a crear una skill propia para que en este proyecto se haga la documentacion del archivo proceso.md sola para que cada vez que alguien haga un cambio se ejecute sola"

**Resultado:** La IA generó una skill completa con:
- `skills/auto-proceso/SKILL.md`: instrucciones completas con 7 pasos (incluida sincronización git automática), tabla de fases, formato de entrada, ejemplo y criterios de calidad.
- `skills/auto-proceso/GUIA-USO.md`: guía de uso adaptada a tres herramientas distintas (Antigravity, GitHub Copilot y ChatGPT/Claude).
- `.agents/skills/auto-proceso/SKILL.md`: copia para descubrimiento automático por Antigravity.
- `.github/copilot-instructions.md`: instrucciones automáticas para GitHub Copilot Chat.

**Decisión:** Se aceptó la estructura propuesta por la IA. Se pidió añadir sincronización git automática (pull/push) y compatibilidad con múltiples herramientas de IA, ya que no todos los integrantes usan Antigravity.

**Justificación:** La sincronización git es imprescindible para que varios integrantes puedan documentar sin pisar los cambios de los demás. La compatibilidad multi-herramienta se añadió porque el equipo usa distintas IAs.

**Verificación:** Se está realizando esta prueba de la skill en la misma conversación de creación. Se comprobará que la entrada generada cumple con los 9 campos obligatorios de la rúbrica y que el formato es correcto. Se debe realizar una prueba adicional en una conversación distinta según lo exige el enunciado.

**Participación:** Sandra F.

**Conversación de origen:** `conversaciones-ia/creacion-skill-auto-proceso.md`

**Archivos afectados:**
- `skills/auto-proceso/SKILL.md`
- `skills/auto-proceso/GUIA-USO.md`
- `.agents/skills/auto-proceso/SKILL.md`
- `.github/copilot-instructions.md`
- `PROCESO.MD`



---

## Fase 5: Publicar y revisar — Configuración y despliegue en producción con GitHub Pages y GitHub Actions

**Fecha:** 2026-10-22

**Objetivo:** Poner la página web didáctica en producción mediante GitHub Pages, resolver errores de acceso (HTTP 404), configurar el compilador Vite con la ruta base correcta del repositorio y asegurar que los recursos se carguen sin fallos en cualquier navegador y dispositivo.

**Herramienta:** Antigravity (Gemini / Claude) en VS Code. Se utilizó para auditar la configuración de Vite, diagnosticar la causa del error 404 en GitHub Pages, corregir problemas de nombres de archivo sensibles a mayúsculas/minúsculas en Linux y preparar el workflow de GitHub Actions.

**Prompt:** "¿lo estas documentando?", "quiero que la pagina funcione y este todo en produccion", "dice que error 404"

**Resultado:** Se identificaron y corrigieron los siguientes aspectos críticos para el despliegue:
1. En `vite.config.js`, la propiedad `base` se configuró apuntando al nombre oficial del repositorio renombrado (`/pps-grupo2-Vs-Emmet/`), asegurando que todos los assets estáticos (CSS y JS) se resuelvan en la URL pública correspondiente (`https://fraavesandra.github.io/pps-grupo2-Vs-Emmet/`).
2. El archivo de entrada estaba nombrado como `Index.html` (con mayúscula). Dado que los entornos de compilación de GitHub Actions (Ubuntu) son sensibles a mayúsculas y minúsculas, se renombró a `index.html` (minúscula) para asegurar la compatibilidad con el servidor web y Vite.
3. Se comprobó el workflow `.github/workflows/deploy.yml` y se guio la activación de la fuente en los ajustes del repositorio (Settings → Pages → Source: GitHub Actions).
4. Se actualizó el archivo `README.md` identificando al equipo, los integrantes y el enlace directo a la web publicada (`https://fraavesandra.github.io/pps-grupo2-Vs-Emmet/`).

**Decisión:** Se aceptaron todas las correcciones de nombres de ruta y archivos, y se optó por el despliegue moderno automatizado mediante GitHub Actions en lugar del despliegue clásico desde rama, garantizando que el comando `npm run build` genere el directorio optimizado `dist/` en cada cambio a `main`.

**Justificación:** La separación entre el código fuente de desarrollo (React + JSX) y el código de producción compilado (HTML/CSS/JS minificado) requiere un pipeline automatizado. La corrección del `base path` es estrictamente obligatoria en GitHub Pages cuando el proyecto no se aloja en la raíz del dominio de usuario.

**Verificación:** Se validó la ejecución correcta de Git en local, se verificó el archivo `vite.config.js`, se comprobó el guardado de la configuración en GitHub Pages mediante captura de pantalla de la interfaz de GitHub y se monitorizó la ejecución exitosa del flujo `Deploy a GitHub Pages` en la pestaña Actions.

**Participación:** Sandra F., Raquel G., Pablo C., Alberto M.

**Conversación de origen:** `conversaciones-ia/despliegue-produccion.md`

**Archivos afectados:**
- `vite.config.js`
- `index.html`
- `README.md`
- `PROCESO.md`
- `evidencias/fuentes.md`
- `evidencias/prueba-skill-propia.md`
- `.github/workflows/deploy.yml`


---

## Fase 4: Verificar — Revisión técnica y prueba independiente de auto-proceso

**Fecha:** 2026-10-23

**Objetivo:** Documentar la revisión real del repositorio y comprobar que la skill auto-proceso produce una entrada trazable en una conversación distinta de la utilizada para crearla.

**Herramienta:** Codex, para inspeccionar el repositorio, ejecutar las comprobaciones técnicas y aplicar las instrucciones de la skill existente sin modificarlas.

**Prompt:** "Haz la Prueba independiente de la skill propia y documéntala, respeta los parámetros de la propia skill". Se confirmaron Fase 4: Verificar, herramienta Codex y participación de Alberto M.

**Resultado:** Se revisaron el enunciado, el código y las evidencias. La instalación con lockfile, la compilación y el linter finalizaron correctamente; la web publicada cargó en navegador. Se detectaron la conversación de creación ausente, registros parciales y la necesidad de una prueba independiente. Para esta prueba se guardó un protocolo previo a la generación de esta entrada, un registro de conversación con límites explícitos y la comparación de resultados en evidencias/prueba-skill-propia.md.

**Decisión:** Conservar el registro histórico de la primera prueba y añadir una segunda prueba independiente. Mantener la skill original, documentar las limitaciones y distinguir las comprobaciones de esta sesión de las pruebas previas de móvil y teclado del equipo.

**Justificación:** El enunciado exige probar la skill fuera de su conversación de creación y comparar el resultado con expectativas previas. Una entrada basada en comandos ejecutados y observaciones concretas permite evaluar su utilidad sin inventar resultados ni participación.

**Verificación:** `git pull origin main` indicó `Already up to date`; se revisaron los últimos diez commits, el diff del último commit y el estado inicialmente limpio. En la revisión de esta conversación, `npm ci --ignore-scripts --no-audit --no-fund`, `npm run build` y `npm run lint` devolvieron código 0. Se observó la carga de GitHub Pages. La validación posterior confirmó nueve campos no vacíos, cinco archivos existentes, texto anterior preservado y ambas copias de la skill intactas; `git diff --check` pasó. Se creó el commit local `fa624b2`. El push falló con código 128 porque Git no dispone de credenciales HTTPS en la terminal; la sincronización remota queda pendiente. Los resultados completos se recogen en la evidencia. No se presenta esta revisión como una nueva auditoría completa de accesibilidad o de interacciones.

**Participación:** Alberto M., confirmado por el usuario en esta conversación.

**Conversación de origen:** `conversaciones-ia/03-prueba-independiente-auto-proceso.md` (mensajes conservados y registro técnico; límites de exportación explicitados en `conversaciones-ia/README.md`).

**Archivos afectados:**
- `PROCESO.md`
- `evidencias/protocolo-prueba-independiente.md`
- `evidencias/prueba-skill-propia.md`
- `conversaciones-ia/03-prueba-independiente-auto-proceso.md`
- `conversaciones-ia/README.md`
