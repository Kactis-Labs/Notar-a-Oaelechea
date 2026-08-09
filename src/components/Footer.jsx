import { brandConfig } from '../config/brandConfig';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F2137', color: '#E2E8F0', padding: '3.5rem 0 2.5rem', borderTop: '1px solid rgba(196, 139, 40, 0.3)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <img src="/logo.svg" alt={brandConfig.name} style={{ height: '76px', marginBottom: '0.75rem' }} />
            <p style={{ fontSize: '0.9rem', color: '#94A3B8', maxWidth: '440px', lineHeight: 1.6 }}>
              {brandConfig.tagline}. Soluciones jurídicas integrales, patrocinio judicial y asesoría corporativa de alto impacto en Trujillo.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
            <a href={brandConfig.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF' }}>LinkedIn</a>
            <a href={brandConfig.social.facebook} target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF' }}>Facebook</a>
            <a href="/contacto" style={{ color: '#FFFFFF' }}>Contacto</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: '#94A3B8' }}>
          <p>&copy; {new Date().getFullYear()} {brandConfig.name}. Todos los derechos reservados.</p>
          <p>
            Diseñado y desarrollado por{' '}
            <a 
              href="https://kactilabs.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#C48B28', fontStyle: 'normal', textDecoration: 'none', fontWeight: 700 }}
            >
              Kacti Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
