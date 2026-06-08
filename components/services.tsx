import {
  Bot,
  Code2,
  Cpu,
  Layers,
  MessageSquare,
  Workflow,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    icon: Code2,
    title: 'Desarrollo Web',
    description:
      'Aplicaciones web rápidas, accesibles y escalables construidas con frameworks modernos.',
  },
  {
    icon: Layers,
    title: 'Desarrollo SaaS',
    description:
      'Productos SaaS de punta a punta: arquitectura, autenticación, facturación y paneles.',
  },
  {
    icon: Cpu,
    title: 'Integraciones con IA',
    description:
      'Funciones con LLM, pipelines RAG y asistentes inteligentes integrados a tu producto.',
  },
  {
    icon: Workflow,
    title: 'Automatización',
    description:
      'Flujos automatizados que eliminan tareas repetitivas y conectan todas tus herramientas.',
  },
  {
    icon: MessageSquare,
    title: 'Bots WhatsApp & Telegram',
    description:
      'Bots conversacionales para soporte, ventas y operaciones en los canales que usás.',
  },
  {
    icon: Bot,
    title: 'Consultoría Técnica',
    description:
      'Revisión de arquitectura, estrategia de IA y acompañamiento para tu equipo de desarrollo.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Servicios"
          title="¿En qué puedo ayudarte?"
          description="Un set completo de herramientas full stack para diseñar, lanzar y automatizar los sistemas sobre los que funciona tu negocio."
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-secondary"
            >
              <div className="grid size-11 place-items-center rounded-xl border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40">
                <s.icon className="size-5" />
              </div>
              <div>
                <h3 className="font-medium tracking-tight">{s.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
