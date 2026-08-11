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
          <svg className="logo-svg" viewBox="0 0 100 100" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="46" className="logo-svg-circle" />
            <path d="M 72,49 C 71,46 66,42 60,41 C 55,35 48,27 40,24 C 34,27 30,33 26,40 C 22,48 22,56 24,64 C 26,72 32,79 40,83 C 47,87 56,87 65,83 C 60,78 55,76 51,72 C 47,68 45,63 47,57 C 49,53 53,51 59,51 C 65,51 70,53 75,55 C 77,52 76,50 72,49 Z" fill="#FFFFFF" />
            <path d="M 64,48 C 66,48 68,49 69,51 C 67,52 65,51 64,48 Z" className="logo-svg-detail" />
            <path d="M 73,55 C 71,57 68,58 65,57 C 69,55 71,54 73,55 Z" className="logo-svg-detail" />
            <path d="M 38,28 C 34,34 33,42 36,48 C 32,46 29,42 30,36 C 32,31 35,28 38,28 Z" fill="#FFFFFF" />
            <path d="M 32,48 C 29,54 29,62 33,68 C 29,65 26,60 27,53 C 28,48 30,48 32,48 Z" fill="#FFFFFF" />
            <path d="M 36,68 C 33,74 36,80 42,84 C 36,82 32,77 33,72 C 34,69 35,68 36,68 Z" fill="#FFFFFF" />
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
