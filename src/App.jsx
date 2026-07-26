import React from 'react';
// 1. Importas el componente Menu desde tu carpeta de componentes
import Menu from './components/Menu';
import Hero from './components/Hero';
import Stack from './components/Stack';
import NeonDivider from './components/NeonDivider';
import Educacion from './components/Educacion';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className="bg-[#050514] text-white min-h-screen">
      {/* 2. Renderizas el menú vertical fijo a la izquierda */}
      <Menu />

      {/* 3. Contenedor principal con margen izquierdo para compensar el ancho del menú */}
      <main className="main-content">
        <section id="inicio">
          <Hero />
        </section>
        
        <NeonDivider />
        
        <section id="habilidades">
          <Stack />
        </section>
        
        <NeonDivider />
        
        <section id="educacion">
          <Educacion />
        </section>
        
        <NeonDivider />
        
        <section id="proyectos">
          <Proyectos />
        </section>
        
        <NeonDivider />
        
        <section id="contacto">
          <Contacto />
        </section>
      </main>
    </div>
  );
}

export default App;