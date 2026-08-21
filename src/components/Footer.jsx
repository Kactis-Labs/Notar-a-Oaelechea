import { Link } from 'react-router-dom';
import { brandConfig } from '../config/brandConfig';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        
        <div className="footer-top">
          <div className="footer-brand-col">
            <img src="/logo.svg" alt={brandConfig.name} className="footer-logo" />
            <p className="footer-address">
              {brandConfig.contact.address}
            </p>
          </div>
          
          <nav className="footer-nav-links">
            <a href={brandConfig.social.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href={brandConfig.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={brandConfig.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <Link to="/contacto">Contacto</Link>
          </nav>
        </div>

        <div className="footer-bottom">
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
