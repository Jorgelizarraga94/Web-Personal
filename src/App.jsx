import React from 'react';
// 1. Importas el componente Hero desde la carpeta components
import Hero from './components/Hero'; 

// Aquí importarías el resto de tus componentes cuando los crees:
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#050514] text-white min-h-screen">
      
      {/* 2. Lo utilizas aquí como una etiqueta de React */}
      <section id="home">
        <Hero />
      </section>

      {/* Aquí irán las demás secciones de tu Single Page Application */}
      {/* 
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section> 
      */}

    </div>
  );
}

export default App;