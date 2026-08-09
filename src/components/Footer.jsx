import { Link } from 'react-router-dom';
import { brandConfig } from '../config/brandConfig';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-gray)', padding: '3.5rem 0 2.5rem 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <img src="/logo.png" alt={brandConfig.name} style={{ height: '56px', width: 'auto', marginBottom: '0.75rem', display: 'block' }} />
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', maxWidth: '380px', margin: 0 }}>
              {brandConfig.subtitle}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap' }}>
            <Link to="/" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-white)' }}>Inicio</Link>
            <Link to="/nosotros" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-white)' }}>Nosotros</Link>
            <Link to="/servicios" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-white)' }}>Servicios</Link>
            <Link to="/equipo" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-white)' }}>Equipo</Link>
            <Link to="/contacto" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-white)' }}>Contacto</Link>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.75rem', fontSize: '0.85rem', fontFamily: 'var(--font-sans)' }}>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} {brandConfig.name}. Todos los derechos reservados.</p>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)' }}>
            Diseñado y desarrollado por <a href="https://kactilabs.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', fontWeight: 600, textDecoration: 'underline' }}>Kacti Labs</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
