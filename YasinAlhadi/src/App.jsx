import './App.css'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Projects } from './components/Projects/Projects'

function App() {
  return (
    <>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section><Projects /></section>
      <section>Skills</section>
      <section>Experience</section>
      <section>Education</section>
      <section>Contact</section>
    </>
  )
}

export default App
