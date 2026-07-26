import React, { useState } from 'react';
import '../index.css';
import imagen from '../assets/microservimagenes/microservprincipal.jpg'
import imagen2 from '../assets/microservimagenes/microservmiscompras.jpg'
import imagen3 from '../assets/microservimagenes/microservcarrito.jpg'
import imagen4 from '../assets/microservimagenes/microservpaneldecontrol.jpg'
import imagen5 from '../assets/microservimagenes/microservpaneldecontrol2.jpg'
import imagen6 from '../assets/microservimagenes/microservauth.jpg'
import fiberconnection from '../assets/fiberconnection/fiberconnection.jpg'
import wungsdle from '../assets/wungsdle/wungsdle.jpg'
import homesolution from '../assets/homesolution/homesolution.jpg'
import supereliza from '../assets/super/super.jpg'
import equilibria from '../assets/equilibria/equilibria.jpg'

const proyectosData = [
  {
    id: 1,
    titulo: 'Microserv E-Commerce',
    imagenes: [
      imagen,
      imagen2,
      imagen3,
      imagen4,
      imagen5,
      imagen6
    ],
    descripcion: 'E-Commerce realizada con Java y Spring boot, utilizando Arquitectura de microservicios, Autentificación con Auth0 y JWT y Sistemas de roles',
    tech: ['Java', 'Spring Boot', 'Auth0', 'JWT', 'Microservicios', 'SQL', 'Docker'],
    github: 'https://github.com/Jorgelizarraga94/Microserv',
    sitio: 'https://micro-serv-front-end-react.vercel.app/'
  },
  {
    id: 2,
    titulo: 'Equilibria',
    imagenes: [
      equilibria
    ],
    descripcion: 'Aplicación de escritorio desarrollada en Java, diseñada para resolver el problema de conformación de equipos de trabajo óptimos dentro de una Software Factory. El objetivo principal es maximizar la suma total de las calificaciones del equipo resultante, cumpliendo estrictamente con los requerimientos de roles y evitando incorporar personas incompatibles entre sí.',
    tech: ['java', 'Swing', 'JUnit', 'base de datos'],
    github: 'https://github.com/Jorgelizarraga94/Equilibria'
  },
  {
    id: 3,
    titulo: 'FiberConnection',
    imagenes: [
      fiberconnection
    ],
    descripcion: 'Sistema en Java con Swing para planificar el tendido de redes de fibra óptica interprovinciales en zonas despobladas de forma eficiente, minimizando los costos de infraestructura mediante la teoría de grafos.',
    tech: ['java', 'Swing', 'JUnit', 'base de datos'],
    github: 'https://github.com/Jorgelizarraga94/FiberConnection'
  },
  {
    id: 4,
    titulo: 'Wungsdle',
    imagenes: [
      wungsdle
    ],
    descripcion: 'Este programa es una recreación del popular juego Wordle, diseñada como una aplicación de escritorio robusta. El objetivo principal es adivinar una palabra oculta de 5 letras en un máximo de 6 intentos, utilizando pistas visuales basadas en colores.',
    tech: ['java', 'Swing', 'JUnit', 'base de datos'],
    github: 'https://github.com/LuceroJF/W-Ungs-dle'
  },
  {
    id: 5,
    titulo: 'Home Solution',
    imagenes: [
      homesolution
    ],
    descripcion: 'Sistema de gestión de tareas y empleados utilizando Programación Orientada a Objetos en Java.',
    tech: ['java', 'Swing', 'JUnit', 'base de datos'],
    github: 'https://github.com/LuceroJF/W-Ungs-dle'
  },
  {
    id: 6,
    titulo: 'Juego Super Elizabeth Volcano',
    imagenes: [
      supereliza
    ],
    descripcion: 'El presente proyecto se centró en la creación de un video juego, el cual se centra en la travesia que tiene atravezar la princesa elizabeth para rescatar a su mascota del malvado rey camir y sus dinosaurios mutantes. Para que la princesa logre su objetivo tiene que recorrer 4 pisos repletos de dinosaurios que lanzan bombas hasta llegar a la cima donde se encuentra su mascota prisionera.',
    tech: ['java'],
    github: 'https://github.com/Jorgelizarraga94/Trabajo-Practico-Super-Elizabeth-Sis-Volcano-Edition'
  }
];

export const Proyectos = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});
  const [modalData, setModalData] = useState(null);

  const nextImage = (projectId, totalImages, e) => {
    e.stopPropagation();
    setCurrentImageIndexes(prev => {
      const currentIndex = prev[projectId] || 0;
      const nextIndex = (currentIndex + 1) % totalImages;
      return { ...prev, [projectId]: nextIndex };
    });
  };

  const prevImage = (projectId, totalImages, e) => {
    e.stopPropagation();
    setCurrentImageIndexes(prev => {
      const currentIndex = prev[projectId] || 0;
      const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
      return { ...prev, [projectId]: prevIndex };
    });
  };

  const openModal = (imagenes, index) => {
    setModalData({ imagenes, index });
  };

  const closeModal = () => {
    setModalData(null);
  };

  const modalNext = (e) => {
    e.stopPropagation();
    setModalData(prev => ({
      ...prev,
      index: (prev.index + 1) % prev.imagenes.length
    }));
  };

  const modalPrev = (e) => {
    e.stopPropagation();
    setModalData(prev => ({
      ...prev,
      index: (prev.index - 1 + prev.imagenes.length) % prev.imagenes.length
    }));
  };

  return (
    <section id="proyectos" className="proyectos-container py-4 py-md-5">
      <div className="container px-3">
        <h2 className="tech-stack-title text-center mb-4 mt-2 fw-bold fs-3 text-light opacity-75">
          Mis Proyectos
        </h2>
        
        <div className="row g-4">
          {proyectosData.map((proyecto) => {
            const activeIndex = currentImageIndexes[proyecto.id] || 0;
            const totalImages = proyecto.imagenes.length;

            return (
              <div className="col-12 col-md-6 col-lg-4 d-flex" key={proyecto.id}>
                <div className="project-card w-100 d-flex flex-column justify-content-between h-100">
                  
                  {/* Contenedor del Carrusel en la Tarjeta */}
                  <div 
                    className="project-image-container position-relative overflow-hidden" 
                    onClick={() => openModal(proyecto.imagenes, activeIndex)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img 
                      src={proyecto.imagenes[activeIndex]} 
                      alt={`Captura ${activeIndex + 1} de ${proyecto.titulo}`} 
                      className="project-thumbnail w-100 object-fit-cover"
                      style={{ height: '200px' }}
                    />
                    
                    <div className="image-overlay">
                      <span>🔍 Ampliar galería</span>
                    </div>

                    {totalImages > 1 && (
                      <>
                        <button 
                          className="carousel-btn prev-btn" 
                          onClick={(e) => prevImage(proyecto.id, totalImages, e)}
                        >
                          &#10094;
                        </button>
                        <button 
                          className="carousel-btn next-btn" 
                          onClick={(e) => nextImage(proyecto.id, totalImages, e)}
                        >
                          &#10095;
                        </button>

                        {/* Indicadores de puntos */}
                        <div className="carousel-dots">
                          {proyecto.imagenes.map((_, idx) => (
                            <span 
                              key={idx} 
                              className={`dot ${idx === activeIndex ? 'active' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndexes(prev => ({ ...prev, [proyecto.id]: idx }));
                              }}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="project-info p-3 d-flex flex-column flex-grow-1 justify-content-between">
                    <div>
                      <h3 className="fs-5 text-light fw-bold mb-2">{proyecto.titulo}</h3>
                      <p className="small text-secondary mb-3">{proyecto.descripcion}</p>
                    </div>
                    
                    <div>
                      <div className="tech-stack d-flex flex-wrap gap-1 mb-3">
                        {proyecto.tech.map((t, index) => (
                          <span key={index} className="badge bg-dark border border-secondary text-light small">
                            {t}
                          </span>
                        ))}
                      </div>
                      
                      <div className="proyecto-links d-flex gap-2">
                        <a href={proyecto.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-light w-15 btn-github">
                          GitHub
                        </a>
                        {proyecto.sitio && (
                          <a href={proyecto.sitio} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-light w-50 btn-web">
                            Sitio Web
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* MODAL / LIGHTBOX CON CARRUSEL */}
        {modalData && (
          <div className="modal-overlay" onClick={closeModal}>
            <span className="modal-close" onClick={closeModal}>&times;</span>
            
            <div className="modal-content-wrapper position-relative" onClick={(e) => e.stopPropagation()}>
              <img 
                src={modalData.imagenes[modalData.index]} 
                alt="Vista ampliada" 
                className="modal-image img-fluid rounded" 
              />

              {modalData.imagenes.length > 1 && (
                <>
                  <button className="modal-nav prev" onClick={modalPrev}>&#10094;</button>
                  <button className="modal-nav next" onClick={modalNext}>&#10095;</button>
                  <div className="modal-counter text-light text-center mt-2">
                    {modalData.index + 1} / {modalData.imagenes.length}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Proyectos;