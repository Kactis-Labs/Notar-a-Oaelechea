import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import TeamPage from './pages/TeamPage';
import Resources from './pages/Resources';
import ResourceDetail from './pages/ResourceDetail';
import ContactPage from './pages/ContactPage';
import BookAppointment from './pages/BookAppointment';
import PageTransition from './components/PageTransition';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="animated-routes-container">
      <AnimatePresence custom={location.pathname}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/nosotros" element={<PageTransition><About /></PageTransition>} />
          <Route path="/servicios" element={<PageTransition><ServicesPage /></PageTransition>} />
          <Route path="/servicios/:slug" element={<PageTransition><ServiceDetail /></PageTransition>} />
          <Route path="/equipo" element={<PageTransition><TeamPage /></PageTransition>} />
          <Route path="/recursos" element={<PageTransition><Resources /></PageTransition>} />
          <Route path="/recursos/:slug" element={<PageTransition><ResourceDetail /></PageTransition>} />
          <Route path="/contacto" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="/agendar-cita" element={<PageTransition><BookAppointment /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
