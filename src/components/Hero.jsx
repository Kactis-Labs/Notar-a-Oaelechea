import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { brandConfig } from '../config/brandConfig';
import './Hero.css';

export default function Hero() {
  const { scrollY } = useScroll();
  const filter = useTransform(scrollY, [0, 1500], ['blur(0px)', 'blur(8px)']);
  const opacity = useTransform(scrollY, [0, 1500], [1, 0.6]);

  return (
    <div className="hero-wrapper">
      <section className="hero">
        <motion.div className="hero-bg" style={{ filter, opacity }}>
          <img 
            src="/hero-bg.png" 
            alt="Estudio Jurídico Carlos & Asociados" 
          />
          <div className="hero-overlay"></div>
        </motion.div>
        
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Asesoría Legal Integral &<br/>Defensa Jurídica de Confianza
            </h1>
            <p className="hero-subtitle">
              {brandConfig.subtitle}
            </p>
            <div className="hero-actions">
              <a href={brandConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Solicitar Consulta por WhatsApp
              </a>
              <Link to="/servicios" className="btn btn-outline">
                Especialidades Legal
              </Link>
            </div>
          </div>
          
          <div className="hero-card">
            <p className="hero-card-meta">Firma Legal &middot; Fundada en {brandConfig.foundedYear}</p>
            <p className="hero-card-stat">{brandConfig.statsCount}</p>
            <a href={brandConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="hero-card-btn">
              Consulta inmediata
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
