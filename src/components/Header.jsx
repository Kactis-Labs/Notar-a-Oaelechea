import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          Notaría Olaechea
        </Link>
        <nav className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/equipo">Equipo</Link>
          <Link to="/recursos">Recursos</Link>
        </nav>
        <Link to="/contacto" className="btn btn-outline-dark">
          Agendar Cita
        </Link>
      </div>
    </header>
  );
}
