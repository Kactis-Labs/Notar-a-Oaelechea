import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { brandConfig } from '../config/brandConfig';
import './Hero.css';

export default function Hero() {
  const { scrollY } = useScroll();
  // Hacer el desenfoque muchísimo más lento y sutil, aplicado solo al fondo
  const filter = useTransform(scrollY, [0, 1500], ['blur(0px)', 'blur(8px)']);
  const opacity = useTransform(scrollY, [0, 1500], [1, 0.6]);

  return (
    <div className="hero-wrapper">
      <section className="hero">
        <motion.div className="hero-bg" style={{ filter, opacity }}>
          <img 
            src="/hero-bg.png" 
            alt="Consulta notarial" 
          />
          <div className="hero-overlay"></div>
        </motion.div>
        
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Tradición Jurídica y Excelencia<br/>en Asesoría Patrimonial</h1>
            <p className="hero-subtitle">
              {brandConfig.subtitle}
            </p>
            <div className="hero-actions">
              <Link to="/agendar-cita" className="btn btn-primary">Consulta Personalizada</Link>
              <Link to="/servicios" className="btn btn-outline">Áreas de Práctica</Link>
            </div>
          </div>
          
          <div className="hero-card">
            <p className="hero-card-meta">Estudio Boutique &middot; Fundado en {brandConfig.foundedYear}</p>
            <p className="hero-card-stat">{brandConfig.statsCount}</p>
            <Link to="/agendar-cita" className="hero-card-btn">Solicitar evaluación</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
