import './Quiz.css';

export default function Quiz() {
  return (
    <section className="quiz-section">
      <div className="container quiz-container">
        
        <div className="quiz-text-col">
          <div className="section-label light">Orientación Rápida</div>
          <h2 className="quiz-title">¿No sabes qué trámite necesitas?</h2>
          <p className="quiz-subtitle">
            Responde 4 preguntas rápidas y te diremos qué servicio se ajusta a tu caso. Sin compromiso.
          </p>
        </div>
        
        <div className="quiz-card-col">
          <div className="quiz-card">
            <div className="quiz-card-header">
              <span className="quiz-step">Paso 1 de 4</span>
              <div className="quiz-progress">
                <div className="quiz-progress-bar active"></div>
                <div className="quiz-progress-bar"></div>
                <div className="quiz-progress-bar"></div>
                <div className="quiz-progress-bar"></div>
              </div>
            </div>
            
            <h3 className="quiz-question">¿Qué necesitas resolver?</h3>
            
            <div className="quiz-options">
              <button className="quiz-option">Comprar/vender un inmueble</button>
              <button className="quiz-option">Dejar todo en orden</button>
              <button className="quiz-option">Autorizar a alguien</button>
              <button className="quiz-option">Formalizar mi empresa</button>
            </div>
            
            <div className="quiz-footer">
              <button className="btn btn-primary" style={{ width: '100%' }}>Siguiente</button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
