import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { PenTool, Code2, Rocket, Wrench, ChevronRight } from 'lucide-react';

const SERVICES = [
  {
    icon: PenTool,
    title: 'Design',
    description:
      'We build prototypes and create comprehensive designs that align with your business objectives and user needs.',
  },
  {
    icon: Code2,
    title: 'Implement',
    description:
      'Full-stack development combining robust front-end experiences with scalable back-end architectures.',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description:
      'Seamless migration to production environments with zero-downtime deployment strategies.',
  },
  {
    icon: Wrench,
    title: 'Maintain',
    description:
      'Ongoing support, regular updates, and proactive monitoring to ensure long-term operational excellence.',
  },
];

export default function Services() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span
            className={`text-cyan text-xs font-medium uppercase tracking-[0.12em] transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            How We Work
          </span>
          <h2
            className={`text-dark-text text-3xl md:text-4xl lg:text-5xl font-bold mt-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Our Services
          </h2>
          <div
            className={`w-10 h-0.5 bg-cyan mx-auto mt-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '200ms' }}
          />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="relative">
                <div
                  className={`rounded-xl p-8 border border-ocean/10 bg-ice/50 hover:border-cyan/40 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  <div className="w-16 h-16 rounded-xl bg-[rgba(50,130,184,0.1)] flex items-center justify-center mx-auto mb-5">
                    <Icon className="text-cyan" size={28} />
                  </div>
                  <h4 className="text-dark-text text-lg font-semibold text-center mb-3">
                    {service.title}
                  </h4>
                  <p className="text-muted-text text-sm leading-relaxed text-center">
                    {service.description}
                  </p>
                </div>

                {/* Flow Arrow (desktop only, not after last) */}
                {index < SERVICES.length - 1 && (
                  <div
                    className={`hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-400 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
                    <ChevronRight
                      className="text-cyan animate-pulse-arrow"
                      size={24}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
