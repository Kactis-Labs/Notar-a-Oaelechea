import { teamMembers } from '../data/teamData';
import './Team.css';

export default function Team() {
  return (
    <section className="team-section">
      <div className="container">
        <div className="team-header">
          <div className="section-label">Socios y Equipo Especializado</div>
          <h2 className="team-title">Liderazgo Jurídico de Clase Mundial</h2>
          <p className="team-subtitle">
            Nuestros socios y asociados combinan rigor analítico, trayectoria transfronteriza y un compromiso inquebrantable con la confidencialidad.
          </p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div className="team-card" key={member.id || idx}>
              <div className="team-img-wrapper">
                <img src={member.img} alt={member.name} className="team-img" />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-exp">{member.exp}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
