export interface Tool {
  name: string;
  description: string;
  tag: string;
}

export const tools: Tool[] = [
  {
    name: 'Privacy Blur',
    description:
      'Difumina, pixela u oculta información sensible antes de compartir capturas o grabaciones.',
    tag: 'Privacidad · Productividad',
  },
  {
    name: 'Senalsis – Zajuna Bridge',
    description:
      'Componente de integración que conecta el ecosistema Senalsis con Zajuna.',
    tag: 'Integración',
  },
  {
    name: 'Revivar',
    description:
      'Automatiza la recarga de varias pestañas con intervalos y horarios programados. Útil para monitorear paneles y supervisar información cambiante.',
    tag: 'Automatización · Productividad',
  },
  {
    name: 'Senalsis Bridge Lite',
    description:
      'Versión ligera del puente de integración para flujos de consulta puntuales.',
    tag: 'Integración',
  },
];
