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
            alt="Estudio Jurídico Antinori D'Angelo" 
          />
          <div className="hero-overlay"></div>
        </motion.div>
        
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Excelencia Jurídica,<br/>Defensa Estratégica & Prestigio
            </h1>
            <p className="hero-subtitle">
              {brandConfig.subtitle}
            </p>
            <div className="hero-actions">
              <Link to="/agendar-cita" className="btn btn-primary">Agendar Consulta Privada</Link>
              <Link to="/servicios" className="btn btn-outline">Ver Especialidades</Link>
            </div>
          </div>

          <div className="hero-shield-watermark">
            <img src="/logo-antinori.png" alt="Escudo Heráldico Antinori D'Angelo" />
          </div>
          
          <div className="hero-card">
            <p className="hero-card-meta">Firma Legal Boutique &middot; Fundada en {brandConfig.foundedYear}</p>
            <p className="hero-card-stat">{brandConfig.statsCount}</p>
            <Link to="/agendar-cita" className="hero-card-btn">Agendar consulta</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
