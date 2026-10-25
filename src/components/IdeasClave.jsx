import { useState } from 'react'
import {
  Download,
  LayoutPanelTop,
  FilePlusCorner,
  Settings,
  Blocks,
  Zap,
} from 'lucide-react'
import { guias } from '../data/contenido.js'
import TutorialDialog from './TutorialDialog.jsx'

const iconos = {
  instalacion: Download,
  interfaz: LayoutPanelTop,
  'crear-archivos': FilePlusCorner,
  configuracion: Settings,
  extensiones: Blocks,
  emmet: Zap,
}

export default function IdeasClave() {
  const [abierta, setAbierta] = useState(null)

  return (
    <section id="ideas" aria-labelledby="ideas-titulo">
      <h2 id="ideas-titulo">Ideas principales</h2>
      <ul className="guias">
        {guias.map((g) => {
          const Icono = iconos[g.id]
          return (
            <li key={g.id} style={{ '--h': g.tono }}>
              <button
                type="button"
                className="guia"
                aria-haspopup="dialog"
                onClick={() => setAbierta(g)}
              >
                <span className="guia-icono">
                  <Icono size={24} aria-hidden="true" />
                </span>
                <span className="guia-titulo">{g.titulo}</span>
                <span className="guia-enlace">
                  Ver guía <span className="flecha" aria-hidden="true">→</span>
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      <TutorialDialog guia={abierta} onClose={() => setAbierta(null)} />
    </section>
  )
}