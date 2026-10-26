import { useState } from 'react'
import expand from 'emmet'

export default function Playground() {
  const [abreviatura, setAbreviatura] = useState('ul>li.item$*3>a[href="#"]{Elemento $}')

  let html = ''
  let error = ''
  const trimmed = abreviatura.trim()

  if (trimmed.length > 500) {
    error = 'La abreviatura es demasiado larga (máximo 500 caracteres).'
  } else {
    // AUD-01: Evitar congelación de la pestaña con multiplicadores masivos
    const repeticiones = trimmed.match(/\*(\d+)/g)
    const exceso = repeticiones?.some((r) => parseInt(r.slice(1), 10) > 50)

    if (exceso) {
      error = 'Por motivos de rendimiento didáctico, el límite es de 50 repeticiones por operador (*).'
    } else {
      try {
        html = trimmed ? expand(trimmed) : ''
      } catch {
        error = 'Abreviatura no válida. Revisa los operadores.'
      }
    }
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
