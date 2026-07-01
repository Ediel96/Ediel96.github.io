export const navItems = [
  { href: '#home', label: 'Inicio', icon: 'home' },
  { href: '#tools', label: 'Stack', icon: 'skills' },
  { href: '#experience', label: 'Experiencia', icon: 'experience' },
  { href: '#projects', label: 'Proyectos', icon: 'projects' },
  { href: '#contact', label: 'Contacto', icon: 'contact' },
];

export const profile = {
  name: 'Hamilton Acevedo Ávila',
  initials: 'HA',
  role: 'Full Stack Developer',
  tagline: 'Node.js · NestJS · Spring Boot',
  bio: 'Full Stack Developer con +7 años construyendo microservicios y soluciones cloud en el sector bancario.',
  specialty:
    'Especializado en microservicios con NestJS y Spring Boot. Arquitecturas hexagonales, despliegues en AWS, orquestación con Kubernetes y monitoreo en producción.',
  github: 'https://github.com/Ediel96',
  githubLabel: 'github.com/Ediel96',
  linkedin: 'https://www.linkedin.com/in/hamilton-acevedo-5b6990141/',
  phone: '+57 304 626 5378',
  location: 'Bogotá, Colombia',
};

export const stats = [
  { num: '7+', label: 'AÑOS EXP.' },
  { num: '3', label: 'EMPRESAS' },
  { num: '∞', label: 'MICROSERVICIOS' },
  { num: 'AWS', label: 'CLOUD' },
];

export const toolsGrid = [
  { emoji: '🟢', bg: 'rgba(102,204,102,0.1)', name: 'Node.js · NestJS', desc: 'Runtime & Backend Framework' },
  { emoji: '🍃', bg: 'rgba(103,194,58,0.1)', name: 'Java · Spring Boot', desc: 'Enterprise Backend' },
  { emoji: '☁️', bg: 'rgba(255,150,50,0.1)', name: 'AWS', desc: 'Cloud Infrastructure' },
  { emoji: '🐳', bg: 'rgba(30,100,220,0.1)', name: 'Docker · Kubernetes', desc: 'Containers & Orchestration' },
  { emoji: '⚛️', bg: 'rgba(200,80,50,0.12)', name: 'React · Angular', desc: 'Frontend Frameworks' },
  { emoji: '🗄️', bg: 'rgba(100,200,100,0.1)', name: 'MongoDB · PostgreSQL', desc: 'Bases de datos' },
  { emoji: '🔷', bg: 'rgba(80,140,200,0.1)', name: 'Terraform · OpenShift', desc: 'Infrastructure as Code' },
  { emoji: '📊', bg: 'rgba(229,62,62,0.1)', name: 'Dynatrace · Elastic Stack', desc: 'Monitoring & Observability' },
  { emoji: '🔗', bg: 'rgba(0,160,210,0.1)', name: 'Salesforce API', desc: 'CRM Integration' },
  { emoji: '🏗️', bg: 'rgba(155,28,28,0.1)', name: 'Arq. Hexagonal', desc: 'Microservices Design Pattern' },
];

export const experience = [
  {
    period: 'May 2023 – Abr 2026',
    role: 'Full Stack Developer — Sector Bancario',
    company: 'Vass LATAM · Bogotá (Remoto)',
    tags: [
      { label: 'NestJS', primary: true },
      { label: 'Java 17/21', primary: true },
      { label: 'AWS', primary: true },
      { label: 'Docker', primary: false },
      { label: 'Kubernetes', primary: false },
      { label: 'Terraform', primary: false },
      { label: 'MongoDB', primary: false },
      { label: 'Oracle', primary: false },
      { label: 'Salesforce', primary: false },
    ],
    bullets: [
      'Diseñé y desarrollé microservicios escalables bajo arquitectura hexagonal.',
      'Integré servicios con Salesforce asegurando interoperabilidad con sistemas del negocio.',
      'Implementé despliegues en AWS con Docker y Kubernetes.',
      'Gestioné infraestructura como código con Terraform.',
      'Monitoreé servicios en producción con Dynatrace y Elastic Stack.',
    ],
  },
  {
    period: 'Jun 2021 – Feb 2023',
    role: 'Semi Senior Developer — Sector Tecnológico',
    company: 'Asesoftware · Bogotá (Remoto)',
    tags: [
      { label: 'Java', primary: true },
      { label: 'Spring Boot', primary: true },
      { label: 'Angular', primary: true },
      { label: 'PostgreSQL', primary: false },
      { label: 'Oracle', primary: false },
      { label: 'Azure', primary: false },
      { label: 'PostGIS', primary: false },
    ],
    bullets: [
      'Desarrollé aplicaciones empresariales con Spring Boot y Angular.',
      'Gestioné bases de datos relacionales y geoespaciales (PostGIS, Oracle).',
      'Desplegué aplicaciones en Azure y consumí APIs REST.',
    ],
  },
  {
    period: 'Jul 2019 – Oct 2020',
    role: 'Junior Developer',
    company: 'Spira · Bogotá',
    tags: [
      { label: 'Angular', primary: true },
      { label: 'Laravel', primary: true },
      { label: 'MySQL', primary: false },
      { label: 'Bootstrap', primary: false },
      { label: 'PWA', primary: false },
    ],
    bullets: [
      'Desarrollé módulos frontend con Angular y backend con Laravel.',
      'Participé en desarrollo de aplicaciones PWA.',
    ],
  },
];

export const projects = [
  {
    emoji: '🏦',
    title: 'Microservicios Bancarios',
    desc: 'Arquitectura de servicios backend escalables en el sector bancario colombiano. Integración con Salesforce y monitoreo avanzado con Dynatrace.',
    gradient: 'linear-gradient(90deg, #e53e3e, #9b1c1c)',
    tags: [
      { label: 'NestJS', primary: true },
      { label: 'Java', primary: true },
      { label: 'AWS', primary: false },
      { label: 'K8s', primary: false },
      { label: 'Salesforce', primary: false },
    ],
  },
  {
    emoji: '☁️',
    title: 'Arquitectura Cloud',
    desc: 'Despliegues en AWS con contenedores orquestados. Infraestructura como código con Terraform y análisis de logs en entornos críticos.',
    gradient: 'linear-gradient(90deg, #06b6d4, #7c3aed)',
    tags: [
      { label: 'AWS', primary: true },
      { label: 'Terraform', primary: true },
      { label: 'Docker', primary: false },
      { label: 'Elastic', primary: false },
    ],
  },
  {
    emoji: '🌐',
    title: 'Plataforma Empresarial',
    desc: 'Aplicaciones empresariales con Spring Boot y Angular. Gestión de datos geoespaciales con PostGIS y despliegue en Azure.',
    gradient: 'linear-gradient(90deg, #7c3aed, #ec4899)',
    tags: [
      { label: 'Spring Boot', primary: true },
      { label: 'Angular', primary: true },
      { label: 'PostgreSQL', primary: false },
      { label: 'Azure', primary: false },
    ],
  },
];

export const contact = {
  location: 'Bogotá, Colombia',
  availability: 'Remoto / Híbrido',
  phone: '+57 304 626 5378',
  github: 'github.com/Ediel96',
  githubUrl: 'https://github.com/Ediel96',
};

// Legacy exports kept for compatibility
export const skillGroups = [
  { title: 'Backend', icon: 'backend', tools: 'Node.js · NestJS · Java 17/21 · Spring Boot · APIs REST · Microservicios' },
  { title: 'Frontend', icon: 'frontend', tools: 'Angular · React · TypeScript · JavaScript · HTML · CSS' },
  { title: 'Datos', icon: 'database', tools: 'MongoDB · PostgreSQL · Oracle · MySQL · PostGIS' },
  { title: 'Cloud', icon: 'cloud', tools: 'AWS · Docker · Kubernetes · Terraform · OpenShift · Azure' },
  { title: 'Calidad', icon: 'quality', tools: 'Pruebas unitarias · Clean Code · Documentación técnica · Checkmarx' },
  { title: 'Operación', icon: 'operations', tools: 'Elastic Stack · Dynatrace · Incidentes productivos · Análisis de logs' },
];

export const heroTools = ['Node.js', 'NestJS', 'Spring Boot', 'AWS', 'Kubernetes', 'Microservicios'];
