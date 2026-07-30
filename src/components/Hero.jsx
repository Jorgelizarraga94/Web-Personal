import React, { useState } from 'react';
import avatar from '../assets/avatar.png';
import cv from '../assets/jorgelizarragacv.pdf'

export default function Hero() {
  const [copiado, setCopiado] = useState(null);

  const copiarAlPortapapeles = (texto, tipo) => {
    navigator.clipboard.writeText(texto);
    setCopiado(tipo);
    setTimeout(() => {
      setCopiado(null);
    }, 2000);
  };

  const email = "jorgelizarraga1994@gmail.com";
  const telefono = "+5491165258342";

  return (
    <section className="py-4 py-md-5 text-light d-flex justify-content-center align-items-center" style={{ backgroundColor: '#0a0a0a', minHeight: '90vh' }}>
      <div className="container py-3 px-3">
        {/* Alineados desde arriba para mantener simetría */}
        <div className="row align-items-center gy-5">
          
          {/* --- Columna de Texto (Izquierda) --- */}
          <div className="col-lg-7 text-center text-lg-start">
            
            {/* Subtítulo superior */}
            <p className="fs-5 fs-md-3 text-light opacity-75 mb-2">
              ¡Hola! Soy <span className="text-purple-custom fw-bold">Jorge</span>
            </p>

            {/* Título Principal (Responsivo para evitar saltos bruscos) */}
            <h1 className="fw-bold lh-1 mb-3 text-white" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
              Desarrollador <br />
              <span className="text-purple-custom">Back-end</span> <br />
            </h1>

            {/* Descripción limpia y adaptada */}
            <p className="fs-6 text-light opacity-75 mb-4 mx-auto mx-lg-0" style={{ maxWidth: '600px', lineHeight: '1.6' }}>
              Estudiante de la licenciatura en sistemas. Me especializo en el ecosistema <strong className="text-white fw-bold">Java</strong> con <strong className="text-white fw-bold">Spring Boot</strong>, diseñando e implementando <strong>APIs RESTful</strong> robustas y migrando hacia enfoques de arquitectura de microservicios. Complemento mi perfil técnico con un manejo sólido de persistencia de datos mediante <strong className="text-white fw-bold">Hibernate y JPA</strong>, bases de datos <strong>SQL</strong>, y herramientas modernas de infraestructura, testing y control de versiones como <strong>Docker, Postman y Git</strong>.
            </p>

            {/* --- Botones de Redes y Contacto --- */}
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 position-relative flex-wrap">
              
              {/* LinkedIn (Corregido el enlace) */}
              <a 
                href="https://www.linkedin.com/in/jorgelizarragadev/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-dark border border-secondary text-light d-flex align-items-center justify-content-center"
                style={{ width: '42px', height: '42px', borderRadius: '8px' }}
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in fs-5"></i>
              </a>

              {/* GitHub (Corregido el enlace) */}
              <a 
                href="https://github.com/Jorgelizarraga94" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-dark border border-secondary text-light d-flex align-items-center justify-content-center"
                style={{ width: '42px', height: '42px', borderRadius: '8px' }}
                title="GitHub"
              >
                <i className="fa-brands fa-github fs-5"></i>
              </a>

              {/* Email (Copia al portapapeles) */}
              <button 
                onClick={() => copiarAlPortapapeles(email, 'email')} 
                className="btn btn-dark border border-secondary text-light d-flex align-items-center justify-content-center position-relative"
                style={{ width: '42px', height: '42px', borderRadius: '8px' }}
                title="Copiar Email"
              >
                {copiado === 'email' ? (
                  <i className="fa-solid fa-check fs-5 text-success"></i>
                ) : (
                  <i className="fa-solid fa-envelope fs-5"></i>
                )}
              </button>

              {/* Teléfono (Copia al portapapeles) */}
              <button 
                onClick={() => copiarAlPortapapeles(telefono, 'telefono')} 
                className="btn btn-dark border border-secondary text-light d-flex align-items-center justify-content-center position-relative"
                style={{ width: '42px', height: '42px', borderRadius: '8px' }}
                title="Copiar Teléfono"
              >
                {copiado === 'telefono' ? (
                  <i className="fa-solid fa-check fs-5 text-success"></i>
                ) : (
                  <i className="fa-solid fa-phone fs-5"></i>
                )}
              </button>

              <a 
                href={cv}
                download='jorgelizarragacv'
                className="btn btn-dark border border-secondary text-light d-flex align-items-center justify-content-center position-relative"
                style={{ width: '130px', height: '42px', borderRadius: '8px' }}
              >
                Descargar CV
              </a>

              {/* Tooltip flotante de aviso */}
              {copiado && (
                <span 
                  className="position-absolute bg-success text-white px-2 py-1 rounded small fw-medium shadow"
                  style={{ bottom: '-35px', left: '0', fontSize: '0.75rem', zIndex: 10 }}
                >
                  {copiado === 'email' ? '¡Email copiado!' : '¡Teléfono copiado!'}
                </span>
              )}

            </div>

          </div>

          {/* --- Columna del Avatar / Visual (Derecha) --- */}
          <div className="col-lg-5 d-flex justify-content-center position-relative">
            {/* Aura de luz de fondo */}
            <div 
              className="position-absolute rounded-circle" 
              style={{
                width: '260px',
                height: '260px',
                backgroundColor: 'rgba(139, 92, 246, 0.15)',
                filter: 'blur(50px)',
                zIndex: 0,
                top: '20%'
              }}
            ></div>
            
            {/* Contenedor del Avatar */}
            <div className="custom-card p-3 p-md-4 rounded-4 text-center position-relative shadow-lg overflow-hidden w-100" style={{ maxWidth: '400px' }}>
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