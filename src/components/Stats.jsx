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
      <div className="container stats-container">
        <div className="section-label">Indicadores de Excelencia</div>
        
        <div className="stats-grid">
          <div className="stat-item">
            <h3 className="stat-number"><AnimatedCounter value="2500" prefix="$" suffix="M+" /></h3>
            <p className="stat-label">En operaciones transaccionales y M y A estructuradas</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number"><AnimatedCounter value="99.4" suffix="%" /></h3>
            <p className="stat-label">Efectividad en procesos arbitrales y complejos</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number"><AnimatedCounter value="18" suffix="+" /></h3>
            <p className="stat-label">Años de liderazgo institucional y gobierno corporativo</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number"><AnimatedCounter value="100" suffix="%" /></h3>
            <p className="stat-label">Compromiso con la máxima confidencialidad</p>
          </div>
        </div>
      </div>
    </section>
  );
}
