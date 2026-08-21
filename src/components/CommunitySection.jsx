import { brandConfig } from '../config/brandConfig';
import { ArrowUpRight } from 'lucide-react';
import communityBg from '../assets/about-hero.webp';
import './CommunitySection.css';

const socialChannels = [
  {
    name: 'TikTok',
    handle: '@aderulloa.abogado',
    desc: 'Análisis de audiencias en vivo, derechos del detenido y orientación penal directa.',
    url: 'https://tiktok.com',
    iconSvg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.36 0 .7.07 1.01.2V9.45a6.33 6.33 0 0 0-1.01-.08A6.34 6.34 0 0 0 3.15 15.7 6.34 6.34 0 0 0 9.49 22a6.34 6.34 0 0 0 6.34-6.33V9.17a8.16 8.16 0 0 0 4.86 1.6V7.32a4.85 4.85 0 0 1-1.1-.63z"/>
      </svg>
    ),
    btnText: 'Ver videos en TikTok'
  },
  {
    name: 'Instagram',
    handle: '@estudio_ulloaasociados',
    desc: 'Criterios de la Corte Suprema, jurisprudencia procesal y actualidad jurídica.',
    url: 'https://instagram.com',
    iconSvg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    btnText: 'Seguir en Instagram'
  },
  {
    name: 'Comunidad EU',
    handle: 'Canal de WhatsApp',
    desc: 'Espacio de difusión, debate técnico y análisis de resoluciones judiciales.',
    url: brandConfig.contact.whatsappUrl,
    iconSvg: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.43.13-.14.17-.24.25-.4.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.73 2.64 4.2 3.7 2.46 1.07 2.46.71 2.91.67.44-.05 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.17-.47-.3z"/>
      </svg>
    ),
    btnText: 'Unirse a la Comunidad'
  }
];

export default function CommunitySection() {
  return (
    <section className="community-section" id="comunidad">
      <div className="community-bg">
        <img src={communityBg} alt="Comunidad Escalante, Ulloa y Asociados" />
        <div className="community-overlay"></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div className="community-header">
          <div className="section-label light">Contenido y Comunidad</div>
          <h2 className="community-title">Educación legal y análisis jurídico constante.</h2>
          <p className="community-subtitle">
            Compartimos criterios jurisprudenciales, análisis de audiencias y orientación procesal a través de nuestras redes oficiales.
          </p>
        </div>

        <div className="community-grid">
          {socialChannels.map((channel, idx) => (
            <div className="community-card" key={idx}>
              <div className="community-card-top">
                <div className="channel-icon-pill">
                  {channel.iconSvg}
                </div>
                <span className="channel-handle">{channel.handle}</span>
              </div>

              <div className="community-card-body">
                <h3 className="channel-name">{channel.name}</h3>
                <p className="channel-desc">{channel.desc}</p>
              </div>

              <a 
                href={channel.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="channel-link-btn"
              >
                <span>{channel.btnText}</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
