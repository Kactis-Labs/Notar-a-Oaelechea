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
          <svg className="logo-svg" viewBox="0 0 120 120" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="56" className="logo-svg-bg" />
            <path d="M 36 28 C 36 26 38 25 40 25 H 80 C 82 25 84 26 84 28 C 84 29 82 30 80 30 H 40 C 38 30 36 29 36 28 Z" fill="#FFFFFF" />
            <rect x="42" y="32" width="36" height="3" fill="#FFFFFF" />
            <text x="60" y="72" fontFamily="'Playfair Display', serif" fontWeight="800" fontSize="44" fill="#FFFFFF" textAnchor="middle">H</text>
            <rect x="42" y="78" width="36" height="3" fill="#FFFFFF" />
            <rect x="38" y="83" width="44" height="4" rx="1" fill="#FFFFFF" />
            <circle cx="22" cy="60" r="3.5" fill="#FFFFFF" />
            <circle cx="98" cy="60" r="3.5" fill="#FFFFFF" />
          </svg>
          <span className="logo-text">
            <span className="logo-title">HAROWI</span>
            <span className="logo-subtitle">STAFF JURÍDICO</span>
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
