'use client'

import Image from 'next/image'
import { ArrowUpRight, CalendarCheck } from 'lucide-react'
import { motion, useReducedMotion, EASE, Rule } from '@/components/motion'
import { Corners } from '@/components/drafting'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'

// Prueba social con nombres reales: pesa más que métricas vagas para un comprador B2B/B2G.
const proof = [
  { label: 'En producción para', value: 'Municipalidad de Tafí del Valle · PliegoBot · SOSCan' },
  { label: 'Sistemas activos', value: '8+ en sector público y privado' },
  { label: 'Caso destacado', value: 'Análisis de licitaciones: de horas a segundos' },
]

export function Hero() {
  const reduce = useReducedMotion()

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, ease: EASE, delay },
        }

  return (
    <section
      id="top"
      className="grid-paper relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pt-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* meta de lámina */}
        <motion.div
          {...fade(0)}
          className="flex items-baseline justify-between font-mono text-xs uppercase tracking-[0.18em]"
        >
          <span>
            <span className="text-accent">A-01</span>
            <span className="ml-3 text-muted-foreground">Portada</span>
          </span>
          <span className="hidden text-muted-foreground lg:inline">
            26°49′ S · 65°13′ O — Tucumán, Argentina
          </span>
        </motion.div>
        <Rule className="mt-3" />

        <div className="mt-12 grid items-start gap-12 md:grid-cols-[1.2fr_0.8fr]">
          {/* izquierda: copy */}
          <div className="flex flex-col items-start text-left">
            <motion.p
              {...fade(0.06)}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
            >
              <span
                aria-hidden="true"
                className="inline-block size-2 bg-accent"
              />
              Disponible para nuevos proyectos
            </motion.p>

            <motion.h1
              {...fade(0.12)}
              className="type-display mt-6 text-balance text-4xl leading-[1.04] tracking-tight sm:text-5xl lg:text-[3.6rem]"
            >
              Ayudo a empresas y organismos a{' '}
              <span className="text-primary">digitalizar procesos</span>,
              automatizar tareas y construir productos web escalables.
            </motion.h1>

            <motion.p
              {...fade(0.18)}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Desarrollo plataformas web, automatizaciones con IA y soluciones
              SaaS que reducen tiempos operativos, mejoran procesos y generan
              resultados medibles.
            </motion.p>

            <motion.div
              {...fade(0.24)}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href={siteConfig.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonVariants({ size: 'lg' })} group`}
              >
                <CalendarCheck className="size-4" />
                Agendar reunión
              </a>
              <a
                href="#projects"
                className={`${buttonVariants({ size: 'lg', variant: 'outline' })} group bg-transparent`}
              >
                Ver proyectos
                <ArrowUpRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            {/* franja de datos: evidencia real, no relleno */}
            <motion.dl
              {...fade(0.3)}
              className="mt-12 w-full border-t border-border"
            >
              {proof.map((p) => (
                <div
                  key={p.label}
                  className="grid gap-1 border-b border-border py-3 sm:grid-cols-[200px_1fr] sm:gap-6"
                >
                  <dt className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {p.label}
                  </dt>
                  <dd className="text-pretty text-sm font-medium text-foreground">
                    {p.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* derecha: figura de plano */}
          <motion.figure
            {...fade(0.18)}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative border border-border bg-card p-2">
              <Corners />
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/portrait.jpeg"
                  alt="Retrato de Germán Reynoso, Full Stack Developer"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 360px"
                />
              </div>
            </div>
            <figcaption className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
              <span className="text-accent">Fig. 01</span> — Germán Reynoso ·
              Full Stack Developer
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
