import { glosario } from '../data/contenido.js'

export default function Glosario() {
  return (
    <section id="glosario" aria-labelledby="glosario-titulo">
      <h2 id="glosario-titulo">Glosario</h2>
      <dl className="glosario">
        {glosario.map((g) => (
          <div key={g.termino}>
            <dt>{g.termino}</dt>
            <dd>{g.definicion}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}