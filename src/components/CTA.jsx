import { Link } from 'react-router-dom';
import ctaImage from '../assets/cta-image.jpg';
import '../pages/ServiceDetail.css'; // Contains the styles for CTA

export default function CTA() {
  return (
    <section className="service-cta">
      <div className="container cta-layout">
        <div className="cta-content">
          <h2>No tiene por qué resolverlo solo.</h2>
          <p>Permita que nuestro equipo de especialistas le asesore para llevar a cabo su trámite notarial con total seguridad, rapidez y transparencia.</p>
          <Link to="/agendar-cita" className="btn btn-primary">Agendar una cita</Link>
        </div>
        <div className="cta-image-wrapper">
          <img src={ctaImage} alt="Asesoría notarial" />
        </div>
      </div>
    </section>
  );
}
