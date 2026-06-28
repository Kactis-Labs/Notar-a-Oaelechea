export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-gray)', padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Notaría Olaechea. Todos los derechos reservados.</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" style={{ color: 'var(--color-gray)' }}>LinkedIn</a>
          <a href="#" style={{ color: 'var(--color-gray)' }}>Facebook</a>
          <a href="#" style={{ color: 'var(--color-gray)' }}>Políticas de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
