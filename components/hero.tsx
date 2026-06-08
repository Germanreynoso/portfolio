'use client'

import Image from 'next/image'
import { ArrowUpRight, CalendarCheck, Sparkles } from 'lucide-react'
import { motion, useReducedMotion, EASE } from '@/components/motion'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'

const metrics = [
  { value: '8+', label: 'Proyectos en producción' },
  { value: 'Público + Privado', label: 'Clientes reales' },
  { value: 'IA', label: 'Automatizaciones inteligentes' },
  { value: 'En uso', label: 'Sistemas con usuarios reales' },
]

export function Hero() {
  const reduce = useReducedMotion()

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, ease: EASE, delay },
        }

  return (
    <section
      id="top"
      className="grain relative overflow-hidden px-4 pb-16 pt-32 sm:pt-40"
    >
      {/* glow ambiental */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-10%] -z-10 mx-auto h-[480px] max-w-4xl rounded-full bg-primary/20 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_-10%,color-mix(in_oklch,var(--accent)_14%,transparent),transparent_55%)]"
      />

      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        {/* izquierda: copy */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            {...fade(0)}
            className="glass inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Disponible para nuevos proyectos
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 text-balance text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl md:text-[2.9rem]"
          >
            Ayudo a empresas y organismos a{' '}
            <span className="text-gradient">digitalizar procesos</span>,
            automatizar tareas y construir productos web escalables.
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Desarrollo plataformas web, automatizaciones con IA y soluciones SaaS
            que reducen tiempos operativos, mejoran procesos y generan resultados
            medibles.
          </motion.p>

          <motion.div
            {...fade(0.24)}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#projects"
              className={`${buttonVariants({ size: 'lg' })} group rounded-full px-7`}
            >
              Ver proyectos
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={siteConfig.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonVariants({ size: 'lg', variant: 'outline' })} group rounded-full border-border bg-transparent px-7 hover:bg-secondary`}
            >
              <CalendarCheck className="size-4 text-accent" />
              Agendar una reunión
            </a>
          </motion.div>

          {/* métricas */}
          <motion.dl
            {...fade(0.32)}
            className="mt-12 grid w-full grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 sm:grid-cols-4"
          >
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <dt className="text-balance text-lg font-semibold tracking-tight text-foreground">
                  {m.value}
                </dt>
                <dd className="text-pretty text-xs leading-snug text-muted-foreground">
                  {m.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* derecha: retrato */}
        <motion.div
          {...fade(0.16)}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="ring-glow relative overflow-hidden rounded-3xl border border-border glass">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/portrait.jpeg"
                alt="Retrato de Germán Reynoso, Full Stack Developer"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* badge flotante: impacto, no años */}
          <div className="glass absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl border border-border px-4 py-3 shadow-xl">
            <span className="grid size-9 place-items-center rounded-xl bg-primary/15 text-primary">
              <Sparkles className="size-4" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Clientes reales</p>
              <p className="text-xs text-muted-foreground">
                Públicos y privados
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
