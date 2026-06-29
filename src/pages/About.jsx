import { Link } from 'react-router-dom';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import { teamMembers } from '../data/teamData';
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
            <img src={aboutHero} alt="Sobre nosotros" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <div className="hero-text">
              <div className="section-label" style={{ marginBottom: '1rem' }}>SOBRE NOSOTROS</div>
              <h1 className="hero-title">Ayudamos a proteger<br/>lo que más importa.</h1>
              <p className="hero-subtitle">
                Por más de 30 años, hemos acompañado a familias y empresas de Lima en sus decisiones legales más importantes. Así es quiénes somos y por qué hacemos este trabajo.
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
                En 1994, nuestro fundador Carlos Olaechea asesoró a una viuda que llevaba meses intentando sanear la propiedad que le había dejado su esposo. El caso parecía un trámite más de sucesión, pero detrás había una familia a punto de perder su único patrimonio por un error registral del pasado.
              </p>
              
              <blockquote className="history-quote">
                "Ese caso nos enseñó algo que nunca hemos olvidado: el derecho notarial no se trata de firmar papeles. Se trata de la vida de las personas, a menudo en sus momentos más vulnerables."
              </blockquote>
              
              <p className="history-text">
                Hoy nuestra firma ha crecido a más de seis especialistas y decenas de colaboradores, pero nuestro estándar no ha cambiado. Seguimos tratando cada trámite de la misma manera que Carlos trató el primero: como el único trámite que importa.
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
                Creemos que un trámite notarial no es solo un papel firmado. Es la tranquilidad de saber que algo importante quedó bien resuelto.
              </h2>
              <p className="philosophy-subtext">
                Cada familia y cada negocio son distintos. Hemos pasado tres décadas especializándonos en todas las áreas del derecho notarial para que, sin importar lo complejo de su situación, encuentre aquí una solución clara.
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
            <div className="section-label">LO QUE CREEMOS</div>
            <h2 className="team-grid-title" style={{ marginBottom: '4rem' }}>Compromisos que asumimos con cada cliente.</h2>
            
            <div className="commitments-layout">
              <div className="commitments-list">
                
                <div className="commitment-item">
                  <div className="commitment-number">1</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Honestidad antes que falsas esperanzas.</h3>
                    <p className="commitment-desc">Preferimos decirle una verdad incómoda en la primera reunión, antes que prometerle tiempos o resultados registrales irreales. Usted merece tomar decisiones con información real.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">2</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Claridad sobre tecnicismos.</h3>
                    <p className="commitment-desc">El derecho notarial está construido sobre acrónimos y lenguaje legal que puede confundir a cualquiera. Nosotros traducimos. Explicamos cada trámite en lenguaje simple para que entienda qué sucede con su caso.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">3</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Acompañamiento continuo.</h3>
                    <p className="commitment-desc">Cuando su escritura está lista, no desaparecemos. Mantenemos sus archivos organizados para el siguiente paso. La relación no termina al firmar; allí es donde comienza su seguridad.</p>
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
