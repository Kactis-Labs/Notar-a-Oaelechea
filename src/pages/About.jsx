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
            <img src={aboutHero} alt="Sobre Gómez & Gómez" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Asesoría jurídica,<br/>orientación & representación.</h1>
              <p className="hero-subtitle">
                Desde {brandConfig.foundedYear}, brindamos patrocinio legal de alta especialización en materia Penal y Civil, respaldando a nuestros clientes en cada etapa procesal.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div style={{ backgroundColor: 'var(--color-cream)' }}>
        {/* 2. HISTORY SECTION */}
        <section className="history-section section-padding">
          <div className="container">
            <div className="section-label" style={{ textAlign: 'center', marginBottom: '2rem' }}>SOBRE NUESTRO ESTUDIO</div>
            <div className="history-content">
              <p className="history-text">
                Fundado por {brandConfig.titular.name}, Estudio Jurídico Gómez & Gómez nació con la convicción de ofrecer un ejercicio del Derecho altamente personalizado, basado en la orientación permanente, el estudio minucioso de cada expediente y la lealtad irrenunciable hacia el patrocinado.
              </p>
              
              <blockquote className="history-quote">
                "Brindamos asesoría jurídica, orientamos y representamos a nuestros clientes con rigor técnico, ética y determinación en materia Penal y Civil."
              </blockquote>
              
              <p className="history-text">
                A lo largo de más de una década, nuestra firma ha patrocinado causas complejas ante juzgados, fiscalías y tribunales con una sólida reputación por la calidad de nuestros argumentos y la tutela efectiva de los derechos encomendados.
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
                Estructuramos teorías del caso sólidas y estrategias procesales personalizadas para cada uno de nuestros clientes.
              </h2>
              <p className="philosophy-subtext">
                Sabemos que la tranquilidad legal depende de contar con un abogado que no solo represente en la audiencia, sino que oriente con claridad antes de tomar cualquier decisión.
              </p>
            </div>
            <div className="philosophy-img-wrapper">
              <img src={aboutPhilosophy} alt="Nuestra filosofía procesal" className="philosophy-img" />
            </div>
          </div>
        </section>

        {/* 4. COMMITMENTS SECTION */}
        <section className="commitments-section section-padding">
          <div className="container">
            <div className="section-label">NUESTROS COMPROMISOS</div>
            <h2 className="team-grid-title" style={{ marginBottom: '4rem' }}>Principios irrenunciables en nuestra práctica profesional.</h2>
            
            <div className="commitments-layout">
              <div className="commitments-list">
                
                <div className="commitment-item">
                  <div className="commitment-number">1</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Orientación jurídica clara y honesta.</h3>
                    <p className="commitment-desc">Explicamos sin rodeos ni tecnicismos el diagnóstico real de su asunto penal o civil.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">2</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Defensa y representación contundente.</h3>
                    <p className="commitment-desc">Acudimos a juzgados y despachos fiscales con preparación técnica intransigente frente a cualquier arbitrariedad.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">3</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Lealtad y secreto profesional absoluto.</h3>
                    <p className="commitment-desc">Garantizamos la máxima confidencialidad y el acompañamiento directo de nuestros socios fundadores.</p>
                  </div>
                </div>

              </div>
              
              <div className="commitments-img-wrapper">
                <img src={aboutCommitment} alt="Nuestro compromiso procesal" className="commitments-img" />
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
