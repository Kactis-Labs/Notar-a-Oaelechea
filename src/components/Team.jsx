import { teamMembers } from '../data/teamData';
import './Team.css';

export default function Team() {
  return (
    <section className="team-section">
      <div className="container">
        <div className="team-header">
          <div className="section-label">Nuestro Equipo</div>
          <h2 className="team-title">Abogados comprometidos con brindar asesoría legal confiable.</h2>
          <p className="team-subtitle">
            Atendemos casos en diversas ramas del Derecho, priorizando siempre los intereses de nuestros clientes para lograr soluciones eficaces y justas.
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
