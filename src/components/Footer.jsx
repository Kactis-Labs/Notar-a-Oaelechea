import { brandConfig } from '../config/brandConfig';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1B3A57', color: '#E2E7EC', padding: '3.5rem 0 2.5rem', borderTop: '1px solid rgba(184, 147, 79, 0.25)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <img src="/logo.svg" alt={brandConfig.name} style={{ height: '58px', marginBottom: '0.75rem' }} />
            <p style={{ fontSize: '0.88rem', color: '#C9CDD3', maxWidth: '420px', lineHeight: 1.5 }}>
              {brandConfig.contact.address}
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href={brandConfig.social.tiktok} target="_blank" rel="noopener noreferrer" style={{ color: '#E2E7EC' }}>TikTok</a>
            <a href={brandConfig.social.facebook} target="_blank" rel="noopener noreferrer" style={{ color: '#E2E7EC' }}>Facebook</a>
            <a href={brandConfig.social.instagram} target="_blank" rel="noopener noreferrer" style={{ color: '#E2E7EC' }}>Instagram</a>
            <a href="/contacto" style={{ color: '#E2E7EC' }}>Contacto</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: '#C9CDD3' }}>
          <p>&copy; {new Date().getFullYear()} {brandConfig.name}. Todos los derechos reservados.</p>
          <p>
            Diseñado y desarrollado por{' '}
            <a 
              href="https://kactilabs.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#B8934F', fontStyle: 'normal', textDecoration: 'none', fontWeight: 600 }}
            >
              Kacti Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
