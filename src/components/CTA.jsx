import { Link } from 'react-router-dom';
import { brandConfig } from '../config/brandConfig';
import ctaImage from '../assets/cta-image.jpg';
import '../pages/ServiceDetail.css'; // Contains the styles for CTA

export default function CTA() {
  return (
    <section className="service-cta">
      <div className="container cta-layout">
        <div className="cta-content">
          <h2>No asuma riesgos legales innecesarios.</h2>
          <p>Permita que nuestro equipo de letrados evalúe su caso y proteja sus derechos con la máxima solvencia profesional.</p>
          <Link to="/agendar-cita" className="btn btn-primary">
            Agendar una cita
          </Link>
        </div>
        <div className="cta-image-wrapper">
          <img src={ctaImage} alt={`Asesoría legal en ${brandConfig.name}`} />
        </div>
      </div>
    </section>
  );
}
