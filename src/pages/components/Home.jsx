import {
  Briefcase,
  Cloud,
  CodeSlash,
  Database,
  Diagram3,
  Envelope,
  GeoAlt,
  Github,
  HddNetwork,
  HouseDoor,
  Layers,
  Linkedin,
  ShieldCheck,
  Terminal,
  WrenchAdjustable,
} from 'react-bootstrap-icons';
import {
  contact,
  experience,
  heroTools,
  navItems,
  profile,
  projects,
  skillGroups,
} from './data/portfolio';

const iconMap = {
  architecture: Diagram3,
  backend: HddNetwork,
  cloud: Cloud,
  contact: Envelope,
  database: Database,
  experience: Briefcase,
  frontend: CodeSlash,
  home: HouseDoor,
  operations: Terminal,
  projects: Layers,
  quality: ShieldCheck,
  skills: WrenchAdjustable,
};

const SectionEyebrow = ({ children }) => (
  <span className="text-sm font-black uppercase tracking-[0.18em] text-ember">{children}</span>
);

const GradientIcon = ({ icon }) => {
  const Icon = iconMap[icon] || Layers;

  return (
    <span className="grid h-14 w-14 place-items-center rounded-lg bg-gradient-to-br from-ember to-flame text-2xl text-white">
      <Icon />
    </span>
  );
};

const FloatingNav = () => (
  <div className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
    <nav className="flex items-center gap-1 rounded-2xl border border-white/10 bg-panel/85 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
      {navItems.map(({ href, label, icon }) => {
        const Icon = iconMap[icon] || HouseDoor;

        return (
          <a
            key={href}
            href={href}
            aria-label={label}
            title={label}
            className="group relative grid h-11 w-11 place-items-center rounded-xl text-white/80 transition hover:bg-gradient-to-br hover:from-ember hover:to-flame hover:text-white"
          >
            <Icon className="text-xl" />
            <span className="pointer-events-none absolute top-14 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-carbon opacity-0 shadow-lg transition group-hover:opacity-100">
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  </div>
);

const HeroSection = () => (
  <section
    id="home"
    className="relative flex min-h-screen items-center bg-[radial-gradient(circle_at_18%_16%,rgba(255,106,0,0.18),transparent_30rem),radial-gradient(circle_at_88%_42%,rgba(255,47,18,0.14),transparent_26rem)] px-6 py-32"
  >
    <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-lg bg-[#f7f4ef] p-7 text-carbon shadow-glow">
        <div className="mb-8 inline-flex rounded-full bg-gradient-to-br from-ember to-flame px-4 py-2 text-sm font-black text-white">
          {profile.role}
        </div>
        <h1 className="text-5xl font-black leading-[0.92] tracking-normal sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-6 text-base leading-7 text-neutral-600">{profile.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-carbon px-5 py-3 text-sm font-black text-white transition hover:bg-black"
          >
            <Github /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-carbon/15 px-5 py-3 text-sm font-black text-carbon transition hover:border-carbon"
          >
            <Linkedin /> LinkedIn
          </a>
        </div>
      </div>

      <div>
        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-ember">
          {profile.tagline}
        </span>
        <h2 className="mt-7 text-6xl font-black uppercase leading-[0.86] tracking-normal sm:text-7xl lg:text-8xl">
          {profile.headline.split(' ')[0]}
          <span className="block text-white/18">{profile.headline.split(' ').slice(1).join(' ')}</span>
        </h2>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/58">{profile.specialty}</p>
        <div className="mt-9 grid gap-4 sm:grid-cols-2">
          {heroTools.map((tool) => (
            <span
              key={tool}
              className="rounded-lg border border-white/10 bg-white/[0.055] px-6 py-5 text-xl font-black text-white shadow-lg shadow-black/10"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ProjectsSection = () => (
  <section id="projects" className="px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <SectionEyebrow>Proyectos</SectionEyebrow>
      <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <h2 className="max-w-3xl text-5xl font-black uppercase leading-[0.92] sm:text-6xl">
          Trabajo destacado
        </h2>
        <p className="max-w-md text-base leading-7 text-white/55">
          Casos representativos del tipo de sistemas en los que he trabajado: backend critico,
          nube, monitoreo y rendimiento.
        </p>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {projects.map(({ title, text, icon }) => (
          <article key={title} className="rounded-lg border border-white/10 bg-panel p-7 shadow-xl shadow-black/15">
            <GradientIcon icon={icon} />
            <h3 className="mt-8 text-2xl font-black">{title}</h3>
            <p className="mt-4 leading-7 text-white/55">{text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const ExperienceSection = () => (
  <section id="experience" className="px-6 py-24">
    <div className="mx-auto max-w-6xl rounded-lg border border-white/10 bg-panel p-7 shadow-glow sm:p-10">
      <SectionEyebrow>Experiencia</SectionEyebrow>
      <h2 className="mt-4 text-5xl font-black uppercase leading-[0.92] sm:text-6xl">Trayectoria</h2>
      <div className="mt-12 grid gap-5">
        {experience.map((item) => (
          <article
            key={item.role}
            className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.045] p-6 md:grid-cols-[160px_1fr]"
          >
            <span className="text-sm font-black uppercase tracking-[0.12em] text-ember">{item.period}</span>
            <div>
              <h3 className="text-2xl font-black">{item.role}</h3>
              <p className="mt-1 font-bold text-white/58">{item.company}</p>
              <p className="mt-4 leading-7 text-white/55">{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const SkillsSection = () => (
  <section id="skills" className="px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <SectionEyebrow>Herramientas</SectionEyebrow>
      <h2 className="mt-4 text-5xl font-black uppercase leading-[0.92] sm:text-6xl">Stack tecnico</h2>
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map(({ title, tools, icon }) => (
          <article
            key={title}
            className="rounded-lg border border-white/10 bg-panel p-7 transition hover:-translate-y-1 hover:border-ember/50"
          >
            <GradientIcon icon={icon} />
            <h3 className="mt-7 text-2xl font-black">{title}</h3>
            <p className="mt-4 leading-7 text-white/55">{tools}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="px-6 py-24">
    <div className="mx-auto grid max-w-6xl gap-8 rounded-lg border border-white/10 bg-[#f7f4ef] p-7 text-carbon sm:p-10 lg:grid-cols-[1fr_0.8fr]">
      <div>
        <SectionEyebrow>Contacto</SectionEyebrow>
        <h2 className="mt-4 text-5xl font-black uppercase leading-[0.92] sm:text-6xl">
          Construyamos algo solido
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          Disponible para oportunidades remotas o hibridas donde pueda aportar en backend,
          arquitectura cloud, integraciones y optimizacion de sistemas criticos.
        </p>
      </div>
      <div className="grid content-center gap-3">
        <span className="inline-flex items-center gap-3 rounded-lg border border-carbon/10 px-5 py-4 font-bold">
          <GeoAlt /> {contact.location}
        </span>
        <span className="inline-flex items-center gap-3 rounded-lg border border-carbon/10 px-5 py-4 font-bold">
          <Cloud /> {contact.availability}
        </span>
        <a
          className="inline-flex items-center gap-3 rounded-lg border border-carbon/10 px-5 py-4 font-bold"
          href={contact.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Github /> {contact.github}
        </a>
      </div>
    </div>
  </section>
);

export const Home = () => (
  <main className="min-h-screen overflow-x-hidden bg-carbon text-ink">
    <FloatingNav />
    <HeroSection />
    <ProjectsSection />
    <ExperienceSection />
    <SkillsSection />
    <ContactSection />
  </main>
);
