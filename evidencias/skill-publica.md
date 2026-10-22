# Skill pública: Web Design Guidelines (Vercel)

## 1. Nombre y fuente original

* **Nombre de la skill:** `web-design-guidelines`
* **Autor / Organización:** Vercel Labs
* **Fuente original:** [https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md](https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md)
* **Fecha de consulta:** 22 de octubre de 2026

---

## 2. Propósito de la skill

Auditar de forma automatizada y estructurada el código fuente de una interfaz web (HTML, JSX, CSS), contrastándolo con directrices modernas de diseño visual, contraste de color, legibilidad en pantallas reducidas y accesibilidad web (a11y).

---

## 3. Tarea concreta para la que se diseñó

La skill instruye al modelo de IA para:
1. Consultar las directrices de interfaz web estandarizadas en:
   `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md`
2. Leer los archivos de interfaz del proyecto (`index.html`, `src/App.jsx`, `src/styles.css` y componentes).
3. Evaluar el cumplimiento de buenas prácticas de diseño y accesibilidad.
4. Señalar los incumplimientos de manera accionable, indicando archivo exacto, número de línea y propuesta de solución técnica.

---

## 4. Aplicación en el proyecto y resultado obtenido

* **Aplicación:** Se utilizó como criterio de auditoría para la web didáctica de VS Code y Emmet (`pps-grupo2-Vs-Emmet`).
* **Aspectos comprobados en la web:**
  1. **Navegación accesible:** Se comprobó la inclusión de un enlace de salto directo al contenido principal (`<a className="skip" href="#contenido">Saltar al contenido</a>`) para personas que navegan con teclado o lectores de pantalla.
  2. **Contraste y legibilidad en terminal/código:** Los bloques de previsualización de Emmet (`Playground.jsx` y `Descomponedor.jsx`) se diseñaron con fondos oscuros de alto contraste imitando el tema oscuro de VS Code (`#1e1e1e`), evitando texto claro sobre fondo poco contrastado.
  3. **Responsividad en pantallas estrechas:** Se validó que el playground y las tablas de atajos se adapten en pantallas móviles mediante barras de scroll horizontal (`overflow-x: auto`) para no romper la maquetación.
  4. **Semántica HTML5:** Uso de etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`) con atributos de accesibilidad (`aria-labelledby`).

---

## 5. Límites, riesgos y aspectos revisados

1. **Dependencia de recursos externos:** Las directrices se descargan desde un repositorio externo que puede sufrir modificaciones; por seguridad, no se ejecutan scripts remotos ni dependencias no auditadas.
2. **Limitaciones pedagógicas:** La skill evalúa la calidad visual y sintáctica del código, pero **no puede evaluar la exactitud didáctica** de las explicaciones sobre VS Code ni si una abreviatura de Emmet es óptima para un alumno principiante. Esa revisión se realiza manualmente mediante el material de clase (`pps1_02 vscode.md` y `pps1_04 emmet.md`).
3. **Falsos positivos:** Ciertas alertas de accesibilidad automáticas pueden no aplicar en componentes puramente educativos interactivos (como simuladores de atajos de teclado).

---

## 6. Valoración crítica

La skill `web-design-guidelines` aporta un marco sistemático de calidad para asegurar que un entregable web no sea solo bonito, sino también funcional, accesible y legible en móviles. Ha sido una herramienta muy útil como apoyo complementario para pulir la experiencia de usuario de la web didáctica.

---

## 7. Referencia a la conversación original

* **Archivo de conversación:** [`conversaciones-ia/01-planificacion-skill-publica.md`](file:///home/alumno/ra1/pps-grupo-trabajo/conversaciones-ia/01-planificacion-skill-publica.md)
* **Participantes:** Raquel G., Sandra F.

