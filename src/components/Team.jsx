import './Team.css';

const teamMembers = [
  {
    name: 'Carlos Olaechea',
    role: 'Notario Titular',
    exp: '30 Años de Experiencia',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Mariana Ríos',
    role: 'Abogada Senior',
    exp: '15 Años de Experiencia',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Fernando Vargas',
    role: 'Especialista Registral',
    exp: '12 Años de Experiencia',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Elena Torres',
    role: 'Asesora Corporativa',
    exp: '8 Años de Experiencia',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop'
  }
];

export default function Team() {
  return (
    <section className="team-section">
      <div className="container">
        <div className="team-header">
          <div className="section-label">Nuestro Equipo</div>
          <h2 className="team-title">Profesionales que conocen cada detalle.</h2>
          <p className="team-subtitle">
            Nuestro equipo no solo domina la normativa registral y notarial, sino que entiende la importancia de cada trámite para su patrimonio y tranquilidad.
          </p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div className="team-card" key={idx}>
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
