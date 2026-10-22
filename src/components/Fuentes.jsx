import { fuentes } from '../data/contenido.js'

export default function Fuentes() {
  return (
    <section id="fuentes" aria-labelledby="fuentes-titulo">
      <h2 id="fuentes-titulo">Fuentes</h2>
      <ul>
        {fuentes.map((f) => (
          <li key={f.titulo}>
            {f.url ? (
              <a href={f.url} target="_blank" rel="noopener noreferrer">{f.titulo}</a>
            ) : (
              <span>{f.titulo}</span>
            )}
            {' — '}
            <span className="nota">{f.respalda}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}