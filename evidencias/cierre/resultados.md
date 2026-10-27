# Cierre de pendientes — 27 de octubre de 2026

Base revisada: `639bb01`. Skill: `skills/auto-proceso/SKILL.md`. Fase 4: Verificar. Herramienta: Codex. Participación de esta sesión: Alberto M.; se mantienen los nombres y la atribución histórica al equipo en PROCESO.md.

[Plan previo](plan.md) · [Conversación original de esta sesión](../../conversaciones-ia/07-cierre-codex-2026-10-27.md)

## Cambios acotados

- Se cubrió la línea identificativa del terminal en el diagrama mediante edición de imagen. Se abrió el resultado a resolución original y después dentro de la guía Interfaz: la ruta ya no es visible. Se conservaron dimensiones 1536 × 1024 y rótulos didácticos. Se eliminaron metadatos auxiliares del PNG sin cambiar sus píxeles. No se reescribió el historial Git: versiones antiguas pueden conservar la imagen anterior.
- Playground y ejercicios usan `src/utils/emmetSeguro.js`: máximo 500 caracteres de entrada original, 50 repeticiones por operador y 200 nodos totales. El árbol sintáctico se cuenta antes de materializar multiplicadores, sumando hermanos y multiplicando grupos/subárboles. Se comprueban de nuevo los nodos tras resolver snippets. Límites complementarios: 40 niveles, lorem hasta 100 palabras por elemento y salida máxima de 50.000 caracteres. El límite de salida se aplica después de generar el texto; no es una cuota de memoria del sistema ni un timeout.
- `@emmetio/abbreviation` 2.3.3, ya presente en el lockfile como dependencia de Emmet, se declara directa porque se usa su parser público. No se actualizaron versiones ni se instalaron nuevas versiones de paquetes. La operación npm offline no encontró metadatos en caché; se añadió únicamente la referencia raíz a la misma versión ya bloqueada.
- PROCESO.md distingue las modificaciones iniciales de sus verificaciones reales: no garantiza ausencia de bloqueos ni ratios de contraste sin medición. Se mantienen los nombres y atribuciones existentes.
- Se actualizó la fuente de Emmet a `https://code.visualstudio.com/docs/languages/emmet`. La guía y el glosario explican `emmet.triggerExpansionOnTab`, archivo HTML, Emmet habilitado y alternativa `Emmet: Expand Abbreviation`, contrastados con la documentación oficial el 27 de octubre.
- En `conversaciones-ia/despliegue-produccion.md` solo se sustituyeron cinco destinos `file://` por rutas relativas existentes. Una comparación automática eliminando destinos de enlaces confirmó que todo el texto restante es idéntico. No se revisaron ni reescribieron las demás conversaciones anteriores.

## Pruebas realizadas

Entorno local: macOS, Node 24.10.0, npm 11.6.0; Vite 8.3.5. Chrome mediante control de navegador, servidor solo en loopback. No se ejecutaron entradas adversarias contra Pages.

| Comprobación | Resultado real | Evidencia |
|---|---|---|
| Build | Superado, código 0 | [build.txt](build.txt) |
| Lint | Superado, código 0 | [lint.txt](lint.txt) |
| Ocho pruebas automatizadas de límites | Superadas | [emmet.test.mjs](emmet.test.mjs), [tests.txt](tests.txt) |
| `ul>li*50>span*50` | Rechazado con aviso de límite total antes de expandir | Prueba automatizada y Chrome: playground y los siete ejercicios |
| Grupos anidados y suma de hermanos | Rechazado exceso; 200 nodos aceptados, 201 rechazados | Pruebas automatizadas |
| 500/501 caracteres y 501 espacios | 500 aceptados; 501 rechazados, incluidos espacios | Pruebas automatizadas; Chrome confirma rechazo de 501 en ambos formularios |
| Entrada vacía y `>` | Vacío sin expansión; sintaxis inválida controlada | Pruebas automatizadas y playground Chrome |
| Playground tras un error | `ul>li*3` vuelve a mostrar tres li | Chrome |
| Siete ejercicios, solución canónica | Siete aceptadas | Chrome, lectura de role=status |
| Siete ejercicios, incorrecta y vacía | No aceptadas | Chrome |
| Alternativas ejercicios 2 y 4 | Atributos reordenados aceptados | Chrome |
| Lorem grande/rango/numeración; salida excesiva | Rechazados; lorem10 y ! funcionan | Pruebas automatizadas |
| Guía Emmet | Primer paso muestra instrucciones y JSON de configuración Tab | Chrome |
| Guía Interfaz | Imagen cargada, 1536 × 1024, alt presente; línea privada cubierta | Apertura del PNG y captura visual en Chrome |
| Consola del recorrido | Sin entradas error/warn devueltas por el navegador | Consulta tras pruebas locales |
| Cinco enlaces relativos del registro | Destinos existentes, sin file:// restante | Validación de rutas y diff |

Alternativas comprobadas: ejercicio 2 `div[class=contenedor id=principal]`; ejercicio 4 `input[placeholder="Nombre de usuario" name=usuario type=text]`.

## Límites del cierre

No es una repetición de toda la auditoría. No se ha probado lector de pantalla real, Firefox/Safari en este cierre, móviles físicos, zoom, contraste completo ni instalación limpia con Node 22. No se ha ejecutado VS Code para probar Tab: se verificó la documentación oficial y su presentación en la guía. No se certifica accesibilidad ni seguridad global. No se han purgado imágenes antiguas del historial ni revisado conversaciones anteriores. No se han modificado quiz, estilos, workflow ni otros contenidos ajenos a los cuatro pendientes.

La publicación de este cierre se realiza después de estas comprobaciones. El resultado del push y la verificación del remoto se comunicarán al terminar; este informe previo no afirma un despliegue todavía no comprobado.

## Reproducción local

`node --test evidencias/cierre/emmet.test.mjs`, `npm run build`, `npm run lint`; iniciar `npm run dev -- --host 127.0.0.1` y repetir los casos de formularios y guías de la tabla. Las pruebas del navegador se ejecutaron mediante la interfaz conectada; esta tabla es un registro de resultados observados, no una transcripción automática de herramientas.
