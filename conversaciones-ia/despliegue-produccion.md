# Registro de Conversación con IA — Integración, Despliegue en Producción y Publicación

* **Fecha:** 22 de octubre de 2026
* **Herramienta:** Antigravity (Gemini / Claude Opus) en VS Code
* **Participantes:** Sandra F., Raquel G., Pablo C., Alberto M.
* **Objetivo:** Integrar las aportaciones del equipo (Fase 1 y aplicación web), poner en producción la web didáctica en GitHub Pages, solucionar el error HTTP 404 y verificar la correcta publicación tras el cambio de nombre del repositorio.

---

## 1. Integración de la Fase 1 (Aportación de Raquel G.)

### Usuario:
> Transcribe el contenido elaborado por Raquel G. sobre la Fase 1 (Comprender y delimitar): objetivos, selección de 7 ideas clave, atajos de teclado, secciones prioritarias y temas fuera del alcance.

### Asistente:
> - Integración del bloque estructurado de la **Fase 1** en `PROCESO.md` respetando el formato de los 9 campos obligatorios de la rúbrica.
> - Creación del archivo de evidencia original [`conversaciones-ia/conversacion_vscode_emmet.md`](conversacion_vscode_emmet.md) con la transcripción de la consulta inicial de Raquel.

---

## 2. Diagnóstico y Preparación para Producción

### Usuario:
> "vale , estoy un poco perdida , con lo que tengo ahora . quiero que la pagina funcione y este todo en produccion"

### Asistente:
> Auditoría completa del repositorio local y remoto:
> 1. Detección de la aplicación web didáctica interactiva desarrollada en React 19 + Vite por Pablo C. (con Playground en vivo, Quiz, Atajos, Descomponedor y Glosario).
> 2. Identificación de **dos problemas críticos para el despliegue**:
>    - En `vite.config.js`, la propiedad `base` apuntaba a una ruta no sincronizada con el repositorio.
>    - El archivo de entrada principal estaba nombrado como `Index.html` (con mayúscula), lo que genera fallos de resolución en entornos Linux/Ubuntu de GitHub Actions.
> 3. Renombrado de archivos a minúsculas (`Index.html` → `index.html` y `PROCESO.MD` → `PROCESO.md`).
> 4. Generación de los documentos de evidencias requeridos:
>    - [`evidencias/fuentes.md`](../evidencias/fuentes.md): Documentos de clase y enlaces oficiales de respaldo.
>    - [`evidencias/prueba-skill-propia.md`](../evidencias/prueba-skill-propia.md): Caso de prueba y evaluación de calidad de `auto-proceso`.

---

## 3. Resolución del Error 404 y Cambio de Nombre del Repositorio

### Usuario:
> "dice que error 404"

### Asistente:
> Explicación de los requisitos de activación en GitHub Pages:
> - Los commits deben sincronizarse con GitHub (`git push`).
> - Se debe cambiar la fuente en GitHub Settings → Pages → Source: **GitHub Actions**.

### Usuario:
> Envío de captura de pantalla confirmando: "GitHub Pages source saved" con Source: "GitHub Actions".

### Usuario:
> "sigue sin aparecer la pagina"
> "es que el nombre del repositorio se llama pps-grupo2-Vs-Emmet por q le he cambiado al nombre"

### Asistente:
> Diagnóstico definitivo del problema:
> - Al haberse renombrado el repositorio en GitHub a `pps-grupo2-Vs-Emmet`, la URL pública canónica en GitHub Pages pasa a ser:
>   `https://fraavesandra.github.io/pps-grupo2-Vs-Emmet/`
> - Acciones correctivas aplicadas de inmediato:
>   1. Ajuste de `vite.config.js` con `base: command === 'build' ? '/pps-grupo2-Vs-Emmet/' : '/'`.
>   2. Actualización de enlaces en `README.md` y `PROCESO.md`.
>   3. Actualización de la URL del remoto git:
>      `git remote set-url origin https://github.com/fraavesandra/pps-grupo2-Vs-Emmet.git`.

---

## 4. Verificación del Despliegue en Vivo

### Usuario:
> "ya lo veo"

### Asistente:
> Confirmación de que el pipeline de GitHub Actions (`Deploy a GitHub Pages`) finalizó con éxito en verde (✅) y la web didáctica interactiva se encuentra 100% operativa en producción:
> 👉 **https://fraavesandra.github.io/pps-grupo2-Vs-Emmet/**
> 
> Creación del documento de análisis crítico de la skill pública:
> - [`evidencias/skill-publica.md`](../evidencias/skill-publica.md) sobre `web-design-guidelines` de Vercel Labs, según lo acordado en `conversaciones-ia/01-planificacion-skill-publica.md`.

---

## 5. Actualización del README y Limpieza de Configuración

### Usuario:
> "https://fraavesandra.github.io/pps-grupo2-Vs-Emmet/ actualizame el realme"
> "ayudame a quitar las cosas para q se vea en el apartado de pages solo el q funciona"
> "documenta todo lo que hemos hablado"

### Asistente:
> - Rediseño integral y profesional de [`README.md`](../README.md) con roles del equipo, enlace visible a producción, características interactivas, mapa del repositorio y guía de ejecución local.
> - Clarificación de las tarjetas de sugerencia de GitHub Pages (Jekyll / Static HTML) y procedimiento para purgar flujos fallidos antiguos en la pestaña Actions.
> - Actualización y consolidación completa de `PROCESO.md` y `conversaciones-ia/`.
