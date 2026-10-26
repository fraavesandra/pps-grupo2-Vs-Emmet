export default function Intro() {
  return (
    <section id="intro" aria-labelledby="intro-titulo">
      <div className="hero">
        <div className="hero-texto">
          <h1 id="intro-titulo">Visual Studio Code y Emmet</h1>

          <p className="lead">
            Aprende a trabajar con VS Code y descubre cómo Emmet te permite
            escribir HTML más rápido, con menos esfuerzo y sin repetir código
            innecesariamente.
          </p>

          <p>
            Configura tu entorno, domina los atajos esenciales y genera
            estructuras HTML completas a partir de abreviaturas sencillas.
          </p>


          <div className="hero-botones">
            <a className="boton" href="#ideas">Comenzar</a>
            <a className="boton secundario" href="#demo">Probar Emmet</a>
          </div>
        </div>

        <div
          className="editor"
          role="img"
          aria-label="Ejemplo: la abreviatura ul>li*3 se expande a una lista con tres elementos"
        >
          <div className="editor-barra" aria-hidden="true">
            <span className="punto-ventana" />
            <span className="punto-ventana" />
            <span className="punto-ventana" />
            <span className="editor-archivo">index.html</span>
          </div>
          <pre className="editor-codigo" aria-hidden="true">
            <code>
              <span className="e-abrev">ul&gt;li*3</span>
              <span className="e-tab"> ⇥ Tab</span>
              {'\n\n'}
              <span className="e-tag">&lt;ul&gt;</span>
              {'\n  '}
              <span className="e-tag">&lt;li&gt;&lt;/li&gt;</span>
              {'\n  '}
              <span className="e-tag">&lt;li&gt;&lt;/li&gt;</span>
              {'\n  '}
              <span className="e-tag">&lt;li&gt;&lt;/li&gt;</span>
              {'\n'}
              <span className="e-tag">&lt;/ul&gt;</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}