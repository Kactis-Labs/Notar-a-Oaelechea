import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { teamMembers } from '../data/teamData';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import '../pages/ServicesPage.css'; // For compact-hero
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  const teamMember = teamMembers.find(m => m.id === service.teamMemberId) || teamMembers[0];

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="compact-hero">
        <div className="compact-hero-bg">
          <img src={service.heroImg} alt={service.title} />
          <div className="compact-hero-overlay"></div>
        </div>
        <div className="container compact-hero-content">
          <div className="section-label">TRÁMITE</div>
          <h1 className="compact-hero-title">{service.title}</h1>
          <p className="compact-hero-subtitle">{service.shortDesc}</p>
          <div className="hero-actions" style={{ marginTop: '2rem' }}>
            <Link to="/agendar-cita" className="btn btn-primary">Agendar consulta</Link>
            <Link to="/servicios" className="btn btn-outline">Ver otros servicios</Link>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="service-detail-content section-padding">
        <div className="container service-layout">
          <div className="service-main">
            <h2>Sobre este trámite</h2>
            {service.detailedDesc.map((p, idx) => (
              <p key={idx} className="service-paragraph">{p}</p>
            ))}

            <div className="service-block">
              <h3>¿Para quién aplica?</h3>
              <p>{service.whoItAppliesTo}</p>
            </div>

            <div className="service-block">
              <h3>¿Qué problema resuelve?</h3>
              <p>{service.whatProblemItSolves}</p>
            </div>

            <div className="service-block requirements-block">
              <h3>Requisitos</h3>
              <ul className="requirements-list">
                {service.requirements.map((req, idx) => (
                  <li key={idx}>
                    <CheckCircle className="req-icon" size={20} />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {service.tiempoEstimado && (
              <div className="service-block time-block">
                <h3>Tiempo Estimado</h3>
                <p><strong>{service.tiempoEstimado}</strong> (Sujeto a validación de documentos)</p>
              </div>
            )}
          </div>

          <aside className="service-sidebar">
            <div className="sticky-sidebar">
              <h4 className="sidebar-title">Responsable del trámite</h4>
              <div className="team-card sidebar-team-card">
                <div className="team-img-wrapper">
                  <img src={teamMember.img} alt={teamMember.name} className="team-img" />
                </div>
                <h3 className="team-name">{teamMember.name}</h3>
                <p className="team-role">{teamMember.role}</p>
                <p className="team-exp">{teamMember.exp}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTA />
      <Contact />
    </div>
  );
}
