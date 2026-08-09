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
  const previewTeam = teamMembers;

  return (
    <div className="about-page">
      {/* 1. HERO */}
      <div className="hero-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <section className="hero">
          <div className="hero-bg">
            <img src={aboutHero} alt="Sobre Bobadilla y Asociados" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <div className="hero-text">
              <div className="section-label" style={{ marginBottom: '1rem' }}>SOBRE NUESTRO ESTUDIO</div>
              <h1 className="hero-title">El Aliado Legal que Tú<br/>y Tu Empresa Necesitan.</h1>
              <p className="hero-subtitle">
                Desde 2008, Estudio Jurídico Bobadilla y Asociados Abogados brinda soluciones jurídicas integrales, patrocinio procesal firmo y consultoría empresarial en Trujillo.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div style={{ backgroundColor: 'var(--color-cream)' }}>
        {/* 2. HISTORY SECTION */}
        <section className="history-section section-padding">
          <div className="container">
            <div className="section-label" style={{ textAlign: 'center', marginBottom: '2rem' }}>NUESTRA HISTORIA</div>
            <div className="history-content">
              <p className="history-text">
                Fundado por el <strong>Dr. Roberto Bobadilla y la Dra. Carmen Bobadilla</strong>, nuestro estudio nació con la misión clara de otorgar asesoría legal accesible, sólida e inquebrantable para empresarios, familias y ciudadanos en La Libertad.
              </p>
              
              <blockquote className="history-quote">
                "La verdadera defensa jurídica combina estrategia técnica rigurosa con lealtad incondicional al cliente."
              </blockquote>
              
              <p className="history-text">
                Con más de 15 años de trabajo ininterrumpido, nos hemos consolidado como un estudio jurídico de referencia, reconocido por la efectividad de nuestras estrategias y el trato directo de nuestros socios.
              </p>
            </div>
          </div>
          
          <Stats />
        </section>

        {/* 3. PHILOSOPHY SECTION */}
        <section className="philosophy-section section-padding">
          <div className="container philosophy-layout">
            <div className="philosophy-text-container">
              <div className="section-label">FILOSOFÍA INSTITUCIONAL</div>
              <h2 className="philosophy-quote">
                Estrategia legal multidisciplinaria orientada a la protección integral de sus derechos y patrimonio.
              </h2>
              <p className="philosophy-subtext">
                Analizamos cada caso de manera personalizada, identificando riesgos con anticipación y construyendo soluciones procesales sólidas.
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
            <h2 className="team-grid-title" style={{ marginBottom: '4rem' }}>Compromisos de Bobadilla y Asociados.</h2>
            
            <div className="commitments-layout">
              <div className="commitments-list">
                
                <div className="commitment-item">
                  <div className="commitment-number">1</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Defensa Firme y Frontal.</h3>
                    <p className="commitment-desc">Patrocinio procesal decidido y respaldado por una preparación probatoria minuciosa.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">2</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Prevención Jurídica Estratégica.</h3>
                    <p className="commitment-desc">Estructuración de contratos y reglamentos para evitar litigios y sobrecostos a las empresas.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">3</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Trato Cercano y Transparente.</h3>
                    <p className="commitment-desc">Atención personalizada directa por nuestros socios fundadores con información clara en cada etapa.</p>
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
              <h2 className="team-preview-title">Socios Principales.</h2>
              <p className="team-preview-subtitle">Dres. Roberto Bobadilla y Carmen Bobadilla</p>
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
