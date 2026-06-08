import {
  Compass,
  Hammer,
  LifeBuoy,
  PencilRuler,
  Rocket,
  Users,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'

const steps = [
  {
    icon: Users,
    title: 'Reunión inicial',
    description:
      'Entendemos tu negocio, tus objetivos y qué problema querés resolver.',
  },
  {
    icon: Compass,
    title: 'Análisis del problema',
    description:
      'Investigo el contexto, los procesos actuales y dónde está el verdadero cuello de botella.',
  },
  {
    icon: PencilRuler,
    title: 'Diseño de solución',
    description:
      'Defino la arquitectura y la propuesta técnica orientada a resultados medibles.',
  },
  {
    icon: Hammer,
    title: 'Desarrollo',
    description:
      'Construyo en entregas pequeñas y verificables, con calidad desde el día uno.',
  },
  {
    icon: Rocket,
    title: 'Implementación',
    description:
      'Despliegue a producción, integración con tus herramientas y puesta en marcha.',
  },
  {
    icon: LifeBuoy,
    title: 'Soporte y evolución',
    description:
      'Acompañamiento continuo, mejoras y escalado a medida que tu negocio crece.',
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Cómo trabajo"
            title="Un proceso claro, de la idea a producción"
            description="Sin sorpresas ni cajas negras. Cada etapa tiene un objetivo concreto y entregables verificables."
          />
        </Reveal>

        <Stagger className="relative grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <StaggerItem
              key={s.title}
              className="group relative flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-secondary"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40">
                  <s.icon className="size-5" />
                </span>
                <span className="font-mono text-2xl font-semibold text-border transition-colors group-hover:text-primary/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div>
                <h3 className="font-medium tracking-tight">{s.title}</h3>
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
