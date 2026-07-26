import React from 'react';
import '../index.css';

const Menu = () => {
  return (
    <aside className="vertical-menu">
      <nav className="menu-nav">
        <ul>
          <li>
            <a href="#inicio" className="menu-item">
              <span className="menu-icon">
                <i className="fas fa-home"></i>
              </span>
              <span className="menu-text">Inicio</span>
            </a>
          </li>
          <li>
            <a href="#habilidades" className="menu-item">
              <span className="menu-icon">
                <i className="fas fa-code"></i>
              </span>
              <span className="menu-text">Habilidades</span>
            </a>
          </li>
          <li>
            <a href="#educacion" className="menu-item">
              <span className="menu-icon">
                <i className="fas fa-graduation-cap"></i>
              </span>
              <span className="menu-text">Educación</span>
            </a>
          </li>
          <li>
            <a href="#proyectos" className="menu-item">
              <span className="menu-icon">
                <i className="fas fa-folder-open"></i>
              </span>
              <span className="menu-text">Proyectos</span>
            </a>
          </li>
          <li>
            <a href="#contacto" className="menu-item">
              <span className="menu-icon">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="menu-text">Contacto</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;