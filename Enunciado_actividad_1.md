# Tarea grupal: enseñar un tema de PPS con ayuda de IA

## 1. Reto

Enseñad a otros compañeros uno de los temas de la unidad mediante una página web pública. Utilizad la inteligencia artificial (IA) como apoyo, pero comprobad la información y sed capaces de explicar tanto el tema como las decisiones tomadas durante el trabajo.

La clase se organizará en **5 grupos de 3 estudiantes**. El trabajo está pensado para **2–3 sesiones**.

La profesora asignará a cada grupo uno de los bloques temáticos.

El objetivo no es sólo generar una web con IA, sino comprender el tema, explicarlo con claridad, verificar los resultados y documentar el proceso seguido.

## 2. Bloques temáticos

| Grupo | Tema | Material de partida y alcance |
| --- | --- | --- |
| 1 | WSL y desarrollo en Linux | `pps1_00 wsl.md` y la sección sobre integración con WSL de `pps1_02 vscode.md`. Explicad un flujo de trabajo Windows/WSL. |
| 2 | Del código fuente a la ejecución | `01 - Introducción a los lenguajes de programación.pdf` y `pps1_01 proceso compilación.md`. |
| 3 | VS Code y Emmet | Selección de `pps1_02 vscode.md` sobre interfaz, edición y extensiones, más los operadores esenciales y ejemplos de `pps1_04 emmet.md`. |
| 4 | Depuración | `pps1_03 debug.md`. Explicad y demostrad con un depurador cómo localizar y explicar un error. Podéis usar el depurador y el programa que prefiráis. |
| 5 | Desarrollo seguro | Desarrollo seguro y mitigaciones de `pps1_06 seguridad_lenguajes.md` |

Cada grupo dispone de todos los apuntes de la unidad y decide el alcance concreto de su bloque: elegirá las secciones prioritarias en la Fase 1 y las justificará en `PROCESO.md`.

## 2.1. Asignacion de bloque 
    A nuestro gurupo le ha tocado el bloque 3, que trata sobre VS Code y Emmet.
## 3. Entregables

Cada grupo creará un repositorio público en GitHub que contendrá todos los archivos del proyecto.

### 3.1. Web didáctica publicada

La web se publicará mediante `GitHub Pages` y estará dirigida a compañeros que necesiten aprender el tema.

Debe incluir:

* Una introducción breve al tema y a su utilidad.
* Entre **5 y 7 ideas clave**, explicadas con palabras propias.
* Un glosario de al menos 5 términos.
* Una demostración, ejemplo práctico o diagrama relacionado con el tema.
* Las fuentes utilizadas, identificadas mediante enlaces o referencias claras.

La web debe ser clara, navegable y legible tanto en ordenador como en una pantalla estrecha.

### 3.2. Registro del proceso: `PROCESO.md`

Este archivo documentará cómo se ha realizado el trabajo y cómo se ha utilizado la IA.

Para cada fase relevante, indicad:

* **Objetivo:** qué queríais conseguir.
* **Herramienta:** qué IA utilizasteis y para qué tarea.
* **Prompt:** la instrucción representativa utilizada.
* **Resultado:** qué respuesta o propuesta relevante obtuvisteis.
* **Decisión:** qué aceptasteis, modificasteis o rechazasteis.
* **Justificación:** por qué tomasteis esa decisión.
* **Verificación:** cómo comprobasteis la información o el resultado y qué observasteis.
* **Participación:** qué integrantes participaron en la decisión.
* **Conversación de origen:** nombre del archivo que contiene el intercambio original.

No es necesario copiar manualmente las conversaciones completas dentro de `PROCESO.md`: se conservarán en la carpeta indicada a continuación.

El registro debe permitir entender el proceso y contrastar las decisiones declaradas con las conversaciones originales y el resultado final.

### 3.3. Conversaciones originales con IA

Debéis conservar todas las conversaciones con IA mantenidas durante el proyecto, sin seleccionar solo las que os parezcan mejores. No basta con redactar posteriormente un resumen de lo que supuestamente se preguntó a la IA.

**Si utilizáis GitHub Copilot Chat en VS Code, utilizad `Copy All` para copiar la conversación completa y guardadla en un archivo Markdown (`.md`).**

Procedimiento:

1. Abrid la conversación de Copilot utilizada.
2. Localizad la opción `Copy All` en el menú contextual de la conversación. Su ubicación puede variar según la versión.
3. Copiad el contenido completo disponible.
4. Pegadlo en un archivo Markdown, sin reescribir ni resumir el intercambio.
5. Guardad el archivo en `conversaciones-ia/`.
6. Indicad en `PROCESO.md` qué decisiones o resultados están relacionados con esa conversación.

Conservad todas las conversaciones con IA del proyecto, incluidas la de creación de la skill propia y la de su prueba.

Si una herramienta no permite copiar el historial completo, explicad la limitación en `conversaciones-ia/README.md` y entregad el registro más completo que permita obtener.

Una conversación copiada no constituye una prueba infalible de autenticidad, pero permite contrastar mejor el proceso que un resumen elaborado únicamente por el grupo.

### 3.4. Skill pública: `evidencias/skill-publica.md`

Cada grupo localizará y estudiará una skill pública relacionada con una tarea del proyecto, ya sea con la web que estáis generando o con cualquier tema tratado en la unidad.

El documento debe incluir:

* Nombre y enlace a la fuente original.
* Propósito de la skill.
* Tarea concreta para la que se diseñó.
* Aplicación que se hizo en el proyecto y resultado obtenido.
* Límites, riesgos o aspectos que se revisaron.
* Referencia a la conversación original relacionada con su utilización, cuando corresponda.

Debéis explicar qué aporta la skill y valorar críticamente su utilidad. No basta con copiar su descripción.

No ejecutéis código incluido en una skill ni le concedáis permisos sin comprender antes qué hace y qué implicaciones tiene.

### 3.5. Skill propia: `skills/<nombre-skill>/SKILL.md`

Cada grupo creará una skill propia, relacionada con el tema asignado o con una tarea concreta del proyecto.

El archivo debe incluir:

* **Propósito:** qué tarea resuelve y qué queda fuera de su alcance.
* **Instrucciones:** pasos claros que debe seguir la IA.
* **Condiciones de uso:** información de entrada necesaria y limitaciones relevantes.
* **Ejemplo:** una entrada y el resultado esperado.
* **Criterios de calidad:** cómo reconocer un resultado correcto y cuándo debe revisarse.

Además, entregaréis `evidencias/prueba-skill-propia.md`, que debe incluir:

1. La entrada utilizada.
2. El resultado esperado, definido antes de la prueba.
3. El resultado obtenido.
4. La comparación entre ambos.
5. Los errores o limitaciones detectados y las mejoras realizadas, si las hubo.
6. La referencia a la conversación original que documenta la prueba.

No basta con crear el archivo `SKILL.md`: debéis probar la skill con un caso concreto y comprobar si sus instrucciones son útiles.

La skill propia puede crearse con ayuda de IA, pero el grupo debe revisar y comprender lo que se haya generado. La prueba debe realizarse en una conversación distinta de aquella en la que se creó la skill.

### 3.6. Fuentes: `evidencias/fuentes.md`

Incluid los documentos de partida y las fuentes adicionales utilizadas.

Para cada fuente, indicad el título, el enlace cuando exista y qué información del trabajo ayuda a respaldar.

No presentéis contenido generado por IA como si fuera una fuente verificada. Si una afirmación importante no ha podido comprobarse, indicadlo.

## 4. Estructura del repositorio

La entrega seguirá esta estructura básica. Podéis añadir los archivos necesarios para la web y la demostración.

```text
repositorio/
├── README.md
├── index.html
├── PROCESO.md
├── conversaciones-ia/
├── evidencias/
│   ├── fuentes.md
│   ├── skill-publica.md
│   └── prueba-skill-propia.md
└── skills/
    └── nombre-skill/
        └── SKILL.md
```

`README.md` identificará el grupo, sus integrantes (nombre e inicial del apellido) y el tema asignado, e incluirá el enlace a la web publicada.

## 5. Fases de trabajo

### Fase 1. Comprender y delimitar

* Leed el material asignado.
* Identificad las ideas prioritarias y las relaciones entre ellas.
* Acordad qué contenidos vais a explicar y cuáles quedan fuera del alcance.
* Elegid las secciones prioritarias de vuestro bloque y justificad la elección en `PROCESO.md`.

### Fase 2. Planificar

* Diseñad la estructura de la web.
* Elegid la demostración o el ejemplo práctico.
* Repartid las tareas.
* Decidid qué actividades pueden beneficiarse de la IA.
* Registrad el plan inicial en `PROCESO.md`.

### Fase 3. Investigar y producir

* Elaborad la síntesis y el glosario.
* Consultad fuentes fiables.
* Utilizad IA cuando aporte valor.
* Conservad las conversaciones originales mediante `Copy All` o el mecanismo equivalente disponible.
* Preparad la web y las dos skills (la skill propia puede crearse con ayuda de IA).

### Fase 4. Verificar

* Contrastad las afirmaciones importantes con los apuntes y otras fuentes.
* Probad los ejemplos y la demostración.
* Comprobad los enlaces y la navegación.
* Probad la skill propia en una conversación distinta de la usada para crearla.
* Valorad el resultado de la skill pública.
* Registrad las decisiones y correcciones en `PROCESO.md`.

### Fase 5. Publicar y revisar

* Publicad la web con GitHub Pages.
* Comprobad que se abre sin iniciar sesión.
* Revisad la visualización en una pantalla estrecha.
* Comprobad que los archivos y enlaces funcionan.
* Revisad los archivos antes de publicar para evitar exponer información sensible.

### Fase 6. Entrevista y preguntas individuales

No habrá exposición. La profesora realizará una entrevista corta a cada grupo, con preguntas individuales. Cada integrante debe poder explicar el tema, justificar alguna decisión tomada con IA y describir las skills utilizadas.

## 6. Organización del equipo

Repartid y rotad estas responsabilidades:

* **Contenido:** síntesis, glosario y fuentes.
* **Verificación:** comprobación de afirmaciones, ejemplos y enlaces.
* **Web y publicación:** estructura, legibilidad, accesibilidad básica y GitHub Pages.

Las responsabilidades no eximen a nadie de participar en las decisiones importantes. Las tres personas deben contribuir al trabajo y comprender el resultado.

## 7. Publicación y seguridad

* El repositorio y la web deben ser públicos.
* Revisad las conversaciones de IA antes de subirlas. No publiquéis contraseñas, tokens, claves de API ni datos personales, y comprobad que no incluyan rutas locales u otra información que identifique a alguien.
* En `README.md` y `PROCESO.md` identificaos únicamente con vuestro nombre de pila y la inicial del primer apellido (por ejemplo, «Ana G.»). No incluyáis apellidos completos ni otros datos personales.
* Citad las fuentes de textos, imágenes, diagramas y ejemplos.
* Respetad las licencias y condiciones de uso.
* No presentéis respuestas de IA como información verificada sin contrastarlas.
* No ejecutéis instrucciones de una skill sin comprender sus efectos.

## 8. Entrega

**La entrega consiste en un único enlace al repositorio de GitHub.**

El repositorio debe contener todos los archivos obligatorios y el enlace a la web publicada. 

## 9. Rúbrica de evaluación

La puntuación máxima es de **100 puntos**.

Se valorará la calidad de las evidencias y la posibilidad de comprobarlas, no la cantidad de texto ni el número de archivos creados.

### Escala de desempeño

* **4 — Excelente:** evidencia completa, clara, correcta y verificable.
* **3 — Adecuado:** cumple el requisito con pequeñas omisiones.
* **2 — Parcial:** cumple solo una parte o la evidencia es superficial.
* **1 — Insuficiente:** evidencia muy incompleta o con deficiencias importantes.
* **0 — Sin evidencia:** no se presenta evidencia evaluable.

La puntuación de cada criterio se calcula como nivel obtenido dividido entre 4 y multiplicado por los puntos máximos.

Si falta algún elemento obligatorio de un criterio, el nivel máximo que puede obtenerse en ese criterio es 3.

### Criterio 1. Adecuación al tema asignado — 15 puntos

**Evidencias:** web, `PROCESO.md` y material de partida.

* **4:** desarrolla el bloque asignado, cubre las secciones prioritarias que el grupo eligió y justificó, y respeta el alcance definido. Explica correctamente los conceptos y relaciones principales.
* **3:** desarrolla correctamente el tema, con alguna omisión menor.
* **2:** cubre solo parte del bloque, omite ideas importantes o incluye demasiado contenido secundario.
* **1:** el contenido se ajusta poco al bloque o presenta lagunas importantes.
* **0:** no hay evidencia suficiente para identificar el tema desarrollado.

### Criterio 2. Claridad didáctica y fuentes — 10 puntos

**Evidencias:** web y `evidencias/fuentes.md`.

* **4:** la explicación es comprensible, utiliza palabras propias, incluye entre 5 y 7 ideas clave y un glosario de al menos 5 términos. Las fuentes son identificables y respaldan las afirmaciones importantes.
* **3:** cumple los requisitos, con pequeñas imprecisiones o alguna referencia insuficiente.
* **2:** la explicación es superficial, las fuentes son incompletas o varias afirmaciones no están respaldadas.
* **1:** predomina la copia, hay errores importantes o las fuentes son deficientes.
* **0:** no presenta contenido didáctico evaluable ni fuentes comprobables.

### Criterio 3. Trazabilidad y verificación del uso de IA — 30 puntos

**Evidencias:** `PROCESO.md` y `conversaciones-ia/`.

* **4:** documenta objetivos, prompts, resultados, decisiones y verificaciones. Conserva todas las conversaciones del proyecto y las relaciona con el proceso descrito. Justifica las decisiones y aporta comprobaciones concretas.
* **3:** documenta los elementos principales y conserva las conversaciones, aunque faltan algunos detalles.
* **2:** hay registros incompletos, decisiones poco justificadas o verificaciones superficiales.
* **1:** el proceso es difícil de reconstruir, faltan evidencias importantes o el registro es principalmente declarativo.
* **0:** no presenta un registro evaluable del uso de IA.

### Criterio 4. Análisis y utilización de una skill pública — 10 puntos

**Evidencias:** `evidencias/skill-publica.md` y fuente original.

* **4:** identifica la fuente, explica la finalidad e instrucciones relevantes, documenta una aplicación concreta y analiza límites o riesgos.
* **3:** explica la skill y su uso, pero el análisis crítico está poco desarrollado.
* **2:** presenta una descripción general, sin evidencias suficientes de aplicación o comprensión.
* **1:** aporta un enlace o una descripción superficial.
* **0:** no presenta una skill pública evaluable.

### Criterio 5. Diseño, prueba y mejora de la skill propia — 15 puntos

**Evidencias:** `skills/<nombre-skill>/SKILL.md` y `evidencias/prueba-skill-propia.md`.

* **4:** define un propósito acotado, instrucciones claras y criterios de calidad. Documenta una prueba, compara el resultado con el esperado y justifica las mejoras.
* **3:** la skill es utilizable y está probada, aunque falta detalle en la evaluación.
* **2:** las instrucciones son ambiguas o la prueba no permite valorar bien la utilidad.
* **1:** el archivo es principalmente descriptivo o no contiene una prueba válida.
* **0:** no hay una skill propia evaluable.

### Criterio 6. Funcionamiento de la web y demostración — 15 puntos

**Evidencias:** GitHub Pages y ejemplo práctico.

* **4:** la web es pública, navegable y legible; la demostración funciona o el ejemplo está explicado y es verificable.
* **3:** la web y la demostración cumplen su función, con pequeños problemas.
* **2:** hay deficiencias importantes de navegación, claridad o demostración.
* **1:** existen problemas graves de acceso o la demostración apenas aporta evidencia.
* **0:** no hay una web o demostración evaluable.

### Criterio 7. Comprensión individual y colaboración — 5 puntos

**Evidencias:** entrevista con preguntas individuales y contribuciones documentadas.

* **4:** las tres personas explican el contenido, justifican decisiones de IA y conocen su contribución.
* **3:** el grupo comprende el trabajo, aunque alguna persona necesita ayuda puntual.
* **2:** la comprensión es desigual o varias respuestas se limitan a repetir el contenido.
* **1:** apenas se justifican las decisiones o no se acredita suficientemente la participación.
* **0:** no hay evidencia evaluable de comprensión individual.

### Resumen de ponderaciones

| Criterio | Puntos |
| --- | --- |
| Adecuación al tema asignado | 15 |
| Claridad didáctica y fuentes | 10 |
| Trazabilidad y verificación del uso de IA | 30 |
| Skill pública | 10 |
| Skill propia | 15 |
| Web y demostración | 15 |
| Comprensión individual y colaboración | 5 |
| **Total** | **100** |


## 10. Lista de comprobación

* [ ] El repositorio y la web son públicos y funcionan sin iniciar sesión.
* [ ] La web desarrolla el bloque asignado.
* [ ] Incluye entre 5 y 7 ideas clave, un glosario y fuentes.
* [ ] Contiene una demostración o ejemplo práctico.
* [ ] `PROCESO.md` documenta el uso de IA y las decisiones tomadas.
* [ ] `conversaciones-ia/` contiene todas las conversaciones originales con IA del proyecto.
* [ ] La skill pública tiene una fuente y un análisis crítico.
* [ ] La skill propia incluye un `SKILL.md` y una prueba documentada.
* [ ] `README.md` identifica al grupo, a sus integrantes (nombre e inicial del apellido), el tema y el enlace a la web.
* [ ] `evidencias/fuentes.md` recoge los documentos de partida y las fuentes adicionales.
* [ ] Las conversaciones se han revisado antes de subirlas y no hay datos sensibles ni información que identifique a alguien.
* [ ] Las tres personas han participado y pueden explicar el trabajo.

**Objetivo final:** demostrar que comprendéis el tema asignado, que utilizáis la IA de forma crítica y que podéis justificar y verificar las decisiones que habéis tomado.
