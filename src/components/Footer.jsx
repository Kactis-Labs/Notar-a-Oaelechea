import { brandConfig } from '../config/brandConfig';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-gray)', padding: '3.5rem 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.9rem' }}>
        <div>
          <p>&copy; {new Date().getFullYear()} {brandConfig.name}. Todos los derechos reservados.</p>
          <p style={{ marginTop: '0.35rem', fontSize: '0.82rem', opacity: 0.85 }}>
            Diseñado y desarrollado por <a href="https://kactilabs.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)', textDecoration: 'underline', fontWeight: 600 }}>Kacti Labs</a>
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href={brandConfig.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gray)', transition: 'color 0.2s' }}>LinkedIn</a>
          <a href={brandConfig.social.facebook} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gray)', transition: 'color 0.2s' }}>Facebook</a>
          <a href="/contacto" style={{ color: 'var(--color-gray)', transition: 'color 0.2s' }}>Contacto</a>
        </div>
      </div>
    </footer>
  );
}
