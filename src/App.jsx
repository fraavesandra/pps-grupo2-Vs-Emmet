import Header from './components/Header.jsx'
import Intro from './components/Intro.jsx'
import IdeasClave from './components/IdeasClave.jsx'
import Atajos from './components/Atajos.jsx'
import Descomponedor from './components/Descomponedor.jsx'
import Playground from './components/Playground.jsx'
import Ejercicios from './components/Ejercicios.jsx'
import Quiz from './components/Quiz.jsx'
import Glosario from './components/Glosario.jsx'
import Fuentes from './components/Fuentes.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Intro />
        <IdeasClave />
        <Atajos />
        <section id="demo" aria-labelledby="demo-titulo">
          <h2 id="demo-titulo">Demostración: Emmet en acción</h2>
          <p>
            Tres formas de practicar: entender cómo se descompone una
            abreviatura, probar la tuya y resolver ejercicios con corrección
            automática.
          </p>
          <Descomponedor />
          <Playground />
          <Ejercicios />
        </section>
        <Quiz />
        <Glosario />
        <Fuentes />
      </main>
      <Footer />
    </>
  )
}