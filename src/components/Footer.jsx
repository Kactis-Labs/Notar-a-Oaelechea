import { brandConfig } from '../config/brandConfig';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0A0A', color: 'var(--color-gray)', padding: '3.5rem 0', borderTop: '1px solid rgba(201, 162, 75, 0.2)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <img src={brandConfig.logo} alt={brandConfig.name} style={{ height: '42px', width: 'auto', objectFit: 'contain' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>ESTUDIO JURÍDICO</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: '700', color: '#C9A24B', letterSpacing: '0.05em' }}>ANTINORI D'ANGELO</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
            <a href={brandConfig.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.2s' }}>LinkedIn</a>
            <a href={brandConfig.social.facebook} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.2s' }}>Facebook</a>
            <a href="/contacto" style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.2s' }}>Contacto</a>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
          <p>&copy; {new Date().getFullYear()} {brandConfig.name}. Todos los derechos reservados.</p>
          <p>
            <a href={brandConfig.credits.url} target="_blank" rel="noopener noreferrer" style={{ color: '#C9A24B', textDecoration: 'none', fontWeight: '500' }}>
              {brandConfig.credits.text}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
