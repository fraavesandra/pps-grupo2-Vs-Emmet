const enlaces = [
  ['#intro', 'Introducción'],
  ['#ideas', 'Ideas clave'],
  ['#atajos', 'Atajos'],
  ['#demo', 'Demo'],
  ['#quiz', 'Quiz'],
  ['#glosario', 'Glosario'],
  ['#fuentes', 'Fuentes'],
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <p className="logo">PPS · VS Code y Emmet</p>
        <nav aria-label="Navegación principal">
          <ul>
            {enlaces.map(([href, texto]) => (
              <li key={href}>
                <a href={href}>{texto}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}