# Matriz de pruebas — 2026-10-26

Criterios definidos previamente en [plan.md](plan.md). Resultados detallados en [informe](informe.md), [navegador](browser-resultados.json), [Emmet aislado](emmet-resultados.json) y [enlaces](enlaces.json).

| Caso | Entorno | Estado | Resultado/evidencia |
|---|---|---|---|
| T01 build | Local Node 24 | superado | build.txt, exit 0 |
| T01 lint | Local Node 24 | superado | lint.txt, exit 0 |
| T02 válida/vacía/error `>` | Local Chrome | superado | HTML textual, vacío, aviso de error |
| T02 entrada incompleta `div[` | Local | superado | Parser tolerante produce div; no exigir error para toda entrada incompleta |
| T02 atributo activo | Local Chrome | superado | onerror mostrado como texto, marcador no ejecutado, cero img insertadas |
| T03 50.005 caracteres / 10.000 repeticiones / 300 niveles | Proceso local aislado | superado | Terminan bajo límites previstos; no mide render DOM |
| T03 millón de repeticiones | Proceso local aislado | fallido | Timeout 5 s; AUD-01 |
| T04 consulta npm/avisos | Oficial, solo lectura | superado | Cero avisos npm en árbol consultado; alcance en informe |
| T05 workflow | Estático | superado | Build/deploy coherente; endurecimiento recomendado, no compromiso probado |
| T05 protecciones rama/entorno | GitHub | no probado | No inspeccionados ajustes administrativos |
| T06 privacidad | Archivos/historial/capturas | fallido | AUD-05; sin valores sensibles en nuevas evidencias |
| T07 Instalación | Local Chrome | superado | 4 pasos, 2 imágenes, Entendido/Escape y retorno |
| T07 Interfaz | Local Chrome | superado | 5 pasos, 3 imágenes, Entendido/Escape y retorno |
| T07 Crear archivos | Local Chrome | superado | 5 pasos, 2 imágenes, Entendido/Escape y retorno |
| T07 Configuración | Local Chrome | superado | 4 pasos, 1 imagen, Entendido/Escape y retorno |
| T07 Extensiones | Local Chrome | superado | 5 pasos, 2 imágenes, Entendido/Escape y retorno |
| T07 Emmet | Local Chrome | superado | 7 pasos, Entendido/Escape y retorno |
| T07 Anterior/Cerrar | Safari manual Instalación | superado | Paso 1→2→1, botón Cerrar; no repetido en cada guía |
| T08 ejercicios 1–7, soluciones | Local Chrome | superado | Las siete aceptadas |
| T08 alternativas 1,3,5,6,7 | Local Chrome | superado | Aceptadas; entradas exactas en JSON |
| T08 alternativas 2,4 | Local Chrome | fallido | Orden de atributos: AUD-02 |
| T08 incorrectas/vacías/inválidas 1–7 | Local Chrome | superado | Incorrectas/vacías no aceptadas, `>` muestra error |
| T09 quiz todas correctas | Local Chrome | superado | 5/5, bloqueo de opciones tras responder, reinicio |
| T09 quiz todas incorrectas | Local Chrome | superado | 0/5, avance, reinicio |
| T09 quiz mixto | Local Chrome | superado | 3/5, avance, reinicio |
| T10 anclas | Local Chrome | superado | Destinos DOM presentes; no todo scroll inspeccionado visualmente |
| T10 recursos/excepciones | Local + carga Pages | superado | Sin pageerror ni HTTP >=400 durante recorrido; no todos console.warn |
| T10 enlace Emmet | Fuente oficial | fallido | 404, AUD-08 |
| T10 ficha npm | Fuente externa | bloqueado | 403 al cliente HTTP; no concluye inexistencia |
| T10 restantes siete destinos distintos | HTTP ordinario | superado | 200, enlaces.json |
| T11 etiquetas/alt | Local automática/estática | superado | Labels enlazados, diez imágenes con alt y carga; no prueba con lector |
| T11 contraste primer paso seis guías | Local axe, light | fallido | Cuatro incidencias, AUD-03; otras comprobaciones incomplete |
| T11 teclado/foco Chrome | Manual + automatizada | superado | Skip link/foco visible manual; seis retornos de diálogo en suite |
| T11 retorno foco Safari | Manual | no probado | AX muestra contenido HTML tras cierre; confirmar con teclado |
| T11 movimiento reducido | Local CSS computado | fallido | Transición 0,7 s permanece, AUD-04 |
| T11 zoom 200/400 % | Manual intentado | no probado | Atajo no confirmó porcentaje ni cambio de zoom |
| T11 anuncios role/status/live | DOM/local | superado | Estado actualizado; no certifica anuncio audible |
| T11 lector real | No disponible en ejecución | no probado | No se ejecutó VoiceOver/NVDA |
| T12 1280/375/320 | Local Chrome | superado | Sin overflow horizontal global; capturas local-*.png |
| T12 Safari/WebKit | Local manual | superado | Solo smoke: carga, diálogo, avance, retroceso, Escape/cierre |
| T12 Firefox/dispositivos físicos | No ejecutado | no probado | No extrapolar emulación a hardware real |
| T13 conceptos oficiales | Lectura/contraste | fallido | Operadores coherentes; falta condición Tab, AUD-09 |
| T13 apuntes originales | Repositorio | bloqueado | No disponibles en árbol |
| T13 grupo/guías/referencias | Repositorio y Pages | fallido | AUD-06/07 |
| T14 exportación original | Registro local | superado | Exportación hasta corte explícito; no reconstruida |
| T14 campos/referencias/privacidad nuevas | Local | superado | Validación previa al commit documentada en validacion.json |
| T14 publicación | Git | bloqueado | Push exit 128 por falta de credenciales HTTPS; entrega.md. Commit e9bc27d guardado localmente |

Los estados agregados no cuentan como porcentaje de cobertura. “Superado” se limita al caso descrito, nunca a toda la seguridad/accesibilidad del sitio.
