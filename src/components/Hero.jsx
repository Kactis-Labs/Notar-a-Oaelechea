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
            alt="Arce & Asociados - Estudio Jurídico" 
          />
          <div className="hero-overlay"></div>
        </motion.div>

        <div className="hero-watermark">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="46" fill="#C4A96D" />
            <path d="M 72,49 C 71,46 66,42 60,41 C 55,35 48,27 40,24 C 34,27 30,33 26,40 C 22,48 22,56 24,64 C 26,72 32,79 40,83 C 47,87 56,87 65,83 C 60,78 55,76 51,72 C 47,68 45,63 47,57 C 49,53 53,51 59,51 C 65,51 70,53 75,55 C 77,52 76,50 72,49 Z" fill="#0B2545" />
            <path d="M 64,48 C 66,48 68,49 69,51 C 67,52 65,51 64,48 Z" fill="#C4A96D" />
            <path d="M 73,55 C 71,57 68,58 65,57 C 69,55 71,54 73,55 Z" fill="#C4A96D" />
            <path d="M 38,28 C 34,34 33,42 36,48 C 32,46 29,42 30,36 C 32,31 35,28 38,28 Z" fill="#0B2545" />
            <path d="M 32,48 C 29,54 29,62 33,68 C 29,65 26,60 27,53 C 28,48 30,48 32,48 Z" fill="#0B2545" />
            <path d="M 36,68 C 33,74 36,80 42,84 C 36,82 32,77 33,72 C 34,69 35,68 36,68 Z" fill="#0B2545" />
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
