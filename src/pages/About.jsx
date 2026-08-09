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
            <img src={aboutHero} alt="Sobre Ocampos & Sifuentes Abogados" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <div className="hero-text">
              <div className="section-label" style={{ marginBottom: '1rem' }}>NUESTRO ESTUDIO BOUTIQUE</div>
              <h1 className="hero-title">Tradición Jurídica,<br/>Trato Cercano & Excelencia.</h1>
              <p className="hero-subtitle">
                Desde 1998, Ocampos & Sifuentes Abogados ofrece una asesoría jurídica artesanal y personalizada en derecho patrimonial, sucesiones y derecho familiar en Trujillo.
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
                Fundada en el corazón histórico de Trujillo por los doctores <strong>Carlos Ocampos y Elena Sifuentes</strong>, nuestra firma nació con el propósito deliberado de ser un estudio boutique exclusivo, donde cada cliente recibe la atención directa e ininterrumpida de sus socios principales.
              </p>
              
              <blockquote className="history-quote">
                "Creemos en el valor de la abogacía hecha a mano: rigurosa, confidencial y orientada a la protección integral de las personas y sus patrimonios."
              </blockquote>
              
              <p className="history-text">
                A través de más de 25 años de trayectoria, nos hemos consolidado como los abogados de confianza de generaciones de familias y empresarios en la región La Libertad.
              </p>
            </div>
          </div>
          
          <Stats />
        </section>

        {/* 3. PHILOSOPHY SECTION */}
        <section className="philosophy-section section-padding">
          <div className="container philosophy-layout">
            <div className="philosophy-text-container">
              <div className="section-label">FILOSOFÍA BOUTIQUE</div>
              <h2 className="philosophy-quote">
                Abogacía de autor donde la confidencialidad y el rigor ético son el cimiento de cada solución.
              </h2>
              <p className="philosophy-subtext">
                Rechazamos los procesos masivos o despersonalizados. Cada contrato, testamento o negociación es analizado con dedicación artesanal por nuestros socios fundadores.
              </p>
            </div>
            <div className="philosophy-img-wrapper">
              <img src={aboutPhilosophy} alt="Nuestra filosofía artesanal" className="philosophy-img" />
            </div>
          </div>
        </section>

        {/* 4. COMMITMENTS SECTION */}
        <section className="commitments-section section-padding">
          <div className="container">
            <div className="section-label">VALORES FUNDAMENTALES</div>
            <h2 className="team-grid-title" style={{ marginBottom: '4rem' }}>Compromisos de Ocampos & Sifuentes.</h2>
            
            <div className="commitments-layout">
              <div className="commitments-list">
                
                <div className="commitment-item">
                  <div className="commitment-number">1</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Atención Senior Directa.</h3>
                    <p className="commitment-desc">Su asunto es atendido personalmente por nuestros socios principales, sin intermediaciones ni delegaciones.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">2</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Confidencialidad y Sigilo Absoluto.</h3>
                    <p className="commitment-desc">Resguardamos la intimidad y el honor de su patrimonio y entorno familiar con la máxima reserva profesional.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">3</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Rigor en la Contratación Civil.</h3>
                    <p className="commitment-desc">Redacción artesanal impecable para garantizar la validez inexpugnable de sus contratos e instrumentos.</p>
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
              <h2 className="team-preview-title">Socios Fundadores.</h2>
              <p className="team-preview-subtitle">Dres. Carlos Ocampos y Elena Sifuentes</p>
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
              <Link to="/equipo" className="btn btn-outline-dark" style={{ padding: '0.75rem 2rem' }}>Ver perfiles completos</Link>
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
