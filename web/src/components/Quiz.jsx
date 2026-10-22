import { useState } from 'react'
import { preguntasQuiz } from '../data/contenido.js'

export default function Quiz() {
  const [actual, setActual] = useState(0)
  const [elegida, setElegida] = useState(null)
  const [aciertos, setAciertos] = useState(0)
  const [terminado, setTerminado] = useState(false)

  const p = preguntasQuiz[actual]

  function elegir(i) {
    if (elegida !== null) return
    setElegida(i)
    if (i === p.correcta) setAciertos((a) => a + 1)
  }

  function siguiente() {
    if (actual + 1 < preguntasQuiz.length) {
      setActual(actual + 1)
      setElegida(null)
    } else {
      setTerminado(true)
    }
  }

  function reiniciar() {
    setActual(0)
    setElegida(null)
    setAciertos(0)
    setTerminado(false)
  }

  return (
    <section id="quiz" aria-labelledby="quiz-titulo">
      <h2 id="quiz-titulo">Mini quiz</h2>
      <div className="tarjeta">
        {terminado ? (
          <>
            <p className="lead">
              Has acertado {aciertos} de {preguntasQuiz.length}.
            </p>
            <button type="button" onClick={reiniciar}>Repetir</button>
          </>
        ) : (
          <>
            <p className="nota">Pregunta {actual + 1} de {preguntasQuiz.length}</p>
            <p><strong>{p.pregunta}</strong></p>
            <ul className="opciones">
              {p.opciones.map((o, i) => {
                let clase = ''
                if (elegida !== null) {
                  if (i === p.correcta) clase = 'correcta'
                  else if (i === elegida) clase = 'incorrecta'
                }
                return (
                  <li key={o}>
                    <button
                      type="button"
                      className={clase}
                      onClick={() => elegir(i)}
                      disabled={elegida !== null}
                    >
                      {o}
                    </button>
                  </li>
                )
              })}
            </ul>
            {elegida !== null && (
              <div role="status">
                <p>{p.explicacion}</p>
                <button type="button" onClick={siguiente}>
                  {actual + 1 < preguntasQuiz.length ? 'Siguiente' : 'Ver resultado'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}