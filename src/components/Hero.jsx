import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { brandConfig } from '../config/brandConfig';
import './Hero.css';

export default function Hero() {
  const { scrollY } = useScroll();
  const filter = useTransform(scrollY, [0, 1500], ['blur(0px)', 'blur(8px)']);
  const opacity = useTransform(scrollY, [0, 1500], [1, 0.6]);

  const titleParts = brandConfig.tagline.split(',');

  return (
    <div className="hero-wrapper">
      <section className="hero">
        <motion.div className="hero-bg" style={{ filter, opacity }}>
          <img 
            src="/hero-bg.png" 
            alt="Solutia Legal Partners - Asesoría Legal" 
          />
          <div className="hero-overlay"></div>
        </motion.div>
        
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {titleParts[0]},<br/>
              {titleParts[1] || ''}
            </h1>
            <p className="hero-subtitle">
              {brandConfig.subtitle}
            </p>
            <div className="hero-actions">
              <Link to="/agendar-cita" className="btn btn-primary">Agendar una consulta</Link>
              <Link to="/servicios" className="btn btn-outline">Áreas de práctica</Link>
            </div>
          </div>
          
          <div className="hero-card">
            <p className="hero-card-meta">Fundada en {brandConfig.foundedYear} &middot; Trujillo & Lima</p>
            <p className="hero-card-stat">{brandConfig.statsCount}</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.2rem' }}>
              Liderados por <strong>Alonso Solano</strong> y <strong>Sebastián Alvarado</strong>
            </p>
            <Link to="/agendar-cita" className="hero-card-btn">Solicitar evaluación</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

