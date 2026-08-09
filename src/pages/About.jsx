import { Link } from 'react-router-dom';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import { teamMembers } from '../data/teamData';
import aboutHero from '../assets/about-hero.png';
import aboutPhilosophy from '../assets/about-philosophy.png';
import aboutCommitment from '../assets/about-commitment.png';
import '../components/Hero.css';
import '../pages/TeamPage.css';
import './About.css';

export default function About() {
  const previewTeam = teamMembers.slice(0, 4);

  return (
    <div className="about-page">
      {/* 1. HERO */}
      <div className="hero-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <section className="hero">
          <div className="hero-bg">
            <img src={aboutHero} alt="Sobre Chavez, Prado, Mendoza & Saldaña" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <div className="hero-text">
              <div className="section-label" style={{ marginBottom: '1rem' }}>SOBRE NUESTRA FIRMA</div>
              <h1 className="hero-title">Solidez Corporativa,<br/>Experiencia & Respaldo.</h1>
              <p className="hero-subtitle">
                Desde 2005, Chavez, Prado, Mendoza & Saldaña Abogados Asociados brinda consultoría legal integral y patrocinio procesal de alto nivel en La Libertad.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div style={{ backgroundColor: 'var(--color-light-bg)' }}>
        {/* 2. HISTORY SECTION */}
        <section className="history-section section-padding">
          <div className="container">
            <div className="section-label" style={{ textAlign: 'center', marginBottom: '2rem' }}>NUESTRA HISTORIA</div>
            <div className="history-content">
              <p className="history-text">
                Fundada en Trujillo por los doctores <strong>Fernando Chavez, Alejandro Prado, Patricia Mendoza y Gabriel Saldaña</strong>, nuestra firma nació con la convicción de crear un estudio multidisciplinario capaz de brindar respuestas integrales a los retos legales de las corporaciones e instituciones más destacadas del norte peruano.
              </p>
              
              <blockquote className="history-quote">
                "La unión de cuatro especialidades bajo un mismo estándar ético nos permite abordar contingencias complejas con una visión técnica global."
              </blockquote>
              
              <p className="history-text">
                A lo largo de más de dos décadas de ejercicio ininterrumpido, hemos construido relaciones de largo plazo basadas en la confianza, el rigor jurídico y la eficacia probatoria.
              </p>
            </div>
          </div>
          
          <Stats />
        </section>

        {/* 3. PHILOSOPHY SECTION */}
        <section className="philosophy-section section-padding">
          <div className="container philosophy-layout">
            <div className="philosophy-text-container">
              <div className="section-label">FILOSOFÍA CORPORATIVA</div>
              <h2 className="philosophy-quote">
                Estrategia legal multidisciplinaria orientada a la seguridad patrimonial y al éxito empresarial.
              </h2>
              <p className="philosophy-subtext">
                Cada área de nuestra firma está liderada directamente por un socio titular especializado, garantizando que su asunto reciba atención senior personalizada en todo momento.
              </p>
            </div>
            <div className="philosophy-img-wrapper">
              <img src={aboutPhilosophy} alt="Nuestra filosofía" className="philosophy-img" />
            </div>
          </div>
        </section>

        {/* 4. COMMITMENTS SECTION */}
        <section className="commitments-section section-padding">
          <div className="container">
            <div className="section-label">VALORES INSTITUCIONALES</div>
            <h2 className="team-grid-title" style={{ marginBottom: '4rem' }}>Pilares de Chavez, Prado, Mendoza & Saldaña.</h2>
            
            <div className="commitments-layout">
              <div className="commitments-list">
                
                <div className="commitment-item">
                  <div className="commitment-number">1</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Enfoque Multidisciplinario Integrado.</h3>
                    <p className="commitment-desc">Evaluamos cada asunto desde la perspectiva corporativa, procesal, fiscal y laboral simultáneamente.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">2</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Rigor Dogmático y Excelencia Procesal.</h3>
                    <p className="commitment-desc">Investigación jurídica profunda para sustentar la mejor estrategia probatoria ante tribunales y árbitros.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">3</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Lealtad y Lealtad Institucional.</h3>
                    <p className="commitment-desc">Resguardamos el secreto profesional e informamos con absoluta transparencia la viabilidad objetiva de cada proceso.</p>
                  </div>
                </div>

              </div>
              
              <div className="commitments-img-wrapper">
                <img src={aboutCommitment} alt="Nuestro compromiso" className="commitments-img" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. PREVIEW DE EQUIPO */}
        <section className="team-preview-section section-padding">
          <div className="container">
            <div className="team-preview-header">
              <h2 className="team-preview-title">Liderado por Socios Principales.</h2>
              <p className="team-preview-subtitle">Dres. Chavez, Prado, Mendoza & Saldaña</p>
            </div>
            
            <div className="team-grid">
              {previewTeam.map(member => (
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
            
            <div className="team-preview-btn-wrapper">
              <Link to="/equipo" className="btn btn-outline-dark" style={{ padding: '0.75rem 2rem' }}>Ver firma completa</Link>
            </div>
          </div>
        </section>

        {/* 6. CTA DE CIERRE */}
        <CTA />
        
        {/* 7. CONTACTO */}
        <Contact />

      </div>
    </div>
  );
}
