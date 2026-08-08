import { Link } from 'react-router-dom';
import { brandConfig } from '../config/brandConfig';

export default function NotFound() {
  return (
    <div className="section-padding container" style={{ minHeight: '65vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div className="section-label" style={{ marginBottom: '1rem' }}>ERROR 404</div>
      <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', marginBottom: '1rem' }}>
        Página no encontrada
      </h1>
      <p style={{ maxWidth: '500px', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
        Lo sentimos, la página o documento que busca en <strong>{brandConfig.name}</strong> no existe o ha sido movida.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" className="btn btn-primary">
          Regresar al inicio
        </Link>
        <Link to="/servicios" className="btn btn-outline-dark">
          Ver nuestros servicios
        </Link>
      </div>
    </div>
  );
}
