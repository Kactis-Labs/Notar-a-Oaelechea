import { Quote, CheckCircle2, Star } from 'lucide-react';
import './WrittenTestimonials.css';

const writtenTestimonials = [
  {
    id: 1,
    client: 'Samuel Medina',
    location: 'Trujillo',
    case: 'Patrocinio y Defensa Legal',
    result: 'Caso Resuelto Favorablemente',
    quote: 'Desde el primer contacto demostraron profesionalismo y un compromiso genuino. Me brindaron asesoría clara y un trato humano que me dio total confianza para resolver mi situación legal.'
  },
  {
    id: 2,
    client: 'Sheyla Anhuaman',
    location: 'La Libertad',
    case: 'Asesoría Jurídica Especializada',
    result: 'Patrocinio Exitoso',
    quote: 'Muy satisfecha con el trabajo del equipo. Fueron atentos, claros y demostraron dominio total en su campo en cada paso del proceso. Una experiencia segura que recomiendo con total confianza.'
  },
  {
    id: 3,
    client: 'Carlos M.',
    location: 'Trujillo',
    case: 'Investigación Penal Compleja',
    result: 'Libertad y Archivo Fiscal',
    quote: 'El Dr. Ader Ulloa revisó minuciosamente cada foja de la carpeta fiscal. Su preparación técnica y rigor dogmático en la audiencia fueron decisivos para obtener mi libertad.'
  },
  {
    id: 4,
    client: 'Familia Ramírez',
    location: 'La Libertad',
    case: 'Delito Patrimonial / Juicio Oral',
    result: 'Sentencia Absolutoria',
    quote: 'Detrás de nuestro caso estaba el patrimonio de toda una vida. En el juicio oral se notó la preparación milimétrica de la defensa y la solvencia de sus argumentos.'
  },
  {
    id: 5,
    client: 'Ing. Roberto V.',
    location: 'Trujillo',
    case: 'Función Pública y Contrataciones',
    result: 'Sobreseimiento Firme',
    quote: 'No tuvimos que llegar a juicio. El estudio identificó una falla clave en el informe pericial contable de la fiscalía y el juzgado archivó el caso definitivamente.'
  }
];

export default function WrittenTestimonials() {
  // Duplicamos los testimonios para lograr el bucle infinito suave
  const tickerItems = [...writtenTestimonials, ...writtenTestimonials];

  return (
    <section className="written-testimonials-section" id="testimonios">
      <div className="container">
        
        <div className="testimonials-header-block">
          <div className="section-label">Testimonios</div>
          <h2 className="testimonials-main-title">Ellos confiaron en nosotros.</h2>
          <p className="testimonials-main-subtitle">
            &ldquo;Cada expediente representa una persona, una familia y una historia.&rdquo;
          </p>
        </div>

      </div>

      {/* Ticker / Carrusel continuo hacia la izquierda que se pausa en hover */}
      <div className="testimonials-slider-viewport">
        <div className="testimonials-marquee-track">
          {tickerItems.map((item, idx) => (
            <div className="testimonial-card-slide" key={`${item.id}-${idx}`}>
              <div className="testimonial-card-top">
                <div className="google-rating-block">
                  <div className="google-badge-pill">
                    <svg viewBox="0 0 24 24" width="14" height="14" className="google-icon">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    <span>Verificado por Google</span>
                  </div>
                  <div className="stars-row">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} size={13} fill="#FBBC05" color="#FBBC05" />
                    ))}
                  </div>
                </div>

                <Quote size={20} className="testimonial-quote-icon" />
              </div>

              <p className="testimonial-card-quote">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="testimonial-card-footer">
                <div className="testimonial-author-box">
                  <h4 className="testimonial-author-name">{item.client}</h4>
                  <span className="testimonial-author-case">{item.case} &middot; {item.location}</span>
                </div>
                
                <span className="testimonial-result-tag">
                  <CheckCircle2 size={12} />
                  <span>{item.result}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
