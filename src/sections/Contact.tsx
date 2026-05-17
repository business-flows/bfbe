import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, Mail, Globe } from 'lucide-react';

export default function Contact() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-midnight"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Contact Info */}
          <div>
            {/* Section Heading */}
            <span
              className={`text-cyan text-xs font-medium uppercase tracking-[0.12em] transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              Let&apos;s Connect
            </span>
            <h2
              className={`text-white text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-8 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Get in Touch
            </h2>
            <div
              className={`w-10 h-0.5 bg-cyan mb-8 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '200ms' }}
            />

            {/* Description */}
            <p
              className={`text-muted-text text-lg leading-relaxed mb-10 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Ready to transform your business processes? We&apos;re here to help
              you achieve operational excellence through innovative digital
              solutions.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-10">
              <div
                className={`flex items-center gap-3 transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <MapPin className="text-cyan flex-shrink-0" size={20} />
                <span className="text-white">Herent, Belgium (near Leuven)</span>
              </div>
              <div
                className={`flex items-center gap-3 transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <Mail className="text-cyan flex-shrink-0" size={20} />
                <span className="text-white">info@businessflows.be</span>
              </div>
              <div
                className={`flex items-center gap-3 transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <Globe className="text-cyan flex-shrink-0" size={20} />
                <span className="text-white">Satellite team: Sfax, Tunisia</span>
              </div>
            </div>

            {/* Countries Divider */}
            <div
              className={`border-t border-white/10 pt-6 mb-8 transition-all duration-600 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <p className="text-muted-text text-sm">
                Serving: Belgium • Tunisia • Ivory Coast • France • UK •
                Netherlands
              </p>
            </div>

            {/* CTA Button */}
            <div
              className={`transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <a
                href="mailto:info@businessflows.be"
                className="inline-block bg-coral text-white px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-[#F07A65] transition-all duration-200 hover:-translate-y-0.5"
              >
                Start a Conversation
              </a>
            </div>
          </div>

          {/* Right Column - Office Image */}
          <div
            className={`transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <img
              src="/images/belgium-office.jpg"
              alt="Business Flows office in Herent, Belgium"
              loading="lazy"
              className="w-full rounded-2xl shadow-2xl"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
