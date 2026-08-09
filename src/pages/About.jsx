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
            <img src={aboutHero} alt="Sobre Solutia Legal Partners" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <div className="hero-text">
              <div className="section-label" style={{ marginBottom: '1rem' }}>SOBRE NOSOTROS</div>
              <h1 className="hero-title">Soluciones Prácticas,<br/>Estrategia y Prevención.</h1>
              <p className="hero-subtitle">
                Fundada en 2024 en Trujillo y Lima, Solutia Legal Partners nació para transformar la asesoría jurídica corporativa y personal con agilidad, transparencia y prevención de riesgos.
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
                En {brandConfig.foundedYear}, los abogados <strong>Alonso Solano</strong> y <strong>Sebastián Alvarado</strong> unieron su experiencia estratégica para fundar <strong>Solutia Legal Partners</strong>. Identificaron que tanto las empresas en crecimiento como las familias de la región norte del Perú necesitaban representación legal moderna, directa y orientada a la prevención de conflictos.
              </p>
              
              <blockquote className="history-quote">
                "La mejor estrategia legal no es la que resuelve un pleito de años, sino la que evita que el problema exista desde el primer día."
              </blockquote>
              
              <p className="history-text">
                Desde nuestras oficinas en <strong>Torre Natasha (Av. América Oeste, Trujillo)</strong> y nuestra sede en Lima, lideramos un equipo interdisciplinario enfocado en brindar respuestas claras en derecho mercantil, civil, penal, laboral y una práctica especializada en recuperar patrimonios afectados por fraudes bancarios.
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
                Creemos en un servicio legal transparente, rápido y sin rodeos innecesarios.
              </h2>
              <p className="philosophy-subtext">
                Entendemos el valor del tiempo de nuestros clientes. Por ello, combinamos rigor técnico con herramientas de gestión ágil para brindar soluciones jurídicas eficientes a la medida de cada caso.
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
            <div className="section-label">NUESTROS PILARES</div>
            <h2 className="team-grid-title" style={{ marginBottom: '4rem' }}>Compromisos fundamentales de Solutia Legal Partners.</h2>
            
            <div className="commitments-layout">
              <div className="commitments-list">
                
                <div className="commitment-item">
                  <div className="commitment-number">1</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Diagnóstico Preventivo y Honesto.</h3>
                    <p className="commitment-desc">Evaluamos la viabilidad real de su caso desde la primera reunión. No prometemos metas inalcanzables, trazamos rutas estratégicas transparentes.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">2</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Lenguaje Claro y Directo.</h3>
                    <p className="commitment-desc">Traducimos la complejidad jurídica en conclusiones accionables. Explicamos cada etapa procesal o comercial de manera accesible.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">3</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Respuesta de Emergencia y Cobertura Regional.</h3>
                    <p className="commitment-desc">Atención rápida ante contingencias de fraudes bancarios y denuncias corporativas en Trujillo, La Libertad y Lima.</p>
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
              <h2 className="team-preview-title">Liderado por Socios Fundadores.</h2>
              <p className="team-preview-subtitle">Alonso Solano & Sebastián Alvarado</p>
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

