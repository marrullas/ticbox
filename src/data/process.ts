export interface ProcessStep {
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Comprender',
    description:
      'Analizamos el problema, las necesidades y las oportunidades reales de mejora.',
  },
  {
    title: 'Diseñar',
    description:
      'Definimos arquitectura, integraciones, alcance y responsabilidades con criterio técnico.',
  },
  {
    title: 'Construir',
    description:
      'Desarrollamos con herramientas modernas, IA asistida y colaboración especializada cuando aporta valor.',
  },
  {
    title: 'Validar y evolucionar',
    description:
      'Probamos, revisamos y mejoramos las soluciones antes y después de su implementación.',
  },
];
