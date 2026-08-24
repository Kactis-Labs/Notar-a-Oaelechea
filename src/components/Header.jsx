import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const forceScrolled = location.pathname === '/agendar-cita' || location.pathname.startsWith('/recursos') || location.pathname === '/contacto';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isScrolledState = scrolled || forceScrolled || menuOpen;

  return (
    <header className={`header ${isScrolledState ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo-link" aria-label="Ir a la página de inicio">
          <img 
            src={isScrolledState ? "/logo-dark.svg" : "/logo.svg"} 
            alt={brandConfig.name} 
            className="logo-img"
            width="200"
            height="46"
          />
        </Link>
        
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={menuOpen}
        >
          <span className="sr-only">{menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}</span>
          {menuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/equipo">Equipo</Link>
          <Link to="/recursos">Recursos</Link>
          <Link to="/contacto">Contacto</Link>
          <a 
            href={brandConfig.contact.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline-dark mobile-btn-nav"
          >
            Agendar Cita
          </a>
        </nav>
        
        <a 
          href={brandConfig.contact.whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-outline-dark desktop-btn-nav"
        >
          Agendar Cita
        </a>
      </div>
    </header>
  );
}
