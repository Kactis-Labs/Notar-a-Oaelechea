import { Link } from 'react-router-dom';
import ctaImage from '../assets/cta-image.jpg';
import '../pages/ServiceDetail.css'; // Contains the styles for CTA

export default function CTA() {
  return (
    <section className="service-cta">
      <div className="container cta-layout">
        <div className="cta-content">
          <h2>Respaldo procesal y estrategia legal de primer nivel.</h2>
          <p>Confíe su patrimonio, libertad e intereses corporativos al patrocinio técnico del Dr. Jorge Escalante, Dr. Ader Ulloa y nuestro equipo legal.</p>
          <Link to="/agendar-cita" className="btn btn-primary">Agendar una consulta</Link>
        </div>
        <div className="cta-image-wrapper">
          <img src={ctaImage} alt="Defensa legal estratégica - Escalante, Ulloa & Asociados" />
        </div>
      </div>
    </section>
  );
}
