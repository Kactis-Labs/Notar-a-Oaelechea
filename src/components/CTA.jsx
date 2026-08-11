import { Link } from 'react-router-dom';
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
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop" alt="Defensa firme y justa de derechos" />
        </div>
      </div>
    </section>
  );
}
