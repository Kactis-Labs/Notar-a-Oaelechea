import { Link } from 'react-router-dom';
import { teamMembers } from '../data/teamData';
import './Team.css';

export default function Team() {
  return (
    <section className="team-section">
      <div className="container">
        <div className="team-header">
          <div className="section-label">Nuestro Equipo</div>
          <h2 className="team-title">Solvencia profesional e integridad.</h2>
          <p className="team-subtitle">
            Liderados por los doctores Jorge Escalante, Ader Ulloa y Víctor Gonzales, nuestra firma reúne amplia solvencia técnica procesal y consultoría estratégica.
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

        <div className="team-footer-action">
          <Link to="/equipo" className="btn btn-outline-dark team-cta-btn">
            Conocer al equipo completo
          </Link>
        </div>
      </div>
    </section>
  );
}
