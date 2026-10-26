# Conversación original de auditoría — 2026-10-26

Exportación mecánica del historial local original JSONL de esta sesión. No es una reconstrucción ni un resumen. Incluye mensajes de usuario y asistente disponibles hasta el corte indicado, incluidas confirmaciones conversacionales si existen. Se omiten mensajes internos de sistema/desarrollador, razonamiento, bloques automáticos de entorno/página y llamadas/salidas de herramientas. Las aprobaciones técnicas del sandbox no se convierten en supuestos mensajes de usuario: están fuera de esta exportación conversacional. No se exportan imágenes adjuntas ni pantallas de aplicaciones ajenas.

Las rutas personales, correos y patrones de credenciales se sustituyen por marcadores explícitos. No se modifican los originales. Esta actualización incluye el cierre de la auditoría, la petición de comprobar la subida y la confirmación de que el remoto coincide. El corte es la petición del usuario «Registra y guarda esta conversación en su apartado en .md», incluida. Se excluye únicamente el trabajo posterior de esta nueva exportación para evitar un registro recursivo.

Intervenciones exportadas: 13. Última marca temporal del registro (UTC): 2026-10-26T11:22:09.784Z.

## 1. Usuario

Usa obligatoriamente nuestra skill `skills/auto-proceso/SKILL.md`. Léela antes de actuar y respeta sus pasos, validaciones y sincronización. Si hay instrucciones en AGENTS.md, léelas también.

Datos confirmados:
- Fase 4: Verificar.
- Herramienta: Codex.
- Participante: Alberto M.


1. Preparación
- Inspecciona el estado de Git antes de sincronizar y conserva cualquier cambio local. No descartes trabajo ni sobrescribas cambios de compañeros.
- Registra el commit auditado, fecha, entorno y herramientas utilizadas.
- Define y guarda el alcance, los casos de prueba y los criterios de aceptación antes de ejecutar las pruebas.
- Audita la versión existente. No corrijas todavía el código de la aplicación ni modifiques la skill.

2. Seguridad
- Revisa cómo se procesan y muestran las entradas de Emmet y si existen vías de inyección.
- Prueba entradas inválidas, largas, repetitivas y anidadas, con límites de tiempo y recursos, únicamente en un entorno local controlado.
- Revisa dependencias y avisos de vulnerabilidades con fuentes oficiales actuales. No ejecutes `npm audit fix` ni actualizaciones automáticas.
- Revisa GitHub Actions, permisos, despliegue y configuración pública observable.
- Busca credenciales y datos personales en archivos, conversaciones, capturas e historial de Git. No copies secretos ni datos sensibles al informe: indica su ubicación y cómo resolverlos.
- No realices pruebas destructivas, de carga o explotación sobre GitHub Pages ni servicios de terceros.

3. Funcionalidad
- Comprueba las seis guías completas, botones, imágenes, enlaces y navegación.
- Prueba el playground con entradas correctas, incorrectas y vacías.
- Comprueba todos los ejercicios, incluidas respuestas alternativas válidas y respuestas incorrectas.
- Recorre el quiz con aciertos y errores, verifica puntuación, avance y reinicio.
- Comprueba errores de consola y carga de recursos.
- Distingue las pruebas locales de las realizadas sobre la web publicada.

4. Accesibilidad y compatibilidad
- Comprueba teclado, foco visible, apertura y cierre de diálogos, Escape y retorno del foco.
- Revisa etiquetas, textos alternativos, contraste, zoom, movimiento reducido y anuncios de resultados.
- Usa pruebas automáticas y comprobaciones manuales. No presentes el análisis del DOM como una prueba real con lector de pantalla.
- Prueba móvil y escritorio y, cuando estén disponibles, navegadores de motores distintos.
- Declara cualquier entorno o comprobación que no puedas probar.

5. Calidad didáctica
- Contrasta los conceptos y ejemplos importantes con documentación oficial y los apuntes disponibles.
- Comprueba coherencia entre web, README, PROCESO.md y enunciado.
- Revisa especialmente el número de grupo, las referencias a conversaciones, las seis guías y los criterios de autocorrección.

6. Evidencias e informe
Guarda los resultados en `evidencias/auditoria/`, incluyendo:
- Alcance y plan previo.
- Matriz de pruebas: superado, fallido, bloqueado o no probado.
- Hallazgos con identificador, gravedad justificada, ubicación, pasos reproducibles, resultado esperado y observado, impacto, evidencia y recomendación.
- Resumen de prioridades y limitaciones.

Distingue los fallos confirmados de las sospechas y las mejoras opcionales. No inventes resultados, porcentajes de cobertura ni certificaciones. Un build o linter correcto no demuestra seguridad.

7. Registro de la conversación
El enunciado exige conservar las conversaciones originales con IA.
- Guarda en `conversaciones-ia/` una exportación Markdown obtenida del historial original disponible, no una reconstrucción ni un resumen presentado como transcripción.
- Conserva los mensajes del usuario y del asistente, incluidas las confirmaciones.
- Explica el alcance de la exportación y cualquier exclusión.
- Oculta credenciales, correos privados y rutas personales mediante marcadores explícitos.
- Si no puedes obtener el historial, documenta la limitación y señala el paso manual necesario; no fabriques la conversación.
- Enlaza esta conversación desde PROCESO.md y el informe.

8. Cierre con auto-proceso
- Documenta la auditoría en PROCESO.md mediante la skill, con sus nueve campos obligatorios y solo verificaciones realmente realizadas.
- Valida referencias, archivos y privacidad antes de publicar.
- Autorizo el commit y push de la documentación, las pruebas y las evidencias revisadas que produzca esta auditoría. Incluye los archivos referenciados, no solo PROCESO.md.
- No publiques datos sensibles. Si detectas alguno, sanea las evidencias nuevas antes de subirlas y comunica el hallazgo sin revelar el contenido.
- Verifica la subida; si falla, distingue claramente lo guardado en local de lo publicado.
- Termina con un resumen claro: qué funciona, qué falla, qué queda sin comprobar y qué conviene corregir primero.

No apliques correcciones a la aplicación durante esta auditoría: presenta primero los hallazgos y el plan de solución.

## 2. Asistente

Leeré la skill y las instrucciones del repositorio antes de sincronizar. Auditaré la versión existente sin corregir la aplicación y guardaré el plan antes de ejecutar las pruebas.

## 3. Asistente

La skill `skills/auto-proceso/SKILL.md` está leída. Git estaba limpio y la sincronización confirmó que no había cambios remotos pendientes; el commit auditado será `33ad689`. Guardaré ahora los casos y criterios de aceptación, separando las pruebas locales de la revisión de la web publicada.

## 4. Asistente

Build y linter pasan, y npm no devuelve vulnerabilidades conocidas para el árbol consultado. La revisión del código muestra dos puntos que necesitan pruebas: Emmet se expande sin límites en el hilo de la interfaz y los ejercicios comparan cadenas HTML, lo que puede rechazar respuestas equivalentes. También he localizado registros originales de Codex para comprobar si contienen esta conversación.

## 5. Asistente

La prueba aislada de `li*1000000` alcanzó el límite de cinco segundos y fue terminada; no se ejecutó en Pages. He confirmado además discrepancias documentales: el pie muestra Grupo 3, el README dice Grupo 2–Bloque 3 y anuncia siete ideas aunque hay seis guías. La búsqueda en el historial encontró rutas personales antiguas; las evidencias nuevas solo registran su ubicación.

## 6. Asistente

Las seis guías completan sus 30 pasos y las imágenes cargan. El quiz devuelve correctamente 5/5, 0/5 y 3/5 y permite reiniciar. Se confirman los rechazos de alternativas válidas en los ejercicios 2 y 4, cuatro problemas de contraste detectados por axe y una animación que sigue activa con movimiento reducido. La revisión visual también ha detectado una ruta personal dentro de una captura existente; no la copiaré al informe.

## 7. Asistente

El informe ya separa los fallos reproducidos de las mejoras y las comprobaciones pendientes. El enlace de Emmet devuelve 404; Safari pasa una comprobación básica de apertura, avance, retroceso y cierre. Estoy preparando la exportación original y validando privacidad y referencias antes de crear el commit autorizado.

## 8. Asistente

El commit local `e9bc27d` contiene los 22 archivos revisados, pero el push ha fallado: Git no dispone de credenciales HTTPS en esta terminal. Registraré ese resultado y comprobaré la referencia remota para distinguir claramente lo guardado en local de lo publicado.

## 9. Asistente

Auditoría guardada siguiendo `auto-proceso`, sin modificar aplicación ni skill.

- **Funciona:** seis guías completas, imágenes, soluciones canónicas de siete ejercicios y quiz con puntuación y reinicio.
- **Falla:** alternativas válidas en ejercicios 2 y 4, contraste, movimiento reducido, enlace de Emmet y coherencia documental. Se detectaron rutas personales existentes y una expansión que superó el límite local de tiempo.
- **Pendiente:** lector de pantalla real, zoom verificado, móviles físicos, apuntes originales y ajustes administrativos de GitHub.
- **Prioridad:** sanear la captura identificativa, limitar expansiones y corregir autocorrección y contraste.

[Informe y recomendaciones](evidencias/auditoria/informe.md) · [Matriz](evidencias/auditoria/matriz.md) · [Conversación original exportada](conversaciones-ia/06-auditoria-codex-2026-10-26.md)

**Guardado localmente, no publicado:** commits `e9bc27d` y `4ff2f5f`. El push falló por falta de credenciales HTTPS; comprobé que el remoto sigue en `33ad689`. Antes de subir, también conviene revisar el correo de autor del commit, que no es noreply.

## 10. Usuario

Ok, está. Comprueba

## 11. Asistente

Comprobaré si los dos commits de la auditoría ya están en el remoto y si coinciden con los archivos locales.

## 12. Asistente

Comprobado: **la auditoría ya está subida**.

- `origin/main` y el repositorio local coinciden en `4ff2f5f`.
- Incluye ambos commits y los 22 archivos de documentación, pruebas y evidencias.
- No hay cambios locales pendientes.
- Aplicación y skill siguen intactas.

La nota de push fallido queda como registro histórico del intento anterior.

## 13. Usuario

Registra y guarda esta conversación en su apartado en .md
