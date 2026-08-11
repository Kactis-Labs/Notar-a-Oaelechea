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
            alt="Estudio Jurídico e Inmobiliario ATC & Asociados S.A.C." 
          />
          <div className="hero-overlay"></div>
        </motion.div>

        <div className="hero-watermark">
          <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="72" r="18" fill="#FACC15" />
            <path d="M 18 42 C 18 28 62 28 62 42 C 62 58 40 68 40 68 C 40 68 18 58 18 42 Z" fill="#EA2B39" />
            <circle cx="40" cy="42" r="5" fill="#FFFFFF" />
            <text x="74" y="66" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="46" fill="#FFFFFF" letterSpacing="-2">atc</text>
            <rect x="146" y="28" width="4" height="48" rx="2" fill="#EA2B39" />
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
            <p className="hero-card-meta">Sociedad Anónima Cerrada &middot; Desde {brandConfig.foundedYear}</p>
            <p className="hero-card-stat">{brandConfig.statsCount}</p>
            <Link to="/agendar-cita" className="hero-card-btn">Agendar cita</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
