import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import TeamPage from './pages/TeamPage';
import Resources from './pages/Resources';
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
          <Route path="/contacto" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="/agendar-cita" element={<PageTransition><BookAppointment /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
