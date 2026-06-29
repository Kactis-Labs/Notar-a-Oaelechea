import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
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
            <h1 className="hero-title">Tu Patrimonio,<br/>En Regla.</h1>
            <p className="hero-subtitle">
              Por más de 30 años, hemos acompañado a familias y empresas peruanas en sus trámites notariales más importantes.
            </p>
            <div className="hero-actions">
              <Link to="/agendar-cita" className="btn btn-primary">Agendar una cita</Link>
              <Link to="/servicios" className="btn btn-outline">Ver servicios</Link>
            </div>
          </div>
          
          <div className="hero-card">
            <p className="hero-card-meta">Notariado &middot; Fundada en 1994</p>
            <p className="hero-card-stat">+12,000 trámites realizados</p>
            <Link to="/contacto" className="hero-card-btn">Agendar cita</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
