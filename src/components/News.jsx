import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './News.css';

const news = [
  {
    category: 'Legal',
    date: '15 Jun 2026',
    title: 'Nuevas regulaciones para la constitución de SAC en Perú',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop'
  },
  {
    category: 'Inmobiliario',
    date: '02 Jun 2026',
    title: 'Guía definitiva para una transferencia de inmueble segura',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop'
  },
  {
    category: 'Sucesiones',
    date: '28 May 2026',
    title: '¿Por qué es vital dejar un testamento registrado?',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop'
  }
];

export default function News() {
  return (
    <section className="news-section">
      <div className="container">
        <div className="news-header">
          <div>
            <div className="section-label">Recursos & Noticias</div>
            <h2 className="news-title">Manténgase Informado.</h2>
          </div>
        </div>
        
        <div className="news-grid">
          {news.map((item, idx) => (
            <article className="news-card" key={idx}>
              <div className="news-img-wrapper">
                <img src={item.img} alt={item.title} className="news-img" />
              </div>
              <div className="news-meta">
                <span className="news-category">{item.category}</span>
                <span className="news-date">{item.date}</span>
              </div>
              <h3 className="news-article-title">{item.title}</h3>
              <div className="news-link">
                Leer artículo <ArrowRight size={16} />
              </div>
            </article>
          ))}
        </div>
        
        <div className="news-footer" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link to="/recursos" className="btn btn-outline-dark" style={{ padding: '1rem 3rem' }}>
            Ver más noticias
          </Link>
        </div>
      </div>
    </section>
  );
}
