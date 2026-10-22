import { useState } from 'react'
import expand from 'emmet'
import { ejercicios } from '../data/contenido.js'

const normalizar = (s) => s.replace(/\s+/g, ' ').replace(/> </g, '><').trim()

function Ejercicio({ ejercicio, numero }) {
  const [respuesta, setRespuesta] = useState('')
  const [estado, setEstado] = useState(null) // null | 'ok' | 'mal' | 'error'

  const objetivo = expand(ejercicio.solucion)

  function comprobar() {
    try {
      const mio = normalizar(expand(respuesta))
      setEstado(mio === normalizar(objetivo) ? 'ok' : 'mal')
    } catch {
      setEstado('error')
    }
  }

  return (
    <div className="ejercicio">
      <h4>
        Ejercicio {numero} <span className="etiqueta">{ejercicio.nivel}</span>
      </h4>
      <p>{ejercicio.enunciado}</p>
      <p>HTML objetivo:</p>
      <pre className="codigo"><code>{objetivo}</code></pre>

      <label htmlFor={`resp-${numero}`}>Tu abreviatura</label>
      <div className="fila">
        <input
          id={`resp-${numero}`}
          type="text"
          value={respuesta}
          onChange={(e) => { setRespuesta(e.target.value); setEstado(null) }}
          spellCheck="false"
          autoComplete="off"
        />
        <button type="button" onClick={comprobar}>Comprobar</button>
      </div>

      <p role="status" className={`resultado ${estado ?? ''}`}>
        {estado === 'ok' && '✅ Correcto: genera el mismo HTML.'}
        {estado === 'mal' && '❌ Todavía no: el HTML generado es distinto.'}
        {estado === 'error' && '⚠️ La abreviatura no es válida.'}
      </p>

      <details>
        <summary>Ver solución</summary>
        <pre className="codigo"><code>{ejercicio.solucion}</code></pre>
        <p className="nota">Puede haber otras abreviaturas válidas.</p>
      </details>
    </div>
  )
}

export default function Ejercicios() {
  return (
    <div className="tarjeta">
      <h3>3. Ejercicios con corrección automática</h3>
      <p>
        Se compara el HTML que genera tu abreviatura con el HTML objetivo, no
        el texto de la abreviatura. Así, varias respuestas distintas pueden ser válidas.
      </p>
      {ejercicios.map((e, i) => (
        <Ejercicio key={e.solucion} ejercicio={e} numero={i + 1} />
      ))}
    </div>
  )
}