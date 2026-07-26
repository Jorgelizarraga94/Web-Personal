import React from 'react';
import avatar from '../assets/avatar.png';

export default function Hero() {
  return (
    <section className="min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        {/* Alineados desde arriba para mantener simetría */}
        <div className="row align-items-start gy-5">
          
          {/* --- Columna de Texto (Izquierda) --- */}
          <div className="col-lg-7 text-center text-lg-start pt-lg-4">
            
            {/* Subtítulo superior - Con mejor opacidad para mayor contraste */}
            <p className="fs-3 text-light opacity-75 mb-3">
              ¡Hola! Soy <span className="text-purple-custom fw-bold">Jorge</span>
            </p>

            {/* Título Principal */}
            <h1 className="display-3 fw-bold lh-1 mb-4 text-white">
              Desarrollador <br />
              <span className="text-purple-custom">Back-end</span> <br />
            </h1>

            {/* Descripción - Texto claro y nítido para accesibilidad */}
            <p className="text-light fs-6 mb-5 mx-auto mx-lg-0 opacity-85" style={{ maxWidth: '600px', lineHeight: '1.6' }}>
              Estudiante de la Tecnicatura Universitaria en Informática. Me especializo en el ecosistema <strong className="text-white fw-bold">Java</strong> con <strong className="text-white fw-bold">Spring Boot</strong>, diseñando arquitecturas de microservicios y asegurando la persistencia de datos con <strong className="text-white fw-bold">Hibernate/JPA</strong> y bases de datos <strong className="text-white fw-bold">SQL</strong>.
            </p>
            
            {/* Botones de acción */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start align-items-center">
              <a 
                href="#projects" 
                className="btn btn-purple-custom rounded-pill px-4 py-3 fw-semibold shadow"
              >
                Ver Mis Proyectos
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline-light rounded-pill px-4 py-3 fw-semibold"
              >
                Contáctame
              </a>
            </div>

          </div>

          {/* --- Columna del Avatar / Visual (Derecha) --- */}
          <div className="col-lg-5 d-flex justify-content-center position-relative">
            {/* Aura de luz de fondo */}
            <div 
              className="position-absolute rounded-circle" 
              style={{
                width: '300px',
                height: '300px',
                backgroundColor: 'rgba(139, 92, 246, 0.15)',
                filter: 'blur(50px)',
                zIndex: 0,
                top: '20%'
              }}
            ></div>
            
            {/* Contenedor del Avatar */}
            <div className="custom-card p-4 rounded-4 text-center position-relative shadow-lg overflow-hidden" style={{ width: '100%', maxWidth: '450px' }}>
              <img 
                src={avatar} 
                alt="Avatar 3D Desarrollador" 
                className="img-fluid rounded-3 w-100 object-fit-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}