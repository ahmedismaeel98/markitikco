import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'أعمالنا', href: '#works' },
  { label: 'من نحن', href: '#about' },
  { label: 'تواصل معنا', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#001830]/95 backdrop-blur-md shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - right side in RTL */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav('#hero')}>
          <img
            src="/MARKITIX_LOGO_1.png"
            alt="Markitix Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-white font-bold text-xl tracking-wide hidden sm:block" style={{ fontFamily: 'Cairo, sans-serif' }}>
            Markitix
          </span>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`text-sm font-semibold transition-all duration-300 relative pb-1 ${
                  active === link.href
                    ? 'text-[#FF6600]'
                    : 'text-gray-300 hover:text-white'
                }`}
                style={{ fontFamily: 'Cairo, sans-serif' }}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-[#FF6600] rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#001830]/98 backdrop-blur-md border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`w-full text-right text-base font-semibold py-2 transition-colors ${
                    active === link.href ? 'text-[#FF6600]' : 'text-gray-300'
                  }`}
                  style={{ fontFamily: 'Cairo, sans-serif' }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
