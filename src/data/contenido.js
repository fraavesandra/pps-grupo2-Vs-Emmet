export const ideasClave = [
  {
    titulo: 'Un editor extensible, no un IDE completo',
    texto:
      'VS Code nace como editor de código. Las extensiones le añaden lo que un IDE trae de serie: soporte de lenguajes, depuradores, linters, etc.',
  },
  {
    titulo: 'Se trabaja con la carpeta del proyecto',
    texto:
      'Abrir la carpeta (File → Open Folder) en vez de archivos sueltos permite que VS Code conozca todo el proyecto: Explorer, búsqueda global y configuración propia en .vscode/.',
  },
  {
    titulo: 'La paleta de comandos lo encuentra todo',
    texto:
      'Con Ctrl+Shift+P escribes lo que quieres hacer y VS Code lo localiza. Con Ctrl+P saltas a cualquier archivo. No hace falta memorizar menús.',
  },
  {
    titulo: 'Editar de forma eficiente',
    texto:
      'Múltiples cursores, seleccionar todas las coincidencias, IntelliSense y formatear el documento ahorran mucho tiempo. F2 renombra símbolos entendiendo el lenguaje, algo que un buscar y reemplazar no hace.',
  },
  {
    titulo: 'Configuración y extensiones con criterio',
    texto:
      'Los ajustes pueden ser de usuario (todos tus proyectos) o de workspace (solo uno). Las extensiones son software de terceros con muchos permisos: comprueba publicador, documentación y mantenimiento antes de instalarlas.',
  },
  {
    titulo: 'Emmet: abreviatura + Tab = HTML',
    texto:
      'Escribes una abreviatura como ul>li*3, pulsas Tab y VS Code genera el HTML completo. Se basa en un puñado de operadores: . # > + * {} [] () $',
  },
  {
    titulo: 'Cómo leer una abreviatura de Emmet',
    texto:
      'De izquierda a derecha y por trozos pequeños. Cada operador dice cómo se relaciona un elemento con el siguiente: dentro (>), al lado (+), repetido (*)...',
  },
]

export const atajos = [
  { accion: 'Guardar', atajo: 'Ctrl+S' },
  { accion: 'Abrir archivo', atajo: 'Ctrl+O' },
  { accion: 'Abrir carpeta', atajo: 'Ctrl+K Ctrl+O' },
  { accion: 'Paleta de comandos', atajo: 'Ctrl+Shift+P' },
  { accion: 'Ir a archivo', atajo: 'Ctrl+P' },
  { accion: 'Buscar en el archivo', atajo: 'Ctrl+F' },
  { accion: 'Reemplazar', atajo: 'Ctrl+H' },
  { accion: 'Buscar en todo el proyecto', atajo: 'Ctrl+Shift+F' },
  { accion: 'Ir a símbolo del archivo', atajo: 'Ctrl+Shift+O' },
  { accion: 'Seleccionar todas las coincidencias', atajo: 'Ctrl+Shift+L' },
  { accion: 'Renombrar símbolo', atajo: 'F2' },
  { accion: 'Formatear documento', atajo: 'Shift+Alt+F' },
  { accion: 'Cursor adicional', atajo: 'Alt+clic' },
  { accion: 'Terminal integrado', atajo: 'Ctrl+ñ (teclado español) · Ctrl+` por defecto' },
  { accion: 'Zen Mode', atajo: 'Ctrl+K Z' },
  { accion: 'Cerrar archivo', atajo: 'Ctrl+W' },
]

export const ejemplosDescomponedor = [
  {
    abreviatura: 'nav.menu>ul>li.item$*3>a[href="#"]{Elemento $}',
    partes: [
      { trozo: 'nav.menu', explicacion: 'Un <nav> con la clase "menu".' },
      { trozo: '>ul', explicacion: 'Dentro de él, una lista <ul>.' },
      { trozo: '>li.item$*3', explicacion: 'Dentro, 3 <li> con clases item1, item2 e item3.' },
      { trozo: '>a[href="#"]{Elemento $}', explicacion: 'Dentro de cada <li>, un enlace con href="#" y texto numerado.' },
    ],
  },
  {
    abreviatura: 'ul>(li>a)*3',
    partes: [
      { trozo: 'ul', explicacion: 'Una lista <ul>.' },
      { trozo: '>', explicacion: 'Lo siguiente va dentro.' },
      { trozo: '(li>a)*3', explicacion: 'El grupo "li con un a dentro" se repite 3 veces.' },
    ],
  },
  {
    abreviatura:
      'section.productos>(article.producto$>h2{Producto $}+p{Descripción}+button{Comprar})*3',
    partes: [
      { trozo: 'section.productos', explicacion: 'Una <section> con la clase "productos".' },
      { trozo: '>(...)*3', explicacion: 'Dentro, un grupo que se repite 3 veces.' },
      { trozo: 'article.producto$', explicacion: 'Cada repetición es un <article> con clase producto1, producto2...' },
      { trozo: '>h2{Producto $}', explicacion: 'Dentro del article, un título numerado.' },
      { trozo: '+p{Descripción}', explicacion: 'Un párrafo hermano del título.' },
      { trozo: '+button{Comprar}', explicacion: 'Un botón hermano del párrafo.' },
    ],
  },
]

export const ejercicios = [
  {
    nivel: 'Nivel 1',
    enunciado: 'Crea una lista no ordenada con 5 elementos.',
    solucion: 'ul>li*5',
  },
  {
    nivel: 'Nivel 1',
    enunciado: 'Crea un div con id "principal" y clase "contenedor".',
    solucion: 'div#principal.contenedor',
  },
  {
    nivel: 'Nivel 2',
    enunciado: 'Crea una lista de 5 elementos con clases producto1 ... producto5.',
    solucion: 'ul>li.producto$*5',
  },
  {
    nivel: 'Nivel 3',
    enunciado: 'Crea un campo de texto con name="usuario" y placeholder="Nombre de usuario".',
    solucion: 'input[type="text" name="usuario" placeholder="Nombre de usuario"]',
  },
  {
    nivel: 'Nivel 3',
    enunciado: 'Crea una lista de 5 elementos con el texto "Producto 1" ... "Producto 5".',
    solucion: 'ul>li{Producto $}*5',
  },
  {
    nivel: 'Nivel 4',
    enunciado: 'Crea un menú de navegación con 4 enlaces distintos (Inicio, Productos, Servicios, Contacto).',
    solucion:
      'nav.menu>ul>(li>a{Inicio})+(li>a{Productos})+(li>a{Servicios})+(li>a{Contacto})',
  },
  {
    nivel: 'Nivel 4',
    enunciado: 'Crea 3 tarjetas: cada una con img, h2, p y un enlace "Leer más".',
    solucion: '.card*3>img+h2+p+a{Leer más}',
  },
]

export const preguntasQuiz = [
  {
    pregunta: '¿Qué atajo abre la paleta de comandos?',
    opciones: ['Ctrl+P', 'Ctrl+Shift+P', 'Ctrl+K Z', 'Ctrl+H'],
    correcta: 1,
    explicacion: 'Ctrl+Shift+P abre la paleta de comandos. Ctrl+P sirve para saltar a un archivo.',
  },
  {
    pregunta: '¿Qué diferencia a F2 (renombrar símbolo) de buscar y reemplazar?',
    opciones: [
      'Ninguna, hacen lo mismo',
      'F2 solo funciona con archivos de texto plano',
      'F2 usa el soporte del lenguaje y puede actualizar las referencias',
      'F2 reemplaza en todo el disco',
    ],
    correcta: 2,
    explicacion: 'El renombrado de símbolos entiende el lenguaje; el reemplazo de texto solo busca cadenas.',
  },
  {
    pregunta: '¿Qué operador de Emmet crea elementos hermanos?',
    opciones: ['>', '+', '*', '()'],
    correcta: 1,
    explicacion: 'A+B crea A y B al mismo nivel. A>B pone B dentro de A.',
  },
  {
    pregunta: '¿Qué genera la abreviatura ul>li*3?',
    opciones: [
      'Tres listas con un li cada una',
      'Una lista con tres li',
      'Un li con tres listas',
      'Una lista con un li de clase 3',
    ],
    correcta: 1,
    explicacion: 'ul>li*3 es una lista ul que contiene 3 elementos li.',
  },
  {
    pregunta: '¿Para qué sirve el Restricted Mode (Workspace Trust)?',
    opciones: [
      'Para acelerar VS Code',
      'Para ocultar la barra lateral',
      'Para limitar que una carpeta de origen desconocido ejecute código sin aprobación',
      'Para bloquear el acceso a Internet',
    ],
    correcta: 2,
    explicacion: 'Limita funciones como terminal, tareas, depuración o algunas extensiones hasta que confíes en la carpeta.',
  },
]

export const glosario = [
  { termino: 'IDE', definicion: 'Entorno de desarrollo integrado: editor, depurador, herramientas del lenguaje y gestión de proyectos en un mismo programa.' },
  { termino: 'Workspace', definicion: 'Espacio de trabajo sobre el que VS Code aplica configuraciones, tareas y recursos; en un proyecto sencillo, una carpeta.' },
  { termino: 'Command Palette', definicion: 'Buscador de comandos (Ctrl+Shift+P) que permite ejecutar casi cualquier acción de VS Code.' },
  { termino: 'IntelliSense', definicion: 'Asistencia contextual al escribir: autocompletado, información de parámetros y documentación.' },
  { termino: 'Extensión', definicion: 'Complemento de terceros que añade funciones a VS Code, como soporte de lenguajes o depuradores.' },
  { termino: 'settings.json', definicion: 'Archivo donde se guardan los ajustes; puede ser de usuario o de workspace (.vscode/settings.json).' },
  { termino: 'Restricted Mode', definicion: 'Modo que limita funciones peligrosas al abrir una carpeta no confiable.' },
  { termino: 'Emmet', definicion: 'Sistema de abreviaturas que se expanden a HTML y CSS al pulsar Tab.' },
  { termino: 'Abreviatura', definicion: 'Texto corto escrito con operadores de Emmet (por ejemplo ul>li*3) que se expande a código.' },
  { termino: 'Linter', definicion: 'Herramienta que analiza el código y avisa de errores o malas prácticas.' },
]

// IMPORTANTE: comprobad que cada enlace funciona antes de publicar.
export const fuentes = [
  { titulo: 'Apuntes de la unidad: pps1_02 vscode.md', url: null, respalda: 'Interfaz, edición, configuración, extensiones y seguridad.' },
  { titulo: 'Apuntes de la unidad: pps1_04 emmet.md', url: null, respalda: 'Operadores de Emmet y ejercicios.' },
  { titulo: 'Visual Studio Code Docs', url: 'https://code.visualstudio.com/docs', respalda: 'Contrastar atajos, configuración y funciones del editor.' },
  { titulo: 'Emmet en VS Code', url: 'https://code.visualstudio.com/docs/editing/emmet', respalda: 'Uso de Emmet dentro de VS Code.' },
  { titulo: 'Documentación oficial de Emmet', url: 'https://docs.emmet.io/', respalda: 'Sintaxis de abreviaturas.' },
  { titulo: 'Workspace Trust', url: 'https://code.visualstudio.com/docs/editing/workspaces/workspace-trust', respalda: 'Restricted Mode.' },
  { titulo: 'Librería emmet (npm)', url: 'https://www.npmjs.com/package/emmet', respalda: 'Motor usado en el playground de esta web.' },
]