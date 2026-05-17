import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { TrendingUp, Shield } from 'lucide-react';

export default function Mission() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="relative min-h-[60vh] w-full overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/mission-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[rgba(11,22,40,0.88)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 md:py-32 text-center">
        {/* Section Label */}
        <div
          className={`transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <span className="text-cyan text-xs font-medium uppercase tracking-[0.12em]">
            Our Mission
          </span>
          <div className="w-10 h-0.5 bg-cyan mx-auto mt-4 mb-6" />
        </div>

        {/* Mission Statement */}
        <h2
          className={`text-white text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed max-w-[800px] mx-auto mb-16 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          We help our customers achieve{' '}
          <span className="text-sky font-semibold">business agility</span> while
          guaranteeing operational excellence. We believe in democratizing access
          to enterprise-grade business automation for{' '}
          <span className="text-sky font-semibold">
            small and medium organizations
          </span>
          .
        </h2>

        {/* Mission Pillars */}
        <div className="grid md:grid-cols-2 gap-12 max-w-[800px] mx-auto">
          {/* Pillar 1 */}
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="w-16 h-16 rounded-full bg-[rgba(50,130,184,0.15)] border border-cyan/30 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="text-cyan" size={28} />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">
              Business Agility
            </h3>
            <p className="text-muted-text leading-relaxed">
              Empowering organizations to adapt quickly to market changes through
              flexible, scalable process automation solutions built on open
              standards.
            </p>
          </div>

          {/* Pillar 2 */}
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="w-16 h-16 rounded-full bg-[rgba(50,130,184,0.15)] border border-cyan/30 flex items-center justify-center mx-auto mb-6">
              <Shield className="text-cyan" size={28} />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">
              Democratized Automation
            </h3>
            <p className="text-muted-text leading-relaxed">
              Making powerful enterprise automation accessible and affordable for
              SMEs, not just large corporations with unlimited IT budgets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
