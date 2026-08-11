import { teamMembers } from '../data/teamData';
import './Team.css';

export default function Team() {
  return (
    <section className="team-section">
      <div className="container">
        <div className="team-header">
          <div className="section-label">Nuestros Abogados</div>
          <h2 className="team-title">Líderes procesales de amplia trayectoria.</h2>
          <p className="team-subtitle">
            Un equipo enfocado en la preparación técnica rigurosa y en ganar tu caso en juzgados y tribunales.
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
