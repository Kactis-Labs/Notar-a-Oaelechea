import { brandConfig } from '../config/brandConfig';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-gray)', padding: '3.5rem 0 2.5rem 0', borderTop: '1px solid rgba(240,168,30,0.2)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '0.9rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {brandConfig.logo && (
              <img src={brandConfig.logo} alt={brandConfig.name} style={{ height: '36px', width: 'auto', borderRadius: '50%', background: '#FFF', padding: '2px' }} />
            )}
            <span style={{ fontWeight: '600', color: 'var(--color-white)', fontFamily: 'var(--font-serif)', fontSize: '1.1rem' }}>{brandConfig.name}</span>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href={brandConfig.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gray)', transition: 'color 0.2s' }}>LinkedIn</a>
            <a href={brandConfig.social.facebook} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gray)', transition: 'color 0.2s' }}>Facebook</a>
            <a href="/contacto" style={{ color: 'var(--color-gray)', transition: 'color 0.2s' }}>Contacto</a>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.85rem', color: '#999' }}>
          <p>&copy; {new Date().getFullYear()} {brandConfig.name}. Todos los derechos reservados.</p>
          <p>
            <a 
              href={brandConfig.credits?.url || "https://kactilabs.vercel.app/"} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'var(--color-gold)', textDecoration: 'none', fontWeight: '500' }}
            >
              {brandConfig.credits?.text || "Diseñado y desarrollado por Kacti Labs"}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
