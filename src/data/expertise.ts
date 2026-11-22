export interface ExpertiseItem {
  title: string;
  description: string;
}

export const expertise: ExpertiseItem[] = [
  {
    title: 'Ingeniería de software',
    description:
      'Aplicaciones web y móviles, SaaS, APIs, bases de datos, pruebas y despliegues.',
  },
  {
    title: 'Integración y operación',
    description:
      'Conexión de sistemas, automatización web, infraestructura, seguridad y mantenimiento de plataformas.',
  },
  {
    title: 'IA aplicada y agentes',
    description:
      'Modelos de lenguaje, agentes con herramientas, RAG, MCP, embeddings y conexión con información y servicios existentes.',
  },
  {
    title: 'Desarrollo colaborativo',
    description:
      'Trabajo en equipos, planificación, revisión, pruebas y uso responsable de herramientas de IA para asistir la ingeniería.',
  },
];

export const stack = [
  'SvelteKit',
  'TypeScript',
  'PostgreSQL',
  'Go · Electron',
  'Flutter',
  'Agentes · RAG · MCP',
] as const;
