import { Link } from 'react-router-dom';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import { teamMembers } from '../data/teamData';
import { brandConfig } from '../config/brandConfig';
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
            <img src="/hero-bg.png" alt="Sobre Salas Valencia & Abogados" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Defensa estratégica enfática,<br/>enfocada en ganar tu caso.</h1>
              <p className="hero-subtitle">
                Desde {brandConfig.foundedYear}, acompañamos a nuestros patrocinados en Arequipa con rigor técnico, combate procesal y máxima lealtad.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div style={{ backgroundColor: 'var(--color-cream)' }}>
        {/* 2. HISTORY SECTION */}
        <section className="history-section section-padding">
          <div className="container">
            <div className="section-label" style={{ textAlign: 'center', marginBottom: '2rem' }}>NUESTRA PROPUESTA</div>
            <div className="history-content">
              <p className="history-text">
                En {brandConfig.foundedYear}, nuestro socio fundador {brandConfig.titular.name} consolidó la firma sobre una firme convicción: la abogacía procesal exige la máxima determinación técnica para defender la razón del cliente y ganar su proceso en juzgados y tribunales.
              </p>
              
              <blockquote className="history-quote">
                "¿Enfrentas un problema legal? No estás solo. En Salas Valencia & Abogados estructuramos estrategias rigurosas orientadas a respaldarte en todo momento y ganar tu caso."
              </blockquote>
              
              <p className="history-text">
                Hoy nos posicionamos como un estudio jurídico de referencia en Arequipa y el sur del Perú, reconocido por nuestro compromiso incansable, la solidez procesal de nuestros planteamientos y la búsqueda constante de la victoria legal.
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
                No dejamos ningún cabo suelto. Analizamos cada prueba y recurso procesal con la única meta de obtener un resultado favorable.
              </h2>
              <p className="philosophy-subtext">
                Sabemos que detrás de cada expediente hay derechos, patrimonio y tranquilidad personal en juego. Por ello, brindamos patrocinio directo y asesoría constante desde el primer día.
              </p>
            </div>
            <div className="philosophy-img-wrapper">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop" alt="Nuestra filosofía procesal" className="philosophy-img" />
            </div>
          </div>
        </section>

        {/* 4. COMMITMENTS SECTION */}
        <section className="commitments-section section-padding">
          <div className="container">
            <div className="section-label">PILARES PROCESALES</div>
            <h2 className="team-grid-title" style={{ marginBottom: '4rem' }}>Compromisos irrenunciables con nuestros patrocinados.</h2>
            
            <div className="commitments-layout">
              <div className="commitments-list">
                
                <div className="commitment-item">
                  <div className="commitment-number">1</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Estrategia enfocada en ganar.</h3>
                    <p className="commitment-desc">Estudiamos en profundidad el marco sustantivo y probatorio para construir la teoría del caso más fuerte y contundente.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">2</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Respaldo constante 24/7.</h3>
                    <p className="commitment-desc">Sabemos el impacto de un problema legal. Te informamos de cada hito procesal y te asesoramos en todo momento sin evasivas.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">3</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Solvencia procesal y combate técnico.</h3>
                    <p className="commitment-desc">Acudimos a juzgados y salas con preparación técnica rigurosa y determinación absoluta para hacer valer tus derechos.</p>
                  </div>
                </div>

              </div>
              
              <div className="commitments-img-wrapper">
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" alt="Nuestro compromiso procesal" className="commitments-img" />
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
