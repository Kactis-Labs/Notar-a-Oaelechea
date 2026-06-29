import { Link } from 'react-router-dom';
import { articlesData } from '../data/articlesData';
import { teamMembers } from '../data/teamData';
import Contact from '../components/Contact';
import './Resources.css';

export default function Resources() {
  // Se asume que el primer artículo es el destacado
  const featuredArticle = articlesData[0];
  const gridArticles = articlesData.slice(1);

  const getAuthor = (authorId) => {
    return teamMembers.find(m => m.id === authorId) || { name: 'Redacción', img: '' };
  };

  const featuredAuthor = getAuthor(featuredArticle.authorId);

  return (
    <div className="resources-page">
      <div className="resources-container">
        
        {/* ARTÍCULO DESTACADO */}
        <div className="featured-article">
          <div className="featured-content">
            <div className="featured-date">{featuredArticle.date}</div>
            <Link to={`/recursos/${featuredArticle.slug}`}>
              <h2 className="featured-title">{featuredArticle.title}</h2>
            </Link>
            <p className="featured-desc">{featuredArticle.description}</p>
            
            <div className="author-meta" style={{ marginTop: '1rem' }}>
              <img src={featuredAuthor.img} alt={featuredAuthor.name} className="author-avatar" />
              <span className="author-name">por {featuredAuthor.name}</span>
            </div>
          </div>
          
          <Link to={`/recursos/${featuredArticle.slug}`} className="featured-img-wrapper">
            <img src={featuredArticle.image} alt={featuredArticle.title} className="featured-img" />
          </Link>
        </div>

        {/* GRID DE ARTÍCULOS RESTANTES */}
        <div className="articles-grid">
          {gridArticles.map(article => {
            const author = getAuthor(article.authorId);
            return (
              <Link to={`/recursos/${article.slug}`} className="article-card" key={article.id}>
                <div className="article-card-img-wrapper">
                  <img src={article.image} alt={article.title} className="article-card-img" />
                </div>
                <div className="article-card-date">{article.date}</div>
                <h3 className="article-card-title">{article.title}</h3>
                <div className="author-meta">
                  <img src={author.img} alt={author.name} className="author-avatar" />
                  <span className="author-name">por {author.name}</span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>

      <div style={{ marginTop: '8rem' }}>
        <Contact />
      </div>
    </div>
  );
}
