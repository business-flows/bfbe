import FlowNetworkCanvas from './FlowNetworkCanvas';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B1628 0%, #0D1F35 100%)' }}
    >
      <FlowNetworkCanvas />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Label */}
        <p
          className="text-cyan text-xs font-medium uppercase tracking-[0.15em] mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
        >
          Digital Transformation Experts
        </p>

        {/* Heading */}
        <h1
          className="text-white font-extrabold leading-[0.95] mb-4 opacity-0 animate-fade-in-up"
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            animationDelay: '400ms',
            animationFillMode: 'forwards',
          }}
        >
          Business Flows
        </h1>

        {/* Subheading */}
        <p
          className="text-muted-text text-lg md:text-xl leading-relaxed max-w-[600px] mx-auto mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
        >
          Democratizing enterprise-grade business automation for forward-thinking
          organizations. Based in Belgium, serving Europe.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
        >
          <button
            onClick={() => handleScrollTo('#services')}
            className="bg-cyan text-midnight px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-sky transition-all duration-200 hover:-translate-y-0.5"
          >
            Our Services
          </button>
          <button
            onClick={() => handleScrollTo('#contact')}
            className="bg-transparent border border-cyan text-cyan px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-[rgba(50,130,184,0.15)] transition-all duration-200 hover:-translate-y-0.5"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in"
        style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}
      >
        <ChevronDown
          className="text-muted-text animate-bounce-gentle"
          size={24}
          style={{ opacity: 0.6 }}
        />
      </div>
    </section>
  );
}
