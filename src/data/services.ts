export interface Service {
  icon: 'code' | 'ai' | 'automation' | 'consulting';
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: 'code',
    title: 'Software y aplicaciones',
    description:
      'Plataformas web y móviles, SaaS, APIs, bases de datos y sistemas a medida.',
  },
  {
    icon: 'ai',
    title: 'Inteligencia artificial aplicada',
    description:
      'Agentes inteligentes, asistentes, RAG y soluciones que conectan modelos de lenguaje con datos y herramientas.',
  },
  {
    icon: 'automation',
    title: 'Automatización e integración',
    description:
      'Sincronización de información, automatización web y conexión de plataformas para reducir tareas repetitivas.',
  },
  {
    icon: 'consulting',
    title: 'Consultoría tecnológica',
    description:
      'Análisis, arquitectura, acompañamiento técnico y colaboración con perfiles especializados cuando el proyecto lo requiere.',
  },
];
