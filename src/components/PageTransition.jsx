import { useEffect } from 'react';
import { motion } from 'framer-motion';
import './PageTransition.css';

const pageVariants = {
  initial: { 
    opacity: 0, 
    filter: 'blur(15px)', 
    y: -40, 
    scale: 1.02,
    zIndex: 1 
  },
  animate: { 
    opacity: 1, 
    filter: 'blur(0px)', 
    y: 0, 
    scale: 1,
    zIndex: 1 
  },
  exit: () => {
    // Read scroll before new page jumps to top
    const scroll = typeof window !== 'undefined' ? window.scrollY : 0;
    return {
      position: 'fixed',
      top: `-${scroll}px`,
      left: 0,
      width: '100%',
      zIndex: 0,
      filter: 'blur(15px)',
      scale: 1.02,
      opacity: 0.5,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    };
  }
};

export default function PageTransition({ children }) {
  useEffect(() => {
    // Al montar la nueva página, el scroll sube. 
    // La página vieja no salta porque está 'fixed'
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      custom={true}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="page-content"
      style={{ backgroundColor: 'var(--color-white)', transformOrigin: 'top center' }}
    >
      {children}
    </motion.div>
  );
}
