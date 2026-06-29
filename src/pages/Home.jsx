import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Quiz from '../components/Quiz';
import Team from '../components/Team';
import News from '../components/News';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <Quiz />
      <Team />
      <News />
      <CTA />
      <Contact />
    </main>
  );
}
