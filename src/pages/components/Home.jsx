import { useEffect, useRef, useState } from 'react';
import { contact, experience, navItems, profile, projects, stats, toolsGrid } from './data/portfolio';
import profileImage from '../../assets/img/profile.png';

// ── UI STRINGS ──
const T = {
  es: {
    available: 'DISPONIBLE · REMOTO',
    heroEyebrow: '// Full Stack Developer · Bogotá, Colombia',
    cta1: '🚀 Ver proyectos', cta2: '📡 Contactar',
    tools:   { eyebrow: '// 01 · Stack técnico', solid: 'PREMIUM',    ghost: 'TOOLS' },
    exp:     { eyebrow: '// 02 · Trayectoria',   solid: 'EXPERIENCIA', ghost: 'LABORAL' },
    proj:    { eyebrow: '// 03 · Proyectos',      solid: 'PROYECTOS',  ghost: 'DESTACADOS' },
    contact: { eyebrow: '// 04 · Contacto', line1: "LET'S WORK", line2: 'TOGETHER',
      desc: 'Disponible para proyectos remotos e híbridos. Experiencia en arquitecturas empresariales, microservicios y cloud. Listo para el próximo reto.' },
    footer: '© 2026 · Hamilton Acevedo Ávila · Full Stack Developer · Bogotá, Colombia',
    dock: ['Inicio', 'Stack', 'Exp.', 'Proyectos', 'Contacto'],
  },
  en: {
    available: 'AVAILABLE · REMOTE',
    heroEyebrow: '// Full Stack Developer · Bogotá, Colombia',
    cta1: '🚀 View projects', cta2: '📡 Contact me',
    tools:   { eyebrow: '// 01 · Tech stack',  solid: 'PREMIUM',    ghost: 'TOOLS' },
    exp:     { eyebrow: '// 02 · Career',       solid: 'EXPERIENCE', ghost: 'HISTORY' },
    proj:    { eyebrow: '// 03 · Work',         solid: 'FEATURED',   ghost: 'PROJECTS' },
    contact: { eyebrow: '// 04 · Contact', line1: "LET'S WORK", line2: 'TOGETHER',
      desc: 'Available for remote and hybrid projects. Experience in enterprise architectures, microservices and cloud. Ready for the next challenge.' },
    footer: '© 2026 · Hamilton Acevedo Ávila · Full Stack Developer · Bogotá, Colombia',
    dock: ['Home', 'Stack', 'Exp.', 'Projects', 'Contact'],
  },
};

// ── STARFIELD ──
const Starfield = () => {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, stars = [], raf;
    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    const init = () => {
      stars = Array.from({ length: 180 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.4 + 0.3,
        alpha: Math.random() * 0.5 + 0.1,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.015 + 0.005,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      stars.forEach(s => {
        s.phase += s.speed;
        const a = s.alpha * (0.4 + 0.6 * Math.sin(s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,210,255,${a})`;
        ctx.fill();
      });
      if (Math.random() < 0.002) {
        const sx = Math.random() * W * 0.7, sy = Math.random() * H * 0.4;
        const len = 80 + Math.random() * 80;
        const g = ctx.createLinearGradient(sx, sy, sx + len, sy + len * 0.4);
        g.addColorStop(0, 'rgba(229,62,62,0)');
        g.addColorStop(0.5, 'rgba(229,62,62,0.65)');
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx + len, sy + len * 0.4);
        ctx.strokeStyle = g; ctx.lineWidth = 1.5; ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    };
    resize(); init(); draw();
    const onResize = () => { resize(); init(); };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);
  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0 opacity-45" />;
};

// ── ACTIVE SECTION ──
const SECTIONS = ['home', 'tools', 'experience', 'projects', 'contact'];
const useActiveSection = () => {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const handle = () => {
      let cur = 'home';
      SECTIONS.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 220) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);
  return active;
};

// ── SCROLL REVEAL ──
const useScrollReveal = () => {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('reveal-visible'), i * 80);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

// ── NAV SVG ICONS ──
const NavIcon = ({ icon }) => {
  const icons = {
    home: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
    skills: <><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>,
    experience: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></>,
    projects: <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>,
    contact: <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      {icons[icon]}
    </svg>
  );
};

// ── FLOATING NAV ──
const FloatingNav = ({ active, lang, onToggle }) => (
  <nav className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
    <div
      className="flex items-center gap-0.5 rounded-2xl border border-white/8 px-3 py-2 shadow-2xl shadow-black/30 backdrop-blur-2xl"
      style={{ background: 'rgba(20,20,20,0.85)' }}
    >
      {navItems.map(({ href, label, icon }) => {
        const id = href.replace('#', '');
        const isActive = active === id;
        return (
          <a
            key={href}
            href={href}
            className={`flex flex-col items-center gap-0.5 rounded-xl px-3.5 py-2 no-underline transition-all duration-200 ${
              isActive
                ? 'bg-ember/12 text-ember'
                : 'text-white/50 hover:bg-ember/10 hover:text-ember'
            }`}
          >
            <NavIcon icon={icon} />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.5px]">{label[lang]}</span>
          </a>
        );
      })}
      <div className="mx-1 w-px h-5 bg-white/10 self-center" />
      <button
        onClick={onToggle}
        className="rounded-lg border border-white/15 px-2.5 py-1 font-mono text-[0.65rem] font-bold tracking-wider transition hover:border-ember hover:text-ember"
        style={{ color: 'rgba(255,255,255,0.5)' }}
      >
        {lang === 'es' ? 'EN' : 'ES'}
      </button>
    </div>
  </nav>
);

// ── TAG ──
const Tag = ({ label, primary }) => (
  <span
    className={`font-mono text-[0.68rem] tracking-[0.5px] px-2.5 py-0.5 rounded-xl border ${
      primary
        ? 'bg-ember/10 text-ember border-ember/20'
        : 'bg-white/5 text-white/50 border-white/8'
    }`}
  >
    {label}
  </span>
);

// ── SECTION HEADING ──
const SectionHead = ({ eyebrow, solid, ghost }) => (
  <div className="reveal">
    <p className="font-mono text-[0.68rem] tracking-[3px] text-ember opacity-80 mb-1">{eyebrow}</p>
    <div className="leading-none tracking-[-1.5px]">
      <span className="block font-display font-black text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>{solid}</span>
      <span
        className="block font-display font-black"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.12)' }}
      >
        {ghost}
      </span>
    </div>
    <div className="mt-6 mb-12 h-[3px] w-9 rounded-full bg-ember" />
  </div>
);

// ── HERO ──
const HeroSection = ({ lang }) => (
  <section id="home" className="relative z-10">
    <div
      className="mx-auto flex max-w-[1020px] flex-col lg:flex-row lg:items-stretch lg:justify-center"
      style={{ minHeight: 'calc(100vh - 5rem)' }}
    >
    {/* Profile column — right on desktop, first on mobile */}
    <div
      className="lg:order-2 lg:w-[320px] lg:shrink-0 lg:sticky lg:top-20 flex items-center justify-center p-8 lg:p-4"
      style={{ height: 'calc(100vh - 5rem)' }}
    >
      <div className="profile-card-wrap">
        <div
          className="relative w-full max-w-[290px] rounded-3xl border border-white/8 p-6 text-center shadow-2xl shadow-black/50"
          style={{ background: '#141414' }}
        >
          {/* Avatar */}
          <div
            className="mb-5 overflow-hidden rounded-2xl"
            style={{ background: 'linear-gradient(135deg, #e53e3e 0%, #1a0505 100%)', aspectRatio: '4 / 3.5' }}
          >
            <img
              src={profileImage}
              alt={`Foto de ${profile.name}`}
              className="h-full w-full object-cover scale-110"
              style={{ objectPosition: '38% 58%' }}
            />
          </div>

          {/* Fire */}
          <div
            className="mx-auto mb-3 grid h-9 w-9 place-items-center rounded-full text-lg"
            style={{ background: '#e53e3e', boxShadow: '0 0 20px rgba(229,62,62,0.5)' }}
          >
            🔥
          </div>

          <p className="font-display text-[1.2rem] font-bold text-white mb-2">{profile.name}</p>
          <p className="text-[0.8rem] leading-[1.55] mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>{profile.bio[lang]}</p>

          <div className="flex justify-center gap-2.5 mb-5">
            {[
              { href: profile.github, label: '🐙', external: true },
              { href: '#contact', label: '📡', external: false },
              { href: '#projects', label: '🚀', external: false },
            ].map(({ href, label, external }) => (
              <a
                key={href}
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white no-underline text-sm transition hover:border-ember"
                style={{ transition: 'border-color 0.2s, background 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(229,62,62,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = ''; }}
              >
                {label}
              </a>
            ))}
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-ember/20 bg-ember/8 px-3 py-1.5 font-mono text-[0.62rem] tracking-wider text-ember whitespace-nowrap">
            <span className="badge-dot h-1.5 w-1.5 rounded-full bg-green-400" />
            {T[lang].available}
          </span>
        </div>
      </div>
    </div>

    {/* Hero text column — left on desktop, second on mobile */}
    <div
      className="lg:order-1 flex flex-col justify-center border-t border-white/5 px-8 py-16 pb-28 lg:w-[660px] lg:shrink-0 lg:border-r lg:border-t-0 lg:px-10 lg:py-0 lg:pb-8 xl:w-[680px]"
      style={{ height: 'calc(100vh - 5rem)' }}
    >
      <p className="mb-4 font-mono text-[0.72rem] tracking-[3px] text-ember" style={{ opacity: 0.85 }}>
        {T[lang].heroEyebrow}
      </p>

      <h1 className="font-display leading-none tracking-[-2px] mb-0">
        <span className="block font-black text-white" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}>FULL</span>
        <span className="block font-black text-white" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}>STACK</span>
        <span
          className="block font-black"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}
        >
          DEVELOPER
        </span>
      </h1>

      <div className="my-8 h-[3px] w-12 rounded-full bg-ember" />

      <p className="max-w-[480px] text-[0.95rem] leading-[1.8] mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
        {profile.specialty[lang]}
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white no-underline transition hover:-translate-y-0.5"
          style={{ background: '#e53e3e', boxShadow: '0 0 28px rgba(229,62,62,0.35)' }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 44px rgba(229,62,62,0.55)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 28px rgba(229,62,62,0.35)'; }}
        >
          {T[lang].cta1}
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/12 px-7 py-3 text-sm font-semibold no-underline transition hover:bg-white/5 hover:border-white/25 hover:-translate-y-0.5"
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          {T[lang].cta2}
        </a>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-10 border-t pt-8" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        {stats.map(({ num, label }) => (
          <div key={num}>
            <span className="block font-display text-[2rem] font-bold leading-none text-ember">{num}</span>
            <span className="mt-1 block font-mono text-[0.72rem] tracking-[1px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{label[lang]}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  </section>
);

// ── TOOLS ──
const ToolsSection = ({ lang }) => (
  <section id="tools" className="relative z-10 py-20" style={{ background: '#141414' }}>
    <div className="mx-auto max-w-[1100px] px-8 lg:px-10">
      <SectionHead eyebrow={T[lang].tools.eyebrow} solid={T[lang].tools.solid} ghost={T[lang].tools.ghost} />
      <div
        className="reveal grid overflow-hidden rounded-2xl"
        style={{
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '20px',
        }}
      >
        {toolsGrid.map(({ emoji, bg, name, desc }) => (
          <div
            key={name}
            className="flex items-center gap-4 p-5 cursor-default transition"
            style={{ background: '#141414' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(229,62,62,0.04)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#141414'; }}
          >
            <div
              className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl text-2xl"
              style={{ background: bg }}
            >
              {emoji}
            </div>
            <div>
              <h4 className="font-display text-[0.95rem] font-semibold text-white mb-0.5">{name}</h4>
              <p className="text-[0.75rem]" style={{ color: 'rgba(255,255,255,0.35)' }}>{desc[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── EXPERIENCE ──
const ExperienceSection = ({ lang }) => (
  <section id="experience" className="relative z-10 py-20">
    <div className="mx-auto max-w-[1100px] px-8 lg:px-10">
      <SectionHead eyebrow={T[lang].exp.eyebrow} solid={T[lang].exp.solid} ghost={T[lang].exp.ghost} />
      <div className="flex flex-col gap-5">
        {experience.map((item) => (
          <div
            key={item.role}
            className="reveal relative overflow-hidden rounded-2xl border border-white/5 p-8 transition-[border-color] duration-300"
            style={{ background: '#141414' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(229,62,62,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
          >
            {/* Left red accent bar */}
            <div className="absolute inset-y-0 left-0 w-[3px] rounded-r bg-ember" />

            <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
              <p className="font-display text-[1.05rem] font-semibold text-white">{item.role}</p>
              <span className="font-mono text-[0.68rem] tracking-[1px] text-ember">{item.period}</span>
            </div>
            <p className="text-[0.82rem] mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.company}</p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.tags.map(t => <Tag key={t.label} {...t} />)}
            </div>

            <ul className="space-y-1.5 pl-4 list-disc">
              {item.bullets[lang].map((b, i) => (
                <li key={i} className="text-[0.82rem]" style={{ color: 'rgba(255,255,255,0.5)' }}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── PROJECTS ──
const ProjectsSection = ({ lang }) => (
  <section id="projects" className="relative z-10 py-20" style={{ background: '#141414' }}>
    <div className="mx-auto max-w-[1100px] px-8 lg:px-10">
      <SectionHead eyebrow={T[lang].proj.eyebrow} solid={T[lang].proj.solid} ghost={T[lang].proj.ghost} />
      <div className="reveal grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {projects.map((p) => (
          <div
            key={p.title}
            className="overflow-hidden rounded-2xl border border-white/6 transition-[transform,border-color] duration-300 hover:-translate-y-1"
            style={{ background: '#0e0e0e' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(229,62,62,0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
          >
            <div className="h-1.5" style={{ background: p.gradient }} />
            <div className="p-7">
              <div className="mb-4 text-[2rem]">{p.emoji}</div>
              <p className="font-display font-semibold text-white mb-2">{p.title[lang]}</p>
              <p className="text-[0.8rem] leading-[1.6] mb-5" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.desc[lang]}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(t => <Tag key={t.label} {...t} />)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── CONTACT ──
const ContactSection = ({ lang }) => (
  <section id="contact" className="relative z-10 py-20">
    <div className="mx-auto max-w-[1100px] px-8 lg:px-10">
      <div className="reveal">
        <p className="font-mono text-[0.68rem] tracking-[3px] text-ember opacity-80 mb-8">{T[lang].contact.eyebrow}</p>
        <div className="leading-none tracking-[-2px] mb-8">
          <span
            className="block font-display font-black text-white"
            style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
          >
            {T[lang].contact.line1}
          </span>
          <span
            className="block font-display font-black"
            style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}
          >
            {T[lang].contact.line2}
          </span>
        </div>
        <p className="text-[0.9rem] leading-[1.7] max-w-[480px] mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
          {T[lang].contact.desc}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white no-underline transition hover:-translate-y-0.5"
            style={{ background: '#e53e3e', boxShadow: '0 0 28px rgba(229,62,62,0.35)' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 44px rgba(229,62,62,0.55)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 28px rgba(229,62,62,0.35)'; }}
          >
            🐙 {contact.github}
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ── MACOS DOCK ──
const DOCK_NAV_BASE = [
  { emoji: '🏠', from: '#1a0a00', to: '#5c1500', href: '#home' },
  { emoji: '⚡', from: '#0f1a00', to: '#1a4000', href: '#tools' },
  { emoji: '📋', from: '#001a0f', to: '#003320', href: '#experience' },
  { emoji: '🚀', from: '#1a001a', to: '#3a004f', href: '#projects' },
  { emoji: '📡', from: '#1a0800', to: '#5c1500', href: '#contact' },
];
const DOCK_TECH = [
  { label: 'Node.js', node: <span className="font-mono text-[0.55rem] font-bold text-green-400">NODE</span>, from: '#0a1a00', to: '#14420a' },
  { label: 'NestJS', emoji: '🔴', from: '#1a0000', to: '#5c0a0a' },
  { label: 'Spring Boot', emoji: '🍃', from: '#001a00', to: '#004a14' },
  { label: 'AWS', node: <span className="font-mono text-[0.55rem] font-bold text-orange-400">AWS</span>, from: '#100800', to: '#3d2000' },
  { label: 'Docker', emoji: '🐳', from: '#00061a', to: '#001a5c' },
  { label: 'Kubernetes', node: <span className="font-mono text-[0.55rem] font-bold text-blue-400">K8S</span>, from: '#00061a', to: '#001255' },
  { label: 'React · Angular', emoji: '⚛️', from: '#001018', to: '#003040' },
];

const Dock = ({ lang }) => {
  const [hoverIdx, setHoverIdx] = useState(-1);
  const DOCK_NAV = DOCK_NAV_BASE.map((item, i) => ({ ...item, label: T[lang].dock[i] }));

  const navCount = DOCK_NAV.length;
  const techCount = DOCK_TECH.length;
  const allCount = navCount + techCount + 1; // +1 github

  const getStyle = (idx) => {
    if (hoverIdx < 0) return {};
    const d = Math.abs(idx - hoverIdx);
    const scale = d === 0 ? 1.32 : d === 1 ? 1.15 : d === 2 ? 1.06 : 1;
    const ty = d === 0 ? -16 : d === 1 ? -9 : d === 2 ? -3 : 0;
    return { transform: `translateY(${ty}px) scale(${scale})` };
  };

  const DockIcon = ({ idx, label, emoji, node, from, to, href, external, showDot }) => (
    <div
      className="relative flex flex-col items-center group"
      style={{ transition: 'transform 0.12s cubic-bezier(0.34,1.56,0.64,1)', ...getStyle(idx) }}
      onMouseEnter={() => setHoverIdx(idx)}
    >
      {/* Tooltip */}
      <div
        className="pointer-events-none absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-ember/30 px-2.5 py-1 font-mono text-[0.65rem] text-ember opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: 'rgba(14,14,14,0.95)' }}
      >
        {label}
      </div>

      {href ? (
        <a
          href={href}
          {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
          className="no-underline block"
        >
          <div
            className="grid h-10 w-10 place-items-center rounded-xl text-lg"
            style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          >
            {node || emoji}
          </div>
        </a>
      ) : (
        <div
          className="grid h-10 w-10 place-items-center rounded-xl text-lg cursor-default"
          style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
        >
          {node || emoji}
        </div>
      )}

      {showDot && <div className="mt-1 h-1 w-1 rounded-full bg-white/30" />}
    </div>
  );

  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
      <div
        className="flex items-end gap-1 rounded-2xl border border-white/8 px-3 py-2 backdrop-blur-2xl overflow-x-auto"
        style={{ background: 'rgba(14,14,14,0.88)', boxShadow: '0 8px 32px rgba(0,0,0,0.7)' }}
        onMouseLeave={() => setHoverIdx(-1)}
      >
        {DOCK_NAV.map(({ label, emoji, from, to, href }, i) => (
          <DockIcon key={label} idx={i} label={label} emoji={emoji} from={from} to={to} href={href} showDot />
        ))}

        <div className="mx-1 w-px self-center h-8 bg-white/8" />

        {DOCK_TECH.map(({ label, emoji, node, from, to }, i) => (
          <DockIcon key={label} idx={navCount + i} label={label} emoji={emoji} node={node} from={from} to={to} />
        ))}

        <div className="mx-1 w-px self-center h-8 bg-white/8" />

        <DockIcon
          idx={navCount + techCount}
          label="GitHub"
          emoji="🐙"
          from="#0a0a0a"
          to="#1a1a1a"
          href="https://github.com/Ediel96"
          external
          showDot
        />
      </div>
    </div>
  );
};

// ── FOOTER ──
const Footer = ({ lang }) => (
  <footer
    className="relative z-10 border-t px-10 pb-24 pt-8 text-center font-mono text-[0.65rem] tracking-[1px]"
    style={{ borderColor: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.2)' }}
  >
    {T[lang].footer}
  </footer>
);

// ── ROOT ──
export const Home = () => {
  const active = useActiveSection();
  const [lang, setLang] = useState('es');
  useScrollReveal();

  const toggleLang = () => setLang(l => l === 'es' ? 'en' : 'es');

  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: '#0e0e0e', color: '#fff' }}>
      <Starfield />
      <FloatingNav active={active} lang={lang} onToggle={toggleLang} />
      <div className="relative z-10 pt-20">
        <HeroSection lang={lang} />
        <ToolsSection lang={lang} />
        <ExperienceSection lang={lang} />
        <ProjectsSection lang={lang} />
        <ContactSection lang={lang} />
        <Footer lang={lang} />
      </div>
      <Dock lang={lang} />
    </main>
  );
};
