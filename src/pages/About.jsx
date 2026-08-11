import { Link } from 'react-router-dom';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import { teamMembers } from '../data/teamData';
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
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop" alt="Sobre Arce & Asociados" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Resultados en el menor tiempo,<br/>priorizando al cliente.</h1>
              <p className="hero-subtitle">
                Somos un estudio jurídico moderno orientado a la obtención de soluciones legales efectivas. Conozca a nuestra firma.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div style={{ backgroundColor: 'var(--color-cream)' }}>
        {/* 2. HISTORY SECTION */}
        <section className="history-section section-padding">
          <div className="container">
            <div className="section-label" style={{ textAlign: 'center', marginBottom: '2rem' }}>SOBRE NOSOTROS</div>
            <div className="history-content">
              <p className="history-text">
                Arce & Asociados es un estudio jurídico moderno, orientado a la obtención de resultados en el más corto plazo posible, priorizando al cliente y sus necesidades en cada etapa del proceso.
              </p>
              
              <blockquote className="history-quote">
                "Desde la primera reunión hallarás en nosotros la confianza y seguridad necesarias para resolver tu problema legal en el menor tiempo posible."
              </blockquote>
              
              <p className="history-text">
                Sus asociados han sido minuciosamente elegidos, según su especialidad y su capacidad de resolver problemas, poniendo al servicio del cliente toda su experiencia, rigor técnico y conocimiento actualizado.
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
                Trabajamos con determinación procesal para brindar respuestas ágiles, transparentes y libres de dilaciones innecesarias.
              </h2>
              <p className="philosophy-subtext">
                Comprendemos que el tiempo es un factor crítico para las personas y las empresas. Por ello, diseñamos estrategias eficientes que resuelven contingencias legales con absoluta seguridad.
              </p>
            </div>
            <div className="philosophy-img-wrapper">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop" alt="Nuestra filosofía" className="philosophy-img" />
            </div>
          </div>
        </section>

        {/* 4. COMMITMENTS SECTION */}
        <section className="commitments-section section-padding">
          <div className="container">
            <div className="section-label">NUESTROS PILARES</div>
            <h2 className="team-grid-title" style={{ marginBottom: '4rem' }}>Principios de actuación de nuestros asociados.</h2>
            
            <div className="commitments-layout">
              <div className="commitments-list">
                
                <div className="commitment-item">
                  <div className="commitment-number">1</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Alta capacidad resolutiva.</h3>
                    <p className="commitment-desc">Asociados elegidos minuciosamente para abordar cada caso con la máxima capacidad técnica y enfoque pragmático.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">2</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Prioridad absoluta en el cliente.</h3>
                    <p className="commitment-desc">Colocamos las necesidades e intereses de nuestros clientes al centro de cada estrategia legal y decisión procesal.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">3</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Confianza y seguridad desde el primer día.</h3>
                    <p className="commitment-desc">Garantizamos absoluta transparencia, comunicación constante y seguridad jurídica desde la primera reunión de trabajo.</p>
                  </div>
                </div>

              </div>
              
              <div className="commitments-img-wrapper">
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" alt="Nuestro compromiso" className="commitments-img" />
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
