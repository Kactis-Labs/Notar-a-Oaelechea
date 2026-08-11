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
            <img src={aboutHero} alt="Sobre ATC & Asociados" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Seguridad inmobiliaria,<br/>garantía en Huaral.</h1>
              <p className="hero-subtitle">
                Desde {brandConfig.foundedYear}, acompañamos a propietarios, familias y empresas en el saneamiento físico-legal y formalización de sus activos.
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
                Constituida como Sociedad Anónima Cerrada en febrero de 2022 en el distrito de Huaral, Estudio Jurídico e Inmobiliario ATC & Asociados S.A.C. nació con el compromiso de resolver la alta informalidad dominial e inseguridad jurídica registral en la provincia.
              </p>
              
              <blockquote className="history-quote">
                "Un título de propiedad saneado e inscrito en SUNARP no es solo un trámite: es la piedra angular del crecimiento económico y la tranquilidad familiar."
              </blockquote>
              
              <p className="history-text">
                A lo largo de estos años, nuestra firma ha consolidado un equipo multidisciplinario de abogados especialistas y verificadores catastrales, brindando asesoría registral-civil de alta exigencia técnica.
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
                Unimos la rigurosidad legal con la técnica catastral para lograr la inscripción efectiva de su propiedad.
              </h2>
              <p className="philosophy-subtext">
                Evaluamos cada título desde sus antecedentes históricos registrales hasta la verificación física en campo, eliminando cualquier riesgo de tacha o duplicidad.
              </p>
            </div>
            <div className="philosophy-img-wrapper">
              <img src={aboutPhilosophy} alt="Nuestra filosofía registral" className="philosophy-img" />
            </div>
          </div>
        </section>

        {/* 4. COMMITMENTS SECTION */}
        <section className="commitments-section section-padding">
          <div className="container">
            <div className="section-label">NUESTROS COMPROMISOS</div>
            <h2 className="team-grid-title" style={{ marginBottom: '4rem' }}>Garantías irrenunciables para nuestros clientes.</h2>
            
            <div className="commitments-layout">
              <div className="commitments-list">
                
                <div className="commitment-item">
                  <div className="commitment-number">1</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Seguridad jurídica y saneamiento integral.</h3>
                    <p className="commitment-desc">Garantizamos expedientes libres de contingencias registrales, diseñados para su inscripción definitiva en SUNARP.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">2</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Transparencia y costo predecible.</h3>
                    <p className="commitment-desc">Informamos de manera clara el presupuesto y las etapas del trámite sin costos ocultos ni dilaciones innecesarias.</p>
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
