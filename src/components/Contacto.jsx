import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../index.css'; // O tus estilos correspondientes

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
    <section className="contacto-section" id="contacto">
      <h2>CONTACTO</h2>
      <p>¿Te Gustaria contactarme? Escribime:</p>

      <form ref={form} onSubmit={enviarEmail} className="contacto-form">
        <div className="form-group">
          <label>Nombre</label>
          <input 
            type="text" 
            name="nombre" 
            required 
            placeholder="Tu nombre" 
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            required 
            placeholder="tucorreo@email.com" 
          />
        </div>

        <div className="form-group">
          <label>Mensaje</label>
          <textarea 
            name="message" 
            rows="5" 
            required 
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </div>

        <button type="submit" className="btn-enviar" disabled={cargando}>
          {cargando ? 'Enviando...' : 'Enviar Mensaje'}
        </button>

        {estado.mensaje && (
          <div className={`alerta ${estado.tipo}`}>
            {estado.mensaje}
          </div>
        )}
      </form>
    </section>
  );
};

export default Contacto;