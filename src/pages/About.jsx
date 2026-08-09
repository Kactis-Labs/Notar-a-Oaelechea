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
            <img src={aboutHero} alt="Sobre Fournier Abogados" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <div className="hero-text">
              <div className="section-label" style={{ marginBottom: '1rem' }}>SOBRE NUESTRA FIRMA</div>
              <h1 className="hero-title">Estrategia Legal,<br/>Solidez y Vanguardia.</h1>
              <p className="hero-subtitle">
                Desde 2010, Fournier Abogados brinda asesoría corporativa de vanguardia, consultoría financiera y patrocinio en litigios de alta complejidad en Trujillo.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div style={{ backgroundColor: 'var(--color-cream)' }}>
        {/* 2. HISTORY SECTION */}
        <section className="history-section section-padding">
          <div className="container">
            <div className="section-label" style={{ textAlign: 'center', marginBottom: '2rem' }}>NUESTRA TRAYECTORIA</div>
            <div className="history-content">
              <p className="history-text">
                Fundada por los doctores <strong>Jean Fournier y Marcelo Fournier</strong>, nuestra firma nació con la visión de estructurar un bufete corporativo moderno, dinámico e innovador en Trujillo, capaz de brindar soluciones jurídicas de estándar internacional.
              </p>
              
              <blockquote className="history-quote">
                "La vanguardia legal exige combinar un análisis dogmático profundo con una comprensión ágil de los negocios y las finanzas."
              </blockquote>
              
              <p className="history-text">
                A lo largo de más de 15 años de liderazgo contínuo, nos hemos posicionado como la firma de referencia para corporaciones e instituciones financieras en la región La Libertad.
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
                Excelencia técnica y visión estratégica multidisciplinaria orientada a maximizar el valor de su organización.
              </h2>
              <p className="philosophy-subtext">
                Cada transacción corporativa o litigio procesal es dirigido directamente por nuestros socios fundadores, garantizando solidez y rigor ético en todo momento.
              </p>
            </div>
            <div className="philosophy-img-wrapper">
              <img src={aboutPhilosophy} alt="Nuestra filosofía corporativa" className="philosophy-img" />
            </div>
          </div>
        </section>

        {/* 4. COMMITMENTS SECTION */}
        <section className="commitments-section section-padding">
          <div className="container">
            <div className="section-label">PILARES INSTITUCIONALES</div>
            <h2 className="team-grid-title" style={{ marginBottom: '4rem' }}>Principios de Fournier Abogados.</h2>
            
            <div className="commitments-layout">
              <div className="commitments-list">
                
                <div className="commitment-item">
                  <div className="commitment-number">1</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Innovación y Vanguardia Legal.</h3>
                    <p className="commitment-desc">Monitoreo normativo continuo para diseñar estructuras corporativas modernas y preventivas.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">2</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Rigor Procesal e Inexpugnabilidad.</h3>
                    <p className="commitment-desc">Investigación jurídica exhaustiva para construir defensas procesales con solvencia probatoria total.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">3</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Compromiso y Ética Profesional.</h3>
                    <p className="commitment-desc">Lealtad institucional absoluta con los intereses de nuestros clientes y confidencialidad estricta.</p>
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
              <p className="team-preview-subtitle">Dres. Jean Fournier y Marcelo Fournier</p>
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
