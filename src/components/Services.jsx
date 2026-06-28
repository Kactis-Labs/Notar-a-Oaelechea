import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Services.css';

const services = [
  {
    title: 'Escrituras Públicas',
    desc: 'Formalización de compraventas, anticipos de legítima y donaciones con total seguridad jurídica.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Testamentos',
    desc: 'Asesoría especializada para dejar su voluntad plasmada y proteger el futuro de su familia.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Transferencia Vehicular',
    desc: 'Legalización y formalización rápida y segura para la compra y venta de vehículos.',
    img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Sucesión Intestada',
    desc: 'Declaratoria de herederos rápida y eficiente cuando no existe un testamento previo.',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Legalización de Documentos',
    desc: 'Certificación de firmas y reproducciones documentales para dar fe de su autenticidad.',
    img: 'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Constitución de Empresas',
    desc: 'Creación de sociedades, EIRL y otras formas societarias para iniciar su negocio con el pie derecho.',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600&auto=format&fit=crop'
  }
];

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
          {services.map((svc, idx) => (
            <motion.div 
              className="service-card" 
              key={idx}
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
                <p className="service-desc">{svc.desc}</p>
              </div>
              <div className="service-arrow">
                <ArrowRight size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
