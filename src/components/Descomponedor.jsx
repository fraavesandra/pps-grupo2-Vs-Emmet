import { useState } from 'react'
import expand from 'emmet'
import { ejemplosDescomponedor } from '../data/contenido.js'

export default function Descomponedor() {
  const [indice, setIndice] = useState(0)
  const ejemplo = ejemplosDescomponedor[indice]

  let html = ''
  try {
    html = expand(ejemplo.abreviatura)
  } catch {
    html = 'No se ha podido expandir la abreviatura.'
  }

  return (
    <div className="tarjeta">
      <h3>1. Descomponiendo una abreviatura</h3>
      <p>Elige un ejemplo y lee la abreviatura por trozos, de izquierda a derecha.</p>

      <div className="botones" role="group" aria-label="Elegir ejemplo">
        {ejemplosDescomponedor.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === indice ? 'activo' : ''}
            aria-pressed={i === indice}
            onClick={() => setIndice(i)}
          >
            Ejemplo {i + 1}
          </button>
        ))}
      </div>

      <pre className="codigo"><code>{ejemplo.abreviatura}</code></pre>

      <ol className="partes">
        {ejemplo.partes.map((p) => (
          <li key={p.trozo}>
            <code>{p.trozo}</code> → {p.explicacion}
          </li>
        ))}
      </ol>

      <p><strong>Resultado:</strong></p>
      <pre className="codigo"><code>{html}</code></pre>
    </div>
  )
}