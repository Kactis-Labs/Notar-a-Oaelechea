import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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

  return (
    <header className={`header ${scrolled || forceScrolled || menuOpen ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <svg className="logo-svg" viewBox="0 0 100 110" width="34" height="37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="6" width="56" height="6" className="logo-svg-path" />
            <path d="M14 12 C10 12 8 16 12 18 C16 20 18 14 14 12 Z" className="logo-svg-path" />
            <rect x="20" y="12" width="5" height="64" rx="1" className="logo-svg-path" />
            <rect x="27" y="12" width="5" height="64" rx="1" className="logo-svg-path" />
            <rect x="34" y="12" width="5" height="64" rx="1" className="logo-svg-path" />
            <path d="M12 76 H46 L52 84 H8 C10 80 12 76 12 76 Z" className="logo-svg-path" />
            <path d="M38 12 H58 C72 12 72 42 58 42 H38 V12 Z M44 20 V34 H56 C62 34 62 20 56 20 H44 Z" className="logo-svg-path" />
            <path d="M42 38 L68 84 H86 L56 38 H42 Z" className="logo-svg-path" />
          </svg>
          <span className="logo-text">
            <span className="logo-title">RAMÍREZ Y ABOGADOS</span>
            <span className="logo-subtitle">ESTUDIO JURÍDICO</span>
          </span>
        </Link>
        
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/equipo">Equipo</Link>
          <Link to="/recursos">Recursos</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/agendar-cita" className="btn btn-outline-dark mobile-btn-nav">
            Agendar Cita
          </Link>
        </nav>
        
        <Link to="/agendar-cita" className="btn btn-outline-dark desktop-btn-nav">
          Agendar Cita
        </Link>
      </div>
    </header>
  );
}
