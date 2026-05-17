import { useState } from 'react';
import { useScrolled } from '../hooks/useScrollAnimation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Mission', href: '#mission' },
  { label: 'Values', href: '#values' },
  { label: 'Services', href: '#services' },
  { label: 'Domains', href: '#domains' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(11,22,40,0.92)] backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        }`}
        style={{ height: 70 }}
      >
        <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-6 lg:px-12">
          {/* Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-sky text-sm font-extrabold tracking-[0.15em] hover:text-white transition-colors duration-200"
          >
            BUSINESS FLOWS
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-white text-sm font-medium hover:text-sky transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-midnight z-50 transform transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            className="text-white p-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-6 px-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-white text-xl font-semibold hover:text-sky transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
