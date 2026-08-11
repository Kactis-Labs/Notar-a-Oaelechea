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
            alt="Estudio Jurídico Salas Valencia & Abogados" 
          />
          <div className="hero-overlay"></div>
        </motion.div>

        <div className="hero-watermark">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="65" r="42" stroke="#E5C158" strokeWidth="3" fill="none" />
            <rect x="57" y="10" width="6" height="15" rx="1" fill="#E5C158" />
            <path d="M 40 16 H 80 M 42 16 L 34 28 M 50 16 L 42 28 M 70 16 L 62 28 M 78 16 L 70 28" stroke="#E5C158" strokeWidth="2" />
            <path d="M 30 28 Q 42 34 54 28 Z M 58 28 Q 70 34 82 28 Z" fill="#E5C158" />
            <path d="M 18 45 Q 14 55 20 68 Q 28 80 40 88 M 102 45 Q 106 55 100 68 Q 92 80 80 88" stroke="#E5C158" strokeWidth="3" fill="none" />
            <text x="60" y="74" fontFamily="'Playfair Display', serif" fontWeight="700" fontStyle="italic" fontSize="34" fill="#E5C158" textAnchor="middle">SV</text>
          </svg>
        </div>
        
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{brandConfig.tagline.split('?')[0]}?<br/>{brandConfig.tagline.split('?')[1] || ''}</h1>
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
