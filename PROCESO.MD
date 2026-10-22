# PROCESO.md — Registro del proceso de trabajo

> Documento generado con ayuda de la skill `auto-proceso`.
> Cada entrada documenta una fase o decisión relevante del proyecto.

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
- `PROCESO.MD`
