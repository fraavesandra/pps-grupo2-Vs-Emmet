# Proyecto PPS: Visual Studio Code y Emmet

Sitio web didáctico desarrollado para la asignatura de **Puesta en Producción Segura (PPS)** con el apoyo de herramientas de Inteligencia Artificial.

🌐 **Web didáctica publicada:** [https://fraavesandra.github.io/pps-grupo2-Vs-Emmet/](https://fraavesandra.github.io/pps-grupo2-Vs-Emmet/)

---

## 👥 Integrantes del Equipo (Grupo 2 - Bloque 3)

* **Sandra F.**
* **Raquel G.**
* **Pablo C.**
* **Alberto M.**

---

## 📖 Tema asignado: VS Code y Emmet

Guía interactiva y didáctica dirigida a compañeros para aprender:
- **Visual Studio Code**: Interfaz, gestión de proyectos con carpetas, atajos de teclado esenciales, paleta de comandos y extensiones seguras.
- **Emmet**: Abreviaturas para acelerar la escritura de HTML y CSS, operadores clave (`>`, `+`, `*`, `$`, `{}`, `[]`) y ejemplos prácticos interactivos con desgloses paso a paso.

---

## 📂 Estructura del Repositorio

```text
├── index.html                      # Punto de entrada de la aplicación didáctica
├── README.md                       # Información del equipo, tema y enlace a producción
├── PROCESO.md                      # Registro del proceso de trabajo y trazabilidad con IA
├── vite.config.js                  # Configuración de Vite para despliegue en GitHub Pages
├── src/                            # Código fuente de la web interactiva (React)
│   ├── components/                 # Componentes interactivos (Playground, Quiz, Glosario, Atajos, etc.)
│   └── data/contenido.js           # Ideas clave, glosario, ejercicios y fuentes
├── conversaciones-ia/              # Conversaciones originales completas con IA
├── evidencias/                     # Evidencias requeridas por la rúbrica
│   ├── fuentes.md                  # Documentos de partida y fuentes respaldadas
│   ├── skill-publica.md            # Análisis crítico de la skill pública
│   └── prueba-skill-propia.md      # Registro y verificación de la skill auto-proceso
└── skills/
    └── auto-proceso/
        ├── SKILL.md                # Definición de la skill propia para documentar PROCESO.md
        └── GUIA-USO.md             # Guía de uso de la skill para el equipo
```

---

## 🚀 Despliegue en Producción

La web se despliega automáticamente en **GitHub Pages** mediante GitHub Actions (`.github/workflows/deploy.yml`) en cada push a la rama `main`.
