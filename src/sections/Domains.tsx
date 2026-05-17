import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Landmark, Building2, ShoppingCart, Building } from 'lucide-react';

const DOMAINS = [
  {
    icon: Landmark,
    title: 'Finance',
    tagline: 'Banking, insurance, and fintech automation',
    image: '/images/domain-finance.jpg',
  },
  {
    icon: Building2,
    title: 'Construction & Real Estate',
    tagline: 'Project management and resource optimization',
    image: '/images/domain-construction.jpg',
  },
  {
    icon: ShoppingCart,
    title: 'Retail',
    tagline: 'Omnichannel operations and supply chain',
    image: '/images/domain-retail.jpg',
  },
  {
    icon: Building,
    title: 'Administration & e-Government',
    tagline: 'Digital public services — Council of Europe',
    image: '/images/domain-gov.jpg',
  },
];

export default function Domains() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section
      id="domains"
      ref={sectionRef}
      className="relative w-full"
      style={{ backgroundColor: '#E8F4FD' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span
            className={`text-cyan text-xs font-medium uppercase tracking-[0.12em] transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            Where We Excel
          </span>
          <h2
            className={`text-dark-text text-3xl md:text-4xl lg:text-5xl font-bold mt-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Working Domains
          </h2>
          <div
            className={`w-10 h-0.5 bg-cyan mx-auto mt-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '200ms' }}
          />
        </div>

        {/* Domains Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {DOMAINS.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.title}
                className={`group relative rounded-2xl overflow-hidden min-h-[280px] cursor-pointer transition-all duration-600 ${
                  isVisible
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={domain.image}
                    alt={domain.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                  />
                </div>

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(11,22,40,0.92) 0%, rgba(11,22,40,0.5) 50%, rgba(11,22,40,0.2) 100%)',
                  }}
                />

                {/* Content */}
                <div className="relative z-10 h-full min-h-[280px] flex flex-col justify-end p-8">
                  <div className="w-10 h-10 rounded-lg bg-cyan/20 flex items-center justify-center mb-4">
                    <Icon className="text-cyan" size={20} />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-1">
                    {domain.title}
                  </h3>
                  <p className="text-sky/80 text-sm">{domain.tagline}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
