import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';
import { servicesData } from '../data/servicesData';
import imgPenal from '../assets/service-penal.webp';
import './Services.css';

export default function Services() {
  const penalService = servicesData.find(s => s.slug === 'penal-empresa-compliance') || servicesData[1];
  const otherServices = servicesData.filter(s => s.slug !== 'penal-empresa-compliance');

  const penalScope = [
    'Investigaciones fiscales preliminares y preparatorias',
    'Audiencias de prisión preventiva y cesación',
    'Litigación técnica en juicio oral contradictorio',
    'Apelaciones de sentencia y recursos de casación',
    'Delitos patrimoniales, económicos y contra la administración pública'
  ];

  return (
    <section className="services-section" id="servicios">
      <div className="container">
        
        <div className="services-header">
          <div className="section-label">Áreas de Práctica</div>
          <h2 className="services-title">Soluciones jurídicas estratégicas.</h2>
          <p className="services-subtitle">
            Especialización técnica con liderazgo central en litigación penal y respaldo multidisciplinario integral.
          </p>
        </div>

        {/* 1. TARJETA PRINCIPAL DESTACADA: DEFENSA PENAL */}
        <div className="flagship-service-card">
          <div className="flagship-badge">
            Área Principal de Litigación
          </div>

          <div className="flagship-layout">
            <div className="flagship-img-wrapper">
              <img 
                src={imgPenal} 
                alt="Defensa Penal Estratégica - Dr. Ader Ulloa" 
                className="flagship-img"
                width="540"
                height="360"
                loading="lazy"
              />
            </div>

            <div className="flagship-content">
              <span className="flagship-lead">Dirección Técnica del Dr. Ader Ulloa</span>
              <h3 className="flagship-title">Defensa Penal y Litigación Estratégica</h3>
              <p className="flagship-desc">
                Patrocinio procesal riguroso frente a imputaciones fiscales y denuncias penales. Cuando la libertad, el honor o el patrimonio están en riesgo, la respuesta jurídica debe ser inmediata y fundamentada en la dogmática penal.
              </p>

              <div className="flagship-scope-block">
                <h4 className="scope-title">Cobertura y actuaciones procesales:</h4>
                <ul className="scope-list">
                  {penalScope.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={15} className="scope-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flagship-actions">
                <a 
                  href={brandConfig.contact.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  <MessageSquare size={16} style={{ marginRight: '0.2rem' }} />
                  <span>Consultar mi caso penal</span>
                </a>
                <Link to={`/servicios/${penalService.slug}`} className="btn btn-outline-dark">
                  <span>Ver detalle del área</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 2. OTRAS ÁREAS DE PRÁCTICA (DISEÑO Y TIPOGRAFÍA ORIGINAL) */}
        <div className="other-services-wrapper">
          <div className="other-services-header">
            <h3 className="other-services-title">Otras Áreas de Especialización</h3>
            <p className="other-services-sub">Respaldo técnico complementario a cargo de nuestros socios y consultores senior.</p>
          </div>

          <div className="services-grid">
            {otherServices.map((svc) => (
              <Link to={`/servicios/${svc.slug}`} key={svc.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="service-card">
                  <div className="service-img-wrapper">
                    <img 
                      src={svc.img} 
                      alt={svc.title} 
                      className="service-img" 
                      width="380"
                      height="240"
                      loading="lazy"
                    />
                  </div>
                  <div className="service-content">
                    <h4 className="service-name">{svc.title}</h4>
                    <p className="service-desc">{svc.shortDesc}</p>
                  </div>
                  <div className="service-arrow">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
