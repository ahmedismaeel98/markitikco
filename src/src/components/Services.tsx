import { useEffect, useRef } from 'react';
import { Video, PenTool, Megaphone, Monitor, Fingerprint, Palette } from 'lucide-react';

const SERVICES = [
  {
    icon: Video,
    title: 'صناعة محتوى',
    desc: 'إدارة وصناعة محتوى السوشيال ميديا بإبداع احترافي',
  },
  {
    icon: PenTool,
    title: 'تصميم شعارات',
    desc: 'تصميم شعارات احترافية تعبر عن هوية علامتك التجارية',
  },
  {
    icon: Megaphone,
    title: 'تسويق رقمي',
    desc: 'حملات إعلانية فعالة للوصول لجمهورك المستهدف',
  },
  {
    icon: Monitor,
    title: 'تصميم مواقع',
    desc: 'تصميم مواقع حديثة وسريعة متجاوبة مع جميع الأجهزة',
  },
  {
    icon: Fingerprint,
    title: 'هوية بصرية',
    desc: 'بناء هوية بصرية متكاملة تعكس احترافية علامتك التجارية',
  },
  {
    icon: Palette,
    title: 'تصميم جرافيك',
    desc: 'تصاميم إبداعية بجودة عالية لمختلف المجالات',
  },
];

function ServiceCard({
  icon: Icon,
  title,
  desc,
  delay,
}: {
  icon: typeof Video;
  title: string;
  desc: string;
  delay: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';

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

  return (
    <div
      ref={cardRef}
      className="group relative rounded-2xl p-6 cursor-default transition-all duration-400"
      style={{
        background: 'rgba(0, 34, 68, 0.4)',
        border: '1px solid rgba(255,102,0,0.15)',
        backdropFilter: 'blur(12px)',
        opacity: 0,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.border = '1px solid rgba(255,102,0,0.6)';
        el.style.boxShadow = '0 0 30px rgba(255,102,0,0.2), 0 8px 32px rgba(0,0,0,0.4)';
        el.style.transform = 'translateY(-6px)';
        el.style.background = 'rgba(0, 44, 88, 0.6)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.border = '1px solid rgba(255,102,0,0.15)';
        el.style.boxShadow = 'none';
        el.style.transform = 'translateY(0)';
        el.style.background = 'rgba(0, 34, 68, 0.4)';
      }}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
        style={{
          background: 'linear-gradient(135deg, rgba(255,102,0,0.2), rgba(255,102,0,0.05))',
          border: '1px solid rgba(255,102,0,0.3)',
        }}
      >
        <Icon size={26} className="text-[#FF6600]" />
      </div>
      <h3
        className="text-white font-bold text-lg mb-2"
        style={{ fontFamily: 'Cairo, sans-serif' }}
      >
        {title}
      </h3>
      <p
        className="text-gray-400 text-sm leading-relaxed"
        style={{ fontFamily: 'Cairo, sans-serif' }}
      >
        {desc}
      </p>
      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, rgba(255,102,0,0.15), transparent)' }}
      />
    </div>
  );
}

export default function Services() {
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
      id="services"
      className="relative py-24 px-6"
      style={{
        background: 'linear-gradient(180deg, #000d1a 0%, #001226 50%, #000d1a 100%)',
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(0,34,68,0.5) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section title */}
        <div ref={titleRef} className="text-center mb-16" style={{ opacity: 0 }}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-l from-[#FF6600] to-transparent" />
            <h2
              className="text-3xl md:text-4xl font-black text-white"
              style={{ fontFamily: 'Cairo, sans-serif' }}
            >
              خدماتنا
            </h2>
            <div className="h-px w-16 bg-gradient-to-r from-[#FF6600] to-transparent" />
          </div>
          <p
            className="text-gray-400 text-base max-w-lg mx-auto"
            style={{ fontFamily: 'Cairo, sans-serif' }}
          >
            نقدم باقة متكاملة من الخدمات الإبداعية والتسويقية لتمييز علامتك التجارية
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
