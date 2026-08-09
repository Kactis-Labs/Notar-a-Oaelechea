import { brandConfig } from '../config/brandConfig';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F1E3D', color: '#E2E8F0', padding: '3.5rem 0 2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <img src="/logo.svg" alt={brandConfig.name} style={{ height: '40px', marginBottom: '0.75rem' }} />
            <p style={{ fontSize: '0.9rem', color: '#94A3B8', maxWidth: '400px' }}>
              Estudio jurídico especializado en soluciones legales prácticas y prevención de riesgos corporativos en Lima y Trujillo.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
            <a href={brandConfig.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#E2E8F0', transition: 'color 0.2s' }}>LinkedIn</a>
            <a href={brandConfig.social.facebook} target="_blank" rel="noopener noreferrer" style={{ color: '#E2E8F0', transition: 'color 0.2s' }}>Facebook</a>
            <a href="/contacto" style={{ color: '#E2E8F0', transition: 'color 0.2s' }}>Contacto</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: '#94A3B8' }}>
          <p>&copy; {new Date().getFullYear()} {brandConfig.name}. Todos los derechos reservados.</p>
          <p>
            Diseñado y desarrollado por{' '}
            <a 
              href="https://kactilabs.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#F2994A', fontWeight: 600, textDecoration: 'none' }}
            >
              Kacti Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

