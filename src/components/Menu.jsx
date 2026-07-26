import React from 'react';
import '../index.css';

const Menu = () => {
  return (
    <aside className="vertical-menu d-flex flex-column align-items-center align-items-lg-start">
      <nav className="menu-nav w-100">
        <ul className="list-unstyled mb-0 d-flex flex-row flex-lg-column justify-content-around justify-content-lg-start align-items-center align-items-lg-stretch p-2 p-lg-0">
          
          <li className="w-100">
            <a href="#inicio" className="menu-item d-flex align-items-center gap-2 p-2">
              <span className="menu-icon text-center" style={{ width: '24px' }}>
                <i className="fas fa-home"></i>
              </span>
              <span className="menu-text d-none d-lg-inline">Inicio</span>
            </a>
          </li>

          <li className="w-100">
            <a href="#habilidades" className="menu-item d-flex align-items-center gap-2 p-2">
              <span className="menu-icon text-center" style={{ width: '24px' }}>
                <i className="fas fa-code"></i>
              </span>
              <span className="menu-text d-none d-lg-inline">Habilidades</span>
            </a>
          </li>

          <li className="w-100">
            <a href="#educacion" className="menu-item d-flex align-items-center gap-2 p-2">
              <span className="menu-icon text-center" style={{ width: '24px' }}>
                <i className="fas fa-graduation-cap"></i>
              </span>
              <span className="menu-text d-none d-lg-inline">Educación</span>
            </a>
          </li>

          <li className="w-100">
            <a href="#proyectos" className="menu-item d-flex align-items-center gap-2 p-2">
              <span className="menu-icon text-center" style={{ width: '24px' }}>
                <i className="fas fa-folder-open"></i>
              </span>
              <span className="menu-text d-none d-lg-inline">Proyectos</span>
            </a>
          </li>

          <li className="w-100">
            <a href="#contacto" className="menu-item d-flex align-items-center gap-2 p-2">
              <span className="menu-icon text-center" style={{ width: '24px' }}>
                <i className="fas fa-envelope"></i>
              </span>
              <span className="menu-text d-none d-lg-inline">Contacto</span>
            </a>
          </li>

        </ul>
      </nav>
    </aside>
  );
};

export default Menu;