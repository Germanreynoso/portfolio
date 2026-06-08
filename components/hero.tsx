import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { ArrowUpRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-16 pt-32 sm:pt-40"
    >
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-10%] -z-10 mx-auto h-[480px] max-w-4xl rounded-full bg-primary/20 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_-10%,color-mix(in_oklch,var(--accent)_14%,transparent),transparent_55%)]"
      />

      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        {/* left: copy */}
        <div className="flex flex-col items-start text-left">
          <div className="animate-fade-up glass inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="size-3.5 text-accent" />
            Disponible para nuevos proyectos
          </div>

          <h1
            className="animate-fade-up mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
            style={{ animationDelay: '60ms' }}
          >
            <span className="text-foreground">Full Stack Developer</span>
            <br />
            <span className="text-gradient">AI · Automatización · SaaS</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: '120ms' }}
          >
            Desarrollo aplicaciones web, automatizaciones inteligentes y
            productos SaaS que resuelven problemas reales y generan impacto en
            negocios y comunidades.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '180ms' }}
          >
            <a
              href="#projects"
              className={`${buttonVariants({ size: 'lg' })} group rounded-full px-7`}
            >
              Ver proyectos
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className={`${buttonVariants({ size: 'lg', variant: 'outline' })} rounded-full border-border bg-transparent px-7 hover:bg-secondary`}
            >
              Contactame
            </a>
          </div>
        </div>

        {/* right: portrait */}
        <div
          className="animate-fade-up relative mx-auto w-full max-w-sm"
          style={{ animationDelay: '120ms' }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-border glass">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/portrait.jpeg"
                alt="Retrato de Germán Reynoso, Full Stack Developer"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* floating badge */}
          <div className="glass absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl border border-border px-4 py-3 shadow-xl">
            <span className="grid size-9 place-items-center rounded-xl bg-primary/15 text-primary">
              <Sparkles className="size-4" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">+1 Año</p>
              <p className="text-xs text-muted-foreground">
                Experiencia profesional
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
