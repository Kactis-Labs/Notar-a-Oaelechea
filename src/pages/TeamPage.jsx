import { teamMembers } from '../data/teamData';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import { Award, CheckCircle } from 'lucide-react';
import equipoHero from '../assets/equipo-hero.png';
import '../components/Hero.css';
import './TeamPage.css';

export default function TeamPage() {
  return (
    <div className="team-page">
      {/* 1. HERO */}
      <div className="hero-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <section className="hero">
          <div className="hero-bg">
            <img 
              src={equipoHero} 
              alt="Socios Ocampos & Sifuentes Abogados" 
            />
            <div className="hero-overlay"></div>
          </div>
          
          <div className="container hero-content">
            <div className="hero-text">
              <div className="section-label" style={{ marginBottom: '1rem' }}>SOCIOS FUNDADORES</div>
              <h1 className="hero-title">Tradición Jurídica &<br/>Atención Personalizada.</h1>
              <p className="hero-subtitle">
                Conozca la trayectoria de los doctores Carlos Ocampos y Elena Sifuentes, líderes de nuestra firma boutique en Trujillo.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div style={{ backgroundColor: 'var(--color-cream)' }}>
        {/* 2. SECCIÓN DESTACADA DE LOS SOCIOS FUNDADORES */}
        <section className="titular-section section-padding">
          <div className="container">
            <div className="section-label" style={{ marginBottom: '2rem' }}>SOCIOS DE CABECERA</div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {teamMembers.map((founder) => (
                <div className="titular-layout" key={founder.id}>
                  <div className="titular-info">
                    <h2 className="titular-name">{founder.name}</h2>
                    <p className="titular-role">{founder.role} &middot; {founder.exp}</p>
                    <p className="titular-bio">{founder.bio}</p>
                    
                    <div className="titular-registry">
                      <CheckCircle size={20} style={{ color: '#8A6A3D' }} />
                      <span>{founder.registry}</span>
                    </div>

                    {founder.recognitions && (
                      <div className="titular-recognitions">
                        <h3 className="recognitions-title">Distinciones y Trayectoria</h3>
                        <ul>
                          {founder.recognitions.map((rec, idx) => (
                            <li key={idx}>
                              <Award size={18} style={{ color: '#8A6A3D' }} />
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="titular-image-wrapper">
                    <img src={founder.img} alt={founder.name} className="titular-image" />
                    <div className="titular-image-deco"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. CTA DE CIERRE */}
        <CTA />

        {/* 4. CONTACTO */}
        <Contact />
      </div>
    </div>
  );
}
