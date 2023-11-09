import './App.css'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Projects } from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/contact/Contact'

function App() {
  return (
    <>
      <section>
        <Navbar />
        <Hero />
      </section>
      <Projects />
      <section id='skills'>
        <Skills />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </>
  )
}

export default App
