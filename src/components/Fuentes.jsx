import { fuentes, librerias } from '../data/contenido.js'

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

      <h3>Librerías y herramientas utilizadas</h3>
      <ul>
        {librerias.map((l) => (
          <li key={l.nombre}>
            <a href={l.url} target="_blank" rel="noopener noreferrer">{l.nombre}</a>
            {' — '}
            <span className="nota">{l.uso} Licencia: {l.licencia}.</span>
          </li>
        ))}
      </ul>
    </section>
  )
}