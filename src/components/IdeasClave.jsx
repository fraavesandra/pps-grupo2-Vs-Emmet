import { ideasClave } from '../data/contenido.js'

export default function IdeasClave() {
  return (
    <section id="ideas" aria-labelledby="ideas-titulo">
      <h2 id="ideas-titulo">Ideas clave</h2>
      <ol className="ideas">
        {ideasClave.map((idea) => (
          <li key={idea.titulo}>
            <h3>{idea.titulo}</h3>
            <p>{idea.texto}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}