import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brandConfig } from '../config/brandConfig';
import './Quiz.css';

const quizQuestions = [
  {
    question: '¿Qué tipo de caso o asunto necesitas resolver?',
    options: ['Conflicto de propiedades / contratos (Civil)', 'Protección / constitución de empresa (Corporativo)', 'Defensa penal / carpeta fiscal (Penal)', 'Reclamo / auditoría laboral (Laboral)']
  },
  {
    question: '¿En qué etapa se encuentra tu situación legal?',
    options: ['Fase preventiva / consultoría inicial', 'Recibí una notificación / citación formal', 'Ya existe un proceso judicial o fiscal abierto', 'Busco una segunda opinión experta']
  },
  {
    question: '¿Qué tan urgente requiere atención su expediente?',
    options: ['Urgente (hoy mismo o en 24 horas)', 'Esta semana', 'En las próximas dos semanas', 'Solo estoy evaluando opciones']
  },
  {
    question: '¿Cuenta con la documentación del caso sustentada?',
    options: ['Sí, expedientes y contratos completos', 'Cuento con parte de la documentación', 'Necesito que evalúen qué requiero']
  }
];

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactData, setContactData] = useState({ name: '', phone: '' });

  const handleNext = () => {
    if (selectedOption === null) return;
    
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(prev => prev + 1);
      setSelectedOption(null);
    } else {
      setShowContactForm(true);
    }
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    if (contactData.name && contactData.phone) {
      setIsFinished(true);
      setShowContactForm(false);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedOption(null);
    setIsFinished(false);
    setShowContactForm(false);
    setContactData({ name: '', phone: '' });
  };

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
            
            <AnimatePresence mode="wait">
              {!isFinished && !showContactForm && (
                <motion.div 
                  key="quiz"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="quiz-card-header">
                    <span className="quiz-step">Paso {currentStep + 1} de {quizQuestions.length}</span>
                    <div className="quiz-progress">
                      {quizQuestions.map((_, idx) => (
                        <div key={idx} className={`quiz-progress-bar ${idx <= currentStep ? 'active' : ''}`}></div>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="quiz-question">{quizQuestions[currentStep].question}</h3>
                  
                  <div className="quiz-options">
                    {quizQuestions[currentStep].options.map((opt, idx) => (
                      <button 
                        key={idx} 
                        className={`quiz-option ${selectedOption === idx ? 'selected' : ''}`}
                        onClick={() => setSelectedOption(idx)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  
                  <div className="quiz-footer">
                    <button 
                      className="btn btn-primary" 
                      style={{ width: '100%', opacity: selectedOption === null ? 0.5 : 1, cursor: selectedOption === null ? 'not-allowed' : 'pointer' }}
                      onClick={handleNext}
                      disabled={selectedOption === null}
                    >
                      Siguiente
                    </button>
                  </div>
                </motion.div>
              )}

              {showContactForm && !isFinished && (
                <motion.div 
                  key="contact"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="quiz-question" style={{ marginBottom: '1rem' }}>Casi terminamos</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dark)', marginBottom: '2rem' }}>
                    Déjanos tus datos para mostrarte el resultado y enviarte la información a tu celular.
                  </p>
                  
                  <form onSubmit={handleSubmitContact} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input 
                      type="text" 
                      placeholder="Nombre completo" 
                      className="quiz-option" 
                      style={{ padding: '1rem', cursor: 'text' }}
                      required 
                      value={contactData.name}
                      onChange={(e) => setContactData({...contactData, name: e.target.value})}
                    />
                    <input 
                      type="tel" 
                      placeholder="Número de celular" 
                      className="quiz-option" 
                      style={{ padding: '1rem', cursor: 'text' }}
                      required 
                      value={contactData.phone}
                      onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                    />
                    <button 
                      type="submit"
                      className="btn btn-primary" 
                      style={{ width: '100%', marginTop: '1rem' }}
                    >
                      Ver mi resultado
                    </button>
                  </form>
                </motion.div>
              )}

              {isFinished && (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ textAlign: 'center', padding: '2rem 0' }}
                >
                  <h3 className="quiz-question" style={{ marginBottom: '1rem' }}>¡Lo tenemos claro, {contactData.name.split(' ')[0]}!</h3>
                  <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dark)', marginBottom: '2rem' }}>
                    Por las características de tu caso, necesitarás una asesoría personalizada. Uno de nuestros especialistas se comunicará contigo al {contactData.phone} en breve.
                  </p>
                  
                  <a href={brandConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem', display: 'inline-flex', justifyContent: 'center' }}>
                    Solicitar Consulta por WhatsApp
                  </a>
                  <button 
                    onClick={handleReset} 
                    style={{ color: 'var(--color-text-muted)', textDecoration: 'underline', fontSize: '0.9rem', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Volver a empezar
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
        
      </div>
    </section>
  );
}
