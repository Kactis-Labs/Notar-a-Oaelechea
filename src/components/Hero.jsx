import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { brandConfig } from '../config/brandConfig';
import heroBg1 from '../assets/hero-bg-1.webp';
import heroBg2 from '../assets/equipo-grupal.webp';
import './Hero.css';

const bgImages = [
  { src: heroBg1, alt: 'Escalante, Ulloa y Asociados - Estudio Jurídico en Trujillo' },
  { src: heroBg2, alt: 'Equipo de Abogados Escalante, Ulloa y Asociados' }
];

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);
  const { scrollY } = useScroll();
  const filter = useTransform(scrollY, [0, 1500], ['blur(0px)', 'blur(8px)']);
  const opacity = useTransform(scrollY, [0, 1500], [1, 0.6]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(prev => (prev + 1) % bgImages.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-wrapper">
      <section className="hero">
        <motion.div className="hero-bg" style={{ filter, opacity }}>
          <AnimatePresence initial={false}>
            <motion.img 
              key={bgIndex}
              src={bgImages[bgIndex].src} 
              alt={bgImages[bgIndex].alt}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
            />
          </AnimatePresence>
          <div className="hero-overlay"></div>
        </motion.div>
        
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Rigor Jurídico, Solidez Corporativa<br/>y Compromiso en Trujillo</h1>
            <p className="hero-subtitle">
              {brandConfig.subtitle}
            </p>
            <div className="hero-actions">
              <a 
                href={brandConfig.contact.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Agendar una consulta
              </a>
              <Link to="/servicios" className="btn btn-outline">Áreas de práctica</Link>
            </div>
          </div>
          
          <div className="hero-card">
            <p className="hero-card-meta">Estudio Jurídico &middot; Fundado en {brandConfig.foundedYear}</p>
            <p className="hero-card-stat">{brandConfig.statsCount}</p>
            <a 
              href={brandConfig.contact.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-card-btn"
            >
              Solicitar evaluación
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

