import { brandConfig } from '../config/brandConfig';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-gray)', padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.9rem' }}>
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
          <a href="/contacto" style={{ color: 'var(--color-gray)' }}>Contacto</a>
        </div>
      </div>
    </footer>
  );
}
