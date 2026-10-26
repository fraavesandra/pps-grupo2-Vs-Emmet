import { atajos } from '../data/contenido.js'

function Teclas({ atajo }) {
  const pasos = atajo.split(' ')
  return (
    <span className="teclas">
      {pasos.map((paso, i) => (
        <span className="paso-atajo" key={i}>
          {i > 0 && <span className="luego" aria-hidden="true"> luego </span>}
          {paso.split('+').map((tecla, j) => (
            <span key={j}>
              {j > 0 && <span className="mas" aria-hidden="true"> + </span>}
              <kbd>{tecla}</kbd>
            </span>
          ))}
        </span>
      ))}
    </span>
  )
}

export default function Atajos() {
  return (
    <section id="atajos" aria-labelledby="atajos-titulo">
      <h2 id="atajos-titulo">Chuleta de atajos (Windows/Linux)</h2>
      <div className="tabla-scroll">
        <table className="tabla-atajos">
          <caption className="sr-only">Atajos de teclado de VS Code</caption>
          <thead>
            <tr>
              <th scope="col">Acción</th>
              <th scope="col">Atajo</th>
            </tr>
          </thead>
          <tbody>
            {atajos.map((a) => (
              <tr key={a.accion}>
                <td>{a.accion}</td>
                <td>
                  {a.nota ? (
                    <>
                      <Teclas atajo={a.atajo} />
                      <span className="nota-atajo">{a.nota}</span>
                    </>
                  ) : (
                    <Teclas atajo={a.atajo} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="nota">
        Nota: el atajo del terminal depende del idioma del teclado. Comprobadlo
        en <em>File → Preferences → Keyboard Shortcuts</em>.
      </p>
    </section>
  )
}