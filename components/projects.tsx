import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Corners } from '@/components/drafting'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'

type Project = {
  title: string
  badges: string[]
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
    badges: ['Público'],
    problem:
      'Un organismo público necesitaba presencia digital oficial para una iniciativa de turismo internacional.',
    solution:
      'Sitio institucional rápido, accesible y optimizado para SEO y escalabilidad de tráfico.',
    result: 'Plataforma oficial del municipio, en producción 24/7.',
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
    result: 'Análisis de pliegos: de horas de lectura a segundos.',
    tech: ['FastAPI', 'PostgreSQL', 'OpenAI'],
    image: '/projects/pliegobot.webp',
    href: 'https://www.pliegobot.com/',
  },
  {
    title: 'SOSCan',
    badges: ['Público'],
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
    title: 'La Prohibida',
    badges: ['Turismo', 'IA'],
    problem:
      'Una casa de alquiler turístico recibía las mismas consultas (disponibilidad, precios, servicios) a toda hora y por varios canales.',
    solution:
      'Sitio web de la propiedad con un chatbot integrado que responde las dudas principales al instante, las 24 horas.',
    result: 'Consultas frecuentes resueltas solas y menos fricción para reservar.',
    tech: ['React', 'Tailwind CSS', 'OpenAI'],
    image: '/projects/laprohibida.webp',
    href: 'https://laprohibida.netlify.app/',
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
    badges: ['SaaS', 'Autom.'],
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
    <section id="projects" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="A-02"
            eyebrow="Casos"
            title="Problema, solución y resultado"
            description="Cada ficha documenta una necesidad concreta: qué estaba en juego, cómo lo resolví y el impacto que generó."
          />
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((p, i) => {
            const code = `PRJ-${String(i + 1).padStart(3, '0')}`
            const host = new URL(p.href).hostname.replace(/^www\./, '')
            return (
              <StaggerItem
                key={p.title}
                className={p.featured ? 'md:col-span-2' : ''}
              >
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver ${p.title} en una nueva pestaña`}
                  className={`group relative flex h-full flex-col border border-border bg-card transition-[border-color] duration-150 hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    p.featured ? 'md:flex-row' : ''
                  }`}
                >
                  <Corners className="opacity-0 transition-opacity duration-150 group-hover:opacity-100" />

                  {/* lámina: captura con marco y URL real */}
                  <div
                    className={`flex flex-col p-4 pb-0 ${
                      p.featured ? 'md:w-1/2 md:pb-4 md:pr-0' : ''
                    }`}
                  >
                    <div className="relative w-full overflow-hidden border border-border">
                      <div
                        className={`relative w-full ${
                          p.featured ? 'aspect-[16/9] md:h-full md:min-h-72' : 'aspect-[16/10]'
                        }`}
                      >
                        <Image
                          src={p.image}
                          alt={`Vista previa de ${p.title}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                    <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
                      {host} · en producción
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col p-4 pt-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="font-mono text-xs tracking-[0.12em] text-accent">
                          {code}
                        </span>
                        {p.badges.map((b) => (
                          <span
                            key={b}
                            className="border border-border px-1.5 py-px font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                      <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    </div>

                    <h3 className="type-display mt-3 text-balance text-xl tracking-tight sm:text-2xl">
                      {p.title}
                    </h3>

                    <dl className="mt-4 border-t border-border text-sm">
                      <div className="grid grid-cols-[90px_1fr] gap-3 border-b border-border py-2.5">
                        <dt className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
                          Problema
                        </dt>
                        <dd className="text-pretty leading-relaxed text-muted-foreground">
                          {p.problem}
                        </dd>
                      </div>
                      <div className="grid grid-cols-[90px_1fr] gap-3 border-b border-border py-2.5">
                        <dt className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
                          Solución
                        </dt>
                        <dd className="text-pretty leading-relaxed text-muted-foreground">
                          {p.solution}
                        </dd>
                      </div>
                      <div className="grid grid-cols-[90px_1fr] gap-3 border-b border-border py-2.5">
                        <dt className="font-mono text-xs uppercase tracking-[0.1em] text-accent">
                          Resultado
                        </dt>
                        <dd className="text-pretty font-medium leading-relaxed text-foreground">
                          {p.result}
                        </dd>
                      </div>
                    </dl>

                    <p className="mt-auto pt-4 font-mono text-xs text-muted-foreground">
                      {p.tech.join(' · ')}
                    </p>
                  </div>
                </a>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
