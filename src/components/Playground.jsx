import { useState } from 'react'
import { expandirSeguro, mensajeEmmet } from '../utils/emmetSeguro.js'

export default function Playground() {
  const [abreviatura, setAbreviatura] = useState('ul>li.item$*3>a[href="#"]{Elemento $}')

  let html = ''
  let error = ''
  try {
    html = expandirSeguro(abreviatura)
  } catch (e) {
    error = mensajeEmmet(e)
  }

  return (
    <div className="tarjeta">
      <h3>2. Prueba tu propia abreviatura</h3>
      <label htmlFor="emmet-input">Abreviatura de Emmet</label>
      <input
        id="emmet-input"
        name="abreviatura-emmet"
        type="text"
        value={abreviatura}
        onChange={(e) => setAbreviatura(e.target.value)}
        spellCheck="false"
        autoComplete="off"
      />
      {error ? (
        <p className="error" role="alert">{error}</p>
      ) : (
        <pre className="codigo" aria-live="polite"><code>{html}</code></pre>
      )}
    </div>
  )
}
