import { SectionHeading } from '@/components/section-heading'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'

const steps = [
  {
    title: 'Reunión inicial',
    description:
      'Entendemos tu negocio, tus objetivos y qué problema querés resolver.',
  },
  {
    title: 'Análisis del problema',
    description:
      'Investigo el contexto, los procesos actuales y dónde está el verdadero cuello de botella.',
  },
  {
    title: 'Diseño de solución',
    description:
      'Defino la arquitectura y la propuesta técnica orientada a resultados medibles.',
  },
  {
    title: 'Desarrollo',
    description:
      'Construyo en entregas pequeñas y verificables, con calidad desde el día uno.',
  },
  {
    title: 'Implementación',
    description:
      'Despliegue a producción, integración con tus herramientas y puesta en marcha.',
  },
  {
    title: 'Soporte y evolución',
    description:
      'Acompañamiento continuo, mejoras y escalado a medida que tu negocio crece.',
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="A-04"
            eyebrow="Cómo trabajo"
            title="Un proceso claro, de la idea a producción"
            description="Sin sorpresas ni cajas negras. Cada etapa tiene un objetivo concreto y entregables verificables."
          />
        </Reveal>

        <Stagger as="ol" className="relative ml-4 max-w-2xl border-l border-border">
          {steps.map((s, i) => (
            <StaggerItem
              key={s.title}
              as="li"
              className="relative pb-10 pl-10 last:pb-0"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 grid size-8 -translate-x-1/2 place-items-center border border-border bg-background font-mono text-[0.65rem] text-primary"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="type-display text-lg leading-8 tracking-tight">
                <span className="sr-only">Paso {i + 1}: </span>
                {s.title}
              </h3>
              <p className="mt-1.5 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
