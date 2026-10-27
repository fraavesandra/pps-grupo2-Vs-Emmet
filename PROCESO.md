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
- `PROCESO.md`

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
- `PROCESO.md`



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

## Fase 3: Investigar y producir — Creación de la sección del glosario

**Fecha:** 2026-10-25
**Objetivo:** Incorporar una sección de consulta con definiciones de los términos utilizados en la web didáctica sobre Visual Studio Code y Emmet.
**Herramienta:** Codex, según lo indicado por Raquel G.
**Prompt:** No se dispone del prompt original de creación. Solicitud de documentación: "Documenta que he creado la sección del glosario. Usé codex. Participé yo, Raquel G."
**Resultado:** Se incorporó una sección de glosario con diez términos: IDE, Workspace, Command Palette, IntelliSense, Extensión, settings.json, Restricted Mode, Emmet, Abreviatura y Linter. El componente muestra los términos y sus definiciones mediante una lista de descripción.
**Decisión:** Incorporar el glosario a la página como sección de consulta, según la creación comunicada por Raquel G.
**Justificación:** Facilitar la comprensión del vocabulario técnico y permitir consultar las definiciones durante el aprendizaje.
**Verificación:** Se inspeccionaron src/components/Glosario.jsx y los diez términos definidos en src/data/contenido.js. Se comprobó que src/App.jsx importa y muestra el componente Glosario. Esta comprobación verifica la integración en el código; no incluye una revisión visual ni una validación de las definiciones con fuentes externas.
**Participación:** Raquel G., única participante confirmada.
**Conversación de origen:** [05-conversacion-codex-guias-capturas-2026-10-25.md](conversaciones-ia/05-conversacion-codex-guias-capturas-2026-10-25.md).
**Archivos afectados:**
- src/components/Glosario.jsx
- src/data/contenido.js
- src/App.jsx
- PROCESO.md

## Fase 3: Investigar y producir — Ampliación de las guías con capturas e instrucciones

**Fecha:** 2026-10-25
**Objetivo:** Ampliar las explicaciones de Ideas principales con capturas de VS Code e instrucciones que permitan identificar dónde pulsar en cada tarea.
**Herramienta:** Codex, para integrar las capturas aportadas por Raquel G., redactar pies de foto y ajustar el orden del contenido del tutorial.
**Prompt:** "Quiero que me ayudes a incorporar en las secciones de ideas principales más contenido, empezando por la instalación [...] añadir una guía para instalarlo con imágenes". Después se solicitaron capturas para Interfaz, Crear archivos, Configuración y Extensiones, y ajustes en su colocación.
**Resultado:** Se amplió Instalación con instrucciones de descarga, un enlace oficial y capturas de descarga y apertura de carpetas, ya recogidas en el commit d5ad108. Se añadieron el diagrama de la interfaz, Explorer y pestañas a Interfaz; se reutilizaron las capturas de abrir carpeta y Explorer en Crear archivos; se incorporó Preferencias en Configuración y las capturas de búsqueda y deshabilitación en Extensiones. Las imágenes incluyen texto alternativo, pie explicativo y acceso a tamaño completo. Se ajustó el tutorial para mostrar el código antes de las imágenes salvo en el paso de Preferencias, donde la imagen precede al comando.
**Decisión:** Utilizar las capturas aportadas por Raquel G. y colocarlas en los pasos indicados. Se retiró la aclaración del diagrama tras su sustitución por una imagen corregida y se movió la captura de búsqueda de extensiones del paso 1 al paso 2, según sus indicaciones.
**Justificación:** Relacionar las explicaciones con elementos visibles del editor facilita seguir la guía. Reutilizar las capturas evita duplicar recursos y permite mantener ejemplos coherentes entre secciones.
**Verificación:** Se revisaron el diff, las importaciones de imágenes y los archivos existentes. La compilación mediante npm.cmd run build terminó con código 0 e incluyó las ocho imágenes utilizadas. Se comprobaron en el código el orden del ejemplo de carpetas y la excepción de Preferencias. No se realizó una comprobación visual del tutorial en navegador en esta revisión.
**Participación:** Raquel G., única participante confirmada.
**Conversación de origen:** [05-conversacion-codex-guias-capturas-2026-10-25.md](conversaciones-ia/05-conversacion-codex-guias-capturas-2026-10-25.md).
**Archivos afectados:**
- src/data/contenido.js
- src/components/TutorialDialog.jsx
- src/styles.css
- src/assets/instalacion/visual.png
- src/assets/instalacion/proyecto.png
- src/assets/instalacion/Diagrama anotado de Visual Studio Code.png
- src/assets/instalacion/Explorer.png
- src/assets/instalacion/pestañas.png
- src/assets/instalacion/preferencias.png
- src/assets/instalacion/extensiones.png
- src/assets/instalacion/deshabilitar.png
- PROCESO.md

## Fase 4: Verificar — Auditoría de seguridad, funcionalidad, accesibilidad y didáctica

**Fecha:** 2026-10-26

**Objetivo:** Auditar la versión existente del commit `33ad6893ec9c1e7558a3cb1abde14d744c40428d`, conservar evidencias y proponer correcciones sin modificar la aplicación ni la skill.

**Herramienta:** Codex para revisión y documentación; Git, Node/npm, Chrome/Playwright, Safari y axe-core para comprobaciones locales; consultas de solo lectura a documentación oficial y Pages.

**Prompt:** “Usa obligatoriamente nuestra skill skills/auto-proceso/SKILL.md. Léela antes de actuar y respeta sus pasos, validaciones y sincronización. […] No apliques correcciones a la aplicación durante esta auditoría: presenta primero los hallazgos y el plan de solución.” Solicitud completa conservada en la exportación original enlazada.

**Resultado:** Plan previo, matriz, pruebas reproducibles, resultados y nueve hallazgos confirmados. Funcionan seis guías, soluciones canónicas de siete ejercicios y tres recorridos de quiz; fallan dos alternativas equivalentes, contraste en cuatro primeros pasos, movimiento reducido, un enlace y coherencia documental. Se detectaron rutas personales existentes y expansión sin límite que alcanzó el timeout del proceso aislado.

**Decisión:** Conservar la versión auditada y presentar el plan de corrección por prioridad. Publicar únicamente documentación, pruebas y evidencias revisadas de esta auditoría, conforme a la autorización expresa; no corregir aplicación, skills ni reescribir historial compartido.

**Justificación:** Distinguir fallos reproducidos de sospechas y mejoras, evitar pérdida de trabajo del equipo y no confundir build correcto con seguridad o accesibilidad certificadas.

**Verificación:** Estado Git limpio y pull fast-forward actualizado. Plan guardado antes de pruebas. Build/lint con exit 0, npm audit sin avisos conocidos, Chrome local con 30 pasos y diez imágenes cargadas; ejercicios canónicos/alternativas/errores/vacíos; quiz 5/5, 0/5 y 3/5 con reinicio; axe y comprobación manual de foco/diálogo; Safari con prueba básica. Emmet adversario solo en procesos locales limitados. Pages solo carga ordinaria y cabeceras. Revisión de 114 objetos Git únicos y capturas actuales; evidencias nuevas sin valores privados. Zoom, lector real, móviles físicos, entorno CI Node 22, apuntes ausentes y ajustes administrativos no comprobados. Validaciones y estado de entrega en `evidencias/auditoria/validacion.json` y `evidencias/auditoria/entrega.md`; El commit local `e9bc27d` conserva los 22 archivos; el push falló con código 128 por ausencia de credenciales HTTPS en la terminal. La publicación queda bloqueada y el cierre se registra localmente, sin afirmar sincronización remota.

**Participación:** Alberto M., confirmado por el usuario.

**Conversación de origen:** [06-auditoria-codex-2026-10-26.md](conversaciones-ia/06-auditoria-codex-2026-10-26.md), exportación directa del historial original hasta el corte indicado, con exclusiones explícitas.

**Archivos afectados:**
- `PROCESO.md`
- `conversaciones-ia/README.md`
- `conversaciones-ia/06-auditoria-codex-2026-10-26.md`
- `evidencias/auditoria/plan.md`
- `evidencias/auditoria/informe.md`
- `evidencias/auditoria/matriz.md`
- `evidencias/auditoria/browser-test.mjs`
- `evidencias/auditoria/browser-resultados.json`
- `evidencias/auditoria/emmet-test.mjs`
- `evidencias/auditoria/emmet-resultados.json`
- `evidencias/auditoria/exportar-conversacion.py`
- `evidencias/auditoria/build.txt`
- `evidencias/auditoria/lint.txt`
- `evidencias/auditoria/dependencias.txt`
- `evidencias/auditoria/npm-audit.json`
- `evidencias/auditoria/enlaces.json`
- `evidencias/auditoria/privacidad.json`
- `evidencias/auditoria/local-1280.png`
- `evidencias/auditoria/local-375.png`
- `evidencias/auditoria/local-320.png`
- `evidencias/auditoria/validacion.json`
- `evidencias/auditoria/entrega.md`


## Fase 4: Verificar — Conservación de la conversación y comprobación de la subida

**Fecha:** 2026-10-26

**Objetivo:** Completar el registro original de la conversación de auditoría y conservar la comprobación de su publicación.

**Herramienta:** Codex, para exportar los mensajes del historial original JSONL y comprobar las referencias de Git.

**Prompt:** “Registra y guarda esta conversación en su apartado en .md”. Previamente: “Ok, está. Comprueba”.

**Resultado:** Se amplió la exportación Markdown con el cierre de auditoría, la confirmación del usuario y la verificación de la subida. El remoto main y el HEAD local coincidían en `4ff2f5f1288b3b661d273e37a42d6a75113d79f8`, que incluye el commit de auditoría `e9bc27d`.

**Decisión:** Actualizar el archivo de conversación existente, mantener el fallo inicial de push como hecho histórico y añadir el resultado de la comprobación posterior.

**Justificación:** Conservar el intercambio original y sus confirmaciones permite contrastar la auditoría sin presentar un resumen como transcripción ni dejar el estado de publicación sin aclarar.

**Verificación:** Git inicialmente limpio; pull fast-forward indicó Already up to date. Exportación mecánica hasta la petición de guardado incluida, con exclusiones explícitas y marcadores de privacidad. Se comprobaron los nueve campos, archivos referenciados, ausencia de rutas personales y patrones de secretos en los textos nuevos y git diff --check. No se repitieron pruebas de aplicación ni se modificó la skill.

**Participación:** Alberto M., confirmado para esta auditoría.

**Conversación de origen:** [06-auditoria-codex-2026-10-26.md](conversaciones-ia/06-auditoria-codex-2026-10-26.md).

**Archivos afectados:**
- `PROCESO.md`
- `conversaciones-ia/06-auditoria-codex-2026-10-26.md`
- `conversaciones-ia/README.md`
- `evidencias/auditoria/exportar-conversacion.py`
- `evidencias/auditoria/entrega.md`


---

## Fase 4: Verificar — Corrección de incidencias de auditoría (seguridad, accesibilidad, validación y privacidad)

**Fecha:** 2026-10-26

**Objetivo:** Resolver los hallazgos confirmados en la auditoría técnica previa (AUD-01 a AUD-06) para alinear plenamente la aplicación web y el repositorio con los criterios de evaluación de la rúbrica (privacidad, accesibilidad WCAG, robustez didáctica y coherencia documental).

**Herramienta:** Antigravity (Google / Claude) en VS Code. Se empleó para analizar el informe de auditoría (`evidencias/auditoria/informe.md`), sanitizar recursos gráficos, corregir la lógica de validación HTML en React, implementar límites de contención en Emmet y ajustar estilos CSS de contraste y accesibilidad motora.

**Prompt:** "hazme los cambios y usa la skil para documentarlo"

**Resultado:** Se subsanaron satisfactoriamente las siguientes incidencias:
1. **AUD-05 (Privacidad):** Se sanitizó la captura `src/assets/instalacion/Diagrama anotado de Visual Studio Code.png`, ocultando con el color de fondo del editor el área de la consola terminal que revelaba una ruta de perfil personal local.
2. **AUD-06 (Coherencia de grupo y formato):** En `src/components/Footer.jsx` se corrigieron los nombres para incluir nombre de pila e inicial del primer apellido para todos los integrantes (`Alberto M., Sandra F., Raquel G., Pablo C.`) y se unificó la nomenclatura oficial a `Grupo 2 (Bloque 3)`. En `README.md` se actualizó la referencia a las 6 guías e ideas clave interactivas.
3. **AUD-02 (Corrección estructural en ejercicios):** En `src/components/Ejercicios.jsx` se sustituyó la comparación de cadenas rígida por una comparación de árboles DOM recursiva (`sonHtmlEquivalentes`). Ahora se evalúan etiquetas, atributos y valores de manera independiente del orden en que se redacten los atributos en la abreviatura.
4. **AUD-01 (Límite de disponibilidad en Emmet):** Se incorporó en `src/components/Playground.jsx` y `src/components/Ejercicios.jsx` un filtro previo que restringe las expansiones con multiplicador superior a 50 repeticiones (`*50`) o entradas mayores de 500 caracteres, evitando congelaciones de la interfaz del navegador.
5. **AUD-03 y AUD-04 (Accesibilidad visual y de movimiento):** En `src/styles.css` se elevaron los ratios de contraste para `.dialogo-progreso` y `.dialogo-nav button` (asegurando el cumplimiento del ratio mínimo 4.5:1), y se desactivó la transición y escala decorativa de `.guia::before` bajo la directiva `@media (prefers-reduced-motion: reduce)`.
6. **Limpieza documental:** Se regularizó la extensión de `conversaciones-ia/web-vscode-emmet-claude.md` y se eliminó el archivo residual vacío `conversaciones-ia/brin_storming.md`.

**Decisión:** Se aceptaron e integraron todas las recomendaciones del informe de auditoría sin alterar la estructura general ni los contenidos aprobados por el equipo.

**Justificación:** Eliminar datos personales es una exigencia obligatoria de la Sección 7 del enunciado; permitir que la corrección de ejercicios acepte atributos en cualquier orden evita penalizaciones didácticas injustas a los estudiantes; y los límites de Emmet garantizan la resiliencia del sitio web.

**Verificación:** Comprobación de la integridad del PNG sanitizado con `file`, inspección de las reglas CSS de alto contraste y verificación del algoritmo de comparación de nodos DOM.

**Participación:** Sandra F. (implementación y documentación), sobre la auditoría previa de Alberto M., Pablo C. y Raquel G.

**Conversación de origen:** `conversaciones-ia/despliegue-produccion.md`

**Archivos afectados:**
- `src/assets/instalacion/Diagrama anotado de Visual Studio Code.png`
- `src/components/Footer.jsx`
- `src/components/Ejercicios.jsx`
- `src/components/Playground.jsx`
- `src/styles.css`
- `README.md`
- `conversaciones-ia/web-vscode-emmet-claude.md`
- `conversaciones-ia/brin_storming.md`
- `PROCESO.md`
