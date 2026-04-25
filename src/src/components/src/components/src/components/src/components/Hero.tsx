import { useEffect, useRef } from 'react';
import ParticlesCanvas from './ParticlesCanvas';
import { ArrowLeft } from 'lucide-react';

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [logoRef, headingRef, subRef, descRef, btnRef];
    elements.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.opacity = '0';
        ref.current.style.transform = 'translateY(30px)';
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0)';
          }
        }, 200 + i * 180);
      }
    });
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 60% 40%, #003366 0%, #001830 40%, #000d1a 100%)',
      }}
    >
      <ParticlesCanvas />

      {/* Glow orbs */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,102,0,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,51,102,0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        {/* Circular logo */}
        <div
          ref={logoRef}
          className="mb-8 relative"
          style={{ opacity: 0 }}
        >
          <div
            className="w-36 h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center relative"
            style={{
              border: '3px solid #FF6600',
              boxShadow: '0 0 30px rgba(255,102,0,0.5), 0 0 60px rgba(255,102,0,0.2)',
              background: 'rgba(0, 22, 48, 0.8)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <img
              src="/MARKITIX_LOGO_1.png"
              alt="Markitix"
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
            {/* Rotating ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: '1px dashed rgba(255,102,0,0.3)',
                animation: 'spin 20s linear infinite',
              }}
            />
          </div>
        </div>

        <h1
          ref={headingRef}
          className="text-6xl md:text-8xl font-black text-white tracking-tight mb-4"
          style={{ fontFamily: 'Cairo, sans-serif', opacity: 0 }}
        >
          Markitix
        </h1>

        <p
          ref={subRef}
          className="text-xl md:text-3xl font-bold mb-4"
          style={{ fontFamily: 'Cairo, sans-serif', color: '#FF6600', opacity: 0 }}
        >
          شركة تصميم وتسويق رقمي{' '}
          <span className="text-white">احترافي</span>
        </p>

        <p
          ref={descRef}
          className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed max-w-xl"
          style={{ fontFamily: 'Cairo, sans-serif', opacity: 0 }}
        >
          نحو هوية بصرية مميزة لعلامتك التجارية — نجمع بين الإبداع والتقنية لنصنع تجارب رقمية لا تُنسى
        </p>

        <button
          ref={btnRef}
          onClick={scrollToContact}
          className="group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-base transition-all duration-300"
          style={{
            fontFamily: 'Cairo, sans-serif',
            background: 'linear-gradient(135deg, #FF6600, #FF8C00)',
            boxShadow: '0 0 20px rgba(255,102,0,0.5), 0 4px 20px rgba(255,102,0,0.3)',
            opacity: 0,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              '0 0 40px rgba(255,102,0,0.8), 0 8px 30px rgba(255,102,0,0.5)';
            (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px) scale(1.03)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              '0 0 20px rgba(255,102,0,0.5), 0 4px 20px rgba(255,102,0,0.3)';
            (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0) scale(1)';
          }}
        >
          تواصل معنا الآن
          <ArrowLeft
            size={18}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#FF6600]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" style={{ animation: 'bounce 2s infinite' }} />
      </div>
    </section>
  );
}
