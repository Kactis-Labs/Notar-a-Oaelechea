import { Link } from 'react-router-dom';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import { teamMembers } from '../data/teamData';
import { brandConfig } from '../config/brandConfig';
import aboutHero from '../assets/about-hero.png';
import aboutPhilosophy from '../assets/about-philosophy.png';
import aboutCommitment from '../assets/about-commitment.png';
import '../components/Hero.css';
import '../pages/TeamPage.css';
import './About.css';

export default function About() {
  const previewTeam = teamMembers.slice(0, 3);

  return (
    <div className="about-page">
      {/* 1. HERO */}
      <div className="hero-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <section className="hero">
          <div className="hero-bg">
            <img src={aboutHero} alt="Sobre Escalante, Ulloa y Asociados" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <div className="hero-text">
              <div className="section-label" style={{ marginBottom: '1rem' }}>SOBRE NOSOTROS</div>
              <h1 className="hero-title">Solidez Jurídica,<br/>Integridad y Cobertura Nacional.</h1>
              <p className="hero-subtitle">
                Desde 2022, Escalante, Ulloa y Asociados brinda patrocinio legal estratégico y consultoría de alta solvencia, con sede central en Trujillo y atención de casos a nivel nacional.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div style={{ backgroundColor: 'var(--color-light-bg)' }}>
        {/* 2. HISTORY SECTION */}
        <section className="history-section section-padding">
          <div className="container">
            <div className="section-label" style={{ textAlign: 'center', marginBottom: '2rem' }}>NUESTRA FIRMA</div>
            <div className="history-content">
              <p className="history-text">
                Fundado en 2022 en Trujillo por el <strong>Dr. Jorge Escalante Céspedes</strong> y el <strong>Dr. Ader Ulloa Velásquez</strong>, nuestro estudio nació con el propósito de brindar una defensa legal rigurosa, donde cada patrocinio es asumido y dirigido directamente por sus socios fundadores.
              </p>
              
              <blockquote className="history-quote">
                "El ejercicio del derecho exige solvencia técnica absoluta, confidencialidad y la conducción directa y personalizada de los socios principales en cada causa."
              </blockquote>
              
              <p className="history-text">
                Con sede en Trujillo y representación en todo el país, consolidamos una práctica distinguida en derecho civil, penal y laboral, respaldada por décadas de trayectoria combinada y miles de resoluciones favorables.
              </p>
            </div>
          </div>
          
          <Stats />
        </section>

        {/* 3. PHILOSOPHY SECTION */}
        <section className="philosophy-section section-padding">
          <div className="container philosophy-layout">
            <div className="philosophy-text-container">
              <div className="section-label">NUESTRA FILOSOFÍA</div>
              <h2 className="philosophy-quote">
                Patrocinio directo, riguroso y personalizado por nuestros socios principales.
              </h2>
              <p className="philosophy-subtext">
                Garantizamos que cada caso sea asumido y conducido directamente por nuestros socios fundadores, sin delegaciones a terceros, asegurando confidencialidad estricta y una estrategia procesal diseñada a la medida.
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
            <div className="section-label">NUESTROS VALORES</div>
            <h2 className="team-grid-title" style={{ marginBottom: '4rem' }}>Principios institucionales que rigen nuestra firma.</h2>
            
            <div className="commitments-layout">
              <div className="commitments-list">
                
                <div className="commitment-item">
                  <div className="commitment-number">1</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Atención Directa de Socios.</h3>
                    <p className="commitment-desc">Conducción personal y estratégica de cada proceso por abogados de máxima jerarquía procesal.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">2</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Rigor Técnico y Probatorio.</h3>
                    <p className="commitment-desc">Análisis exhaustivo y preparación meticulosa orientada a la obtención de resultados y resoluciones favorables.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">3</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Ética, Reserva y Lealtad.</h3>
                    <p className="commitment-desc">Confidencialidad irrestricta y transparencia absoluta en la relación abogado-patrocinado.</p>
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
              <p className="team-preview-subtitle">Dr. Jorge Escalante, Dr. Ader Ulloa y Dr. Víctor Gonzales</p>
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
              <Link to="/equipo" className="btn btn-outline-dark" style={{ padding: '0.75rem 2rem' }}>Ver equipo completo</Link>
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
