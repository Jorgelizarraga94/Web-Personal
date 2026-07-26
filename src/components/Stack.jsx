import React from 'react';

const technologies = [
  { name: 'Java', icon: 'fab fa-java' },
  { name: 'Spring Boot', icon: 'fas fa-leaf' },
  { name: 'Spring Security', icon: 'fas fa-shield-alt' },
  { name: 'Postman', icon: 'fas fa-paper-plane' },
  { name: 'Netflix Eureka', icon: 'fas fa-network-wired' },
  { name: 'MySQL', icon: 'fas fa-database' },
  { name: 'Docker', icon: 'fab fa-docker' },
  { name: 'Auth0', icon: 'fas fa-lock' },
  { name: 'Swing', icon: 'fas fa-window-maximize' },
];

export default function Stack() {
  return (
    <section className="tech-stack-section py-4 py-md-5" id="habilidades">
      <div className="container px-3">
        <h3 className="tech-stack-title text-center mb-4 mt-2 fw-bold fs-3 text-light opacity-75">
          Habilidades
        </h3>
        
        <div className="row g-3 justify-content-center">
          {technologies.map((tech, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex">
              <div className="tech-card w-100 d-flex flex-column align-items-center justify-content-center p-3 text-center h-100">
                <i className={`${tech.icon} tech-icon fs-2 mb-2`}></i>
                <span className="tech-name fw-bold small">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}