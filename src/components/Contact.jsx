import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
    <section className="contact-section" ref={ref}>
      <div className="contact-bg-svg">
        <svg viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M-100,100 C150,150 200,350 400,200 C600,50 700,450 900,300 C1100,150 1200,250 1300,100" 
            stroke="#C9A24B" 
            strokeWidth="4" 
            strokeLinecap="round" 
            variants={drawVariants1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          <motion.path 
            d="M-50,400 C150,550 300,150 500,300 C700,450 800,100 1000,200 C1200,300 1250,500 1350,400" 
            stroke="#C9A24B" 
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
          <h2 className="contact-title">Estamos para atenderlo</h2>
          <p className="contact-subtitle">
            Programe una cita para asegurar una atención preferencial y sin demoras en nuestras oficinas.
          </p>
          
          <div className="contact-info">
            <div className="info-block">
              <h4>Dirección</h4>
              <p>Av. Javier Prado Este 1234, San Isidro<br/>Lima, Perú</p>
            </div>
            
            <div className="info-block">
              <h4>Horario de Atención</h4>
              <p>Lunes a Viernes: 8:30 am - 6:00 pm<br/>Sábados: 9:00 am - 1:00 pm</p>
            </div>
            
            <div className="info-block">
              <h4>Contacto</h4>
              <p>citas@notariaolaechea.pe<br/>+51 1 234 5678</p>
            </div>
          </div>
          
          <div className="contact-map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15603.541604928509!2d-77.03703909623886!3d-12.096383617349141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c866380c85c5%3A0xc487a55ed99690dc!2sSan%20Isidro%2C%20Lima!5e0!3m2!1sen!2spe!4v1716922241680!5m2!1sen!2spe" 
              width="100%" 
              height="250" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Notaría Olaechea"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
