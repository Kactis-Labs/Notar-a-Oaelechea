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
            <img src="/hero-bg.png" alt="Sobre Ramírez y Abogados" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Experiencia, Compromiso &<br/>Resultados Jurídicos.</h1>
              <p className="hero-subtitle">
                Desde {brandConfig.foundedYear}, defendemos con rigor técnico e integridad los intereses de nuestros clientes. Conozca nuestra trayectoria institucional.
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
                En {brandConfig.foundedYear}, nuestro socio fundador {brandConfig.titular.name} estableció los cimientos de la firma sobre un principio irrenunciable: brindar un patrocinio legal de alta especialización, caracterizado por la ética procesal y la búsqueda constante de la excelencia.
              </p>
              
              <blockquote className="history-quote">
                "Ese caso nos enseñó el principio fundacional de nuestra firma: la abogacía es un ejercicio de máxima responsabilidad donde el análisis técnico riguroso y la ética personal determinan el destino de familias y corporaciones."
              </blockquote>
              
              <p className="history-text">
                Tras más de 25 años de ejercicio ininterrumpido, Ramírez y Abogados se consolida como una firma de referencia institucional en Lima, asesorando a empresas, instituciones y personas naturales en sus asuntos jurídicos de mayor trascendencia.
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
                Creemos que el verdadero prestigio jurídico se construye día a día con resultados tangibles, confidencialidad inquebrantable y lealtad absoluta al cliente.
              </h2>
              <p className="philosophy-subtext">
                Combinamos la tradición académica de la abogacía clásica con una visión moderna de la gestión de riesgos corporativos y la resolución de controversias.
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
            <div className="section-label">PILARES INSTITUCIONALES</div>
            <h2 className="team-grid-title" style={{ marginBottom: '4rem' }}>Principios rectores de nuestro patrocinio legal.</h2>
            
            <div className="commitments-layout">
              <div className="commitments-list">
                
                <div className="commitment-item">
                  <div className="commitment-number">1</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Rigor técnico y preparación exhaustiva.</h3>
                    <p className="commitment-desc">Estudiamos cada expediente y contingencia hasta el más mínimo detalle normativo y probatorio para garantizar la solidez de la defensa.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">2</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Confidencialidad e integridad profesional.</h3>
                    <p className="commitment-desc">Mantenemos el secreto profesional bajo los más altos estándares éticos, resguardando la información sensible de nuestros clientes.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">3</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Lealtad y atención personalizada.</h3>
                    <p className="commitment-desc">Nuestros socios lideran personalmente la estrategia procesal de cada caso, garantizando una relación de confianza directa.</p>
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
