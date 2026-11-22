export const SITE = {
  name: 'TICBOX',
  url: 'https://ticbox.net',
  domain: 'ticbox.net',
  email: 'hola@ticbox.net',
  tagline: 'Tecnología que resuelve.',
  description:
    'Desarrollo de software, integración de sistemas e inteligencia artificial aplicada. Plataformas SaaS, agentes, automatización y consultoría tecnológica.',
  author: 'Mauricio Fernández',
  location: 'Colombia',
  linkedin: 'https://www.linkedin.com/in/mauricio-fernandez-69b24a205',
  youtube: 'https://www.youtube.com/channel/UCv6Dv1nk-QKtYyqDuYLZgRA',
  github: 'https://github.com/marrullas/ticbox',
  ogImage: '/og-image.png',
} as const;

export const NAV = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#laboratorio', label: 'Laboratorio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#colaboracion', label: 'Cómo trabajamos' },
] as const;
