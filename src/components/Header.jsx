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
          <svg className="logo-svg" viewBox="0 0 120 120" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="56" className="logo-svg-circle" />
            <path d="M78 48 C74 44 68 42 62 42 C56 36 50 28 42 24 C36 28 32 34 28 42 C24 50 24 58 26 66 C28 74 34 82 42 86 C50 90 60 90 70 86 C64 80 58 78 54 74 C50 70 48 64 50 58 C52 54 56 52 62 52 C68 52 74 54 80 56 C82 52 82 50 78 48 Z" fill="#FFFFFF" />
            <path d="M66 48 C68 48 70 49 71 51 C69 52 67 51 66 48 Z" className="logo-svg-detail" />
            <path d="M76 56 C74 58 71 59 68 58 C72 56 74 55 76 56 Z" className="logo-svg-detail" />
          </svg>
          <span className="logo-text">
            <span className="logo-title">Arce & Asociados</span>
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
