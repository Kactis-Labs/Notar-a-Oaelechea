import { brandConfig } from '../config/brandConfig';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#F7F3EC', color: '#1F1B16', padding: '3.5rem 0 2.5rem', borderTop: '1px solid rgba(138, 106, 61, 0.25)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <img src="/logo-dark.svg" alt={brandConfig.name} style={{ height: '76px', marginBottom: '0.75rem' }} />
            <p style={{ fontSize: '0.925rem', color: '#6B6154', maxWidth: '440px', lineHeight: 1.6 }}>
              Firma jurídica boutique especializada en derecho patrimonial, sucesiones y asesoría familiar personalizada en Trujillo.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: '#1F1B16', fontWeight: 600 }}>
            <a href={brandConfig.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#1F1B16' }}>LinkedIn</a>
            <a href={brandConfig.social.facebook} target="_blank" rel="noopener noreferrer" style={{ color: '#1F1B16' }}>Facebook</a>
            <a href="/contacto" style={{ color: '#1F1B16' }}>Contacto</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(138, 106, 61, 0.15)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: '#6B6154' }}>
          <p>&copy; {new Date().getFullYear()} {brandConfig.name}. Todos los derechos reservados.</p>
          <p>
            Diseñado y desarrollado por{' '}
            <a 
              href="https://kactilabs.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#8A6A3D', fontStyle: 'normal', textDecoration: 'none', fontWeight: 700 }}
            >
              Kacti Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
