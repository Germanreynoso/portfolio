/**
 * Fuente única de verdad para datos de contacto y enlaces externos.
 * Editar aquí actualiza CTAs, navegación, footer y metadata.
 */
export const siteConfig = {
  name: 'Germán Reynoso',
  role: 'Full Stack Developer · IA · Automatización · SaaS',
  email: 'reynosogermangonzalo@gmail.com',
  whatsapp: 'https://wa.me/5438146789468',
  linkedin: 'https://www.linkedin.com/in/germanreynoso/',
  github: 'https://github.com/Germanreynoso',
  /**
   * Enlace para "Agendar reunión".
   * TODO: reemplazar por tu URL real de Cal.com / Calendly.
   * Mientras tanto cae a WhatsApp para no romper la conversión.
   */
  calendar: 'https://wa.me/5438146789468?text=Hola%20Germán,%20quiero%20agendar%20una%20reunión',
} as const

export const mailto = `mailto:${siteConfig.email}`
