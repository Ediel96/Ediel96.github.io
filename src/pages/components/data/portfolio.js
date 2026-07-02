export const navItems = [
  { href: '#home', label: { es: 'Inicio', en: 'Home' }, icon: 'home' },
  { href: '#tools', label: { es: 'Stack', en: 'Stack' }, icon: 'skills' },
  { href: '#experience', label: { es: 'Experiencia', en: 'Experience' }, icon: 'experience' },
  { href: '#projects', label: { es: 'Proyectos', en: 'Projects' }, icon: 'projects' },
  { href: '#contact', label: { es: 'Contacto', en: 'Contact' }, icon: 'contact' },
];

export const profile = {
  name: 'Hamilton Acevedo Ávila',
  initials: 'HA',
  role: 'Full Stack Developer',
  tagline: 'Node.js · NestJS · Spring Boot',
  bio: {
    es: 'Full Stack Developer con +7 años construyendo microservicios y soluciones cloud en el sector bancario.',
    en: 'Full Stack Developer with 7+ years building microservices and cloud solutions in the banking sector.',
  },
  specialty: {
    es: 'Especializado en microservicios con NestJS y Spring Boot. Arquitecturas hexagonales, despliegues en AWS, orquestación con Kubernetes y monitoreo en producción.',
    en: 'Specialized in microservices with NestJS and Spring Boot. Hexagonal architecture, AWS deployments, Kubernetes orchestration, and production monitoring.',
  },
  github: 'https://github.com/Ediel96',
  githubLabel: 'github.com/Ediel96',
  linkedin: 'https://www.linkedin.com/in/hamilton-acevedo-5b6990141/',
  location: 'Bogotá, Colombia',
};

export const stats = [
  { num: '7+', label: { es: 'AÑOS EXP.', en: 'YRS EXP.' } },
  { num: '3', label: { es: 'EMPRESAS', en: 'COMPANIES' } },
  { num: '∞', label: { es: 'MICROSERVICIOS', en: 'MICROSERVICES' } },
  { num: 'AWS', label: { es: 'CLOUD', en: 'CLOUD' } },
];

export const toolsGrid = [
  { emoji: '🟢', bg: 'rgba(102,204,102,0.1)', name: 'Node.js · NestJS', desc: { es: 'Runtime & Framework Backend', en: 'Runtime & Backend Framework' } },
  { emoji: '🍃', bg: 'rgba(103,194,58,0.1)', name: 'Java · Spring Boot', desc: { es: 'Backend Empresarial', en: 'Enterprise Backend' } },
  { emoji: '☁️', bg: 'rgba(255,150,50,0.1)', name: 'AWS', desc: { es: 'Infraestructura Cloud', en: 'Cloud Infrastructure' } },
  { emoji: '🐳', bg: 'rgba(30,100,220,0.1)', name: 'Docker · Kubernetes', desc: { es: 'Contenedores y Orquestación', en: 'Containers & Orchestration' } },
  { emoji: '⚛️', bg: 'rgba(200,80,50,0.12)', name: 'React · Angular', desc: { es: 'Frameworks Frontend', en: 'Frontend Frameworks' } },
  { emoji: '🗄️', bg: 'rgba(100,200,100,0.1)', name: 'MongoDB · PostgreSQL', desc: { es: 'Bases de datos', en: 'Databases' } },
  { emoji: '🔷', bg: 'rgba(80,140,200,0.1)', name: 'Terraform · OpenShift', desc: { es: 'Infraestructura como Código', en: 'Infrastructure as Code' } },
  { emoji: '📊', bg: 'rgba(229,62,62,0.1)', name: 'Dynatrace · Elastic Stack', desc: { es: 'Monitoreo y Observabilidad', en: 'Monitoring & Observability' } },
  { emoji: '🔗', bg: 'rgba(0,160,210,0.1)', name: 'Salesforce API', desc: { es: 'Integración CRM', en: 'CRM Integration' } },
  { emoji: '🏗️', bg: 'rgba(155,28,28,0.1)', name: 'Arq. Hexagonal', desc: { es: 'Patrón de Diseño Microservicios', en: 'Microservices Design Pattern' } },
];

export const experience = [
  {
    period: 'May 2023 – Apr 2026',
    role: 'Full Stack Developer — Banking Sector',
    company: 'Vass LATAM · Bogotá (Remote)',
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
    bullets: {
      es: [
        'Diseñé y desarrollé microservicios escalables bajo arquitectura hexagonal.',
        'Integré servicios con Salesforce asegurando interoperabilidad con sistemas del negocio.',
        'Implementé despliegues en AWS con Docker y Kubernetes.',
        'Gestioné infraestructura como código con Terraform.',
        'Monitoreé servicios en producción con Dynatrace y Elastic Stack.',
      ],
      en: [
        'Designed and developed scalable microservices under hexagonal architecture.',
        'Integrated Salesforce services ensuring interoperability with business systems.',
        'Implemented AWS deployments with Docker and Kubernetes.',
        'Managed infrastructure as code with Terraform.',
        'Monitored production services with Dynatrace and Elastic Stack.',
      ],
    },
  },
  {
    period: 'Jun 2021 – Feb 2023',
    role: 'Semi Senior Developer — Tech Sector',
    company: 'Asesoftware · Bogotá (Remote)',
    tags: [
      { label: 'Java', primary: true },
      { label: 'Spring Boot', primary: true },
      { label: 'Angular', primary: true },
      { label: 'PostgreSQL', primary: false },
      { label: 'Oracle', primary: false },
      { label: 'Azure', primary: false },
      { label: 'PostGIS', primary: false },
    ],
    bullets: {
      es: [
        'Desarrollé aplicaciones empresariales con Spring Boot y Angular.',
        'Gestioné bases de datos relacionales y geoespaciales (PostGIS, Oracle).',
        'Desplegué aplicaciones en Azure y consumí APIs REST.',
      ],
      en: [
        'Built enterprise applications with Spring Boot and Angular.',
        'Managed relational and geospatial databases (PostGIS, Oracle).',
        'Deployed applications on Azure and consumed REST APIs.',
      ],
    },
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
    bullets: {
      es: [
        'Desarrollé módulos frontend con Angular y backend con Laravel.',
        'Participé en desarrollo de aplicaciones PWA.',
      ],
      en: [
        'Built frontend modules with Angular and backend with Laravel.',
        'Participated in PWA application development.',
      ],
    },
  },
];

export const projects = [
  {
    emoji: '🏦',
    title: { es: 'Microservicios Bancarios', en: 'Banking Microservices' },
    desc: {
      es: 'Arquitectura de servicios backend escalables en el sector bancario colombiano. Integración con Salesforce y monitoreo avanzado con Dynatrace.',
      en: 'Scalable backend service architecture for the Colombian banking sector. Salesforce integration and advanced monitoring with Dynatrace.',
    },
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
    title: { es: 'Arquitectura Cloud', en: 'Cloud Architecture' },
    desc: {
      es: 'Despliegues en AWS con contenedores orquestados. Infraestructura como código con Terraform y análisis de logs en entornos críticos.',
      en: 'AWS deployments with orchestrated containers. Infrastructure as code with Terraform and log analysis in critical environments.',
    },
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
    title: { es: 'Plataforma Empresarial', en: 'Enterprise Platform' },
    desc: {
      es: 'Aplicaciones empresariales con Spring Boot y Angular. Gestión de datos geoespaciales con PostGIS y despliegue en Azure.',
      en: 'Enterprise applications with Spring Boot and Angular. Geospatial data management with PostGIS and Azure deployment.',
    },
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
  github: 'github.com/Ediel96',
  githubUrl: 'https://github.com/Ediel96',
};

// Legacy
export const skillGroups = [];
export const heroTools = ['Node.js', 'NestJS', 'Spring Boot', 'AWS', 'Kubernetes', 'Microservicios'];
