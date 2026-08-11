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
            alt="Estudio Jurídico Gómez & Gómez" 
          />
          <div className="hero-overlay"></div>
        </motion.div>

        <div className="hero-watermark">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 52 35 C 38 35 28 46 28 62 C 28 78 38 88 54 88 C 65 88 72 82 72 72 V 62 H 52 V 70 H 63 C 62 76 58 80 52 80 C 43 80 36 73 36 62 C 36 50 44 43 53 43 C 58 43 63 46 66 50 L 72 43 C 67 38 60 35 52 35 Z" fill="#B38E46" />
            <path d="M 68 32 C 82 32 92 43 92 59 C 92 75 82 85 66 85 C 55 85 48 79 48 69 V 59 H 68 V 67 H 57 C 58 73 62 77 68 77 C 77 77 84 70 84 59 C 84 47 76 40 67 40 C 62 40 57 43 54 47 L 48 40 C 53 35 60 32 68 32 Z" fill="#FFFFFF" />
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
