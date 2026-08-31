import About from './Components/About';
import "./App.css";
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar'
import Projects from './Components/Projects';
import Skills from './Components/Skills';
function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </>
  );
}

export default App;