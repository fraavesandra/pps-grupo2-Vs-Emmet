# Skill pública: Web Design Guidelines

## 1. Nombre y fuente original

- Nombre: web-design-guidelines.
- Autor: Vercel.
- Fuente original:
  https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md
- Fecha de selección: 22 de octubre de 2026.

## 2. Propósito

Ayudar a revisar el código de una interfaz web para detectar
incumplimientos de las directrices de diseño y accesibilidad
que utiliza la skill.

## 3. Tarea para la que se diseñó

La skill indica a la IA que consulte las directrices enlazadas,
lea los archivos especificados, contraste el código con las
reglas y presente los problemas indicando archivo y línea.

Directrices que consulta:
https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md

## 4. Motivo de elección

Nuestra tarea consiste en crear una web didáctica sobre VS Code
y Emmet. La skill puede ayudarnos a revisar su interfaz y detectar
problemas que dificulten la navegación y el aprendizaje.

Su utilidad se valorará mediante los hallazgos obtenidos y las
correcciones que podamos comprobar.

## 5. Aplicación en el proyecto y resultados

El 22 de octubre de 2026 se aplicaron las instrucciones de la skill mediante
Codex a la versión `eba654f4dc8dd02502c12dfa86eb7cc3b143f9b3` del proyecto.
Se consultaron el SKILL.md original (metadatos: versión 1.0.0) y las
[directrices vigentes](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md).
Ambos documentos se leyeron desde la rama `main`, que puede cambiar; no se
dispone de un identificador de commit de esas fuentes externas.

La tarea fue una revisión estática de `index.html`, `src/App.jsx`,
`src/main.jsx`, todos los componentes de `src/components/`,
`src/data/contenido.js` y `src/styles.css`. Se contrastaron las reglas
aplicables de accesibilidad, formularios, foco, movimiento, contenido,
navegación, rendimiento y presentación. No se instalaron ni ejecutaron
scripts externos.

### Hallazgos (formato archivo:línea de la skill)

- `src/components/Playground.jsx:20` — El campo tiene etiqueta y autocomplete,
  pero carece de atributo `name`.
- `src/components/Ejercicios.jsx:34` — Los campos de respuesta carecen de
  atributo `name`.
- `src/styles.css:151` — El input dentro de flex no define `min-width: 0`;
  conviene permitir que se reduzca y comprobar desbordamientos en móvil.
- `src/components/Quiz.jsx:5` — La pregunta actual no se refleja en la URL.
- `src/components/Descomponedor.jsx:6` — El ejemplo seleccionado no se refleja
  en la URL; no se puede compartir directamente esa selección.
- `src/components/Quiz.jsx:71` — La región `role="status"` se monta junto con
  el mensaje; conviene mantener una región estable y verificar el anuncio
  con lector de pantalla.
- `src/styles.css:50` — Los títulos no aplican `text-wrap: balance`.

### Decisiones y comprobaciones

Se aceptan como mejoras propuestas los nombres de campos, el ajuste de flex
y la revisión de anuncios del cuestionario. La posibilidad de compartir
selecciones mediante URL y el equilibrio de títulos se consideran mejoras
secundarias. No se aplica mecánicamente la recomendación de capitalización
inglesa a los títulos en español, ni se añaden manejadores de teclado a
botones nativos que ya ofrecen esa interacción.

La lectura del código confirma etiquetas asociadas a los inputs, botones
nativos, enlace para saltar al contenido, foco visible, tablas con cabeceras
y una alternativa al desplazamiento suave con `prefers-reduced-motion`.
Son comprobaciones estáticas, no una certificación de accesibilidad.

En la primera aplicación se corrigió la ubicación de la evidencia a
`evidencias/skill-publica.md`.

### Correcciones posteriores (22 de octubre de 2026)

| Hallazgo | Cambio realizado | Verificación |
| --- | --- | --- |
| Campos sin nombre | Añadido `name="abreviatura-emmet"` en Playground y nombres `respuesta-N` en los ejercicios. | Lectura del código y compilación. |
| Input dentro de flex | Añadido `min-width: 0` a `.fila input`. | En Edge, todos los inputs caben a 320, 375 y 1280 px; sin desbordamiento horizontal de la página. |
| Anuncio del quiz | La región `role="status"` permanece montada; su texto cambia al responder y al terminar. Añadido `aria-atomic="true"` y mensaje explícito de acierto o error. El botón siguiente queda fuera de la región. | En Edge se comprobó identidad estable del nodo y actualización del texto; falta lector de pantalla. |
| Títulos | Añadido `text-wrap: balance` a h1–h4. | Compilación y capturas revisadas en móvil y escritorio. |

También se eliminó un parámetro de `catch` sin usar señalado por el linter
en Playground, sin modificar el mensaje de error.

Comprobaciones ejecutadas: `npm.cmd run build` y `npm.cmd run lint`.
La compilación de producción finalizó correctamente y el linter terminó
sin avisos ni errores. `git diff --check` tampoco detectó errores de espacios.
La instalación utilizó
`npm.cmd ci --ignore-scripts --no-audit --no-fund`, respetando el lockfile.

La sincronización del estado con la URL se aplaza: compartir un ejemplo
puede ser útil, pero compartir una pregunta aislada del quiz requiere definir
cómo se conserva la puntuación. No se añade esa complejidad en esta revisión.

### Pruebas en navegador (22 de octubre de 2026)

Se utilizó Playwright con Microsoft Edge instalado (versión 155.0.4283.62),
en modo sin ventana, contra el servidor local de Vite. Las herramientas de
prueba se instalaron en una carpeta temporal, sin cambiar package.json ni
package-lock.json. Estas pruebas corresponden a desarrollo local, no al
despliegue público.

Resultados automáticos: [resultado.json](revision-web/resultado.json).
Capturas completas: [320 px](revision-web/web-320.png),
[375 px](revision-web/web-375.png) y [1280 px](revision-web/web-1280.png).

- En los tres anchos, el documento no desborda horizontalmente y todos los
  inputs tienen nombre y permanecen dentro del ancho visible. Los bloques
  de código y la tabla pueden conservar su desplazamiento horizontal interno.
- Con Tab y Enter se activa «Saltar al contenido» y se llega al playground
  pasando por los controles intermedios. Se comprobó el contorno de foco y
  que el input enfocado no quedase oculto por la cabecera.
- Con movimiento reducido, `scroll-behavior` cambia a `auto`.
- El playground expande `ul>li*3` a tres elementos `li`.
- El primer ejercicio acepta `ul>li*5` y muestra «Correcto».
- El quiz permite responder sus cinco preguntas mediante Enter y avanzar
  mediante Tab y Enter; finaliza con 5/5 y se puede reiniciar.
- El nodo de estado es el mismo después de responder y su texto cambia.
- No se observaron excepciones JavaScript mediante el evento `pageerror`.

Durante la preparación se corrigió una suposición del guion de prueba:
el playground no es el primer control después del salto al contenido.
La comprobación final contempla los controles intermedios; no fue necesario
modificar la web por esa suposición.

Las capturas se revisaron para contrastar la distribución general. Esto no
sustituye una inspección visual exhaustiva, una auditoría de contraste ni
una prueba con lector de pantalla. No se ha probado la lectura hablada real
de los anuncios ni el sitio publicado en GitHub Pages.

## 6. Límites, riesgos y aspectos que revisar

- Revisar el SKILL.md y las instrucciones externas antes de usarlos.
- No ejecutar scripts ni conceder permisos sin comprender sus efectos.
- Las directrices externas pueden cambiar; debe registrarse
  la versión consultada.
- La IA puede producir falsos positivos o pasar por alto problemas.
- La revisión debe complementarse con pruebas en el navegador,
  navegación con teclado y visualización en pantalla estrecha.
- Esta skill no verifica la exactitud de las explicaciones sobre
  VS Code y Emmet ni constituye una auditoría de seguridad.

## 7. Valoración crítica

La aplicación aportó una lista de mejoras localizables y permitió reconocer
medidas de accesibilidad ya presentes. Su principal límite es que una regla
general no demuestra un fallo visible: por ejemplo, el posible
desbordamiento requiere una prueba en pantalla estrecha. Las recomendaciones
sobre idioma y teclado también necesitan interpretación. La utilidad
comprobada incluye la revisión del código y cuatro mejoras implementadas que
compilan, más pruebas funcionales y de teclado en Edge a tres anchos. La
lectura hablada con tecnologías de asistencia sigue pendiente; las pruebas
del DOM no demuestran por sí solas que un anuncio sea audible.

## 8. Conversación original

- Selección: [conversación conservada](../conversaciones-ia/01-planificacion-skill-publica.md).
- Aplicación: [registro parcial de esta sesión](../conversaciones-ia/02-aplicacion-skill-publica.md).
  Este último declara sus límites y no sustituye una exportación completa
  del historial original.
