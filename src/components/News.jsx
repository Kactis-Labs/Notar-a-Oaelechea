import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articlesData } from '../data/articlesData';
import './News.css';

export default function News() {
  // Tomar solo los primeros 3 artículos para la página de inicio
  const latestNews = articlesData.slice(0, 3);

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
          {latestNews.map((item, idx) => (
            <article className="news-card" key={idx}>
              <div className="news-img-wrapper">
                <img src={item.image} alt={item.title} className="news-img" />
              </div>
              <div className="news-meta">
                <span className="news-category">{item.category}</span>
                <span className="news-date">{item.date}</span>
              </div>
              <h3 className="news-article-title">{item.title}</h3>
              <Link to={`/recursos/${item.slug}`} className="news-link">
                Leer artículo <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
        
        <div className="news-footer" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link to="/recursos" className="btn btn-outline-dark" style={{ padding: '1rem 3rem' }}>
            Ver más artículos
          </Link>
        </div>
      </div>
    </section>
  );
}
