import { Link } from 'react-router-dom';
import { brandConfig } from '../config/brandConfig';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-gray)', padding: '3.5rem 0 2rem 0', borderTop: '1px solid rgba(245, 197, 24, 0.15)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '2rem' }}>
          <Link to="/" style={{ display: 'inline-block' }}>
            <img src="/logo.svg" alt={brandConfig.name} style={{ height: '52px', width: 'auto' }} />
          </Link>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
            <Link to="/nosotros" style={{ color: 'var(--color-gray)' }}>Nosotros</Link>
            <Link to="/servicios" style={{ color: 'var(--color-gray)' }}>Servicios</Link>
            <Link to="/equipo" style={{ color: 'var(--color-gray)' }}>Equipo</Link>
            <Link to="/contacto" style={{ color: 'var(--color-gray)' }}>Contacto</Link>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem' }}>
          <p>&copy; {new Date().getFullYear()} {brandConfig.name}. Todos los derechos reservados.</p>
          <p style={{ fontSize: '0.85rem' }}>
            Diseñado y desarrollado por{' '}
            <a 
              href="https://kactilabs.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'var(--color-gold)', fontWeight: 600, textDecoration: 'underline' }}
            >
              Kacti Labs
            </a>
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href={brandConfig.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gray)' }}>LinkedIn</a>
            <a href={brandConfig.social.facebook} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gray)' }}>Facebook</a>
            <a href={brandConfig.social.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gray)' }}>Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
