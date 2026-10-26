import { useEffect, useRef, useState } from 'react'

function Pasos({ guia, onClose }) {
    const [indice, setIndice] = useState(0)
    const total = guia.pasos.length
    const paso = guia.pasos[indice]
    const ultimo = indice === total - 1

    return (
        <div className="dialogo-contenido">
            <p className="dialogo-progreso">
                {guia.titulo} · Paso {indice + 1} de {total}
            </p>

            <div className="puntos" aria-hidden="true">
                {guia.pasos.map((_, i) => (
                    <span key={i} className={i <= indice ? 'punto activo' : 'punto'} />
                ))}
            </div>

            <div className="dialogo-paso" aria-live="polite">
                <h3 id="dialogo-titulo">{paso.titulo}</h3>
                <p>{paso.texto}</p>
                {paso.enlace && (
                    <p>
                        <a href={paso.enlace.url} target="_blank" rel="noopener noreferrer">
                            {paso.enlace.texto} (abre en otra pestaña)
                        </a>
                    </p>
                )}
                {paso.instrucciones && (
                    <ul className="dialogo-instrucciones">
                        {paso.instrucciones.map((instruccion) => (
                            <li key={instruccion}>{instruccion}</li>
                        ))}
                    </ul>
                )}
                {paso.codigo && !paso.imagenAntesDelCodigo && (
                    <pre className="codigo">
                        <code>{paso.codigo}</code>
                    </pre>
                )}
                {paso.imagen && (
                    <figure className="dialogo-figura">
                        <a href={paso.imagen.src} target="_blank" rel="noopener noreferrer" aria-label="Abrir captura a tamaño completo en otra pestaña">
                            <img src={paso.imagen.src} alt={paso.imagen.alt} />
                        </a>
                        <figcaption>{paso.imagen.pie}</figcaption>
                    </figure>
                )}
                {paso.codigo && paso.imagenAntesDelCodigo && (
                    <pre className="codigo">
                        <code>{paso.codigo}</code>
                    </pre>
                )}
            </div>

            <div className="dialogo-nav">
                <button
                    type="button"
                    className="secundario"
                    onClick={() => setIndice(indice - 1)}
                    disabled={indice === 0}
                >
                    ← Anterior
                </button>
                {ultimo ? (
                    <button type="button" onClick={onClose}>
                        Entendido
                    </button>
                ) : (
                    <button type="button" onClick={() => setIndice(indice + 1)}>
                        Siguiente →
                    </button>
                )}
            </div>
        </div>
    )
}

export default function TutorialDialog({ guia, onClose }) {
    const ref = useRef(null)

    // Abre o cierra el <dialog> nativo según haya guía seleccionada
    useEffect(() => {
        const dialogo = ref.current
        if (guia && !dialogo.open) dialogo.showModal()
        if (!guia && dialogo.open) dialogo.close()
    }, [guia])

    return (
        <dialog
            ref={ref}
            className="dialogo"
            aria-labelledby="dialogo-titulo"
            style={guia ? { '--h': guia.tono } : undefined}
            onClose={onClose}
            onClick={(e) => {
                // Clic en el fondo oscuro = cerrar
                if (e.target === ref.current) onClose()
            }}
        >
            {guia && (
                <>
                    <button
                        type="button"
                        className="dialogo-cerrar"
                        aria-label="Cerrar tutorial"
                        onClick={onClose}
                    >
                        ×
                    </button>
                    {/* key reinicia el carrusel al cambiar de guía */}
                    <Pasos key={guia.id} guia={guia} onClose={onClose} />
                </>
            )}
        </dialog>
    )
}
