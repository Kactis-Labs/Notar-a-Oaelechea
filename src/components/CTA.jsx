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
          <a href={brandConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Solicitar Consulta Jurídica por WhatsApp
          </a>
        </div>
        <div className="cta-image-wrapper">
          <img src={ctaImage} alt={`Asesoría legal en ${brandConfig.name}`} />
        </div>
      </div>
    </section>
  );
}
