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
          <svg className="logo-svg" viewBox="0 0 160 120" width="48" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="72" r="18" fill="#FACC15" />
            <path d="M 18 42 C 18 28 62 28 62 42 C 62 58 40 68 40 68 C 40 68 18 58 18 42 Z" fill="#EA2B39" />
            <circle cx="40" cy="42" r="5" className="logo-svg-dot" />
            <text x="74" y="66" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="46" className="logo-svg-text" letterSpacing="-2">atc</text>
            <rect x="146" y="28" width="4" height="48" rx="2" fill="#EA2B39" />
          </svg>
          <span className="logo-text">
            <span className="logo-title">ATC & ASOCIADOS</span>
            <span className="logo-subtitle">ESTUDIO JURÍDICO E INMOBILIARIO</span>
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
