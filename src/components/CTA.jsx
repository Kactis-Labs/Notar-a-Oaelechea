import { Link } from 'react-router-dom';
import '../pages/ServiceDetail.css'; // Contains the styles for CTA

export default function CTA() {
  return (
    <section className="service-cta">
      <div className="container cta-layout">
        <div className="cta-content">
          <h2>¿Enfrentas un problema legal? No estás solo.</h2>
          <p>En Salas Valencia & Abogados te respaldamos en todo momento. Permite que nuestros líderes procesales evalúen tu caso y preparen la defensa estratégica para ganarlo.</p>
          <Link to="/agendar-cita" className="btn btn-primary">Agendar una cita</Link>
        </div>
        <div className="cta-image-wrapper">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop" alt="Defensa legal enfocada en ganar tu caso" />
        </div>
      </div>
    </section>
  );
}
