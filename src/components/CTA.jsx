import { Link } from 'react-router-dom';
import '../pages/ServiceDetail.css'; // Contains the styles for CTA

export default function CTA() {
  return (
    <section className="service-cta">
      <div className="container cta-layout">
        <div className="cta-content">
          <h2>Encuentre en nosotros confianza y seguridad desde la primera reunión.</h2>
          <p>Permita que nuestro equipo de asociados evalúe su caso y proponga la solución legal idónea en el más corto plazo posible.</p>
          <Link to="/agendar-cita" className="btn btn-primary">Agendar una cita</Link>
        </div>
        <div className="cta-image-wrapper">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop" alt="Asesoría jurídica orientada a resultados" />
        </div>
      </div>
    </section>
  );
}
