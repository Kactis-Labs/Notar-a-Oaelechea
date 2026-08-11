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
          <svg className="logo-svg" viewBox="0 0 120 120" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 52 35 C 38 35 28 46 28 62 C 28 78 38 88 54 88 C 65 88 72 82 72 72 V 62 H 52 V 70 H 63 C 62 76 58 80 52 80 C 43 80 36 73 36 62 C 36 50 44 43 53 43 C 58 43 63 46 66 50 L 72 43 C 67 38 60 35 52 35 Z" fill="#B38E46" />
            <path d="M 68 32 C 82 32 92 43 92 59 C 92 75 82 85 66 85 C 55 85 48 79 48 69 V 59 H 68 V 67 H 57 C 58 73 62 77 68 77 C 77 77 84 70 84 59 C 84 47 76 40 67 40 C 62 40 57 43 54 47 L 48 40 C 53 35 60 32 68 32 Z" className="logo-svg-right-g" />
          </svg>
          <span className="logo-text">
            <span className="logo-title">GÓMEZ & GÓMEZ</span>
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
