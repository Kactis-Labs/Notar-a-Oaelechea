import { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'framer-motion';
import './Stats.css';

function AnimatedCounter({ value, duration = 2.5, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const target = parseInt(value);
      const controls = animate(0, target, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest))
      });
      return controls.stop;
    }
  }, [isInView, value, duration]);

  const displayCount = count.toLocaleString('en-US');
  
  return <span ref={ref}>{displayCount}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-bg-shape">
        <svg viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <path d="M-100,200 C300,400 400,0 600,200 C800,400 900,-100 1300,100" stroke="#E5E5E5" strokeWidth="120" strokeLinecap="round" opacity="0.4" />
          <path d="M-100,500 C200,600 400,300 700,500 C1000,700 1100,200 1300,400" stroke="#E5E5E5" strokeWidth="120" strokeLinecap="round" opacity="0.4" />
        </svg>
      </div>
      
      <div className="container stats-container">
        <div className="section-label">Números que respaldan</div>
        
        <div className="stats-grid">
          <div className="stat-item">
            <h3 className="stat-number"><AnimatedCounter value="12000" suffix="+" /></h3>
            <p className="stat-label">Trámites realizados</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number"><AnimatedCounter value="98" suffix="%" /></h3>
            <p className="stat-label">Casos sin observaciones</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number"><AnimatedCounter value="30" suffix="+" /></h3>
            <p className="stat-label">Años de experiencia</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number"><AnimatedCounter value="15" /></h3>
            <p className="stat-label">Distritos atendidos en Lima</p>
          </div>
        </div>
      </div>
    </section>
  );
}
