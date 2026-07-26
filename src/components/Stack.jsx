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
    <section className="tech-stack-section py-3">
      <div className="container">
        <h3 className="tech-stack-title text-center mb-4 mt-2 fw-bold fs-3 text-light opacity-75 mb-2">
          Habilidades
        </h3>
        
        <div className="row g-3 justify-content-center">
          {technologies.map((tech, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <div className="tech-card">
                <i className={`${tech.icon} tech-icon`}></i>
                <span className="tech-name fw-bold">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}