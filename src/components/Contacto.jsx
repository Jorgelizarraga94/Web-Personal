import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../index.css';

const Contacto = () => {
  const form = useRef();
  const [estado, setEstado] = useState({ mensaje: '', tipo: '' });
  const [cargando, setCargando] = useState(false);

  const enviarEmail = (e) => {
    e.preventDefault();
    setCargando(true);
    setEstado({ mensaje: '', tipo: '' });

    emailjs
      .sendForm(
        'service_3euhlaj',
        'template_jul6dm1', 
        form.current,
        '3Kg_eOFwOTQb3LKc9'      
      )
      .then(
        () => {
          setEstado({ mensaje: '¡Mensaje enviado con éxito! Te responderé pronto.', tipo: 'exito' });
          setCargando(false);
          form.current.reset();
        },
        (error) => {
          setEstado({ mensaje: 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.', tipo: 'error' });
          setCargando(false);
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contacto-section py-4 py-md-5" id="contacto">
      <div className="container px-3" style={{ maxWidth: '650px' }}>
        
        {/* Encabezado centrado y adaptado */}
        <div className="text-center mb-4">
          <h2 className="tech-stack-title fw-bold fs-3 text-light opacity-75 mb-2">CONTACTO</h2>
          <p className="text-secondary small">¿Te gustaría contactarme? Escribime:</p>
        </div>

        <form ref={form} onSubmit={enviarEmail} className="contacto-form">
          <div className="form-group mb-3">
            <label className="form-label text-light small fw-semibold">Nombre</label>
            <input 
              type="text" 
              name="nombre" 
              className="form-control bg-dark text-light border-secondary"
              required 
              placeholder="Tu nombre" 
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label text-light small fw-semibold">Email</label>
            <input 
              type="email" 
              name="email" 
              className="form-control bg-dark text-light border-secondary"
              required 
              placeholder="tucorreo@email.com" 
            />
          </div>

          <div className="form-group mb-4">
            <label className="form-label text-light small fw-semibold">Mensaje</label>
            <textarea 
              name="message" 
              rows="5" 
              className="form-control bg-dark text-light border-secondary"
              required 
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold btn-enviar" disabled={cargando}>
            {cargando ? 'Enviando...' : 'Enviar Mensaje'}
          </button>

          {estado.mensaje && (
            <div className={`alerta mt-3 p-2 rounded text-center small ${estado.tipo === 'exito' ? 'bg-success text-light' : 'bg-danger text-light'}`}>
              {estado.mensaje}
            </div>
          )}
        </form>

      </div>
    </section>
  );
};

export default Contacto;