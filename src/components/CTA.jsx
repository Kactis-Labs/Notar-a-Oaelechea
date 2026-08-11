import { Link } from 'react-router-dom';
import ctaImage from '../assets/cta-image.jpg';
import '../pages/ServiceDetail.css'; // Contains the styles for CTA

export default function CTA() {
  return (
    <section className="service-cta">
      <div className="container cta-layout">
        <div className="cta-content">
          <h2>Asesoría, Orientación & Representación Jurídica.</h2>
          <p>En Estudio Jurídico Gómez & Gómez le brindamos el respaldo especializado que su caso penal o civil exige. Agende una consulta con nuestros socios fundadores.</p>
          <Link to="/agendar-cita" className="btn btn-primary">Agendar una cita</Link>
        </div>
        <div className="cta-image-wrapper">
          <img src={ctaImage} alt="Asesoría y representación jurídica penal y civil" />
        </div>
      </div>
    </section>
  );
}
