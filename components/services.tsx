import { SectionHeading } from '@/components/section-heading'
import { Corners } from '@/components/drafting'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'

const services = [
  {
    title: 'Desarrollo Web',
    description:
      'Aplicaciones web rápidas, accesibles y escalables construidas con frameworks modernos.',
  },
  {
    title: 'Desarrollo SaaS',
    description:
      'Productos SaaS de punta a punta: arquitectura, autenticación, facturación y paneles.',
  },
  {
    title: 'Integraciones con IA',
    description:
      'Funciones con LLM, pipelines RAG y asistentes inteligentes integrados a tu producto.',
  },
  {
    title: 'Automatización',
    description:
      'Flujos automatizados que eliminan tareas repetitivas y conectan todas tus herramientas.',
  },
  {
    title: 'Bots WhatsApp & Telegram',
    description:
      'Bots conversacionales para soporte, ventas y operaciones en los canales que usás.',
  },
  {
    title: 'Consultoría Técnica',
    description:
      'Revisión de arquitectura, estrategia de IA y acompañamiento para tu equipo de desarrollo.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="A-03"
            eyebrow="Servicios"
            title="Soluciones, no solo código"
            description="Mis clientes no compran tecnología: compran procesos más ágiles, tiempos más cortos y productos que generan resultados."
          />
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <StaggerItem
              key={s.title}
              className="group relative flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-secondary"
            >
              <Corners className="opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
              <span className="font-mono text-xs tracking-[0.12em] text-accent">
                S-{String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="type-display text-lg tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
