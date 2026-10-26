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



---

# Segunda prueba: conversación independiente (2026-10-23)

El registro anterior se conserva como evidencia histórica de la prueba durante la creación. Esta segunda prueba se realiza en una conversación de Codex distinta, con Alberto M. como participante confirmado. No se modifica el SKILL.md para superar la prueba.

## 1. Entrada utilizada

> Haz la Prueba independiente de la skill propia y documéntala, respeta los parámetros de la propia skill

Caso concreto: documentar la revisión técnica del repositorio realizada en esta conversación. Fase 4: Verificar; herramienta Codex; participante Alberto M., confirmados por el usuario. Estado inicial: main en `6c35a95`, árbol limpio y pull sin cambios.

## 2. Resultado esperado

Se guardó [el protocolo previo](protocolo-prueba-independiente.md) antes de generar la nueva entrada. Requiere nueve campos, datos confirmados, preservación del registro histórico, comprobaciones concretas, referencias existentes, revisión de privacidad, commit/push y comparación explícita. El protocolo se fijó después del pull y de la recopilación inicial, no antes de esos pasos preparatorios.

## 3. Resultado obtenido

Se generó una entrada al final de PROCESO.md con los nueve campos y la fecha de esta prueba. Se conservaron las entradas anteriores y se añadieron el protocolo, el registro de conversación y una explicación de sus límites. La entrada documenta build y lint correctos y la carga observada de GitHub Pages, sin atribuir a esta prueba las comprobaciones de móvil/teclado del día anterior.

## 4. Comparación y validación

| Criterio | Resultado observado |
| --- | --- |
| Sincronización inicial | Pull correcto: `Already up to date`. |
| Contexto de Git y archivos | Leídos PROCESO.md, diez commits, diff, estado y lista de conversaciones. |
| Confirmación de datos | Usuario confirma fase, herramienta y Alberto M. |
| Generación de nueve campos | Validación mecánica superada: nueve campos no vacíos y sin marcadores pendientes. |
| Conservación del historial | Validación superada: el texto anterior de PROCESO.md se conserva íntegro como prefijo. |
| Referencias y privacidad | Los cinco archivos afectados existen; revisión del texto nuevo sin credenciales ni rutas personales. Correo omitido del registro narrativo. |
| Conversación independiente | Sesión diferente de la creación; registro conservado con limitaciones de exportación. |
| Commit y push | Commit local `fa624b2` creado con los cinco archivos. Push intentado y fallido: Git no dispone de credenciales HTTPS en la terminal. Sincronización remota no superada. |

## 5. Limitaciones y mejoras propuestas

- Falta identidad Git en un clon nuevo: se detectó con `git var GIT_AUTHOR_IDENT` y se resolvió con los datos facilitados, solo en la configuración local del repositorio. La skill podría incluir esta comprobación inicial.
- El paso 6 solo añade PROCESO.md al índice. En esta prueba también hay evidencias y conversación nuevas: se deben añadir explícitamente al commit para evitar referencias rotas en el remoto. Esto completa la entrega solicitada sin cambiar las instrucciones de la skill.
- La skill no exporta conversaciones. El registro conservado distingue mensajes y resultados técnicos, pero no constituye una exportación íntegra. Debe completarse desde el historial original disponible; no se declara cumplimiento total de trazabilidad.
- La conversación de creación citada en la primera prueba sigue ausente. No se inventa ni se considera recuperada mediante esta segunda prueba.
- No se ensayaron conflictos Git ni fallos de credenciales. Un pull correcto no demuestra que esos casos funcionen.
- Se mantienen intactas ambas copias de la skill. Las mejoras anteriores son propuestas, no cambios implementados.

## 6. Conversación original relacionada

[Registro disponible de esta prueba](../conversaciones-ia/03-prueba-independiente-auto-proceso.md) y [limitaciones de conservación](../conversaciones-ia/README.md).


## 7. Cierre de ejecución y conclusión

`git diff --check` terminó sin errores. La validación comprobó los nueve campos no vacíos, los cinco archivos afectados existentes, la conservación íntegra del contenido anterior de PROCESO.md y las dos copias de la skill sin cambios. La revisión de los documentos nuevos no encontró credenciales ni rutas personales; el correo aportado se omitió del registro narrativo, aunque se utiliza como identidad del autor en los metadatos normales del commit.

Se ejecutó el commit `fa624b2` (`docs(proceso): documentar prueba independiente de auto-proceso`). El comando `git push origin main` terminó con código 128:

```text
fatal: could not read Username for 'https://github.com': Device not configured
```

Conclusión: generación y validación de documentación superadas; sincronización remota bloqueada por falta de autenticación de Git. Esta evidencia no declara que el push se haya completado. La sesión de GitHub del navegador no acredita credenciales disponibles para Git en la terminal. El resultado del fallo se conserva en un commit de cierre posterior al commit de prueba.

Para completar el flujo se requiere autenticar Git con una cuenta que tenga acceso de escritura al repositorio y repetir el push. También queda pendiente conservar la exportación original más completa disponible. La prueba es útil para detectar estos prerrequisitos; no demuestra un funcionamiento completo de extremo a extremo.


## 8. Actualización de trazabilidad tras la subida manual

La subida manual del usuario se verificó mediante `git fetch origin main`: el commit remoto `81c515e` contiene los cinco documentos en sus rutas correctas y con contenido idéntico al local. Esto resuelve su publicación, pero no convierte el push fallido de la prueba en un push exitoso.

Posteriormente se recuperó el registro original de esta conversación y se exportaron sus 25 intervenciones hasta la petición de exportación: [conversación exportada](../conversaciones-ia/04-conversacion-completa-codex-2026-10-23.md). Se conserva el texto de los mensajes con sustituciones explícitas de datos privados, sin reconstruirlo de memoria; se excluyen los bloques internos y las llamadas/salidas de herramientas. Esta exportación sustituye el extracto parcial para consultar la conversación de prueba. La conversación de creación sigue pendiente de recuperar.
