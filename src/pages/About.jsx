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
import '../pages/TeamPage.css';
import './About.css';

export default function About() {
  const previewTeam = teamMembers.slice(0, 3);

  return (
    <div className="about-page">
      {/* 1. HERO */}
      <div className="hero-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <section className="hero">
          <div className="hero-bg">
            <img src={aboutHero} alt="Sobre Escalante, Ulloa & Asociados" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <div className="hero-text">
              <div className="section-label" style={{ marginBottom: '1rem' }}>SOBRE NOSOTROS</div>
              <h1 className="hero-title">Solidez Jurídica,<br/>Integridad & Compromiso.</h1>
              <p className="hero-subtitle">
                Desde 2008, Escalante, Ulloa & Asociados brinda patrocinio técnico legal y consultoría corporativa de la más alta solvencia en Trujillo y el norte del Perú.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div style={{ backgroundColor: 'var(--color-light-bg)' }}>
        {/* 2. HISTORY SECTION */}
        <section className="history-section section-padding">
          <div className="container">
            <div className="section-label" style={{ textAlign: 'center', marginBottom: '2rem' }}>NUESTRA FIRMA</div>
            <div className="history-content">
              <p className="history-text">
                Fundado en {brandConfig.foundedYear} en Trujillo por el <strong>Dr. Carlos Escalante</strong> y el <strong>Dr. Miguel Ulloa</strong>, nuestro estudio nació con el propósito de ofrecer a corporaciones, empresas familiares y personas naturales una defensa legal de impecable rigor técnico y estrategia preventiva.
              </p>
              
              <blockquote className="history-quote">
                "El ejercicio de la abogacía exige solvencia técnica absoluta, ética inquebrantable y un compromiso leal con la defensa del patrimonio de nuestros representados."
              </blockquote>
              
              <p className="history-text">
                A lo largo de cerca de dos décadas, hemos consolidado una práctica distinguida en litigación compleja, arbitrajes comerciales, derecho societario y compliance penal corporativo en la región La Libertad.
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
                Creemos que la solidez legal es la piedra angular para el éxito corporativo y la tranquilidad patrimonial.
              </h2>
              <p className="philosophy-subtext">
                Combinamos una rigurosa formación dogmática con una visión práctica del derecho de empresa, asegurando que cada patrocino reciba atención personalizada y estratégica por parte de nuestros socios principales.
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
            <div className="section-label">NUESTROS VALORES</div>
            <h2 className="team-grid-title" style={{ marginBottom: '4rem' }}>Principios institucionales que rigen nuestra firma.</h2>
            
            <div className="commitments-layout">
              <div className="commitments-list">
                
                <div className="commitment-item">
                  <div className="commitment-number">1</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Rigor Técnico y Preparación Meticulosa.</h3>
                    <p className="commitment-desc">Analizamos cada expediente y contrato hasta en su más mínimo detalle procesal o dogmático para garantizar la mejor estrategia probatoria.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">2</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Solvencia Ética e Integridad.</h3>
                    <p className="commitment-desc">La transparencia absoluta en la relación abogado-cliente es nuestro compromiso irrenunciable. Informamos la viabilidad objetiva de cada caso.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <div className="commitment-number">3</div>
                  <div className="commitment-content">
                    <h3 className="commitment-title">Lealtad y Protección del Cliente.</h3>
                    <p className="commitment-desc">Defendemos los derechos patrimoniales y personales con firmeza, confidencialidad y lealtad irrestricta.</p>
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
              <h2 className="team-preview-title">Liderado por Socios Principales.</h2>
              <p className="team-preview-subtitle">Dr. Carlos Escalante & Dr. Miguel Ulloa</p>
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

        {/* 6. CTA DE CIERRE */}
        <CTA />
        
        {/* 7. CONTACTO */}
        <Contact />

      </div>
    </div>
  );
}
