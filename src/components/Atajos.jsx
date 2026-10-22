import { atajos } from '../data/contenido.js'

export default function Atajos() {
  return (
    <section id="atajos" aria-labelledby="atajos-titulo">
      <h2 id="atajos-titulo">Chuleta de atajos (Windows/Linux)</h2>
      <div className="tabla-scroll">
        <table>
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
                <td><kbd>{a.atajo}</kbd></td>
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