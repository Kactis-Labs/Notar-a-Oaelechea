import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import fachadaImg from '../assets/fachada.jpg';
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
    // Here we would typically send data to an API
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="appointment-page">
      <div className="appointment-layout">
        
        {/* Left Side: Image */}
        <div className="appointment-image-wrapper">
          <img src={fachadaImg} alt="Fachada Notaría Olaechea" className="appointment-image" />
          <div className="appointment-image-overlay">
            <h2>Notaría Olaechea</h2>
            <p>Tres décadas garantizando la seguridad jurídica de su patrimonio.</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="appointment-form-container">
          <div className="form-content">
            <h1 className="form-title" style={{ margin: 0, marginBottom: '1rem' }}>
              Agendar una Cita
            </h1>
            <p className="form-subtitle">
              Complete el siguiente formulario y un asesor se pondrá en contacto con usted a la brevedad para confirmar su cita.
            </p>

            <form className="appointment-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Nombre completo <span className="required">*</span></label>
                <input type="text" id="name" name="name" placeholder="Ej. Juan Pérez" required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico <span className="required">*</span></label>
                  <input type="email" id="email" name="email" placeholder="juan@ejemplo.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input type="tel" id="phone" name="phone" placeholder="987 654 321" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Trámite de interés</label>
                <select id="service" name="service">
                  <option value="">Seleccione un trámite (Opcional)</option>
                  {servicesData.map(svc => (
                    <option key={svc.slug} value={svc.slug}>{svc.title}</option>
                  ))}
                  <option value="otro">Otro trámite no listado</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Cuéntenos su caso <span className="required">*</span></label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  placeholder="Por favor, bríndenos detalles sobre el trámite que desea realizar..." 
                  required 
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">Enviar solicitud</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
