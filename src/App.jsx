import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import Resources from './pages/Resources';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/equipo" element={<TeamPage />} />
        <Route path="/recursos" element={<Resources />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
