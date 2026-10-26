# Auditoría de la versión existente — Fase 4

Fecha: 2026-10-26, Europe/Madrid. Participante: Alberto M. Herramienta: Codex.
Commit: `33ad6893ec9c1e7558a3cb1abde14d744c40428d`. Árbol inicialmente limpio; `git pull --ff-only origin main`: actualizado. Sin correcciones de aplicación ni cambios de skill.

[Plan previo](plan.md) · [Matriz](matriz.md) · [Conversación original exportada](../../conversaciones-ia/06-auditoria-codex-2026-10-26.md).

## Resultado y alcance real

Funcionan el build, lint, las seis guías (30 pasos), las diez apariciones de imágenes, los siete ejercicios con su solución canónica, cinco alternativas, el control de respuestas incorrectas/vacías y tres recorridos del quiz (5/5, 0/5, 3/5, reinicio). El playground muestra HTML como texto: la entrada con atributo onerror no creó imágenes ni ejecutó el marcador local. Esto no demuestra ausencia universal de inyección.

Hay fallos confirmados de autocorrección, contraste, movimiento reducido, enlace externo, privacidad y coherencia documental. Una expansión repetitiva alcanzó el límite de tiempo del proceso aislado. No se han realizado pruebas adversarias contra Pages.

Entorno: macOS; Node 24.10.0, npm 11.6.0, Chrome/Blink 156.0.8078.47, Safari/WebKit 26.6.2, axe-core 4.10.3, Playwright disponible en el entorno. Dependencias exactas: [inventario](dependencias.txt). Build/lint usaron node_modules existente; no se efectuó una instalación limpia en esta auditoría. El CI usa Node 22: no se reprodujo ese entorno.

La suite principal usa Vite local en loopback, no el bundle servido por Pages. Pages se abrió sin autenticación y mostró seis guías; HTTP 200, HSTS y cache-control max-age=600. No se observó CSP en la respuesta HTTP. Esa ausencia es una oportunidad de defensa adicional, no una inyección demostrada. No se verificó identidad binaria entre lo publicado y el commit auditado.

## Hallazgos confirmados

### AUD-01 — Expansión sin límite: media, disponibilidad del cliente

- Ubicación: `src/components/Playground.jsx` y `src/components/Ejercicios.jsx`, llamadas síncronas a `expand`, sin cuota de tamaño, repetición o plazo.
- Reproducción segura: ejecutar `node evidencias/auditoria/emmet-test.mjs` desde la raíz, solo local. El caso repeat-limit usa `li*1000000`, timeout 5 s y heap V8 128 MiB. El heap no limita toda la memoria RSS; salida capturada limitada a 8 KiB. No pegar este caso en producción.
- Esperado: rechazar una expansión excesiva o terminarla sin bloquear la interfaz.
- Observado: proceso terminado por SIGTERM/ETIMEDOUT al alcanzar 5 s. Casos 50.005 caracteres, 10.000 repeticiones y 300 niveles sí terminaron.
- Impacto: riesgo de congelación local por trabajo síncrono; no se demostró caída del navegador ni impacto remoto/multiusuario. Gravedad media por pérdida de disponibilidad de la sesión, sin persistencia ni ejecución remota demostradas.
- Evidencia: [resultados aislados](emmet-resultados.json), [prueba](emmet-test.mjs).
- Recomendación: límites de entrada y expansión estimada, trabajador aislado cancelable y límite de salida; ensayar límites pedagógicos pequeños antes de integrar.

### AUD-02 — Respuestas equivalentes rechazadas: media, función didáctica principal

- Ubicación: `src/components/Ejercicios.jsx`, `normalizar` y comparación de cadenas.
- Reproducción: ejercicio 2, `div[class=contenedor id=principal]`; ejercicio 4, `input[placeholder="Nombre de usuario" name=usuario type=text]`; pulsar Comprobar.
- Esperado: aceptar los mismos elementos y atributos independientemente de su orden.
- Observado: “Todavía no”; las soluciones canónicas sí se aceptan. Las otras cinco alternativas ensayadas se aceptan.
- Impacto: evaluación incorrecta del aprendizaje. Evidencia: `browser-resultados.json`, sección exercises.
- Recomendación: comparación estructural segura sin insertar HTML activo en la página; definir por ejercicio qué diferencias se toleran. No colapsar indiscriminadamente espacios significativos de texto/atributos.

### AUD-03 — Contraste insuficiente: media, legibilidad

- Ubicación: `src/styles.css`, `.dialogo-progreso` y `.dialogo-nav`; esquema claro del sistema aunque la página mantiene fondo oscuro.
- Reproducción: emular preferencia light y abrir primer paso de Instalación, Interfaz, Configuración y Emmet; ejecutar axe.
- Esperado: mínimo 4,5:1 en texto normal.
- Observado: progreso 3,86:1 y 2,27:1; botones 3,41:1 y 2,41:1 respectivamente. Axe marca serious. No se extrapola a todos los pasos ni al modo oscuro.
- Impacto: dificulta lectura/acción a personas con baja visión. Evidencia: `browser-resultados.json`, axe.
- Recomendación: ajustar tokens de colores en ambas preferencias y comprobar todos los estados. Axe deja comprobaciones de contraste incompletas; no se certifica WCAG.

### AUD-04 — Movimiento reducido incompleto: baja

- Ubicación: `src/styles.css`, regla reduce de `.guia::before`.
- Reproducción: activar prefers-reduced-motion: reduce y consultar transición del pseudo-elemento.
- Esperado: eliminar la expansión animada decorativa.
- Observado: conserva transición de 0,7 s y escala en hover/focus.
- Impacto: no respeta plenamente la preferencia de movimiento. Evidencia: `browser-resultados.json`, motion y regla CSS.
- Recomendación: desactivar también esa transición y escala bajo reduce.

### AUD-05 — Datos personales en captura e historial: media, publicación pública

- Ubicación actual: `src/assets/instalacion/Diagrama anotado de Visual Studio Code.png`, línea del terminal en panel inferior; contiene ruta de perfil personal. Revisada visualmente a tamaño original. No se duplica la imagen ni el valor aquí.
- Historial: `evidencias/skill-publica.md`, línea 56, versiones identificadas en [privacidad.json](privacidad.json). También hay seis correos únicos en metadatos de autor/committer; no se reproducen ni se clasifican todos como privados sin confirmación.
- Reproducción: inspeccionar localmente esas ubicaciones; nunca copiar valores al ticket público.
- Esperado: rutas de ejemplo impersonales, contactos privados ausentes.
- Observado: ruta identificativa en captura publicada y rutas antiguas en Git. La búsqueda regex de tokens/llaves y correos en 114 objetos únicos no produjo candidatos de credenciales; esto no descarta secretos no reconocidos.
- Impacto: incumplimiento del requisito de privacidad. Recomendación: sustituir/ocultar el área de la captura en una fase autorizada, valorar saneamiento coordinado del historial y configuración noreply para commits futuros. No reescribir historial compartido unilateralmente. Si se descubre una credencial real, revocarla primero.
- Las ocho capturas actuales se inspeccionaron en hoja de contacto; el diagrama se amplió. No se hizo OCR exhaustivo ni revisión visual de cada imagen histórica.

### AUD-06 — Identificación y número de guías incoherentes: baja

- Ubicación: `src/components/Footer.jsx`, README y enunciado.
- Reproducción: comparar pie (“Grupo 3”), README (“Grupo 2 - Bloque 3”, “7 Ideas Clave”) y seis botones de guía.
- Esperado: distinguir grupo de trabajo y bloque asignado y contar seis guías.
- Observado: números inconsistentes; el enunciado asigna VS Code/Emmet al bloque 3 y aclara que es el bloque del equipo. No corresponde deducir que el equipo debe renombrarse a Grupo 3.
- Impacto: confusión de identificación y alcance. Evidencia: código/README del commit y `browser-resultados.json` published.
- Recomendación: confirmar etiqueta Grupo 2–Bloque 3 y armonizar web/documentación; no cambiar el reparto confirmado de cuatro participantes por la plantilla genérica de tres del enunciado.

### AUD-07 — Referencia de conversación inexistente: media, trazabilidad evaluable

- Ubicación: PROCESO, entrada de creación de auto-proceso: `conversaciones-ia/creacion-skill-auto-proceso.md` no existe. También se citan `Fase1.md` y `PROCESO.MD`, ausente y con capitalización distinta respectivamente. Entradas de glosario y ampliación de guías siguen con origen N/A aunque hay exportaciones posteriores en la carpeta.
- Reproducción: resolver las rutas literalmente contra el árbol auditado, atendiendo a mayúsculas en Linux.
- Esperado: conversación original vinculada y archivos existentes.
- Observado: enlace nominal inexistente y trazabilidad incompleta. No se afirma que otros archivos sean falsos; requieren contraste de contenido y origen.
- Impacto: no se puede verificar la creación de la skill a través de la referencia declarada.
- Recomendación: recuperar la exportación original en la herramienta utilizada; si se perdió, declarar la pérdida. Vincular las conversaciones posteriores tras cotejo, sin fabricar transcripciones.

### AUD-08 — Enlace oficial de Emmet roto: baja

- Ubicación: `src/data/contenido.js` y `evidencias/fuentes.md`, `/docs/editing/emmet`.
- Reproducción: petición GET ordinaria al enlace.
- Esperado: documentación accesible. Observado: HTTP 404.
- Impacto: impide consultar la fuente. Evidencia: [enlaces.json](enlaces.json).
- Recomendación: usar la [ruta oficial verificada](https://code.visualstudio.com/docs/languages/emmet). La ficha npm respondió 403 al cliente HTTP: bloqueado, no clasificado como enlace roto.

### AUD-09 — Expansión con Tab explicada sin condiciones: baja

- Ubicación: guía Emmet, primer/último paso, glosario e introducción.
- Reproducción: comparar afirmación incondicional con documentación de VS Code.
- Esperado: explicar sugerencias y configuración `emmet.triggerExpansionOnTab`, lenguaje compatible y Emmet habilitado.
- Observado: se enseña abreviatura + Tab sin aclarar la configuración. No se instaló VS Code limpio para probar su estado por defecto.
- Impacto: instrucciones pueden no funcionar en el entorno del alumno. Evidencia: [documentación oficial](https://code.visualstudio.com/docs/languages/emmet), apartado Using Tab for Emmet expansions.
- Recomendación: añadir requisito y alternativa de comando, con variante de atajos por plataforma donde proceda.

## Seguridad de dependencias y despliegue

`npm audit --json` consultó el registro oficial y devolvió cero avisos conocidos: [respuesta](npm-audit.json). No se ejecutaron fixes ni actualizaciones. Se consultaron además avisos oficiales actuales de [Vite](https://github.com/vitejs/vite/security/advisories) y [React](https://github.com/react/react/security/advisories). Vite instalado 8.3.5 está fuera del rango afectado por [GHSA-rq7h-c2jc-7f22](https://github.com/vitejs/vite/security/advisories/GHSA-rq7h-c2jc-7f22), corregido en 8.3.3. [GHSA-xqc2-xf4c-x3h3](https://github.com/react/react/security/advisories/GHSA-xqc2-xf4c-x3h3) afecta a paquetes React Server Components; este proyecto usa React cliente, sin esos paquetes ni servidor RSC observado. No equivale a una revisión manual de todo el código de dependencias.

`.github/workflows/deploy.yml`: push main y dispatch, checkout, Node 22, npm ci/build, artifact dist y deploy dependiente del build. No usa pull_request_target ni interpolaciones de entradas no confiables en shell. Contents read es adecuado; pages write e id-token write se conceden globalmente y alcanzan build aunque se necesitan para deploy. **Mejora de endurecimiento**: restringirlos al job deploy y fijar acciones a SHA completo; hoy usa tags @v4/@v3. Fundamentado en [GitHub Secure use](https://docs.github.com/en/actions/reference/security/secure-use). No se afirma compromiso del pipeline. Protecciones de rama, revisores de entorno y ajustes administrativos remotos: no comprobados.

## Calidad didáctica y manual

Los operadores hijo, hermano, repetición, numeración, atributos, texto y agrupación concuerdan con la [sintaxis oficial de Emmet](https://docs.emmet.io/abbreviations/syntax/). La distinción usuario/workspace es válida para carpeta única; la explicación de `.vscode/settings.json` omite el caso multi-root, documentado en [Settings](https://code.visualstudio.com/docs/configure/settings). Restricted Mode coincide a nivel introductorio con [Workspace Trust](https://code.visualstudio.com/docs/editing/workspaces/workspace-trust); no debe interpretarse como sandbox universal.

Los apuntes `pps1_02 vscode.md` y `pps1_04 emmet.md` no están en este repositorio: contraste bloqueado. No se avala retrospectivamente la afirmación de evidencias/fuentes.md de que todo fue contrastado con ellos. La guía Instalación pasa de descargar a abrir proyecto sin explicar instalador por sistema: mejora opcional de completitud. Los ejercicios 6 y 7 exigen implícitamente clases menu/card para igualar el objetivo aunque no las piden en el enunciado; conviene aclararlo. No se confirmó una aceptación falsa por colapso de espacios: sospecha a investigar, no fallo adicional demostrado.

Revisión manual con interfaz: Chrome, primer Tab muestra “Saltar al contenido” con contorno visible; diálogo de Instalación recibe foco en Cerrar, Tab alcanza Siguiente con foco visible, Escape cierra y devuelve a Instalación. Safari 26.6.2 carga, abre Instalación, avanza, retrocede y cierra con Escape y botón. En Safari, el árbol de accesibilidad tras cierre informó foco en contenido HTML: retorno al activador no confirmado; requiere prueba específica de teclado. No se usó lector de pantalla real.

## Limitaciones y prioridades

1. Saneamiento coordinado de la captura pública y revisión del historial (AUD-05); no se publicó ninguna copia nueva del dato.
2. Acotar expansiones (AUD-01), corregir comparación semántica (AUD-02) y contraste (AUD-03), cada cambio con regresión local.
3. Corregir enlace/Tab, movimiento reducido, grupo y seis guías; recuperar referencias originales (AUD-04, 06–09).
4. Endurecer Actions y completar matriz manual antes de afirmar accesibilidad completa.

Móvil significa viewport Chrome 320/375 px, no dispositivo físico. Escritorio 1280 px; sin overflow global observado. Zoom por atajos se intentó pero no se confirmó porcentaje ni cambio efectivo: no probado. No se ensayó Firefox, lector de pantalla real, móviles físicos, todos los estados de contraste, auditoría visual exhaustiva de histórico, ni administración de GitHub. Safari es una prueba básica de segundo motor, no la suite completa. Consola automatizada captura excepciones pageerror y respuestas HTTP >=400; no todos los console.warn/error. No hay porcentajes de cobertura ni certificaciones.

## Reproducción

Desde la raíz: `npm run build`, `npm run lint`, `npm audit --json`, `node evidencias/auditoria/emmet-test.mjs`. Para navegador, iniciar `npm run dev -- --host 127.0.0.1`, disponer de Chrome, Playwright y axe-core 4.10.3 en `/tmp/pps-axe.js`; definir PLAYWRIGHT_MODULE con la ubicación del módulo Playwright y ejecutar `node evidencias/auditoria/browser-test.mjs`. La prueba guarda observaciones, no es una batería de assertions que termine con fallo por cada hallazgo; contrastar con la matriz. Los primeros intentos del arnés tuvieron errores de ruta dev y sincronización React; se corrigió solo el arnés y la ejecución final completó. Ningún error del arnés se atribuye a la aplicación.
