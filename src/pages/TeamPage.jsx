import { teamMembers } from '../data/teamData';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import { Award, CheckCircle } from 'lucide-react';
import equipoHero from '../assets/equipo-grupal.webp';
import '../components/Hero.css';
import './TeamPage.css';

export default function TeamPage() {
  const founders = teamMembers.filter(m => m.role.includes('Socio') || m.role.includes('Principal'));
  const associates = teamMembers.filter(m => !m.role.includes('Socio') && !m.role.includes('Principal'));

  return (
    <div className="team-page">
      {/* 1. HERO */}
      <div className="hero-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <section className="hero">
          <div className="hero-bg">
            <img 
              src={equipoHero} 
              alt="Equipo de abogados Escalante, Ulloa y Asociados" 
            />
            <div className="hero-overlay"></div>
          </div>
          
          <div className="container hero-content">
            <div className="hero-text">
              <div className="section-label" style={{ marginBottom: '1rem' }}>NUESTRO EQUIPO</div>
              <h1 className="hero-title">Solvencia Técnica<br/>y Compromiso Institucional.</h1>
              <p className="hero-subtitle">
                Socios y asociados con sólida trayectoria en litigación compleja, derecho civil, penal y laboral en Trujillo y a nivel nacional.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div style={{ backgroundColor: 'var(--color-white)' }}>
        {/* 2. SECCIÓN DESTACADA DE LOS SOCIOS PRINCIPALES Y ASOCIADOS */}
        <section className="titular-section section-padding">
          <div className="container">
            <div className="section-label" style={{ marginBottom: '2rem' }}>SOCIOS FUNDADORES Y DIRECCIÓN TÉCNICA</div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {founders.map((founder) => (
                <div className="titular-layout" key={founder.id}>
                  <div className="titular-info">
                    <h2 className="titular-name">{founder.name}</h2>
                    <p className="titular-role">{founder.role} &middot; {founder.exp}</p>
                    <p className="titular-bio">{founder.bio}</p>
                    
                    <div className="titular-registry">
                      <CheckCircle size={20} style={{ color: 'var(--color-gold)' }} />
                      <span>{founder.registry}</span>
                    </div>

                    {founder.recognitions && (
                      <div className="titular-recognitions">
                        <h3 className="recognitions-title">Distinciones y Trayectoria</h3>
                        <ul>
                          {founder.recognitions.map((rec, idx) => (
                            <li key={idx}>
                              <Award size={18} style={{ color: 'var(--color-gold)' }} />
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

            {associates.length > 0 && (
              <div style={{ marginTop: '5rem' }}>
                <div className="section-label" style={{ marginBottom: '2rem' }}>CONSULTORES Y ASOCIADOS SENIOR</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                  {associates.map((assoc) => (
                    <div className="titular-layout" key={assoc.id}>
                      <div className="titular-info">
                        <h2 className="titular-name">{assoc.name}</h2>
                        <p className="titular-role">{assoc.role} &middot; {assoc.exp}</p>
                        <p className="titular-bio">{assoc.bio}</p>
                        
                        <div className="titular-registry">
                          <CheckCircle size={20} style={{ color: 'var(--color-gold)' }} />
                          <span>{assoc.registry}</span>
                        </div>

                        {assoc.recognitions && (
                          <div className="titular-recognitions">
                            <h3 className="recognitions-title">Distinciones y Trayectoria</h3>
                            <ul>
                              {assoc.recognitions.map((rec, idx) => (
                                <li key={idx}>
                                  <Award size={18} style={{ color: 'var(--color-gold)' }} />
                                  <span>{rec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="titular-image-wrapper">
                        <img src={assoc.img} alt={assoc.name} className="titular-image" />
                        <div className="titular-image-deco"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 4. CTA DE CIERRE */}
        <CTA />

        {/* 5. CONTACTO */}
        <Contact />
      </div>
    </div>
  );
}

