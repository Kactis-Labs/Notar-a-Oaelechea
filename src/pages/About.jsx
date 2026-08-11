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
import '../pages/TeamPage.css'; // For the team card styles
import './About.css';

export default function About() {
  // Get first 3 team members safely
  const previewTeam = teamMembers.slice(0, 3);

  return (
    <div className="about-page">
      {/* 1. HERO */}
      <div className="hero-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <section className="hero">
          <div className="hero-bg">
            <img src={aboutHero} alt="Sobre Leonardo Uribe & Asociados" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Abogados comprometidos<br/>con soluciones eficaces.</h1>
              <p className="hero-subtitle">
                Desde {brandConfig.foundedYear}, brindamos asesoría legal confiable en diversas ramas del Derecho, priorizando siempre los intereses de nuestros clientes.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div style={{ backgroundColor: 'var(--color-cream)' }}>
        {/* 2. HISTORY SECTION */}
        <section className="history-section section-padding">
          <div className="container">
            <div className="section-label" style={{ textAlign: 'center', marginBottom: '2rem' }}>SOBRE NUESTRA FIRMA</div>
            <div className="history-content">
              <p className="history-text">
                Fundada por el {brandConfig.titular.name}, nuestra firma se constituyó como un equipo multidisciplinario de abogados orientados a romper con la abogacía distante y compleja.
              </p>
              
              <blockquote className="history-quote">
                "Somos un equipo de abogados comprometidos con brindar asesoría legal confiable. Atendemos casos en diversas ramas del Derecho, priorizando siempre los intereses de nuestros clientes. Nuestra misión es ofrecer soluciones eficaces y justas."
              </blockquote>
              
              <p className="history-text">
                Entendemos que detrás de cada consulta o litigio hay personas y familias que buscan certidumbre. Por ello, diseñamos estrategias claras, transparentes e integrales para alcanzar desenlaces justos.
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
                Ponemos el foco en la eficacia de las soluciones jurídicas y la protección constante del cliente.
              </h2>
              <p className="philosophy-subtext">
                Evaluamos cada contingencia desde múltiples ángulos normativos para anticipar respuestas certeras y evitar trámites o litigios innecesarios.
              </p>
            </div>
            <div className="philosophy-img-wrapper">
              <img src={aboutPhilosophy} alt="Nuestra filosofía legal" className="philosophy-img" />
            </div>
          </div>
        </section>

        {/* 4. COMMITMENTS SECTION */}
        <section className="commitments-section section-padding">
          <div className="container">
            <div className="section-label">NUESTROS PILARES</div>
            <h2 className="team-grid-title" style={{ marginBottom: '4rem' }}>Compromisos irrenunciables con nuestros patrocinados.</h2>
            
            <div className="commitments-layout">
              <div className="commitments-list">
                
                <div className="commitment-item">
                  <div className="commitment-number">1</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Prioridad absoluta en el cliente.</h3>
                    <p className="commitment-desc">Colocamos las metas e intereses reales de nuestros representados por encima de cualquier otro criterio.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">2</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Asesoría legal clara y confiable.</h3>
                    <p className="commitment-desc">Comunicamos los escenarios con honestidad técnica, proponiendo caminos resolutivos eficaces.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">3</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Justicia y solvencia procesal.</h3>
                    <p className="commitment-desc">Defendemos cada causa con la máxima firmeza jurídica y ética profesional indiscutible.</p>
                  </div>
                </div>

              </div>
              
              <div className="commitments-img-wrapper">
                <img src={aboutCommitment} alt="Nuestro compromiso legal" className="commitments-img" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. PREVIEW DE EQUIPO */}
        <section className="team-preview-section section-padding">
          <div className="container">
            <div className="team-preview-header">
              <h2 className="team-preview-title">Los profesionales que atenderán su caso.</h2>
              <p className="team-preview-subtitle">Seis especialistas. Un mismo respaldo legal.</p>
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

        {/* 6. CTA DE CIERRE (Solo CTA) */}
        <CTA />
        
        {/* 7. CONTACTO / FIRMA */}
        <Contact />

      </div>
    </div>
  );
}
