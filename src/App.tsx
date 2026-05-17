import './App.css';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Mission from './sections/Mission';
import Values from './sections/Values';
import Services from './sections/Services';
import Domains from './sections/Domains';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="relative min-h-[100dvh]">
      <Navigation />
      <Hero />
      <Mission />
      <Values />
      <Services />
      <Domains />
      <Contact />
      <Footer />
    </div>
  );
}
