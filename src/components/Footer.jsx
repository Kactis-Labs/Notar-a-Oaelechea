import { brandConfig } from '../config/brandConfig';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1B3A6B', color: '#E0E7F1', padding: '3.5rem 0 2.5rem', borderTop: '1px solid rgba(232, 163, 61, 0.25)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <img src="/logo.svg" alt={brandConfig.name} style={{ height: '76px', marginBottom: '0.75rem' }} />
            <p style={{ fontSize: '0.9rem', color: '#E0E7F1', maxWidth: '420px', opacity: 0.9 }}>
              Firma legal corporativa especializada en consultoría mercantil, litigios de alta complejidad y fiscalidad en Trujillo.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
            <a href={brandConfig.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF' }}>LinkedIn</a>
            <a href={brandConfig.social.facebook} target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF' }}>Facebook</a>
            <a href="/contacto" style={{ color: '#FFFFFF' }}>Contacto</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: '#E0E7F1' }}>
          <p>&copy; {new Date().getFullYear()} {brandConfig.name}. Todos los derechos reservados.</p>
          <p>
            Diseñado y desarrollado por{' '}
            <a 
              href="https://kactilabs.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#E8A33D', fontStyle: 'normal', textDecoration: 'none', fontWeight: 700 }}
            >
              Kacti Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
