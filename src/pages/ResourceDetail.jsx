import { useParams, Navigate } from 'react-router-dom';
import { articlesData } from '../data/articlesData';
import { teamMembers } from '../data/teamData';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import './Resources.css';

export default function ResourceDetail() {
  const { slug } = useParams();
  const article = articlesData.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/recursos" replace />;
  }

  const author = teamMembers.find(m => m.id === article.authorId) || { name: 'Redacción', img: '' };

  return (
    <div className="article-detail-page">
      
      <div className="container">
        <header className="article-detail-header">
          <h1 className="article-detail-title">{article.title}</h1>
          <p className="article-detail-desc">{article.description}</p>
          
          <div className="article-detail-meta">
            <div className="article-detail-date">{article.date}</div>
            
            <div className="author-box">
              <img src={author.img} alt={author.name} className="author-avatar" />
              <span className="author-name">por {author.name}</span>
            </div>
          </div>
        </header>

        <img src={article.image} alt={article.title} className="article-detail-hero-img" />

        {/* Cargar contenido HTML simulado del artículo de forma segura (es contenido controlado de nuestra data) */}
        <div 
          className="article-body" 
          dangerouslySetInnerHTML={{ __html: article.content }} 
        />

        <div className="article-category-footer">
          CATEGORÍA: {article.category}
        </div>
      </div>

      <CTA />
      <Contact />

    </div>
  );
}
