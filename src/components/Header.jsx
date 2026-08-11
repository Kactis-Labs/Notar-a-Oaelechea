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
            <circle cx="60" cy="65" r="42" className="logo-svg-stroke" strokeWidth="2.5" fill="none" />
            <rect x="57" y="10" width="6" height="14" rx="1" className="logo-svg-fill" />
            <path d="M 38 16 H 82 M 42 16 L 34 28 M 50 16 L 42 28 M 70 16 L 62 28 M 78 16 L 70 28" className="logo-svg-stroke" strokeWidth="2" />
            <path d="M 30 28 Q 42 34 54 28 Z M 58 28 Q 70 34 82 28 Z" className="logo-svg-fill" />
            <path d="M 18 45 Q 14 55 20 68 Q 28 80 40 88 M 102 45 Q 106 55 100 68 Q 92 80 80 88" className="logo-svg-stroke" strokeWidth="2.5" fill="none" />
            <text x="60" y="75" fontFamily="'Playfair Display', serif" fontWeight="700" fontStyle="italic" fontSize="32" className="logo-svg-fill" textAnchor="middle">SV</text>
          </svg>
          <span className="logo-text">
            <span className="logo-title">Salas Valencia</span>
            <span className="logo-subtitle">ESTUDIO & JURÍDICO ABOGADOS</span>
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
