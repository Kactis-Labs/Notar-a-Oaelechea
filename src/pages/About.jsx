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
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop" alt="Sobre nosotros" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <div className="hero-text">
              <div className="section-label light" style={{ marginBottom: '1rem' }}>SOBRE NOSOTROS</div>
              <h1 className="hero-title">Defensa Jurídica Estratégica,<br/>Rigor & Compromiso.</h1>
              <p className="hero-subtitle">
                Desde {brandConfig.foundedYear}, defendemos los derechos e intereses de familias y corporaciones en todo el Perú. Conoce nuestra visión y compromiso legal.
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
                En {brandConfig.foundedYear}, nuestro socio fundador {brandConfig.titular.name} asumió la defensa de un complejo caso patrimonial que comprometía el patrimonio de toda una vida. La estrategia procesal planteada logró un fallo histórico que sentó un precedente favorable.
              </p>
              
              <blockquote className="history-quote">
                "Ese caso nos demostró que el ejercicio del derecho no es solo aplicar normas, sino diseñar defensas contundentes para proteger los activos y derechos de quienes confían en nosotros."
              </blockquote>
              
              <p className="history-text">
                Hoy nuestra firma cuenta con especialistas de primer nivel en Derecho Civil, Laboral, Propiedad Intelectual y Asesoría Empresarial, manteniendo el mismo estándar de rigor técnico y personalización.
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
                Creemos que una solución legal efectiva no se limita a un escrito. Es la certeza de saber que tus derechos y activos están totalmente blindados.
              </h2>
              <p className="philosophy-subtext">
                Cada asunto legal exige una visión analítica personalizada. Combinamos el conocimiento dogmático con un enfoque práctico orientado a la prevención de contingencias y la victoria en litigios.
              </p>
            </div>
            <div className="philosophy-img-wrapper">
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop" alt="Nuestra filosofía" className="philosophy-img" />
            </div>
          </div>
        </section>

        {/* 4. COMMITMENTS SECTION */}
        <section className="commitments-section section-padding">
          <div className="container">
            <div className="section-label">NUESTROS PILARES</div>
            <h2 className="team-grid-title" style={{ marginBottom: '4rem' }}>Compromisos fundamentales con cada cliente.</h2>
            
            <div className="commitments-layout">
              <div className="commitments-list">
                
                <div className="commitment-item">
                  <div className="commitment-number">1</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Diagnóstico objetivo e inobjetable.</h3>
                    <p className="commitment-desc">Evaluamos la viabilidad real de su caso en la primera consulta, brindando proyecciones jurídicas fundamentadas sin falsas expectativas.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">2</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Estrategia técnica y preventiva.</h3>
                    <p className="commitment-desc">Prevenimos contingencias legales antes de que se conviertan en litigios costosos, optimizando recursos y tiempos procesales.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">3</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Patrocinio dinámico y constante.</h3>
                    <p className="commitment-desc">Mantenemos informado al cliente de cada impulso procesal, recurso interpuesto y estado del trámite en tiempo real.</p>
                  </div>
                </div>

              </div>
              
              <div className="commitments-img-wrapper">
                <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop" alt="Nuestro compromiso" className="commitments-img" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. PREVIEW DE EQUIPO */}
        <section className="team-preview-section section-padding">
          <div className="container">
            <div className="team-preview-header">
              <h2 className="team-preview-title">Los profesionales que atenderán su caso.</h2>
              <p className="team-preview-subtitle">Abogados especialistas. Solidez y defensa estratégica.</p>
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
