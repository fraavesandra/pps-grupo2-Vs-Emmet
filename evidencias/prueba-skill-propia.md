# Evidencia: Prueba de la Skill Propia (`auto-proceso`)

Este documento registra la prueba y verificación de funcionamiento de la skill propia creada para el proyecto (`auto-proceso`), destinada a la documentación estructurada y automatizada de `PROCESO.md`.

---

## 1. Entrada utilizada (Prompt del usuario y contexto)

* **Instrucción dada a la IA:**
  > "Documenta en PROCESO.md que hemos creado la skill auto-proceso para el proyecto."

* **Contexto del entorno en el momento de la ejecución:**
  - Repositorio git con archivos creados sin commitear (`skills/auto-proceso/SKILL.md`, `GUIA-USO.md`, `.agents/skills/auto-proceso/SKILL.md`, `.github/copilot-instructions.md`).
  - Historial de commits previos con la estructura inicial.
  - Archivo `PROCESO.md` existente.

---

## 2. Resultado esperado (definido antes de la prueba)

1. Que la IA identifique los archivos modificados mediante `git status` / `git diff`.
2. Que solicite la confirmación de la fase correspondiente (Fase 3: Investigar y producir) y de los integrantes participantes.
3. Que genere una sección completa en `PROCESO.md` con los 9 campos requeridos por la rúbrica:
   - Objetivo, Herramienta, Prompt, Resultado, Decisión, Justificación, Verificación, Participación, Conversación de origen.
4. Que respete la privacidad (nombres con inicial del primer apellido, sin rutas locales absolutas).
5. Que realice o prepare la sincronización (commit/push).

---

## 3. Resultado obtenido

La skill se activó correctamente y ejecutó el flujo planificado:
1. Inspeccionó el estado del repositorio local (`git status`, `git log`).
2. Formuló las preguntas para confirmar la fase ("Fase 3: Investigar y producir") y la autoría/participación ("Sandra F.").
3. Redactó una entrada formal con todos los apartados obligatorios en `PROCESO.md`.
4. Añadió la lista de archivos afectados de forma exhaustiva.
5. Ejecutó el commit en git con mensaje descriptivo `docs(proceso): crear skill auto-proceso y documentar su creación en PROCESO.md`.
6. Alertó de que la conversación original debía ser archivada para completar la referencia de trazabilidad.

---

## 4. Comparación entre resultado esperado y obtenido

| Requisito evaluado | Esperado | Obtenido | Coincidencia |
|---|---|---|---|
| Detección de cambios | Archivos detectados en git | Detectó los 4 archivos nuevos | ✅ Completo |
| Interacción guiada | Preguntar fase y autores | Preguntó mediante selector y texto | ✅ Completo |
| 9 campos de rúbrica | Presentes y estructurados | Los 9 campos cumplimentados | ✅ Completo |
| Respeto a privacidad | Solo nombre e inicial | Usó "Sandra F." | ✅ Completo |
| Commit y push | Commit local y subida | Commit generado; push requirió credenciales | ⚠️ Parcial |

---

## 5. Errores o limitaciones detectados y mejoras implementadas

1. **Limitación con permisos de Git Push en entornos restringidos:**
   - *Problema:* El comando `git push origin main` solicitó credenciales interactivas en la terminal, lo cual bloquea la ejecución autónoma si el usuario no tiene configurado un asistente de credenciales (`credential.helper`).
   - *Mejora implementada:* Se añadió una guía de configuración rápida (`git config --global credential.helper store`) en `GUIA-USO.md` y se modularizó la skill para que el commit se realice de inmediato y el push se gestione de forma segura.

2. **Compatibilidad con otros entornos de IA:**
   - *Problema:* No todos los integrantes del grupo trabajan con la misma herramienta de IA (algunos usan GitHub Copilot o ChatGPT).
   - *Mejora implementada:* Se creó `.github/copilot-instructions.md` para que Copilot Chat herede las mismas pautas, y se documentó un prompt universal en `skills/auto-proceso/GUIA-USO.md` para asistentes web externos.

---

## 6. Referencia a la conversación original

* **Archivo de conversación:** `conversaciones-ia/creacion-skill-auto-proceso.md`
* **Integrantes involucrados en la prueba:** Sandra F., Raquel G.

