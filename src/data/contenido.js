export const guias = [
  {
    id: 'instalacion',
    titulo: 'Instalación',
    tono: 210,
    pasos: [
      {
        titulo: '¿Qué es VS Code?',
        texto:
          'Es un editor de código de Microsoft. Es multiplataforma y se amplía con extensiones, que le añaden soporte de lenguajes, depuradores y otras herramientas.',
      },
      {
        titulo: 'Descargarlo',
        texto:
          'En la web oficial hay versiones para Windows, macOS y Linux. Descarga la de tu sistema e instálala con las opciones por defecto.',
        codigo: 'https://code.visualstudio.com/Download',
      },
      {
        titulo: 'Stable o Insiders',
        texto:
          'Stable es la versión para el uso habitual. Insiders recibe los cambios antes, pero puede tener errores. Se pueden instalar las dos a la vez; para clase, usa Stable.',
      },
      {
        titulo: 'Abrir tu primer proyecto',
        texto:
          'Trabaja siempre con la carpeta del proyecto, no con archivos sueltos. Así VS Code conoce todo su contexto.',
        codigo: 'File → Open Folder',
      },
    ],
  },
  {
    id: 'interfaz',
    titulo: 'Interfaz',
    tono: 265,
    pasos: [
      {
        titulo: 'Las cinco zonas',
        texto:
          'La ventana se divide en barra de actividad, barra lateral, editor, panel inferior y barra de estado.',
      },
      {
        titulo: 'Barra de actividad',
        texto:
          'Da acceso a Explorer, Search, Source Control, Run and Debug y Extensions. Cada icono cambia el contenido de la barra lateral.',
      },
      {
        titulo: 'Explorer',
        texto:
          'Muestra los archivos y carpetas del proyecto. Desde aquí puedes crear, renombrar, mover y eliminar.',
        codigo: 'proyecto/\n├── src/\n│   └── main.py\n└── README.md',
      },
      {
        titulo: 'Pestañas y editores divididos',
        texto:
          'Cada archivo abierto aparece como una pestaña. Puedes dividir el área de edición para ver varios archivos a la vez.',
      },
      {
        titulo: 'La paleta de comandos',
        texto:
          'Es el buscador de acciones de VS Code. Si no sabes dónde está una función, escríbela aquí.',
        codigo: 'Ctrl + Shift + P',
      },
    ],
  },
  {
    id: 'crear-archivos',
    titulo: 'Crear archivos',
    tono: 150,
    pasos: [
      {
        titulo: 'Abre una carpeta',
        texto:
          'Antes de crear nada, abre la carpeta del proyecto para que los archivos nuevos queden dentro de ella.',
        codigo: 'File → Open Folder',
      },
      {
        titulo: 'Crear archivos y carpetas',
        texto:
          'En el Explorer, usa los iconos de nuevo archivo y nueva carpeta, o haz clic derecho sobre la carpeta donde quieras crearlos.',
      },
      {
        titulo: 'La extensión decide el lenguaje',
        texto:
          'VS Code detecta el lenguaje por la extensión del nombre: index.html es HTML, style.css es CSS, main.py es Python. Se puede cambiar a mano con "Change Language Mode".',
      },
      {
        titulo: 'Guardar',
        texto:
          'Guarda el archivo actual con Ctrl+S, o todos los abiertos con Ctrl+K y después S.',
        codigo: 'Ctrl + S',
      },
      {
        titulo: 'Organiza el proyecto',
        texto:
          'Una estructura sencilla ayuda: el código en src, las pruebas en tests, la documentación en docs y las imágenes en img.',
        codigo:
          'mi-proyecto/\n├── src/\n├── tests/\n├── docs/\n├── img/\n└── README.md',
      },
    ],
  },
  {
    id: 'configuracion',
    titulo: 'Configuración',
    tono: 30,
    pasos: [
      {
        titulo: 'Abrir los ajustes',
        texto:
          'Desde el menú File → Preferences → Settings, o desde la paleta de comandos.',
        codigo: 'Ctrl + Shift + P  >  Preferences: Open Settings (UI)',
      },
      {
        titulo: 'Usuario o workspace',
        texto:
          'Los ajustes de usuario se aplican a todos tus proyectos. Los de workspace solo al proyecto actual y se guardan en .vscode/settings.json.',
      },
      {
        titulo: 'Interfaz gráfica o JSON',
        texto:
          'Puedes cambiar ajustes desde la interfaz o editando settings.json directamente. Los atajos de teclado y los perfiles tienen su propia configuración.',
        codigo:
          '{\n    "editor.fontSize": 14,\n    "editor.tabSize": 4,\n    "editor.wordWrap": "on"\n}',
      },
      {
        titulo: 'Perfiles',
        texto:
          'Un perfil guarda un conjunto de extensiones y ajustes. Es útil para separar, por ejemplo, tu entorno web del de Python.',
      },
    ],
  },
  {
    id: 'extensiones',
    titulo: 'Extensiones',
    tono: 330,
    pasos: [
      {
        titulo: '¿Qué son?',
        texto:
          'Complementos que añaden funciones a VS Code: lenguajes, IntelliSense, depuración, linters, formateadores...',
      },
      {
        titulo: 'Instalar una',
        texto:
          'Abre Extensions, busca la extensión y revisa antes publicador, documentación y compatibilidad. Después pulsa Install.',
      },
      {
        titulo: 'Cuidado: son software de terceros',
        texto:
          'Las extensiones se ejecutan con permisos importantes, como leer archivos o lanzar procesos. Instala solo las necesarias, de publicadores fiables y con mantenimiento.',
      },
      {
        titulo: 'Recomendar extensiones en un proyecto',
        texto:
          'Un proyecto puede sugerir extensiones con un archivo .vscode/extensions.json.',
        codigo: '{\n    "recommendations": [\n        "ms-python.python"\n    ]\n}',
      },
      {
        titulo: 'Habilitar, deshabilitar, desinstalar',
        texto:
          'Si sospechas que una extensión da problemas o consume recursos, deshabilítala para comprobarlo antes de desinstalarla.',
      },
    ],
  },
  {
    id: 'emmet',
    titulo: 'Emmet',
    tono: 45,
    pasos: [
      {
        titulo: 'Abreviatura + Tab',
        texto:
          'Emmet viene incluido en VS Code. Escribes una abreviatura, pulsas Tab y se convierte en HTML.',
        codigo: 'ul>li*3',
      },
      {
        titulo: 'Clases e id',
        texto: 'El punto añade una clase y la almohadilla un id.',
        codigo: 'div#principal.contenedor',
      },
      {
        titulo: 'Hijo y hermano',
        texto:
          'Con > el siguiente elemento va dentro; con + va al mismo nivel.',
        codigo: 'nav>ul>li\nheader+main+footer',
      },
      {
        titulo: 'Repetir y numerar',
        texto:
          'El asterisco repite un elemento. El símbolo $ genera números automáticamente.',
        codigo: 'ul>li.item$*5',
      },
      {
        titulo: 'Texto y atributos',
        texto: 'Las llaves ponen texto y los corchetes añaden atributos.',
        codigo: 'a[href="#" target="_blank"]{Enlace}',
      },
      {
        titulo: 'Agrupar y leer',
        texto:
          'Los paréntesis agrupan una estructura para repetirla. Para entender una abreviatura larga, léela de izquierda a derecha y por trozos.',
        codigo: 'ul>(li>a)*3',
      },
      {
        titulo: 'Plantilla HTML5',
        texto:
          'Escribir solo el signo de exclamación y pulsar Tab genera la estructura básica de una página HTML5.',
        codigo: '!',
      },
    ],
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