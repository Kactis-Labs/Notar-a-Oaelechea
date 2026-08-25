import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { brandConfig } from '../config/brandConfig';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const drawVariants1 = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: [0, 1, 1],
      opacity: [0.3, 0.3, 0],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        times: [0, 0.83, 1]
      }
    }
  };

  const drawVariants2 = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: [0, 1, 1],
      opacity: [0.15, 0.15, 0],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        times: [0, 0.83, 1]
      }
    }
  };

  return (
    <section className="contact-section" ref={ref} id="contacto">
      <div className="contact-bg-svg">
        <svg viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M-100,100 C150,150 200,350 400,200 C600,50 700,450 900,300 C1100,150 1200,250 1300,100" 
            stroke="#B8934F" 
            strokeWidth="4" 
            strokeLinecap="round" 
            variants={drawVariants1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          <motion.path 
            d="M-50,400 C150,550 300,150 500,300 C700,450 800,100 1000,200 C1200,300 1250,500 1350,400" 
            stroke="#B8934F" 
            strokeWidth="2" 
            strokeLinecap="round" 
            variants={drawVariants2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        </svg>
      </div>

      <div className="container contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Cuéntanos qué ocurrió.</h2>
          <p className="contact-subtitle">
            Explícanos brevemente tu situación. Nuestro equipo te indicará cómo podemos ayudarte y, cuando corresponda, coordinaremos una asesoría.
          </p>
          
          <div className="contact-info">
            <div className="info-block">
              <h4>Dirección</h4>
              <p>{brandConfig.contact.address}</p>
            </div>
            
            <div className="info-block">
              <h4>Horario de Atención</h4>
              <p>{brandConfig.contact.hours.weekdays}<br/>{brandConfig.contact.hours.saturdays}</p>
            </div>
            
            <div className="info-block">
              <h4>Contacto</h4>
              <p>
                <a href={`mailto:${brandConfig.contact.email}`} className="contact-link">{brandConfig.contact.email}</a>
                <br />
                <a href={`tel:${brandConfig.contact.phoneRaw}`} className="contact-link">{brandConfig.contact.phone}</a>
                <br />
                <a href={`tel:${brandConfig.contact.phoneSecondaryRaw}`} className="contact-link">{brandConfig.contact.phoneSecondary}</a>
              </p>
            </div>
          </div>
          
          <div className="contact-cta-wrapper" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href={`https://wa.me/${brandConfig.contact.whatsappRaw}?text=${encodeURIComponent("Hola, encontré su estudio a través de su página web y quisiera contarles mi caso.")}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary contact-btn"
            >
              Contactar por WhatsApp
            </a>
            <Link to="/contacto" className="btn btn-outline contact-btn">
              Ver detalles de contacto
            </Link>
          </div>

          <div className="contact-map-wrapper">
            <iframe 
              src={brandConfig.contact.googleMapsEmbed} 
              width="100%" 
              height="250" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={`Ubicación de ${brandConfig.name}`}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
