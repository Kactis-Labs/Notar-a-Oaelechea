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
            alt="Ramírez y Abogados Estudio Jurídico" 
          />
          <div className="hero-overlay"></div>
        </motion.div>

        <div className="hero-watermark">
          <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="6" width="56" height="6" fill="#D4AF37" />
            <path d="M14 12 C10 12 8 16 12 18 C16 20 18 14 14 12 Z" fill="#D4AF37" />
            <rect x="20" y="12" width="5" height="64" rx="1" fill="#D4AF37" />
            <rect x="27" y="12" width="5" height="64" rx="1" fill="#D4AF37" />
            <rect x="34" y="12" width="5" height="64" rx="1" fill="#D4AF37" />
            <path d="M12 76 H46 L52 84 H8 C10 80 12 76 12 76 Z" fill="#D4AF37" />
            <path d="M38 12 H58 C72 12 72 42 58 42 H38 V12 Z M44 20 V34 H56 C62 34 62 20 56 20 H44 Z" fill="#D4AF37" />
            <path d="M42 38 L68 84 H86 L56 38 H42 Z" fill="#D4AF37" />
          </svg>
        </div>
        
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{brandConfig.tagline.split(',')[0]},<br/>{brandConfig.tagline.split(',')[1] || ''}</h1>
            <p className="hero-subtitle">
              {brandConfig.subtitle}
            </p>
            <div className="hero-actions">
              <Link to="/agendar-cita" className="btn btn-primary">Agendar una cita</Link>
              <Link to="/servicios" className="btn btn-outline">Ver servicios</Link>
            </div>
          </div>
          
          <div className="hero-card">
            <p className="hero-card-meta">Estudio Jurídico &middot; Fundado en {brandConfig.foundedYear}</p>
            <p className="hero-card-stat">{brandConfig.statsCount}</p>
            <Link to="/agendar-cita" className="hero-card-btn">Agendar cita</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
