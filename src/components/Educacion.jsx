import React from 'react';

const universityEducation = [
  {
    period: '2023 - Presente',
    degree: 'Tecnicatura Universitaria en Programación',
    institution: 'Universidad Nacional de General Sarmiento',
    description: 'Enfoque en desarrollo backend, estructuras de datos, programación orientada a objetos (Java), Sistemas Operativos, Bases de Datos, Ingeniería de Software, etc.'
  }
];

const coursesData = [
  {
    period: '2026',
    degree: 'Curso de Microservicios con Spring Cloud',
    institution: 'Todo Code Academy',
    description: 'Creación de arquitecturas de microservicios, APIs REST, Patrones de diseño y conexión con bases de datos.'
  },
  {
    period: '2025',
    degree: 'Programa Oracle ONE Tech Advanced',
    institution: 'Oracle y Alura Latam',
    description: 'Desarrollo backend con Java, Springboot, Spring security, SQL.'
  },
  {
    period: '2024',
    degree: 'Curso de Desarrollo de APIs en Java con Spring Boot',
    institution: 'Todo Code Academy',
    description: 'Creación de API REST con Spring Boot.'
  },
  {
    period: '2024',
    degree: 'Curso de Java Web con JSP y JPA',
    institution: 'Todo Code Academy',
    description: 'Creación de Software utilizando JSP para Front End y JPA para Persistencia de datos.'
  },
  {
    period: '2024',
    degree: 'Curso de Programación Orientada a Objetos con Java',
    institution: 'Todo Code Academy',
    description: 'Objetos, Clases, herencia, polimorfismo, abstracción, encapsulamiento, etc.'
  }
];

export default function Education() {
  return (
    <section className="py-4">
      <div className="container px-3" style={{ maxWidth: '900px' }}>
        <h3 className="tech-stack-title text-center mb-4 mt-2 fw-bold fs-3 text-light opacity-75">
          Educación y Formación
        </h3>
        
        {/* Carrera principal (Destacada arriba en ancho completo) */}
        <div className="mb-4">
          {universityEducation.map((item, index) => (
            <div key={index} className="education-card p-3 p-md-4 rounded position-relative">
              <div className="d-flex justify-content-between align-items-start align-items-md-center flex-column flex-md-row gap-2 mb-2">
                <h5 className="text-light fw-bold mb-0 fs-5 fs-md-4">{item.degree}</h5>
                <span className="badge bg-dark border border-secondary text-pink align-self-start align-self-md-auto">{item.period}</span>
              </div>
              <h6 className="text-light mb-2 fs-6">{item.institution}</h6>
              <p className="text-secondary small mb-0">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Cursos y especializaciones en grilla responsive de 2 columnas */}
        <h5 className="text-light fw-semibold mb-3 fs-6 text-uppercase">Cursos y Especializaciones</h5>
        <div className="row g-3">
          {coursesData.map((item, index) => (
            <div key={index} className="col-12 col-md-6">
              <div className="education-card p-3 rounded h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-start gap-2 mb-1">
                    <h6 className="text-light fw-bold mb-0 fs-6">{item.degree}</h6>
                    <span className="badge bg-dark border border-secondary text-pink small flex-shrink-0">{item.period}</span>
                  </div>
                  <p className="text-light small mb-2">{item.institution}</p>
                </div>
                <p className="text-secondary small mb-0" style={{ fontSize: '0.82rem' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}