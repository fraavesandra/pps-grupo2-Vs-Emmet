# 🚀 Guía Didáctica: Visual Studio Code y Emmet

Sitio web interactivo y didáctico desarrollado para la asignatura de **Puesta en Producción Segura (PPS)** con el apoyo y supervisión crítica de herramientas de Inteligencia Artificial.

🌐 **Sitio Web Publicado en Producción:**  
👉 **[https://fraavesandra.github.io/pps-grupo2-Vs-Emmet/](https://fraavesandra.github.io/pps-grupo2-Vs-Emmet/)**

---

## 👥 Equipo de Trabajo (Grupo 2 - Bloque 3)

| Integrante | Rol principal asignado |
|---|---|
| **Sandra F.** | Automatización del proceso, diseño de skills e integración |
| **Raquel G.** | Delimitación temática, investigación y síntesis de contenidos |
| **Pablo C.** | Desarrollo de la aplicación web didáctica e interactiva |
| **Alberto M.** | Verificación de fuentes, pruebas técnicas y accesibilidad |

---

## 📖 Tema Asignado: VS Code y Emmet

La web está orientada a enseñar a compañeros de ciclo formativo los fundamentos y el flujo de trabajo ágil con el editor de código más utilizado en la industria y el motor de abreviaturas Emmet:

1. **Visual Studio Code:**
   * Diferencia clave entre editor de código ligero y entorno IDE completo.
   * Gestión de proyectos basada en carpetas y configuración en `.vscode/`.
   * Manejo ágil con la Paleta de Comandos (`Ctrl+Shift+P`) y atajos esenciales.
   * Edición eficiente (múltiples cursores, IntelliSense y formateo).
   * Ecosistema de extensiones y seguridad (Restricted Mode / Workspace Trust).

2. **Emmet (HTML & CSS):**
   * Sintaxis de abreviaturas para generación rápida de código.
   * Operadores fundamentales: jerarquía (`>`), hermanos (`+`), repetición (`*`), numeración (`$`), atributos (`[]`) y contenido textual (`{}`).
   * Desglose paso a paso de abreviaturas complejas.

---

## 💡 Características de la Web Didáctica

* 🎯 **6 Guías e Ideas Clave:** Explicadas paso a paso con capturas reales y diálogos interactivos.
* ⌨️ **Tabla de Atajos de Teclado:** 16 atajos fundamentales para acelerar el desarrollo.
* 🔍 **Descomponedor de Abreviaturas:** Herramienta interactiva para analizar bloques de Emmet trozo a trozo.
* 🧪 **Playground en Vivo:** Editor interactivo en el navegador que expande abreviaturas a HTML en tiempo real.
* 📝 **Ejercicios con Autocorrección:** Retos clasificados por niveles (Nivel 1 a Nivel 4) con validación automática.
* ❓ **Quiz Didáctico:** Cuestionario de 5 preguntas tipo test con explicación razonada en cada opción.
* 📚 **Glosario Técnico:** 10 términos clave definidos con precisión.
* 🔗 **Fuentes Verificadas:** Documentos de partida y enlaces oficiales de respaldo.

---

## 📂 Estructura del Repositorio y Entregables

```text
pps-grupo2-Vs-Emmet/
├── index.html                      # Punto de entrada HTML5 de la aplicación
├── README.md                       # Información del equipo, tema y enlace público
├── PROCESO.md                      # Registro exhaustivo de fases, decisiones y uso de IA
├── package.json                    # Dependencias del proyecto (React, Vite, Emmet)
├── vite.config.js                  # Configuración de compilación para GitHub Pages
├── src/                            # Código fuente de la web interactiva
│   ├── App.jsx                     # Componente raíz y navegación accesible
│   ├── styles.css                  # Estilos visuales con diseño responsivo
│   ├── components/                 # Componentes modulares (Intro, Atajos, Playground, Quiz...)
│   └── data/contenido.js           # Base de datos didáctica (ideas, glosario, ejercicios)
├── conversaciones-ia/              # Evidencias: transcripciones íntegras con IA
│   ├── 01-planificacion-skill-publica.md
│   ├── conversacion_vscode_emmet.md
│   └── despliegue-produccion.md
├── evidencias/                     # Evidencias de evaluación según rúbrica
│   ├── fuentes.md                  # Fuentes contrastadas y respaldo documental
│   ├── skill-publica.md            # Estudio y análisis crítico de 'web-design-guidelines'
│   └── prueba-skill-propia.md      # Registro y verificación de la skill 'auto-proceso'
└── skills/                         # Skills del proyecto
    └── auto-proceso/
        ├── SKILL.md                # Definición de la skill propia para PROCESO.md
        └── GUIA-USO.md             # Guía de utilización para el equipo
```

---

## 🛠️ Tecnologías y Despliegue en Producción

* **Frontend:** React 19 + Vite.
* **Motor Emmet:** Librería oficial `emmet` integrada en cliente.
* **Integración Continua (CI/CD):** Flujo de trabajo automatizado en `.github/workflows/deploy.yml` que compila el proyecto con Node 22 y lo publica automáticamente en **GitHub Pages** con cada push a la rama `main`.

---

## 💻 Ejecución en Local (Opcional)

Para ejecutar la web didáctica en un entorno local:

```bash
# 1. Clonar el repositorio
git clone https://github.com/fraavesandra/pps-grupo2-Vs-Emmet.git
cd pps-grupo2-Vs-Emmet

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```
La aplicación estará disponible localmente en `http://localhost:5173/`.
