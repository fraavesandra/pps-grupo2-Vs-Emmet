# Instrucciones del proyecto — PPS Grupo de Trabajo (VS Code y Emmet)

## Regla obligatoria: documentar PROCESO.md

Cada vez que el usuario te pida documentar un cambio, registrar una fase, o
actualizar PROCESO.md, sigue las instrucciones completas del archivo
`skills/auto-proceso/SKILL.md` de este repositorio.

Resumen del flujo:

1. **PRIMERO**: ejecuta `git pull origin main` para bajar los últimos cambios.
2. Lee `PROCESO.md`, `git log --oneline -10`, `git diff --name-only HEAD~1 HEAD` y `git status`.
3. Pregunta al usuario: ¿qué fase es (1-5)?, ¿se usó IA?, ¿quiénes participaron?
4. Genera una entrada con TODOS estos campos:
   - Fecha, Objetivo, Herramienta, Prompt, Resultado, Decisión, Justificación,
     Verificación, Participación, Conversación de origen, Archivos afectados.
5. Añádela al final de `PROCESO.md`.
6. **AL FINAL**: ejecuta `git add PROCESO.md && git commit -m "docs(proceso): <descripción>" && git push origin main`.

Las fases del proyecto son:
- Fase 1: Comprender y delimitar
- Fase 2: Planificar
- Fase 3: Investigar y producir
- Fase 4: Verificar
- Fase 5: Publicar y revisar

Para instrucciones completas, lee `skills/auto-proceso/SKILL.md`.

