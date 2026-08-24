import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PageTransition from './components/PageTransition';

// Dynamic code splitting for secondary pages
const About = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const Resources = lazy(() => import('./pages/Resources'));
const ResourceDetail = lazy(() => import('./pages/ResourceDetail'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BookAppointment = lazy(() => import('./pages/BookAppointment'));
const NotFound = lazy(() => import('./pages/NotFound'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="animated-routes-container">
      <AnimatePresence custom={location.pathname}>
        <Suspense fallback={<div style={{ minHeight: '60vh', background: 'var(--color-cream)' }} />}>
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
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </Suspense>
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
