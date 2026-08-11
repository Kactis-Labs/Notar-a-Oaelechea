import { Link } from 'react-router-dom';
import ctaImage from '../assets/cta-image.jpg';
import '../pages/ServiceDetail.css'; // Contains the styles for CTA

export default function CTA() {
  return (
    <section className="service-cta">
      <div className="container cta-layout">
        <div className="cta-content">
          <h2>Luchamos por la Igualdad y la Justicia.</h2>
          <p>En Staff Jurídico Harowi te asesoramos con la firmeza y la ética que tu causa merece. Permite que nuestros abogados evalúen tu situación y defiendan tus derechos.</p>
          <Link to="/agendar-cita" className="btn btn-primary">Agendar una cita</Link>
        </div>
        <div className="cta-image-wrapper">
          <img src={ctaImage} alt="Defensa firme y justa de derechos" />
        </div>
      </div>
    </section>
  );
}
