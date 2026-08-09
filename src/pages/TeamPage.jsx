import { teamMembers } from '../data/teamData';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import { Award, CheckCircle } from 'lucide-react';
import equipoHero from '../assets/equipo-hero.png';
import '../components/Hero.css';
import './TeamPage.css';

export default function TeamPage() {
  const titular = teamMembers.find(m => m.id === 'alejandro-paranti') || teamMembers[0];
  const restOfTeam = teamMembers.filter(m => m.id !== 'alejandro-paranti');

  return (
    <div className="team-page">
      {/* 1. HERO */}
      <div className="hero-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <section className="hero">
          <div className="hero-bg">
            <img 
              src={equipoHero} 
              alt="Equipo de socios Paranti Asociados" 
            />
            <div className="hero-overlay"></div>
          </div>
          
          <div className="container hero-content">
            <div className="hero-text">
              <div className="section-label" style={{ marginBottom: '1rem' }}>NUESTRO EQUIPO</div>
              <h1 className="hero-title">Liderazgo Jurídico<br/>y Visión Estratégica</h1>
              <p className="hero-subtitle">
                Acompañamos a corporaciones y familias empresarias con soluciones de alta sofisticación técnica y absoluta reserva.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div style={{ backgroundColor: '#0D0D0D' }}>
        {/* 2. SECCIÓN DESTACADA DEL SOCIO FUNDADOR */}
        <section className="titular-section section-padding">
          <div className="container titular-layout">
            <div className="titular-info">
              <h2 className="titular-name">{titular.name}</h2>
              <p className="titular-role">{titular.role} · {titular.exp}</p>
              <p className="titular-bio">{titular.bio}</p>
              
              <div className="titular-registry">
                <CheckCircle size={20} className="icon-gold" />
                <span>{titular.registry}</span>
              </div>

              {titular.recognitions && (
                <div className="titular-recognitions">
                  <h3 className="recognitions-title">Reconocimientos y Distinciones</h3>
                  <ul>
                    {titular.recognitions.map((rec, idx) => (
                      <li key={idx}>
                        <Award size={18} className="icon-gold" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="titular-image-wrapper">
              <img src={titular.img} alt={titular.name} className="titular-image" />
              <div className="titular-image-deco"></div>
            </div>
          </div>
        </section>

        {/* 3. RESTO DEL EQUIPO */}
        <section className="team-grid-section section-padding bg-light">
          <div className="container">
            <div className="section-label">Socios y Asociados Senior</div>
            <h2 className="team-grid-title">Un equipo multidisciplinario a su servicio</h2>
            
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
