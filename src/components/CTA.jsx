import { Link } from 'react-router-dom';
import '../pages/ServiceDetail.css'; // Contains the styles for CTA

export default function CTA() {
  return (
    <section className="service-cta">
      <div className="container cta-layout">
        <div className="cta-content">
          <h2>Garantice la defensa rigurosa de sus intereses.</h2>
          <p>Permita que nuestro equipo de socios y especialistas evalúe su caso y diseñe la estrategia legal idónea para sus negocios o patrimonio.</p>
          <Link to="/agendar-cita" className="btn btn-primary">Agendar una cita</Link>
        </div>
        <div className="cta-image-wrapper">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop" alt="Asesoría jurídica de prestigio" />
        </div>
      </div>
    </section>
  );
}
