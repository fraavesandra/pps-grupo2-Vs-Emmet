import { useState } from 'react'
import expand from 'emmet'
import { ejercicios } from '../data/contenido.js'

// Compara dos nodos HTML estructuralmente, ignorando el orden de atributos (AUD-02)
function sonNodosEquivalentes(nodo1, nodo2) {
  if (nodo1.nodeType !== nodo2.nodeType) return false

  // Nodo de texto
  if (nodo1.nodeType === 3) {
    return nodo1.nodeValue.trim() === nodo2.nodeValue.trim()
  }

  // Nodo de elemento
  if (nodo1.nodeType === 1) {
    if (nodo1.tagName.toLowerCase() !== nodo2.tagName.toLowerCase()) return false

    const attrs1 = Array.from(nodo1.attributes)
    const attrs2 = Array.from(nodo2.attributes)

    if (attrs1.length !== attrs2.length) return false

    for (const attr of attrs1) {
      if (nodo2.getAttribute(attr.name) !== attr.value) return false
    }

    const hijos1 = Array.from(nodo1.childNodes).filter(
      (n) => n.nodeType !== 3 || n.nodeValue.trim() !== ''
    )
    const hijos2 = Array.from(nodo2.childNodes).filter(
      (n) => n.nodeType !== 3 || n.nodeValue.trim() !== ''
    )

    if (hijos1.length !== hijos2.length) return false

    return hijos1.every((hijo, i) => sonNodosEquivalentes(hijo, hijos2[i]))
  }

  return true
}

function sonHtmlEquivalentes(html1, html2) {
  if (!html1 || !html2) return false
  const parser = new DOMParser()
  const doc1 = parser.parseFromString(`<body>${html1}</body>`, 'text/html')
  const doc2 = parser.parseFromString(`<body>${html2}</body>`, 'text/html')
  return sonNodosEquivalentes(doc1.body, doc2.body)
}

function Ejercicio({ ejercicio, numero }) {
  const [respuesta, setRespuesta] = useState('')
  const [estado, setEstado] = useState(null) // null | 'ok' | 'mal' | 'error'

  const objetivo = expand(ejercicio.solucion)

  function comprobar() {
    const trimmed = respuesta.trim()
    if (!trimmed) {
      setEstado('mal')
      return
    }

    // AUD-01: Límite de seguridad
    const repeticiones = trimmed.match(/\*(\d+)/g)
    if (repeticiones?.some((r) => parseInt(r.slice(1), 10) > 50)) {
      setEstado('error')
      return
    }

    try {
      const mioHtml = expand(trimmed)
      const esIgual = sonHtmlEquivalentes(mioHtml, objetivo)
      setEstado(esIgual ? 'ok' : 'mal')
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
          name={`respuesta-${numero}`}
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
