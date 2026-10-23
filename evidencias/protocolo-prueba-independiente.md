# Protocolo previo: prueba independiente de auto-proceso

Fecha: 2026-10-23.
Versión de partida del proyecto: `6c35a95`.
Skill bajo prueba: `skills/auto-proceso/SKILL.md`, sin modificaciones.

## Entrada real

> Haz la Prueba independiente de la skill propia y documéntala, respeta los parámetros de la propia skill

La prueba se realiza en una conversación de Codex diferente de la conversación de creación descrita en PROCESO.md. Este protocolo se guarda antes de generar la nueva entrada y de evaluar su resultado. La sincronización inicial y la recopilación de contexto ya se han ejecutado; por tanto, no se presenta como un protocolo anterior a esos pasos preparatorios.

## Caso concreto

Documentar en PROCESO.md la revisión del repositorio realizada en esta conversación: clonación, lectura del enunciado y evidencias, instalación con lockfile, compilación, linter y comprobación de carga de la web publicada. Separar las verificaciones realizadas de las pruebas previas conservadas por el equipo. Registrar también la evaluación de la skill.

Fase propuesta: Fase 4, Verificar. Herramienta: Codex. Participante propuesto: Alberto M. Datos sujetos a confirmación antes de redactar la entrada definitiva.

## Resultado esperado antes de generar la entrada

1. Completar la recopilación de contexto prescrita: PROCESO.md, últimos diez commits, diff del último commit, estado y conversaciones existentes.
2. Obtener confirmación de fase, herramienta y participante, sin atribuir participación a terceros.
3. Añadir al final de PROCESO.md una entrada con fecha, nueve campos de rúbrica y archivos afectados, conservando íntegro el texto previo.
4. Describir resultados reales: build y lint superados y carga observada de la web; no presentar como nuevas las pruebas de móvil/teclado del equipo ni afirmar una auditoría exhaustiva.
5. Conservar un registro literal disponible de esta conversación con sus límites, sin inventar intervenciones ni reconstruir la conversación de creación ausente.
6. Verificar la existencia de los archivos citados y que los nueve campos no contienen marcadores pendientes.
7. Revisar los nuevos documentos para excluir credenciales, rutas personales y apellidos completos.
8. Ejecutar commit y push según el paso 6; comprobar después la coincidencia de HEAD con el remoto. Si faltan identidad o credenciales, registrar el bloqueo sin declarar éxito.
9. Comparar cada resultado con este protocolo y documentar las limitaciones detectadas. No modificar la skill para acomodarla al resultado.

## Observaciones iniciales

- `git pull origin main`: `Already up to date`.
- Árbol de trabajo inicialmente limpio.
- La conversación de creación citada en el registro anterior no está en el repositorio; esta prueba no subsana su ausencia.
- Se han solicitado los datos de participación y la identidad de Git; no se inventarán.
