import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Quiz.css';

const quizQuestions = [
  {
    question: '¿Cuál es el objetivo principal de su consulta?',
    options: ['Estructuración de Fusiones y Adquisiciones', 'Gobierno de Empresa Familiar y Sucesión', 'Arbitraje o Litigio Comercial Complejo', 'Protección Patrimonial y Private Wealth']
  },
  {
    question: '¿En qué etapa se encuentra la operación?',
    options: ['Negociación preliminar o diagnóstico', 'Conflicto u operación en curso', 'Planificación estratégica preventiva', 'Revisión y auditoría legal (Due Diligence)']
  },
  {
    question: '¿Requiere asesoría transfronteriza o internacional?',
    options: ['Sí, involucra múltiples jurisdicciones', 'No, es de ámbito puramente nacional', 'Por determinar durante la consulta']
  },
  {
    question: '¿Con qué nivel de urgencia requiere la atención?',
    options: ['Inmediata / Requerimiento urgente', 'En los próximos 15 días', 'Planificación periódica anual']
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
          <div className="section-label light">Diagnóstico Legal Estratégico</div>
          <h2 className="quiz-title">¿Qué solución jurídica requiere su organización?</h2>
          <p className="quiz-subtitle">
            Complete este breve diagnóstico en 4 pasos para canalizar su requerimiento directamente con el socio especialista del área correspondiente.
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
                      Continuar
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
                  <h3 className="quiz-question" style={{ marginBottom: '1rem' }}>Datos de contacto confidenciales</h3>
                  <p style={{ fontSize: '0.95rem', color: '#B8B4AC', marginBottom: '2rem' }}>
                    Ingrese su nombre y teléfono corporativo para visualizar el diagnóstico y agendar la sesión ejecutiva.
                  </p>
                  
                  <form onSubmit={handleSubmitContact} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input 
                      type="text" 
                      placeholder="Nombre y Apellidos" 
                      className="quiz-option" 
                      style={{ padding: '1rem', cursor: 'text' }}
                      required 
                      value={contactData.name}
                      onChange={(e) => setContactData({...contactData, name: e.target.value})}
                    />
                    <input 
                      type="tel" 
                      placeholder="Teléfono corporativo o WhatsApp" 
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
                      Ver Diagnóstico
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
                  <h3 className="quiz-question" style={{ marginBottom: '1rem' }}>Diagnóstico listo, {contactData.name.split(' ')[0]}</h3>
                  <p style={{ fontSize: '1.05rem', color: '#B8B4AC', marginBottom: '2rem', lineHeight: '1.6' }}>
                    Un socio de Paranti Asociados evaluará su caso reservadamente y tomará contacto al {contactData.phone}.
                  </p>
                  
                  <Link to="/agendar-cita" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>
                    Agendar consulta privada
                  </Link>
                  <button 
                    onClick={handleReset} 
                    style={{ color: '#B8B4AC', textDecoration: 'underline', fontSize: '0.85rem', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-heading)', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                  >
                    Reiniciar diagnóstico
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
