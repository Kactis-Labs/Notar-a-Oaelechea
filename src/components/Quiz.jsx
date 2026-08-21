import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';
import quizBg from '../assets/quiz-bg.webp';
import './Quiz.css';

const quizQuestions = [
  {
    question: '¿Qué tipo de asesoría o patrocinio legal requiere?',
    options: [
      'Derecho Civil y Patrimonial (Inmuebles, contratos, litigios civiles)',
      'Derecho Penal y Litigación Estratégica (Investigaciones fiscales, defensa penal)',
      'Derecho Laboral y Empresas (Contratos laborales, despidos, SUNAFIL)',
      'Consultoría Corporativa, Tributaria o Administrativa'
    ]
  },
  {
    question: '¿Cuál es el estado actual de su caso o consulta?',
    options: [
      'Asesoría preventiva o redacción/revisión de contratos',
      'Tengo una denuncia, citación fiscal o notificación judicial',
      'Ya cuento con un proceso judicial o administrativo en trámite',
      'Requiero respaldo corporativo o consultoría permanente'
    ]
  },
  {
    question: '¿Con qué prioridad requiere la conducción de nuestros socios?',
    options: [
      'Urgente / Atención procesal inmediata',
      'En los próximos días',
      'Planificación estratégica sin urgencia'
    ]
  }
];

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleSelectOption = (idx) => {
    setSelectedOption(idx);
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    
    const newAnswers = [...answers, quizQuestions[currentStep].options[selectedOption]];
    setAnswers(newAnswers);

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(prev => prev + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedOption(null);
    setAnswers([]);
    setIsFinished(false);
  };

  const getWhatsAppMessage = () => {
    // 1. Limpiar nombre del área jurídica (quitar texto entre paréntesis)
    let area = answers[0] ? answers[0].split('(')[0].trim() : 'Derecho General';
    
    // 2. Formatear estado del caso
    let estado = answers[1] || 'Tengo una consulta legal';
    if (!estado.endsWith('.')) {
      estado += '.';
    }

    // 3. Formatear urgencia / prioridad de manera natural
    let urgencia = 'Deseo coordinar una consulta';
    if (answers[2]?.includes('Urgente') || answers[2]?.includes('inmediata')) {
      urgencia = 'Lo necesito con atención urgente.';
    } else if (answers[2]?.includes('próximos días') || answers[2]?.includes('Próximos días')) {
      urgencia = 'Lo necesito para los próximos días.';
    } else if (answers[2]) {
      urgencia = 'Es para una planificación estratégica.';
    }

    return `Hola, requiero asesoría en ${area}. ${estado} ${urgencia} Deseo coordinar una consulta con los socios principales.`;
  };

  return (
    <section className="quiz-section">
      <div className="quiz-bg-image-wrapper">
        <img src={quizBg} alt="Orientación Jurídica" className="quiz-bg-img" />
        <div className="quiz-bg-gradient-overlay"></div>
      </div>

      <div className="container quiz-container">
        
        <div className="quiz-text-col">
          <div className="section-label light">Orientación Rápida</div>
          <h2 className="quiz-title">¿No sabes qué servicio necesitas?</h2>
          <p className="quiz-subtitle">
            Responde 3 preguntas rápidas y determinaremos el área jurídica exacta y la estrategia recomendada para tu caso.
          </p>
        </div>
        
        <div className="quiz-card-col">
          <div className="quiz-card">
            
            <AnimatePresence mode="wait">
              {!isFinished ? (
                <motion.div 
                  key={`step-${currentStep}`}
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
                        type="button"
                        className={`quiz-option ${selectedOption === idx ? 'selected' : ''}`}
                        onClick={() => handleSelectOption(idx)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  
                  <div className="quiz-footer">
                    <button 
                      type="button"
                      className="btn btn-primary" 
                      style={{ width: '100%', opacity: selectedOption === null ? 0.5 : 1, cursor: selectedOption === null ? 'not-allowed' : 'pointer' }}
                      onClick={handleNext}
                      disabled={selectedOption === null}
                    >
                      {currentStep === quizQuestions.length - 1 ? 'Ver orientación de mi caso' : 'Siguiente'}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ textAlign: 'center', padding: '1rem 0' }}
                >
                  <h3 className="quiz-question" style={{ marginBottom: '1rem', color: 'var(--color-navy)' }}>
                    Orientación Legal Lista
                  </h3>
                  
                  <p style={{ fontSize: '0.98rem', color: 'var(--color-text-dark)', marginBottom: '1.25rem', lineHeight: 1.55 }}>
                    De acuerdo con tus respuestas, tu caso en <strong>{answers[0] ? answers[0].split('(')[0].trim() : 'tu materia'}</strong> califica para ser atendido y dirigido directamente por nuestros socios principales.
                  </p>

                  <div style={{ backgroundColor: 'var(--color-cream)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', textAlign: 'left', fontSize: '0.88rem' }}>
                    <p style={{ margin: '0 0 0.35rem 0', color: 'var(--color-text-muted)' }}>
                      <strong>Estado:</strong> {answers[1]}
                    </p>
                    <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>
                      <strong>Prioridad:</strong> {answers[2]}
                    </p>
                  </div>
                  
                  <a 
                    href={`https://wa.me/${brandConfig.contact.whatsappRaw}?text=${encodeURIComponent(getWhatsAppMessage())}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary" 
                    style={{ width: '100%', marginBottom: '1rem', padding: '0.9rem 1rem' }}
                  >
                    Continuar consulta por WhatsApp
                  </a>
                  
                  <button 
                    type="button"
                    onClick={handleReset} 
                    style={{ color: 'var(--color-text-muted)', textDecoration: 'underline', fontSize: '0.85rem', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Volver a responder el cuestionario
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
