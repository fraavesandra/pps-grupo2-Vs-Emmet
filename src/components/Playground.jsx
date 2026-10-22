import { useState } from 'react'
import expand from 'emmet'

export default function Playground() {
  const [abreviatura, setAbreviatura] = useState('ul>li.item$*3>a[href="#"]{Elemento $}')

  let html = ''
  let error = ''
  try {
    html = abreviatura.trim() ? expand(abreviatura) : ''
  } catch (e) {
    error = 'Abreviatura no válida. Revisa los operadores.'
  }

  return (
    <div className="tarjeta">
      <h3>2. Prueba tu propia abreviatura</h3>
      <label htmlFor="emmet-input">Abreviatura de Emmet</label>
      <input
        id="emmet-input"
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
      <p className="nota">
        Esta demo usa la librería <code>emmet</code>. Comprobad en VS Code que
        el resultado coincide con el de Tab.
      </p>
    </div>
  )
}