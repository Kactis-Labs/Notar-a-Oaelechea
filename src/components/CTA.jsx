import { Link } from 'react-router-dom';
import ctaImage from '../assets/cta-image.jpg';
import '../pages/ServiceDetail.css'; // Contains the styles for CTA

export default function CTA() {
  return (
    <section className="service-cta">
      <div className="container cta-layout">
        <div className="cta-content">
          <h2>Obtenga una Asesoría Legal Confiable y Justa.</h2>
          <p>En Estudio Jurídico Leonardo Uribe & Asociados priorizamos sus intereses para brindarle la solución más eficaz. Agende su consulta legal hoy mismo.</p>
          <Link to="/agendar-cita" className="btn btn-primary">Agendar una cita</Link>
        </div>
        <div className="cta-image-wrapper">
          <img src={ctaImage} alt="Asesoría legal confiable y justa" />
        </div>
      </div>
    </section>
  );
}
