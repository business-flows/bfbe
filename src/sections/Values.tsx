import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  TrendingUp,
  Heart,
  Users,
  Lightbulb,
  Shield,
  Eye,
} from 'lucide-react';

const VALUES = [
  {
    icon: TrendingUp,
    title: 'Growth',
    description:
      'Our success is measured through the prism of our clients\' success. We invest in continuous learning and development.',
  },
  {
    icon: Heart,
    title: 'Customer Orientation',
    description:
      'Helping customers meet their long-term needs and wants. We listen first, then build solutions that truly matter.',
  },
  {
    icon: Users,
    title: 'Teamworking',
    description:
      'Collaborative effort of our group to achieve common goals in the most efficient way, bridging our Belgian and Tunisian teams.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Pioneering in Artificial Intelligence, Machine Learning, and emerging technologies to keep our clients ahead of the curve.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'At the foundation of our work, actions, and relationships. We do what\'s right, not what\'s easy.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description:
      'Fostering honest and open communication across every stakeholder. No hidden costs, no surprises.',
  },
];

export default function Values() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section
      id="values"
      ref={sectionRef}
      className="relative w-full"
      style={{
        background: 'linear-gradient(180deg, #0B1628 0%, #0D1F35 50%, #0B1628 100%)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span
            className={`text-cyan text-xs font-medium uppercase tracking-[0.12em] transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            What Drives Us
          </span>
          <h2
            className={`text-white text-3xl md:text-4xl lg:text-5xl font-bold mt-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Our Values
          </h2>
          <div
            className={`w-10 h-0.5 bg-cyan mx-auto mt-4 transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '200ms' }}
          />
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={`group rounded-2xl p-8 md:p-10 bg-white/[0.03] border border-transparent hover:border-cyan/30 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1.5 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[rgba(50,130,184,0.15)] flex items-center justify-center mb-5">
                  <Icon className="text-cyan" size={24} />
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-text leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
