# 🛠️ Guía de uso: Skill `auto-proceso`

## ¿Qué es?

Es un conjunto de instrucciones para que **cualquier IA** (Antigravity, Copilot, ChatGPT, Claude...) documente automáticamente el archivo `PROCESO.md` cada vez que hacéis un cambio en el proyecto. Además, sincroniza con GitHub (`git pull` antes y `git push` después) para que nunca se pierdan cambios.

---

## Configuración según tu herramienta de IA

### 🟢 Si usas Antigravity (VS Code)

**No necesitas hacer nada.** La skill se detecta automáticamente desde la carpeta `.agents/skills/auto-proceso/`.

Solo haz `git pull` y empieza a usarla:
```bash
git pull
```

Luego escribe en el chat:
> **"Documenta en PROCESO.md los cambios que he hecho"**

---

### 🔵 Si usas GitHub Copilot Chat (VS Code)

**No necesitas hacer nada extra.** El archivo `.github/copilot-instructions.md` se carga automáticamente en Copilot Chat.

Solo haz `git pull` y escribe en el chat de Copilot:
> **"Documenta en PROCESO.md los cambios que he hecho"**

Si Copilot no sigue las instrucciones automáticamente, referencia el archivo manualmente:
> **"Lee el archivo `skills/auto-proceso/SKILL.md` y sigue sus instrucciones para documentar en PROCESO.md los cambios que he hecho"**

O usa `#file` para referenciarlo directamente:
> **#file:skills/auto-proceso/SKILL.md Documenta en PROCESO.md los últimos cambios**

---

### 🟡 Si usas ChatGPT, Claude u otra IA externa (web o app)

Copia y pega este prompt en tu IA. Solo necesitas hacerlo una vez por conversación:

```
Eres un asistente para documentar el proceso de un proyecto grupal.

Cuando te pida documentar un cambio en PROCESO.md, genera una entrada con
este formato exacto:

## Fase X: <Nombre de la fase> — <Descripción breve del cambio>

**Fecha:** AAAA-MM-DD
**Objetivo:** <Qué se quería conseguir.>
**Herramienta:** <Qué IA se usó. Si ninguna, indicar "Ninguna".>
**Prompt:** <Instrucción usada con la IA. Si no se usó, "N/A".>
**Resultado:** <Qué respuesta se obtuvo.>
**Decisión:** <Qué se aceptó, modificó o rechazó.>
**Justificación:** <Por qué se tomó esa decisión.>
**Verificación:** <Cómo se comprobó el resultado.>
**Participación:** <Qué integrantes participaron.>
**Conversación de origen:** <Archivo en conversaciones-ia/ o "N/A".>
**Archivos afectados:**
- archivo1
- archivo2

Las fases son:
- Fase 1: Comprender y delimitar
- Fase 2: Planificar
- Fase 3: Investigar y producir
- Fase 4: Verificar
- Fase 5: Publicar y revisar

Pregúntame siempre: la fase, si usé IA, y quiénes participamos.
```

Después, cada vez que hagas un cambio, dile:
> **"Documenta que he creado la sección del glosario. Usé Copilot. Participé yo, Ana G."**

La IA te generará la entrada. Cópiala y pégala al final de `PROCESO.md`.

**⚠️ IMPORTANTE:** Si usas una IA externa, recuerda hacer tú el git manualmente:
```bash
git pull origin main
# (pega la entrada en PROCESO.md)
git add PROCESO.md
git commit -m "docs(proceso): descripción del cambio"
git push origin main
```

---

## Ejemplos de lo que puedes escribir (cualquier IA)

| Situación | Qué decirle a la IA |
|-----------|---------------------|
| Has hecho cambios generales | *"Documenta en PROCESO.md los últimos cambios"* |
| Has creado un archivo nuevo | *"Registra en PROCESO.md que he creado el glosario"* |
| Quieres dar más detalle | *"Documenta en PROCESO.md que hemos añadido la sección de Emmet. Usamos Copilot. Participamos Ana G. y Luis M."* |
| Después de verificar algo | *"Registra en PROCESO.md que hemos probado los enlaces de la web"* |

---

## ¿Qué genera?

Una entrada como esta (con los 9 campos que pide la rúbrica):

```markdown
## Fase 3: Investigar y producir — Creación del glosario

**Fecha:** 2026-10-22

**Objetivo:** Crear un glosario de al menos 5 términos sobre VS Code y Emmet.

**Herramienta:** GitHub Copilot Chat.

**Prompt:** "Genera un glosario de 7 términos sobre VS Code y Emmet..."

**Resultado:** Copilot generó 7 definiciones claras...

**Decisión:** Se aceptaron 5 y se reescribieron 2...

**Justificación:** Dos definiciones eran demasiado técnicas...

**Verificación:** Se comprobó con la documentación oficial de VS Code...

**Participación:** Ana G., Luis M.

**Conversación de origen:** `conversaciones-ia/copilot-glosario.md`

**Archivos afectados:**
- `index.html`
```

---

## Flujo de trabajo del equipo

```
  Compañero A              Compañero B              Compañero C
  (Antigravity)            (Copilot)                (ChatGPT)
       │                       │                         │
       ▼                       ▼                         ▼
  "Documenta en           "Documenta en            Copia el prompt
   PROCESO.md"             PROCESO.md"             del GUIA-USO.md
       │                       │                         │
       ▼                       ▼                         ▼
  ┌──────────┐           ┌──────────┐            ┌──────────┐
  │ AUTOMÁTICO│           │ AUTOMÁTICO│            │ MANUAL   │
  │ pull      │           │ pull      │            │ pull     │
  │ escribe   │           │ escribe   │            │ pega     │
  │ push      │           │ push      │            │ push     │
  └──────────┘           └──────────┘            └──────────┘
       │                       │                         │
       ▼                       ▼                         ▼
            ┌──────────────────────────────┐
            │   PROCESO.md actualizado     │
            │   en GitHub para todos       │
            └──────────────────────────────┘
```

---

## ⚠️ Cosas importantes

1. **Siempre haz `git pull` antes de trabajar.** Si usas Antigravity o Copilot en VS Code, la IA lo hace sola. Si usas otra IA, hazlo tú.

2. **Siempre haz `git push` al terminar.** Mismo caso: automático con Antigravity/Copilot, manual con otras IAs.

3. **Revisa siempre la entrada** que ha generado la IA. Tú conoces mejor el contexto.

4. **Guarda tus conversaciones de IA** en `conversaciones-ia/` y haz push.

5. **Si hay un conflicto de git:**
   ```bash
   git pull origin main
   # Resuelve el conflicto en el editor
   git add PROCESO.md
   git commit -m "fix: resolver conflicto en PROCESO.md"
   git push origin main
   ```

---

## Resolución de problemas

| Problema | Solución |
|----------|----------|
| "La skill no se activa en Antigravity" | Comprueba que `.agents/skills/auto-proceso/SKILL.md` existe. Haz `git pull`. |
| "Copilot no sigue las instrucciones" | Referencia el archivo: *"Lee skills/auto-proceso/SKILL.md y sigue sus instrucciones"* |
| "Error en git push" | Haz `git pull --rebase origin main` y luego `git push origin main` |
| "Conflicto de merge" | Abre PROCESO.md, busca las marcas `<<<<<<<`, elige qué mantener, guarda, haz commit y push |
| "No me pregunta la fase" | Indícala directamente: *"Documenta en PROCESO.md, fase 3, que he creado..."* |
