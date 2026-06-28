import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import img1 from '../assets/services-hero-1.jpg';
import img2 from '../assets/services-hero-2.jpg';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import '../components/Services.css';
import './ServicesPage.css';

export default function ServicesPage() {
  return (
    <div className="services-page">
      <section className="services-list-hero">
        <div className="container">
          <div className="services-list-content">
            <div className="section-label">Nuestros Servicios</div>
            <h1 className="compact-hero-title">Cada trámite, con el respaldo de 30 años de experiencia.</h1>
            <p className="compact-hero-subtitle">
              Conozca nuestro catálogo de servicios notariales diseñados para brindar seguridad jurídica a sus actos y contratos.
            </p>
          </div>
          
          <div className="services-hero-images">
            <div className="services-hero-img-box">
              <img src={img1} alt="Abogados revisando documentos" />
            </div>
            <div className="services-hero-img-box">
              <img src={img2} alt="Firma de trámite notarial" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div className="services-header" style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h2 className="services-title" style={{ fontSize: '2.5rem' }}>Catálogo de Trámites</h2>
            <p className="services-subtitle" style={{ margin: '0 auto', maxWidth: '600px' }}>
              Seleccione el trámite de su interés para conocer en detalle los requisitos, tiempos estimados y el especialista a cargo.
            </p>
          </div>
          
          <div className="services-grid">
            {servicesData.map((svc) => (
              <Link to={`/servicios/${svc.slug}`} key={svc.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="service-card">
                  <div className="service-img-wrapper">
                    <img src={svc.img} alt={svc.title} className="service-img" />
                  </div>
                  <div className="service-content">
                    <h3 className="service-name">{svc.title}</h3>
                    <p className="service-desc">{svc.shortDesc}</p>
                  </div>
                  <div className="service-arrow">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Contact />
    </div>
  );
}
