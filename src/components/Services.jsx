import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import './Services.css';

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <div className="section-label">Nuestros Servicios</div>
          <h2 className="services-title">Seis trámites. Un mismo respaldo.</h2>
          <p className="services-subtitle">
            Cada trámite notarial es distinto. Llevamos tres décadas resolviendo los seis tipos de gestión más solicitados en Lima.
          </p>
        </div>
        
        <div className="services-grid">
          {servicesData.map((svc, idx) => (
            <Link to={`/servicios/${svc.slug}`} key={svc.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div 
                className="service-card" 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
              >
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
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
