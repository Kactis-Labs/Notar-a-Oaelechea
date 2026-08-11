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
            <div className="section-label">Especialidades Procesales</div>
            <h1 className="compact-hero-title">Patrocinio legal riguroso enfocado en ganar tu caso en Arequipa.</h1>
            <p className="compact-hero-subtitle">
              Conozca nuestra propuesta de litigación procesal en Derecho Judicial, Penal, Corporativo, Civil y Laboral.
            </p>
          </div>
          
          <div className="services-hero-images">
            <div className="services-hero-img-box">
              <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop" alt="Defensa procesal en juzgados" />
            </div>
            <div className="services-hero-img-box">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop" alt="Estrategia legal efectiva" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div className="services-header" style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h2 className="services-title" style={{ fontSize: '2.5rem' }}>Áreas de Patrocinio & Litigio</h2>
            <p className="services-subtitle" style={{ margin: '0 auto', maxWidth: '600px' }}>
              Seleccione la especialidad de su interés para conocer nuestros alcances y al socio a cargo de la práctica procesal.
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
