# Registro de Conversación con IA — Creación y Prueba de la Skill Propia (`auto-proceso`)

* **Fecha:** 22 de octubre de 2026
* **Herramienta:** Antigravity (Claude Opus 4.6 / Gemini) en VS Code
* **Participante:** Sandra F.
* **Objetivo:** Diseñar e implementar una skill propia para el repositorio que automatice la documentación del archivo `PROCESO.md` cada vez que se realice un cambio, manteniendo sincronizado el repositorio Git (pull antes, push después) y dando soporte a múltiples IAs usadas por los integrantes del equipo.

---

## 1. Solicitud Inicial

### Usuario:
> "Ayudame a crear una skill propia para que en este proyecto se haga la documentacion del archivo proceso.md sola para que cada vez que alguien haga un cambio se ejecute sola"

### Asistente:
> Análisis de los requisitos de la rúbrica del proyecto (`Enunciado_actividad_1.md`):
> - Debe ubicarse en `skills/<nombre-skill>/SKILL.md`.
> - Debe incluir: Propósito, Instrucciones, Condiciones de uso, Ejemplo y Criterios de calidad.
> - Estructuración del flujo en 7 pasos sistemáticos:
>   - Paso 0: Git pull obligatorio antes de empezar.
>   - Paso 1: Recopilación de contexto (`git log`, `git diff`, `git status`).
>   - Paso 2: Determinación de la fase (1 a 5).
>   - Paso 3: Generación de la entrada con los 9 campos obligatorios de la rúbrica.
>   - Paso 4: Inserción cronológica en `PROCESO.md`.
>   - Paso 5: Validación de referencias y privacidad.
>   - Paso 6: Git commit y git push automático.
>   - Paso 7: Confirmación y recordatorio al usuario.
>
> Creación de los archivos:
> - `skills/auto-proceso/SKILL.md` (entregable formal).
> - `.agents/skills/auto-proceso/SKILL.md` (copia para autodescubrimiento por Antigravity).

---

## 2. Coordinación y Compatibilidad Multiequipo

### Usuario:
> "como puedo hacer que los 4 integrantes usen la skill de manera facil ?"
> "pero no todos usan antigravity"

### Asistente:
> Adaptación de la arquitectura de la skill para soportar todas las herramientas de IA empleadas en el equipo:
> 1. **Antigravity:** Detección automática en `.agents/skills/auto-proceso/SKILL.md`.
> 2. **GitHub Copilot Chat:** Creación de `.github/copilot-instructions.md` con reglas del proyecto inyectadas en el contexto de Copilot.
> 3. **ChatGPT / Claude / IAs Web:** Elaboración de `skills/auto-proceso/GUIA-USO.md` con un prompt estandarizado y flujo manual paso a paso para compañeros que usan navegadores.

---

## 3. Prueba de Funcionamiento y Verificación

### Usuario:
> "pues provemoslo"

### Asistente:
> Ejecución de la skill en vivo sobre los propios cambios del proyecto:
> - Ejecución de `git status` e inspección del estado de los archivos.
> - Formulación guiada de preguntas al usuario (confirmación de Fase 3 y autoría de Sandra F.).
> - Generación y redacción de la entrada formal en `PROCESO.md`.
> - Ejecución del commit en local `docs(proceso): crear skill auto-proceso y documentar su creación en PROCESO.md`.
> - Detección de límite técnico: el comando `git push` requirió autenticación interactiva en la terminal al no existir un asistente de credenciales guardado previamente.
> - Registro del resultado en `evidencias/prueba-skill-propia.md`.
