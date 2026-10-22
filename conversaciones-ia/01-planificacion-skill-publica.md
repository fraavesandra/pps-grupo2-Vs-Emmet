# Conversación: selección de skill pública para VS Code y Emmet

Fecha: 22 de octubre de 2026.

Nota de exportación: se transcriben los mensajes de usuario y las respuestas finales visibles de esta conversación, desde la solicitud inicial hasta la solicitud de exportación. Se omiten los avisos automáticos de adjuntos, los mensajes de progreso y las llamadas a herramientas. Las citas de la interfaz se sustituyen por los enlaces originales disponibles. No es una exportación nativa de la plataforma. No se incorporan conversaciones anteriores incluidas como contexto.

## Usuario

Tenemos que hacer esta práctica (Enunciado_actividad-1), este es el tema que nos ha tocado (VS Code y Emmet). Tengo que elegir la Skill pública, dame opciones que nos serían útiles.

## ChatGPT

**Elegiría `web-design-guidelines`, de Vercel.** Encaja con vuestra web didáctica, resulta sencilla de analizar y permite demostrar mejoras concretas.

He leído el enunciado: **la skill pública no tiene que tratar específicamente sobre VS Code o Emmet**; también puede ayudar a diseñar, comprobar o mejorar la web. Eso amplía bastante las opciones.

| Skill pública y fuente original | Para qué sirve | Aplicación en vuestra práctica | Límites que podéis analizar |
|---|---|---|---|
| **[web-design-guidelines — Vercel](https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md)** | Revisa código de interfaces siguiendo sus directrices de diseño y accesibilidad. | Revisar navegación, formularios, foco del teclado y presentación de los ejemplos. Documentar problemas y correcciones. | Consulta unas directrices externas que pueden cambiar. La revisión del código debe complementarse con pruebas reales. |
| **[frontend-design — Anthropic](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)** | Orienta la creación de interfaces con una dirección visual deliberada. | Diseñar una web con apariencia de editor, ejemplos de abreviaturas y explicaciones claras. | Un diseño atractivo no garantiza exactitud didáctica, accesibilidad ni seguridad. |
| **[webapp-testing — Anthropic](https://github.com/anthropics/skills/blob/main/skills/webapp-testing/SKILL.md)** | Ayuda a probar aplicaciones web locales utilizando Playwright. | Comprobar menús, botones y una demostración interactiva de Emmet; obtener capturas y registrar fallos. | Requiere preparar herramientas y entender los scripts. Las pruebas solo comprueban los casos definidos. |
| **[skill-creator — Anthropic](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md)** | Ayuda a crear, evaluar y mejorar skills. | Preparar vuestra skill propia: por ejemplo, un tutor que explique abreviaturas de Emmet y proponga ejercicios. | Puede resultar demasiado amplia para esta práctica; hay que acotarla y comprobar los ejemplos por separado. |

Las finalidades están recogidas en los repositorios originales; las aplicaciones de la tabla son propuestas para vuestro proyecto.

**Por qué recomiendo la de Vercel:**

1. **Responde a un requisito directo:** la web debe ser clara, navegable y legible en pantallas estrechas.
2. **Produce evidencias fáciles de defender:** problema localizado → cambio realizado → comprobación.
3. **Permite una valoración crítica:** podéis explicar qué detectó, qué pasó por alto y qué tuvisteis que comprobar vosotros. Su procedimiento consiste en consultar las directrices, leer los archivos y señalar los incumplimientos.

Una aplicación concreta sería revisar la primera versión de `index.html`, guardar los hallazgos y corregir tres problemas reales. Después comprobaríais la navegación con teclado y la visualización en móvil, registrando el resultado en `evidencias/skill-publica.md` y conservando la conversación original.

**Mi propuesta para combinar ambas entregas:** skill pública de Vercel para revisar la web y skill propia **«Tutor de Emmet»** para explicar operadores, desarrollar abreviaturas y detectar errores. Así cubrís la calidad de la página y el aprendizaje del tema con dos funciones claras.

## Usuario

explícamela mejor

## ChatGPT

**La skill de Vercel es una guía para que la IA revise vuestra web de forma ordenada y señale problemas de diseño y accesibilidad.** Tú le das los archivos y ella los examina siguiendo unas reglas.

Piensa en ella como una **lista de comprobación que sabe seguir la IA**. Un prompt dice «revisa mi web»; la skill concreta cómo hacer esa revisión y cómo presentar los fallos.

**Cómo funciona:**

1. **Consulta las directrices de Vercel.** Su `SKILL.md` enlaza a otro documento con las reglas que debe utilizar.
2. **Lee los archivos que indiquéis**, por ejemplo `index.html` y `styles.css`.
3. **Contrasta el código con esas reglas.**
4. **Devuelve los problemas indicando archivo y línea**, para que podáis localizarlos.

En vuestra web de **VS Code y Emmet**, una aplicación sería esta:

| Elemento de la web | Qué revisaríamos | Posible mejora |
|---|---|---|
| Botón «Mostrar HTML» | Si se puede utilizar con teclado y tiene un nombre claro. | Usar un botón HTML adecuado y un foco visible. |
| Ejemplos de Emmet | Si las líneas largas dificultan la lectura en móvil. | Ajustar el contenedor del código para evitar que desborde la página. |
| Menú de navegación | Si se entiende dónde lleva cada enlace. | Sustituir etiquetas ambiguas por nombres descriptivos. |
| Animaciones | Si respetan la preferencia de reducir movimiento. | Adaptar los efectos a esa preferencia. |

Estos son **ejemplos de lo que podríais comprobar**, no fallos detectados: todavía no hemos aplicado la skill a vuestra web.

**¿Qué os aporta para la práctica?** Una evidencia muy fácil de explicar a la profesora: «La aplicamos a la primera versión, señaló estos problemas, aceptamos estas recomendaciones y comprobamos las correcciones». Eso demuestra utilización y criterio propio.

También tiene límites: **no comprueba que las explicaciones de Emmet sean correctas, no certifica la accesibilidad y no sustituye una auditoría de seguridad**. Además, como descarga las reglas desde un enlace externo, conviene guardar la fecha y la versión consultada para poder reconstruir la revisión.

Para usarla, una petición adecuada sería:

> Aplica la skill web-design-guidelines a index.html y styles.css. Indica los problemas con archivo y línea, explica su efecto en una web educativa para principiantes y propone correcciones. No modifiques todavía los archivos.

**En vuestro caso, su utilidad principal sería revisar la web antes de publicarla.** La exactitud de VS Code y Emmet la comprobaríais aparte con los apuntes, la documentación oficial y pruebas en el editor.

## Usuario

### 3.4. Skill pública: `evidencias/skill-publica.md`

Cada grupo localizará y estudiará una skill pública relacionada con una tarea del proyecto, ya sea con la web que estáis generando o con cualquier tema tratado en la unidad.

El documento debe incluir:

- Nombre y enlace a la fuente original.
- Propósito de la skill.
- Tarea concreta para la que se diseñó.
- Aplicación que se hizo en el proyecto y resultado obtenido.
- Límites, riesgos o aspectos que se revisaron.
- Referencia a la conversación original relacionada con su utilización, cuando corresponda.

Debéis explicar qué aporta la skill y valorar críticamente su utilidad. No basta con copiar su descripción.

No ejecutéis código incluido en una skill ni le concedáis permisos sin comprender antes qué hace y qué implicaciones tiene.

## ChatGPT

Sí: **la de Vercel cumple este apartado, pero hay que aplicarla a vuestra web y comprobar sus resultados**. Elegirla y explicar cómo funciona solo cubre una parte.

Así completaríamos cada requisito:

| Requisito | Qué pondríamos en `evidencias/skill-publica.md` |
|---|---|
| **Nombre y fuente original** | `web-design-guidelines`, de Vercel, con el [enlace a su SKILL.md](https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md). |
| **Propósito** | Ayudar a detectar problemas de interfaz, usabilidad y accesibilidad mediante una revisión del código. |
| **Tarea para la que se diseñó** | Examinar archivos de una interfaz web, contrastarlos con las directrices que consulta y señalar los incumplimientos con su ubicación. |
| **Aplicación y resultado** | Revisar nuestra web de VS Code y Emmet. Registrar los problemas que encuentre, cuáles corregimos y cómo comprobamos las correcciones. **Esto está pendiente: todavía no la hemos aplicado.** |
| **Límites y riesgos** | Revisar las instrucciones y el documento externo que consulta. Valorar posibles errores, aspectos que no detecta y comprobaciones manuales necesarias. |
| **Conversación original** | Indicar el archivo de `conversaciones-ia/` que conserve el intercambio completo de su aplicación. |

**La forma más clara de demostrar su utilidad sería conservar un antes y un después:**

1. Preparar una primera versión funcional de la web.
2. Leer la skill y las reglas externas antes de utilizarla.
3. Aplicarla y guardar la conversación completa.
4. Revisar cada hallazgo: aceptarlo o rechazarlo con una justificación.
5. Corregir los problemas confirmados y comprobar el resultado en el navegador.

La valoración crítica debe responder a algo concreto: **¿qué detectó que nos sirvió, qué recomendaciones no aceptamos y qué tuvimos que verificar por nuestra cuenta?** Si no encuentra problemas, también se registra; no hace falta inventar fallos para justificar su uso.

La advertencia final del enunciado exige comprender lo que utilicéis. En esta skill, hay que revisar tanto el `SKILL.md` como las instrucciones externas que descarga. **No necesitáis instalar un paquete ni ejecutar scripts para estudiar su contenido.**

Mi recomendación sigue siendo elegirla: tiene un alcance manejable y permite obtener evidencias claras para la entrega. El documento definitivo lo redactaríamos **después de la aplicación real**, para contar resultados comprobados.

## Usuario

ok, que subimos a git primero?

## ChatGPT

**Primero subimos la estructura inicial del proyecto y la decisión de usar la skill de Vercel.** Los resultados de su aplicación se añadirán cuando tengamos una web que revisar.

Para el primer commit:

| Archivo | Contenido inicial |
|---|---|
| `README.md` | Tema «VS Code y Emmet», integrantes con nombre e inicial del apellido y objetivo. Enlace a GitHub Pages marcado como pendiente. |
| `PROCESO.md` | Alcance elegido, reparto inicial de tareas y motivo de elección de la skill pública. |
| `evidencias/skill-publica.md` | Nombre, enlace original, propósito, funcionamiento y revisión preliminar de riesgos. Aplicación y resultados marcados como **pendientes**. |
| `evidencias/fuentes.md` | Referencias a los apuntes y a la skill de Vercel. |
| `conversaciones-ia/01-planificacion.md` | Copia completa de esta conversación, revisada para retirar datos sensibles. |
| `index.html` | Primera página sencilla con título, introducción y estructura de los contenidos. |

**No hace falta copiar la skill de Vercel dentro de `skills/`: esa carpeta está destinada a vuestra skill propia.** Para la pública, enlazamos la fuente original y anotamos la fecha de consulta; cuando la apliquemos, conviene registrar también el commit de la versión utilizada.

Mensaje del primer commit:

```text
Crea estructura inicial y documenta planificación y skill pública
```

Después completamos la web, aplicamos la skill y hacemos otro commit con **hallazgos, correcciones y verificaciones reales**. Así Git también ayuda a demostrar el proceso.

## Usuario

[https://github.com/fraavesandra/pps-grupo2-Vs-Emmet/blob/main/Enunciado_actividad_1.md](https://github.com/fraavesandra/pps-grupo2-Vs-Emmet/blob/main/Enunciado_actividad_1.md)

## ChatGPT

He intentado abrir el repositorio con la conexión de GitHub, pero devuelve **404**. Puede ser privado y no estar autorizado para esta conexión, o que el enlace tenga algún error.

Comprueba lo siguiente:

1. Si debe ser público, entra en **Settings → General → Danger Zone → Change repository visibility**.
2. Si sigue privado, concede acceso al repositorio a la conexión de GitHub de ChatGPT.

**No he modificado ni subido nada.** En cuanto tenga acceso, podré revisar lo que ya tenéis y preparar los archivos iniciales sin duplicar trabajo.

## Usuario

ok, dime que subo

## ChatGPT

**Sube primero `evidencias/skill-publica.md` con la elección y el análisis inicial de la skill.** La aplicación y sus resultados deben quedar pendientes hasta que revisemos vuestra web.

Puedes hacerlo directamente desde GitHub:

1. Entra en [vuestro repositorio](https://github.com/fraavesandra/pps-grupo2-Vs-Emmet).
2. Pulsa **Add file → Create new file**.
3. En el nombre escribe exactamente:
   ```text
   evidencias/skill-publica.md
   ```
   GitHub creará la carpeta automáticamente.
4. Pega este contenido:

```markdown
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

Pendiente de aplicación a la primera versión funcional de la web.

Registraremos:
- Archivos y versión revisados.
- Fecha y versión de la skill y de las directrices consultadas.
- Problemas señalados.
- Recomendaciones aceptadas o rechazadas y su justificación.
- Correcciones realizadas y comprobaciones posteriores.

Todavía no se han obtenido resultados de su aplicación.

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

La elección es provisional: consideramos que puede aportar una
revisión sistemática y hallazgos localizables en el código.

Su utilidad real se evaluará después de aplicarla. Se documentará
qué aportó, qué limitaciones observamos y qué comprobaciones
tuvimos que realizar por nuestra cuenta.

## 8. Conversación original

Pendiente de incorporar la conversación completa de selección
y, posteriormente, la de aplicación en conversaciones-ia/.

Se añadirán aquí los enlaces relativos a los archivos reales.
```

5. Pulsa **Commit changes** y utiliza este mensaje:
   ```text
   Documenta elección y análisis inicial de la skill pública
   ```
6. Confirma con **Commit changes**. Si no tienes permiso para escribir directamente, GitHub puede proponerte crear una rama y una solicitud de cambios.

Con eso quedará subida **la elección documentada**, sin presentar como realizada una revisión que todavía está pendiente.

## Usuario

extended description

## ChatGPT

En **Extended description** pega esto:

```text
Añade evidencias/skill-publica.md con la selección de web-design-guidelines de Vercel como skill pública del proyecto.

Documenta su fuente original, propósito, funcionamiento, motivo de elección y límites y riesgos que deberán revisarse.

La aplicación a la web, los resultados y la valoración final quedan pendientes hasta disponer de una primera versión funcional.
```

## Usuario

dame esta conversación en .md
