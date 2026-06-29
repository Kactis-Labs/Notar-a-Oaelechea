import { Link } from 'react-router-dom';
import { teamMembers } from '../data/teamData';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import { Award, CheckCircle } from 'lucide-react';
import equipoHero from '../assets/equipo-hero.png';
import '../components/Hero.css'; // Reusing full-screen hero styles
import './TeamPage.css';

export default function TeamPage() {
  const titular = teamMembers.find(m => m.id === 'carlos-olaechea');
  const restOfTeam = teamMembers.filter(m => m.id !== 'carlos-olaechea');

  return (
    <div className="team-page">
      {/* 1. HERO (Full Screen, static scroll) */}
      <div className="hero-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <section className="hero">
          <div className="hero-bg">
            <img 
              src={equipoHero} 
              alt="Equipo de abogados Notaría Olaechea" 
            />
            <div className="hero-overlay"></div>
          </div>
          
          <div className="container hero-content">
            <div className="hero-text">
              <div className="section-label" style={{ marginBottom: '1rem' }}>NUESTRO EQUIPO</div>
              <h1 className="hero-title">Profesionales que<br/>conocen cada detalle.</h1>
              <p className="hero-subtitle">
                Por más de 30 años, hemos acompañado a familias y empresas peruanas en sus trámites notariales más importantes.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div style={{ backgroundColor: 'var(--color-white)' }}>
        {/* 2. SECCIÓN DESTACADA DEL NOTARIO TITULAR */}
        <section className="titular-section section-padding">
          <div className="container titular-layout">
            <div className="titular-info">
              <h2 className="titular-name">{titular.name}</h2>
              <p className="titular-role">{titular.role} &middot; {titular.exp}</p>
              <p className="titular-bio">{titular.bio}</p>
              
              <div className="titular-registry">
                <CheckCircle size={20} className="icon-gold" />
                <span>{titular.registry}</span>
              </div>

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
            <div className="section-label">Especialistas y Asesores</div>
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

        {/* 5. CONTACTO / INFO NOTARIA */}
        <Contact />
      </div>
    </div>
  );
}
