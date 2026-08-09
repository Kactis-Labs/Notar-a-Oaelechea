import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Quiz.css';

const quizQuestions = [
  {
    question: '¿Qué especialidad requiere su caso o empresa?',
    options: ['Asesoría Corporativa / Contratos', 'Patrimonio Civil / Inmuebles', 'Defensa Penal Empresarial', 'Gestión Laboral / SUNAFIL']
  },
  {
    question: '¿Requiere patrocinio en un proceso judicial o arbitral?',
    options: ['Sí, litigio judicial activo', 'Proceso arbitral o licitación', 'Sólo consultoría legal preventiva', 'Evaluación de contingencias']
  },
  {
    question: '¿Con qué grado de urgencia necesita la asesoría?',
    options: ['Atención inmediata / Urgencia', 'En los próximos días', 'Planificación corporativa continua']
  },
  {
    question: '¿Ya ha recibido asesoría previa sobre este asunto?',
    options: ['Sí, contamos con antecedentes', 'Es la primera consulta formal']
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
          <h2 className="quiz-title">¿No sabes qué servicio necesitas?</h2>
          <p className="quiz-subtitle">
            Responde 4 preguntas rápidas y te orientaremos sobre la especialidad legal idónea para tu caso. Sin compromiso.
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
                  <p style={{ fontSize: '0.95rem', color: '#333333', marginBottom: '2rem' }}>
                    Déjanos tus datos para mostrarte la sugerencia de atención y contactarte a la brevedad.
                  </p>
                  
                  <form onSubmit={handleSubmitContact} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input 
                      type="text" 
                      placeholder="Nombre completo" 
                      className="quiz-option" 
                      style={{ padding: '1rem', cursor: 'text', color: '#333333' }}
                      required 
                      value={contactData.name}
                      onChange={(e) => setContactData({...contactData, name: e.target.value})}
                    />
                    <input 
                      type="tel" 
                      placeholder="Número de celular o WhatsApp" 
                      className="quiz-option" 
                      style={{ padding: '1rem', cursor: 'text', color: '#333333' }}
                      required 
                      value={contactData.phone}
                      onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                    />
                    <button 
                      type="submit"
                      className="btn btn-primary" 
                      style={{ width: '100%', marginTop: '1rem' }}
                    >
                      Ver mi orientación
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
                  <h3 className="quiz-question" style={{ marginBottom: '1rem', color: '#333333 !important' }}>¡Orientación lista, {contactData.name.split(' ')[0]}!</h3>
                  <p style={{ fontSize: '1.05rem', color: '#333333', marginBottom: '2rem' }}>
                    Un abogado especialista de nuestro bufete revisará tu caso y se comunicará contigo al {contactData.phone}.
                  </p>
                  
                  <Link to="/agendar-cita" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>
                    Agendar mi cita ahora
                  </Link>
                  <button 
                    onClick={handleReset} 
                    style={{ color: '#555555', textDecoration: 'underline', fontSize: '0.9rem', background: 'none', border: 'none', cursor: 'pointer' }}
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
