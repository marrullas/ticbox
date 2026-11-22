import type { ImageMetadata } from 'astro';
import zabia from '../assets/images/zabia.png';
import senalsis from '../assets/images/senalsis.png';
import senaida from '../assets/images/senaida.png';
import markaf from '../assets/images/markaf.png';

export interface Project {
  /** Identificador para futuras páginas de caso de estudio: /proyectos/<slug> */
  slug: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  image: ImageMetadata;
  imageAlt: string;
  href?: string;
  note?: string;
  linkLabel?: string;
}

export const projects: Project[] = [
  {
    slug: 'zabia',
    number: '01',
    category: 'Edtech · IA',
    title: 'Zabia',
    description:
      'Plataforma SaaS de aprendizaje con rutas de estudio, tutor de IA y repetición espaciada FSRS.',
    tags: ['Aplicación web', 'Aprendizaje', 'IA'],
    image: zabia,
    imageAlt: 'Interfaz de Zabia con rutas de estudio y tutor de IA',
    href: 'https://zabia.app/',
    linkLabel: 'Visitar proyecto',
  },
  {
    slug: 'senalsis',
    number: '02',
    category: 'Plataformas · Integración',
    title: 'Senalsis',
    description:
      'Plataforma de seguimiento académico con indicadores, gestión de evidencias e integración de información de Zajuna (Moodle).',
    tags: ['Moodle', 'Dashboards', 'Integraciones'],
    image: senalsis,
    imageAlt: 'Panel de seguimiento académico de Senalsis',
    href: 'https://senalsis.app/',
    linkLabel: 'Visitar proyecto',
  },
  {
    slug: 'senaida',
    number: '03',
    category: 'Agentes · Automatización',
    title: 'SenAIda',
    description:
      'Agente de IA de escritorio que conecta Senalsis mediante API y Zajuna mediante automatización web para asistir tareas académicas y operativas.',
    tags: ['Agentes IA', 'Flujos de trabajo'],
    image: senaida,
    imageAlt: 'Interfaz de SenAIda con asistente conversacional y seguimiento de fichas',
    note: 'Demostración y detalles disponibles bajo consulta',
  },
  {
    slug: 'markaf',
    number: '04',
    category: 'Desarrollo móvil',
    title: 'Markaf',
    description:
      'Aplicación móvil multiplataforma para iOS y Android, orientada al marketing por recomendación. Proyecto de desarrollo móvil realizado en el contexto de Markaf Colombia.',
    tags: ['iOS', 'Android', 'Multiplataforma'],
    image: markaf,
    imageAlt: 'Ficha de Markaf en Google Play y capturas de la aplicación móvil',
    href: 'https://play.google.com/store/apps/details?id=com.markaf.markaf_app&hl=es_CO',
    linkLabel: 'Ver en Google Play',
  },
];
