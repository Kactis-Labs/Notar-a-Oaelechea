import { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'framer-motion';
import './Stats.css';

function AnimatedCounter({ value, duration = 2.5, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const target = parseFloat(value);
      const controls = animate(0, target, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => setCount(latest)
      });
      return controls.stop;
    }
  }, [isInView, value, duration]);

  const isFloat = value.includes('.');
  const displayCount = isFloat ? count.toFixed(1) : Math.floor(count).toLocaleString('en-US');
  
  return <span ref={ref}>{prefix}{displayCount}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-bg-shape">
        <svg viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <path d="M-100,200 C300,400 400,0 600,200 C800,400 900,-100 1300,100" stroke="#E2E8F0" strokeWidth="120" strokeLinecap="round" opacity="0.4" />
          <path d="M-100,500 C200,600 400,300 700,500 C1000,700 1100,200 1300,400" stroke="#E2E8F0" strokeWidth="120" strokeLinecap="round" opacity="0.4" />
        </svg>
      </div>
      
      <div className="container stats-container">
        <div className="section-label">Números que Respaldan</div>
        
        <div className="stats-grid">
          <div className="stat-item">
            <h3 className="stat-number"><AnimatedCounter value="5000" suffix="+" /></h3>
            <p className="stat-label">Casos y Asesorías Exitosas</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number"><AnimatedCounter value="99.2" suffix="%" /></h3>
            <p className="stat-label">Efectividad Procesal y Consultiva</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number"><AnimatedCounter value="15" suffix="+" /></h3>
            <p className="stat-label">Años de Liderazgo Jurídico en Trujillo</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number"><AnimatedCounter value="100" suffix="%" /></h3>
            <p className="stat-label">Compromiso Ético y Confidencialidad</p>
          </div>
        </div>
      </div>
    </section>
  );
}
