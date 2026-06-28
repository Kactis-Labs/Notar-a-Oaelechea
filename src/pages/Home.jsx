import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Quiz from '../components/Quiz';
import Team from '../components/Team';
import News from '../components/News';
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
      <Contact />
    </main>
  );
}
