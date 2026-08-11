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
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop" alt="Sobre Staff Jurídico Harowi" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Abogados comprometidos<br/>con la igualdad & la justicia.</h1>
              <p className="hero-subtitle">
                Desde {brandConfig.foundedYear}, trabajamos incansablemente por la protección efectiva de tus derechos con ética, firmeza y transparencia.
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
                En {brandConfig.foundedYear}, nuestro socio fundador {brandConfig.titular.name} consolidó Staff Jurídico Harowi como un equipo de abogados especializados en derecho impulsados por un propósito central: luchar incondicionalmente por la igualdad y la justicia.
              </p>
              
              <blockquote className="history-quote">
                "Creemos que la abogacía cobra su verdadero sentido cuando se pone al servicio de la justicia, la equidad y la defensa firme de quienes lo necesitan."
              </blockquote>
              
              <p className="history-text">
                Nos distingue una labor transparente, cercana y profundamente ética en el patrocinio de cada causa, enfrentando las arbitrariedades y garantizando que cada patrocinado cuente con un respaldo jurídico de primer nivel.
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
                Defendemos cada causa con la firmeza técnica que exige la tutela real de tus derechos e intereses.
              </h2>
              <p className="philosophy-subtext">
                Entendemos el Derecho como una herramienta de protección y restauración de la equidad en la sociedad. Por ello, abordamos cada expediente con máxima dedicación y responsabilidad procesal.
              </p>
            </div>
            <div className="philosophy-img-wrapper">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop" alt="Nuestra filosofía por la justicia" className="philosophy-img" />
            </div>
          </div>
        </section>

        {/* 4. COMMITMENTS SECTION */}
        <section className="commitments-section section-padding">
          <div className="container">
            <div className="section-label">PILAR Y COMPROMISO</div>
            <h2 className="team-grid-title" style={{ marginBottom: '4rem' }}>Valores rectores de nuestro ejercicio profesional.</h2>
            
            <div className="commitments-layout">
              <div className="commitments-list">
                
                <div className="commitment-item">
                  <div className="commitment-number">1</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Lucha incondicional por la igualdad.</h3>
                    <p className="commitment-desc">Garantizamos que cada persona cuente con una defensa justa e intransigente ante cualquier arbitrariedad.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">2</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Rigor técnico y transparencia absoluta.</h3>
                    <p className="commitment-desc">Informamos al patrocinado el estado real de su proceso con claridad, sin promesas irreales ni tecnicismos confusos.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">3</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Compromiso humano y ética procesal.</h3>
                    <p className="commitment-desc">Acompañamos a nuestros clientes con un enfoque de empatía, firmeza procesal y secreto profesional inquebrantable.</p>
                  </div>
                </div>

              </div>
              
              <div className="commitments-img-wrapper">
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" alt="Nuestro compromiso ético" className="commitments-img" />
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
