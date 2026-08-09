import { Link } from 'react-router-dom';
import { brandConfig } from '../config/brandConfig';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#000000', color: '#B8B4AC', padding: '4rem 0 3rem 0', borderTop: '1px solid rgba(184,180,172,0.15)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '2.5rem' }}>
          <div>
            <img src="/logo.svg" alt={brandConfig.name} style={{ height: '56px', width: 'auto', marginBottom: '0.75rem', display: 'block' }} />
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: '#B8B4AC', maxWidth: '360px', margin: 0 }}>
              {brandConfig.subtitle}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <Link to="/" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFFFFF' }}>Inicio</Link>
            <Link to="/nosotros" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFFFFF' }}>Nosotros</Link>
            <Link to="/servicios" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFFFFF' }}>Servicios</Link>
            <Link to="/equipo" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFFFFF' }}>Equipo</Link>
            <Link to="/contacto" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFFFFF' }}>Contacto</Link>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid rgba(184,180,172,0.1)', paddingTop: '2rem', fontSize: '0.8rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.1em' }}>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} {brandConfig.name}. Todos los derechos reservados.</p>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.4)' }}>Lima, Perú · Firma Legal de Élite</p>
        </div>
      </div>
    </footer>
  );
}
