import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'

type Badge =
  | 'Plataforma pública'
  | 'Sistema interno'
  | 'SaaS'
  | 'IA'
  | 'Automatización'
  | 'Ecommerce'

const badgeStyles: Record<Badge, string> = {
  'Plataforma pública': 'border-sky-400/30 bg-sky-400/10 text-sky-300',
  'Sistema interno': 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  SaaS: 'border-primary/40 bg-primary/10 text-primary',
  IA: 'border-accent/40 bg-accent/10 text-accent',
  Automatización: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  Ecommerce: 'border-rose-400/30 bg-rose-400/10 text-rose-300',
}

type Project = {
  title: string
  badges: Badge[]
  problem: string
  solution: string
  result: string
  tech: string[]
  image: string
  href: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'Municipalidad de Tafí del Valle',
    badges: ['Plataforma pública'],
    problem:
      'Un organismo público necesitaba presencia digital oficial para una iniciativa de turismo internacional.',
    solution:
      'Sitio institucional rápido, accesible y optimizado para SEO y escalabilidad de tráfico.',
    result: 'Plataforma oficial en producción y disponible 24/7.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    image: '/projects/municipalidad.webp',
    href: 'https://www.municipalidadtafidelvalle.com/',
    featured: true,
  },
  {
    title: 'PliegoBot',
    badges: ['SaaS', 'IA'],
    problem:
      'Analizar licitaciones públicas tomaba horas de lectura manual y dejaba margen al error.',
    solution:
      'SaaS con IA que procesa pliegos y devuelve los puntos clave en segundos.',
    result: 'Análisis que pasó de horas a segundos.',
    tech: ['FastAPI', 'PostgreSQL', 'OpenAI'],
    image: '/projects/pliegobot.webp',
    href: 'https://www.pliegobot.com/',
  },
  {
    title: 'SOSCan',
    badges: ['Plataforma pública'],
    problem:
      'Personas vulnerables sin forma rápida de compartir su información crítica en emergencias.',
    solution:
      'Plataforma de salud que entrega datos vitales mediante escaneo QR instantáneo.',
    result: 'Información que puede salvar vidas, accesible al instante.',
    tech: ['React', 'Node.js'],
    image: '/projects/soscan.webp',
    href: 'https://soscan.netlify.app/',
  },
  {
    title: 'Aquiles Indumentaria',
    badges: ['Ecommerce'],
    problem:
      'Una marca de indumentaria sin canal de venta online optimizado para mobile.',
    solution:
      'Ecommerce moderno enfocado en conversión y experiencia mobile-first.',
    result: 'Tienda online lista para vender y escalar.',
    tech: ['Next.js', 'Stripe', 'Tailwind CSS'],
    image: '/projects/aquiles.webp',
    href: 'https://aquiles-indumentaria.vercel.app/',
  },
  {
    title: 'TuWebAlToque',
    badges: ['SaaS', 'Automatización'],
    problem:
      'Pymes y emprendedores que necesitaban presencia online sin fricción ni tiempos largos.',
    solution:
      'Servicio productizado para crear sitios web rápidos y profesionales en tiempo récord.',
    result: 'Emprendedores online en días, no semanas.',
    tech: ['React', 'Tailwind CSS'],
    image: '/projects/tuwebaltoque.webp',
    href: 'https://tuwebaltoque.netlify.app/',
  },
  {
    title: 'Turmalina Negra',
    badges: ['Ecommerce'],
    problem:
      'Una marca necesitaba presencia online con identidad visual cuidada y enfoque en conversión.',
    solution:
      'Sitio de marca con diseño premium y narrativa orientada a la venta.',
    result: 'Presencia digital alineada a la identidad de marca.',
    tech: ['React', 'Tailwind CSS'],
    image: '/projects/turmalina.webp',
    href: 'https://turmalina-negra.netlify.app/',
  },
]

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Estudios de caso"
            title="Problema, solución y resultado"
            description="Cada proyecto resuelve una necesidad concreta. Esto es lo que estaba en juego, cómo lo resolví y el impacto que generó."
          />
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <StaggerItem
              key={p.title}
              className={p.featured ? 'md:col-span-2' : ''}
            >
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver ${p.title} en una nueva pestaña`}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card ring-glow transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_0_1px_color-mix(in_oklch,var(--primary)_30%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                  p.featured ? 'md:flex-row' : ''
                }`}
              >
                <div
                  className={`relative w-full overflow-hidden ${
                    p.featured
                      ? 'aspect-[16/9] md:aspect-auto md:w-1/2'
                      : 'aspect-[16/10]'
                  }`}
                >
                  <Image
                    src={p.image || '/placeholder.svg'}
                    alt={`Vista previa de ${p.title}`}
                    fill
                    priority={p.featured}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent md:bg-gradient-to-r" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    {p.badges.map((b) => (
                      <span
                        key={b}
                        className={`rounded-full border px-2.5 py-0.5 text-[0.7rem] font-medium ${badgeStyles[b]}`}
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-balance text-lg font-medium tracking-tight">
                      {p.title}
                    </h3>
                    <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </div>

                  <dl className="mt-3 flex flex-col gap-2.5 text-sm">
                    <div className="flex gap-2">
                      <dt className="shrink-0 font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground/60">
                        Problema
                      </dt>
                      <dd className="text-pretty leading-relaxed text-muted-foreground">
                        {p.problem}
                      </dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="shrink-0 font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground/60">
                        Solución
                      </dt>
                      <dd className="text-pretty leading-relaxed text-muted-foreground">
                        {p.solution}
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-3 text-pretty text-sm font-medium leading-relaxed text-foreground">
                    <span className="text-accent">→ </span>
                    {p.result}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
