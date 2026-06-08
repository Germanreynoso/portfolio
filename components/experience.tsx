import { SectionHeading } from '@/components/section-heading'

const timeline = [
  {
    year: '2023',
    title: 'Desarrollo Freelance',
    description:
      'Comencé a crear sitios web y aplicaciones para negocios locales y startups en Argentina.',
  },
  {
    year: '2024',
    title: 'Proyectos SaaS con IA',
    description:
      'Lancé mis primeros productos SaaS impulsados por IA, integrando LLMs en flujos reales.',
  },
  {
    year: '2025',
    title: 'Sistemas de Automatización',
    description:
      'Diseñé sistemas de automatización de punta a punta y bots conversacionales para equipos de operaciones.',
  },
  {
    year: '2026',
    title: 'Proyectos Gubernamentales',
    description:
      'Entregué plataformas institucionales oficiales y herramientas de IA para clientes del sector público.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Mi camino"
          title="Crecimiento y constancia profesional"
        />

        <ol className="relative ml-3 border-l border-border">
          {timeline.map((item, i) => (
            <li
              key={item.year}
              className="relative pb-10 pl-8 last:pb-0"
            >
              <span
                className="absolute -left-[6.5px] top-1.5 size-3 rounded-full border-2 border-background bg-primary"
                aria-hidden="true"
              />
              <span
                className="absolute -left-[6.5px] top-1.5 size-3 animate-ping rounded-full bg-primary/40"
                style={{ animationDuration: '2.5s', animationDelay: `${i * 0.4}s` }}
                aria-hidden="true"
              />
              <div className="glass rounded-xl border border-border p-5">
                <span className="font-mono text-sm text-accent">{item.year}</span>
                <h3 className="mt-1 font-medium tracking-tight">{item.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
