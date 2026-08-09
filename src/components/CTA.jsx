import { Link } from 'react-router-dom';
import ctaImage from '../assets/cta-image.jpg';
import '../pages/ServiceDetail.css'; // Contains the styles for CTA

export default function CTA() {
  return (
    <section className="service-cta">
      <div className="container cta-layout">
        <div className="cta-content">
          <h2>Proteja su patrimonio con estrategia y certeza legal.</h2>
          <p>Permita que Alonso Solano, Sebastián Alvarado y nuestro equipo le asesoren para prevenir contingencias y resolver asuntos legales de manera ágil.</p>
          <Link to="/agendar-cita" className="btn btn-primary">Agendar una consulta</Link>
        </div>
        <div className="cta-image-wrapper">
          <img src={ctaImage} alt="Asesoría legal estratégica - Solutia Legal Partners" />
        </div>
      </div>
    </section>
  );
}
