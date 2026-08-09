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
  const previewTeam = teamMembers.slice(0, 3);

  return (
    <div className="about-page">
      {/* 1. HERO */}
      <div className="hero-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <section className="hero">
          <div className="hero-bg">
            <img src={aboutHero} alt="Sobre Barba & Asociados" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <div className="hero-text">
              <div className="section-label" style={{ marginBottom: '1rem' }}>SOBRE NOSOTROS</div>
              <h1 className="hero-title">Arquitectura Legal<br/>& Rigor Estratégico.</h1>
              <p className="hero-subtitle">
                Desde 2012, Barba & Asociados desarrolla soluciones jurídicas sólidas y contemporáneas para empresas y personas en Trujillo.
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
                Fundado en Trujillo por el <strong>Dr. Roberto Barba</strong>, nuestro estudio nació con una clara visión: aplicar un enfoque de arquitectura legal preventiva, donde cada contrato, sociedad o proyecto inmobiliario sea diseñado con la máxima precisión técnica y visión corporativa.
              </p>
              
              <blockquote className="history-quote">
                "La excelencia legal no deviene del azar, sino del rigor analítico en la planificación y la firmeza en la defensa de los intereses de nuestros clientes."
              </blockquote>
              
              <p className="history-text">
                Hoy acompañamos a corporaciones regionales, desarrolladores inmobiliarios y familias empresarias, ofreciendo consultoría continua y patrocinio en litigios complejos con los más altos estándares éticos.
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
                Diseñamos estructuras legales que protegen el patrimonio y potencian el desarrollo empresarial.
              </h2>
              <p className="philosophy-subtext">
                Integramos la agilidad de la consultoría moderna con la solidez del derecho tradicional, garantizando diagnósticos claros y estrategias ejecutivas directas.
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
            <h2 className="team-grid-title" style={{ marginBottom: '4rem' }}>Principios de excelencia en Barba & Asociados.</h2>
            
            <div className="commitments-layout">
              <div className="commitments-list">
                
                <div className="commitment-item">
                  <div className="commitment-number">1</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Precisión en la Arquitectura Contractual.</h3>
                    <p className="commitment-desc">Prevenimos contingencias desde el diseño inicial de cada acuerdo o estatuto mercantil.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">2</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Rigor Estratégico y Eficiencia.</h3>
                    <p className="commitment-desc">Aportamos soluciones directas y ejecutivas orientadas al cumplimiento de metas comerciales y patrimoniales.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">3</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Absoluta Confidencialidad y Lealtad.</h3>
                    <p className="commitment-desc">Resguardamos la información estratégica de nuestros representados con el más estricto secreto profesional.</p>
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
              <h2 className="team-preview-title">Liderado por el Socio Fundador.</h2>
              <p className="team-preview-subtitle">Dr. Roberto Barba & Equipo Legal</p>
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
