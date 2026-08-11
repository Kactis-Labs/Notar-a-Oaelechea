import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
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
            <div className="section-label">Especialidades Legales</div>
            <h1 className="compact-hero-title">Soluciones jurídicas orientadas a resultados en el menor tiempo.</h1>
            <p className="compact-hero-subtitle">
              Conozca nuestros tres servicios clave en Asesoría Legal Inmobiliaria, Administrativa y Judicial.
            </p>
          </div>
          
          <div className="services-hero-images">
            <div className="services-hero-img-box">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop" alt="Asesoría legal inmobiliaria" />
            </div>
            <div className="services-hero-img-box">
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop" alt="Asesoría legal administrativa y judicial" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div className="services-header" style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h2 className="services-title" style={{ fontSize: '2.5rem' }}>Especialidades de Práctica</h2>
            <p className="services-subtitle" style={{ margin: '0 auto', maxWidth: '600px' }}>
              Seleccione el área legal de su interés para conocer en detalle nuestros alcances, requisitos y al asociado especialista a cargo.
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
