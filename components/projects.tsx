import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const projects = [
  {
    title: 'Municipalidad de Tafí del Valle',
    description:
      'Sitio web institucional oficial desarrollado para una iniciativa de turismo internacional.',
    image: '/projects/municipalidad.webp',
    href: 'https://www.municipalidadtafidelvalle.com/',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    featured: true,
  },
  {
    title: 'PliegoBot',
    description:
      'Sistema con IA capaz de analizar licitaciones públicas en segundos, optimizando tiempos y procesos.',
    image: '/projects/pliegobot.webp',
    href: 'https://www.pliegobot.com/',
    tags: ['FastAPI', 'PostgreSQL', 'OpenAI'],
  },
  {
    title: 'SOSCan',
    description:
      'Plataforma de seguridad y salud que brinda información mediante QR a personas mayores y vulnerables.',
    image: '/projects/soscan.webp',
    href: 'https://soscan.netlify.app/',
    tags: ['React', 'Node.js'],
  },
  {
    title: 'Aquiles Indumentaria',
    description:
      'Experiencia de ecommerce moderna enfocada en la conversión y la experiencia mobile.',
    image: '/projects/aquiles.webp',
    href: 'https://aquiles-indumentaria.vercel.app/',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
  },
  {
    title: 'PelisDolf',
    description:
      'Plataforma de streaming y catálogo de películas con buscador y experiencia de navegación fluida.',
    image: '/projects/pelisdolf.webp',
    href: 'https://pelisdolf.netlify.app/',
    tags: ['React', 'Tailwind CSS'],
  },
  {
    title: 'Turmalina Negra',
    description:
      'Sitio de marca con identidad visual cuidada, enfocado en presencia online y conversión.',
    image: '/projects/turmalina.webp',
    href: 'https://turmalina-negra.netlify.app/',
    tags: ['React', 'Tailwind CSS'],
  },
  {
    title: 'TuWebAlToque',
    description:
      'Servicio de creación de sitios web rápidos para pymes y emprendedores que necesitan presencia online.',
    image: '/projects/tuwebaltoque.webp',
    href: 'https://tuwebaltoque.netlify.app/',
    tags: ['React', 'Tailwind CSS'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Proyectos Destacados"
          title="Soluciones reales para proyectos reales"
          description="Una selección de productos, plataformas y automatizaciones creadas para clientes reales en el sector público y privado."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver ${p.title} en una nueva pestaña`}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_0_1px_color-mix(in_oklch,var(--primary)_30%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                p.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  p.featured ? 'aspect-[16/7]' : 'aspect-[16/10]'
                }`}
              >
                <Image
                  src={p.image || '/placeholder.svg'}
                  alt={`${p.title} project preview`}
                  fill
                  priority={p.featured}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-medium tracking-tight">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
