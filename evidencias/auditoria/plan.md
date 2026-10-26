# Plan previo — Fase 4: Verificar

Fecha: 2026-10-26 (Europe/Madrid). Participante: Alberto M. Herramienta: Codex.
Commit auditado: `33ad6893ec9c1e7558a3cb1abde14d744c40428d`.
Git inicialmente limpio, rama main; pull --ff-only origin main: Already up to date.
Entorno: macOS, Node 24.10.0, npm 11.6.0; versiones adicionales se registrarán en resultados.
Skill aplicada: `skills/auto-proceso/SKILL.md`; instrucciones AGENTS.md ascendentes consultadas. No cambiar aplicación ni skills.

## Casos y aceptación, definidos antes de ejecutar pruebas

| ID | Prueba | Criterio de aceptación |
|---|---|---|
| T01 | Build y lint | Terminan sin errores; no constituyen evidencia de seguridad |
| T02 | Entradas Emmet válidas, vacías, inválidas y HTML activo | Expansión correcta, errores controlados, salida textual sin ejecución |
| T03 | Entradas largas, repetitivas y anidadas | Sin bloqueo; procesos locales aislados, máximo 5 s/caso, heap 128 MiB, salida limitada; detener al alcanzar límite |
| T04 | Dependencias y avisos oficiales | Inventario exacto, consulta actual sin actualizar paquetes |
| T05 | Actions y despliegue | Permisos mínimos, acciones fijadas, configuración coherente; solo lecturas públicas |
| T06 | Privacidad actual e historial | Buscar secretos, correos y rutas; informar ubicaciones sin valores; revisar imágenes |
| T07 | Seis guías | Abrir cada guía, recorrer contenido, imágenes y enlaces; cierre correcto |
| T08 | Playground y ejercicios | Correctas y alternativas válidas aceptadas, incorrectas rechazadas, vacías controladas |
| T09 | Quiz | Aciertos/errores, puntuación, avance y reinicio coherentes |
| T10 | Consola, recursos, enlaces y navegación | Sin errores, recursos disponibles, destinos existentes |
| T11 | Accesibilidad automática y manual | Teclado, foco visible, diálogo, Escape/retorno, etiquetas, alt, contraste, zoom, movimiento reducido, anuncios |
| T12 | Compatibilidad | Escritorio y móvil; distintos motores si disponibles; declarar ausencias |
| T13 | Didáctica y trazabilidad | Comparar conceptos con fuentes oficiales/apuntes disponibles; grupo/bloque, seis guías, referencias y autocorrección coherentes |
| T14 | Exportación y entrega | Historial original si accesible, saneado; limitaciones explícitas; nueve campos, enlaces y archivos válidos; commit/push verificado |

Estados: superado, fallido, bloqueado, no probado. Los subcasos se separarán cuando su resultado difiera.
Las pruebas adversarias se ejecutarán exclusivamente en local. Sobre Pages y terceros: navegación y lecturas ordinarias, sin carga ni explotación. No aplicar npm audit fix, actualizaciones ni correcciones de aplicación.
Hallazgos: ID, gravedad motivada, ubicación, reproducción, esperado/observado, impacto, evidencia y recomendación. Separar confirmados, sospechas y mejoras opcionales.
