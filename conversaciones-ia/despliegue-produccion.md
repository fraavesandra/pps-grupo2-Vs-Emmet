# Registro de Conversación con IA — Despliegue en Producción y Puesta en Marcha

* **Fecha:** 2026-10-22
* **Herramienta:** Antigravity (Gemini / Claude) en VS Code
* **Participante:** Sandra F.
* **Objetivo:** Poner en producción la web didáctica en GitHub Pages, solucionar el error 404 y verificar la correcta configuración del build con Vite.

---

## Intercambio principal

### Usuario:
> "vale , estoy un poco perdida , con lo que tengo ahora . quiero que la pagina funcione y este todo en produccion"

### Asistente:
> Diagnóstico completo del estado del proyecto:
> 1. Verificación del repositorio y el código subido por el equipo (React + Vite).
> 2. Detección del error en `vite.config.js` (`base: '/pps-grupo2-Vs-Emmet/'` en lugar de `base: '/pps-grupo-trabajo/'`), causante de pantallas en blanco y errores 404 al resolver los assets.
> 3. Corrección del nombre del archivo `Index.html` a `index.html` (minúsculas) para evitar problemas en entornos Linux/Ubuntu de GitHub Actions.
> 4. Generación de los archivos de entrega requeridos por la rúbrica (`README.md`, `evidencias/fuentes.md`, `evidencias/prueba-skill-propia.md`).

---

### Usuario:
> "dice que error 404"

### Asistente:
> Explicación de la causa del 404:
> - Los cambios locales debían subirse mediante sincronización en VS Code o terminal (`git push origin main`).
> - Se debe activar la opción de origen de GitHub Pages en el panel de control de GitHub (Settings → Pages → Source: GitHub Actions).

---

### Usuario:
> [Captura de pantalla de la interfaz de GitHub Pages confirmando "GitHub Pages source saved" y Source: "GitHub Actions"]

### Asistente:
> Confirmación de que el workflow de GitHub Actions está en cola/ejecución y que en 1-2 minutos estará disponible en `https://fraavesandra.github.io/pps-grupo-trabajo/`.
> Recordatorio sobre la visibilidad del repositorio (cambiar a público en Settings -> General antes de la entrega final).

---

### Usuario:
> "¿lo estas documentando?"

### Asistente:
> Registro formal de la Fase 5 (Publicar y revisar) en `PROCESO.md` siguiendo la plantilla de la rúbrica.

