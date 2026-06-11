import { CalendarCheck } from 'lucide-react'
import { WhatsappIcon } from '@/components/brand-icons'
import { Reveal, Rule } from '@/components/motion'
import { siteConfig, mailto } from '@/lib/site-config'

const ctaBase =
  'inline-flex h-11 items-center justify-center gap-2 px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70'

export function Contact() {
  return (
    <section
      id="contact"
      className="grid-paper-inverse scroll-mt-24 border-t border-border bg-blueprint px-4 py-20 text-blueprint-foreground sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.18em]">
            <span className="text-[oklch(0.72_0.15_45)]">A-06</span>
            <span className="text-white/60">Contacto</span>
          </div>
          <Rule className="mt-3 bg-white/20" />
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="type-display mt-10 max-w-3xl text-balance text-3xl leading-tight tracking-tight sm:text-5xl">
            ¿Tenés un proceso que querés automatizar o una idea que querés
            convertir en producto?
          </h2>
          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-white/70">
            Trabajo con empresas, emprendedores y organismos que necesitan
            soluciones digitales reales, escalables y enfocadas en resultados.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaBase} bg-background text-foreground hover:bg-background/90`}
            >
              <CalendarCheck className="size-4" />
              Agendar reunión
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaBase} border border-white/30 text-white hover:bg-white/10`}
            >
              <WhatsappIcon className="size-4" />
              Escribirme por WhatsApp
            </a>
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-white/60">
            ¿Preferís email?{' '}
            <a
              href={mailto}
              className="text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
            >
              {siteConfig.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
