import { Link } from 'react-router-dom';
import { brandConfig } from '../config/brandConfig';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo.png" alt={brandConfig.name} className="footer-logo" />
            <p className="footer-subtitle">
              {brandConfig.subtitle}
            </p>
          </div>
          <nav className="footer-nav">
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/equipo">Equipo</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {brandConfig.name}. Todos los derechos reservados.</p>
          <p className="footer-credit">
            Diseñado y desarrollado por <a href="https://kactilabs.vercel.app/" target="_blank" rel="noopener noreferrer">Kacti Labs</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
