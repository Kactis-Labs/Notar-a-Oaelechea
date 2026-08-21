import aboutCommitment from '../assets/about-values.webp';
import './Methodology.css';

const methodSteps = [
  {
    num: '1',
    label: '01. Escuchamos.',
    desc: 'Entendemos qué ocurrió, los hechos reales y el contexto humano antes de revisar el expediente.'
  },
  {
    num: '2',
    label: '02. Estudiamos.',
    desc: 'Análisis dogmático minucioso de cada foja de la carpeta fiscal o judicial, pericias y elementos probatorios.'
  },
  {
    num: '3',
    label: '03. Identificamos.',
    desc: 'Detectamos vulneraciones al debido proceso, atipicidades jurídicas y fallas probatorias de la contraparte.'
  },
  {
    num: '4',
    label: '04. Diseñamos.',
    desc: 'Trazamos la teoría del caso y la estrategia técnica procesal antes de asistir a cualquier audiencia.'
  },
  {
    num: '5',
    label: '05. Defendemos.',
    desc: 'Litigamos con firmeza técnica, argumentación jurídica sólida y lealtad irrestricta a la causa.'
  }
];

export default function Methodology() {
  return (
    <section className="commitments-section section-padding" id="metodo">
      <div className="container">
        
        <div className="section-label">NUESTRO MÉTODO</div>
        <h2 className="team-grid-title" style={{ marginBottom: '3.5rem' }}>
          La defensa no se improvisa. Se construye.
        </h2>

        <div className="commitments-layout">
          <div className="commitments-list">
            {methodSteps.map((step) => (
              <div className="commitment-item" key={step.num}>
                <div className="commitment-number">{step.num}</div>
                <div className="commitment-content">
                  <h3 className="commitment-title">{step.label}</h3>
                  <p className="commitment-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="commitments-img-wrapper">
            <img 
              src={aboutCommitment} 
              alt="Método y compromiso - Escalante, Ulloa y Asociados" 
              className="commitments-img"
              style={{ height: '620px' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
