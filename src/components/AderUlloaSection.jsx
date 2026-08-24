import { Link } from 'react-router-dom';
import { Award, CheckCircle, ArrowRight } from 'lucide-react';
import imgAderUlloa from '../assets/dr-ader-ulloa.webp';
import './AderUlloaSection.css';

export default function AderUlloaSection() {
  const recognitions = [
    'Socio Fundador de la firma y Director del Área de Litigación Penal Estratégica',
    'Especialista en defensa técnica procesal en investigaciones fiscales y juicios orales complejos',
    'Más de 2,500 patrocinios penales y resoluciones favorables obtenidas',
    'Atención presencial en Trujillo y dirección de audiencias a nivel nacional'
  ];

  return (
    <section className="ader-section" id="ader-ulloa">
      <div className="container">
        
        <div className="section-label" style={{ marginBottom: '2rem' }}>
          Socio Fundador &bull; Litigación Penal
        </div>

        <div className="ader-layout">
          <div className="ader-info">
            <h2 className="ader-name">Dr. Ader Ulloa Velásquez</h2>
            <p className="ader-role">
              Socio Fundador &middot; Área Penal &middot; +2,500 Patrocinios Favorables
            </p>
            
            <p className="ader-bio">
              &ldquo;Mi trabajo no consiste únicamente en asistir a una audiencia. Consiste en estudiar cada expediente, identificar aquello que otros pasaron por alto y construir una estrategia de defensa con riguroso fundamento jurídico.&rdquo;
            </p>
            
            <p className="ader-bio" style={{ fontSize: '0.98rem', color: 'var(--color-text-muted)' }}>
              Frente a una imputación penal, el tiempo y la precisión probatoria son determinantes. Lidera el patrocinio procesal en investigaciones fiscales, audiencias de prisión preventiva y juicios orales con solvencia dogmática y lealtad técnica.
            </p>
            
            <div className="ader-registry">
              <CheckCircle size={20} style={{ color: 'var(--color-gold)' }} />
              <span>Colegio de Abogados de La Libertad (CALL)</span>
            </div>

            <div className="ader-recognitions">
              <h3 className="recognitions-title">Distinciones y Trayectoria</h3>
              <ul>
                {recognitions.map((rec, idx) => (
                  <li key={idx}>
                    <Award size={18} style={{ color: 'var(--color-gold)' }} />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/equipo" className="btn btn-outline-dark">
                Conoce al resto del equipo legal <ArrowRight size={16} style={{ marginLeft: '0.35rem' }} />
              </Link>
            </div>
          </div>

          <div className="ader-image-wrapper">
            <img 
              src={imgAderUlloa} 
              alt="Dr. Ader Ulloa Velásquez - Abogado Penalista Fundador" 
              className="ader-image"
              width="480"
              height="580"
              loading="lazy"
            />
            <div className="ader-image-deco"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
