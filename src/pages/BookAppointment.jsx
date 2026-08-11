import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { brandConfig } from '../config/brandConfig';
import { CheckCircle2 } from 'lucide-react';
import './BookAppointment.css';

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tramite: '',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      tramite: '',
      mensaje: ''
    });
  };

  return (
    <div className="appointment-page">
      <div className="appointment-layout">
        
        {/* Left Side: Image */}
        <div className="appointment-image-wrapper">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" alt={`Oficinas ${brandConfig.name}`} className="appointment-image" />
          <div className="appointment-image-overlay">
            <h2>{brandConfig.name}</h2>
            <p>Asesoría jurídica especializada y defensa de sus derechos.</p>
          </div>
        </div>

        {/* Right Side: Form / Success Message */}
        <div className="appointment-form-container">
          <div className="form-content">
            {!submitted ? (
              <>
                <h1 className="form-title" style={{ margin: 0, marginBottom: '1rem' }}>
                  Agendar una Cita
                </h1>
                <p className="form-subtitle">
                  Complete el siguiente formulario y un asesor legal se pondrá en contacto con usted a la brevedad para confirmar su cita.
                </p>

                <form className="appointment-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre completo <span className="required">*</span></label>
                    <input 
                      type="text" 
                      id="nombre" 
                      name="nombre" 
                      placeholder="Ej. Juan Pérez" 
                      value={formData.nombre}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Correo electrónico <span className="required">*</span></label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="juan@ejemplo.com" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefono">Teléfono</label>
                      <input 
                        type="tel" 
                        id="telefono" 
                        name="telefono" 
                        placeholder="987 654 321" 
                        value={formData.telefono}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="tramite">Especialidad de interés</label>
                    <select 
                      id="tramite" 
                      name="tramite"
                      value={formData.tramite}
                      onChange={handleChange}
                    >
                      <option value="">Seleccione una especialidad (Opcional)</option>
                      {servicesData.map(svc => (
                        <option key={svc.slug} value={svc.slug}>{svc.title}</option>
                      ))}
                      <option value="otro">Otra consulta legal</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensaje">Cuéntenos su caso <span className="required">*</span></label>
                    <textarea 
                      id="mensaje" 
                      name="mensaje" 
                      rows="4" 
                      placeholder="Por favor, bríndenos detalles sobre el trámite que desea realizar..." 
                      value={formData.mensaje}
                      onChange={handleChange}
                      required 
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">Enviar solicitud</button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={64} style={{ color: 'var(--color-gold)', marginBottom: '1rem' }} />
                <h2 style={{ fontSize: '1.8rem', color: 'var(--color-black)', marginBottom: '1rem' }}>
                  ¡Solicitud Enviada con Éxito!
                </h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                  Gracias <strong>{formData.nombre}</strong>. Hemos recibido los detalles de su consulta y nuestro equipo se pondrá en contacto al correo <strong>{formData.email}</strong> o vía telefónica para confirmar el horario de su atención.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button onClick={handleReset} className="btn btn-outline-dark">
                    Agendar otra cita
                  </button>
                  <Link to="/" className="btn btn-primary">
                    Volver al inicio
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
