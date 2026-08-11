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
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop" 
            alt="Staff Jurídico Harowi" 
          />
          <div className="hero-overlay"></div>
        </motion.div>

        <div className="hero-watermark">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="56" fill="#072B4F" stroke="#38BDF8" strokeWidth="3" />
            <path d="M 36 28 C 36 26 38 25 40 25 H 80 C 82 25 84 26 84 28 C 84 29 82 30 80 30 H 40 C 38 30 36 29 36 28 Z" fill="#FFFFFF" />
            <rect x="42" y="32" width="36" height="3" fill="#FFFFFF" />
            <text x="60" y="72" fontFamily="'Playfair Display', serif" fontWeight="800" fontSize="44" fill="#FFFFFF" textAnchor="middle">H</text>
            <rect x="42" y="78" width="36" height="3" fill="#FFFFFF" />
            <rect x="38" y="83" width="44" height="4" rx="1" fill="#FFFFFF" />
            <circle cx="22" cy="60" r="3.5" fill="#FFFFFF" />
            <circle cx="98" cy="60" r="3.5" fill="#FFFFFF" />
          </svg>
        </div>
        
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{brandConfig.tagline.split('&')[0]}&<br/>{brandConfig.tagline.split('&')[1] || ''}</h1>
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
