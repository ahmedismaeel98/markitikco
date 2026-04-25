import { useEffect, useRef } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: 'الهاتف',
    value: '009647703718200',
    sub: 'اتصل بنا أو راسلنا عبر واتساب',
    href: 'tel:+9647703718200',
  },
  {
    icon: Mail,
    label: 'البريد الإلكتروني',
    value: 'info@markitixco.com',
    sub: 'راسلنا على البريد الإلكتروني',
    href: 'mailto:info@markitixco.com',
  },
  {
    icon: MapPin,
    label: 'الموقع',
    value: 'تكريت - صلاح الدين',
    sub: 'العراق',
    href: null,
  },
];

function ContactCard({
  icon: Icon,
  label,
  value,
  sub,
  href,
  delay,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  sub: string;
  href: string | null;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, delay);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const inner = (
    <div
      className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl transition-all duration-300"
      style={{
        background: 'rgba(0, 34, 68, 0.4)',
        border: '1px solid rgba(255,102,0,0.15)',
        backdropFilter: 'blur(12px)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.border = '1px solid rgba(255,102,0,0.5)';
        el.style.boxShadow = '0 0 24px rgba(255,102,0,0.15)';
        el.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.border = '1px solid rgba(255,102,0,0.15)';
        el.style.boxShadow = 'none';
        el.style.transform = 'translateY(0)';
      }}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, rgba(255,102,0,0.25), rgba(255,102,0,0.05))',
          border: '1px solid rgba(255,102,0,0.4)',
          boxShadow: '0 0 20px rgba(255,102,0,0.15)',
        }}
      >
        <Icon size={26} className="text-[#FF6600]" />
      </div>
      <div>
        <p
          className="text-gray-400 text-sm mb-1"
          style={{ fontFamily: 'Cairo, sans-serif' }}
        >
          {label}
        </p>
        <p
          className="text-white font-bold text-base md:text-lg"
          style={{ fontFamily: 'Cairo, sans-serif', direction: 'ltr' }}
        >
          {value}
        </p>
        <p
          className="text-gray-500 text-sm mt-1"
          style={{ fontFamily: 'Cairo, sans-serif' }}
        >
          {sub}
        </p>
      </div>
    </div>
  );

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      {href ? (
        <a href={href} className="block no-underline">
          {inner}
        </a>
      ) : (
        inner
      )}
    </div>
  );
}

export default function Contact() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="relative py-24 px-6"
      style={{
        background: 'linear-gradient(180deg, #000d1a 0%, #001830 100%)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(255,102,0,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div ref={titleRef} className="text-center mb-16" style={{ opacity: 0 }}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-l from-[#FF6600] to-transparent" />
            <h2
              className="text-3xl md:text-4xl font-black text-white"
              style={{ fontFamily: 'Cairo, sans-serif' }}
            >
              تواصل معنا
            </h2>
            <div className="h-px w-16 bg-gradient-to-r from-[#FF6600] to-transparent" />
          </div>
          <p
            className="text-gray-400 text-base"
            style={{ fontFamily: 'Cairo, sans-serif' }}
          >
            نحن هنا لمساعدتك في تحقيق أهدافك التسويقية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTACT_ITEMS.map((item, i) => (
            <ContactCard key={item.label} {...item} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
