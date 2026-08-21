import Hero from '../components/Hero';
import Stats from '../components/Stats';
import RealCases from '../components/RealCases';
import WrittenTestimonials from '../components/WrittenTestimonials';
import AderUlloaSection from '../components/AderUlloaSection';
import Methodology from '../components/Methodology';
import Services from '../components/Services';
import Quiz from '../components/Quiz';
import CTA from '../components/CTA';
import CommunitySection from '../components/CommunitySection';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main style={{ width: '100%', overflowX: 'hidden', position: 'relative' }}>
      <Hero />
      <div style={{ position: 'relative', zIndex: 1, backgroundColor: 'var(--color-white)', width: '100%', overflowX: 'hidden' }}>
        <Stats />
        <RealCases />
        <WrittenTestimonials />
        <AderUlloaSection />
        <Methodology />
        <Services />
        <Quiz />
        <CTA />
        <CommunitySection />
        <Contact />
      </div>
    </main>
  );
}
