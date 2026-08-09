import { teamMembers } from '../data/teamData';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import { Award, CheckCircle } from 'lucide-react';
import equipoHero from '../assets/equipo-hero.png';
import '../components/Hero.css';
import './TeamPage.css';

export default function TeamPage() {
  const founders = teamMembers.filter(m => m.role === 'Socio Principal');
  const restOfTeam = teamMembers.filter(m => m.role !== 'Socio Principal');

  return (
    <div className="team-page">
      {/* 1. HERO */}
      <div className="hero-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <section className="hero">
          <div className="hero-bg">
            <img 
              src={equipoHero} 
              alt="Equipo de abogados Escalante, Ulloa & Asociados" 
            />
            <div className="hero-overlay"></div>
          </div>
          
          <div className="container hero-content">
            <div className="hero-text">
              <div className="section-label" style={{ marginBottom: '1rem' }}>NUESTRO EQUIPO</div>
              <h1 className="hero-title">Solvencia Técnica<br/>y Compromiso Institucional.</h1>
              <p className="hero-subtitle">
                Socios y asociados con sólida trayectoria en litigios de alta complejidad, derecho corporativo y protección de activos en Trujillo.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div style={{ backgroundColor: 'var(--color-white)' }}>
        {/* 2. SECCIÓN DESTACADA DE LOS SOCIOS PRINCIPALES */}
        <section className="titular-section section-padding">
          <div className="container">
            <div className="section-label" style={{ marginBottom: '2rem' }}>SOCIOS PRINCIPALES</div>
            
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
          </div>
        </section>

        {/* 3. RESTO DEL EQUIPO */}
        <section className="team-grid-section section-padding bg-light">
          <div className="container">
            <div className="section-label">Abogados Asociados</div>
            <h2 className="team-grid-title">Especialistas al servicio de nuestros representados</h2>
            
            <div className="team-grid">
              {restOfTeam.map(member => (
                <div className="team-member-card" key={member.id}>
                  <div className="team-member-img">
                    <img src={member.img} alt={member.name} />
                  </div>
                  <div className="team-member-info">
                    <h3 className="team-member-name">{member.name}</h3>
                    <p className="team-member-role">{member.role}</p>
                    <p className="team-member-exp">{member.exp}</p>
                  </div>
                </div>
              ))}
            </div>
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

