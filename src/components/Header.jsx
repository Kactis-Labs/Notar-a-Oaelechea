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

  return (
    <header className={`header ${scrolled || forceScrolled || menuOpen ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {brandConfig.logo && (
            <img 
              src={brandConfig.logo} 
              alt={brandConfig.name} 
              style={{ height: '42px', width: 'auto', borderRadius: '50%', background: '#FFF', padding: '2px', objectFit: 'contain' }} 
            />
          )}
          <span>{brandConfig.name}</span>
        </Link>
        
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/servicios">Especialidades</Link>
          <Link to="/equipo">Equipo</Link>
          <Link to="/recursos">Artículos</Link>
          <Link to="/contacto">Contacto</Link>
          <a href={brandConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mobile-btn-nav">
            Consulta WhatsApp
          </a>
        </nav>
        
        <a href={brandConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary desktop-btn-nav">
          Consulta WhatsApp
        </a>
      </div>
    </header>
  );
}
