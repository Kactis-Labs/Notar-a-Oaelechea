import { brandConfig } from '../config/brandConfig';
import ctaImage from '../assets/cta-banner.webp';
import './CTA.css';

export default function CTA() {
  return (
    <section className="national-cta-section" id="cobertura-nacional">
      <div className="container national-cta-layout">
        <div className="national-cta-content">
          <div className="section-label light" style={{ color: 'var(--color-gold)', marginBottom: '0.75rem' }}>
            ATENCIÓN NACIONAL
          </div>
          <h2 className="national-cta-title">Defensa jurídica y patrocinio procesal en todo el Perú.</h2>
          <p className="national-cta-desc">
            Atención presencial en nuestra sede en Trujillo y patrocinio procesal en todas las cortes del país (presencial y virtual). La distancia geográfica nunca debe ser un obstáculo para contar con una defensa técnica de primer nivel.
          </p>
          <a 
            href={brandConfig.contact.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            Cuéntanos tu caso
          </a>
        </div>
        
        <div className="national-cta-img-wrapper">
          <img 
            src={ctaImage} 
            alt="Atención legal a nivel nacional - Escalante, Ulloa y Asociados" 
            className="national-cta-img"
            width="600"
            height="400"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
