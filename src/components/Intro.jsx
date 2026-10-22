export default function Intro() {
  return (
    <section id="intro" aria-labelledby="intro-titulo">
      <h1 id="intro-titulo">Visual Studio Code y Emmet</h1>
      <p className="lead">
        Una guía para aprender a moverte por VS Code y a escribir HTML mucho
        más rápido con Emmet.
      </p>
      <p>
        <strong>VS Code</strong> es un editor de código de Microsoft,
        multiplataforma y ampliable con extensiones. Lo usaremos durante todo
        el módulo, así que conviene dominar lo básico: interfaz, atajos,
        configuración y extensiones.
      </p>
      <p>
        <strong>Emmet</strong> viene incluido en VS Code y convierte
        abreviaturas en HTML. Una línea como <code>ul&gt;li*5</code> puede
        sustituir a decenas de líneas escritas a mano.
      </p>
    </section>
  )
}