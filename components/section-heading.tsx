import type { ReactNode } from 'react'
import { Rule } from '@/components/motion'

/**
 * Cabecera de lámina: índice técnico + eyebrow en mono, regla que se
 * traza al entrar, título display a la izquierda y descripción al margen.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string
  eyebrow: string
  title: ReactNode
  description?: string
}) {
  return (
    <div className="mb-12">
      <div className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.18em]">
        <span className="text-accent">{index}</span>
        <span className="text-muted-foreground">{eyebrow}</span>
      </div>
      <Rule className="mt-3" />
      <div className="mt-6 gap-12 md:flex md:items-end md:justify-between">
        <h2 className="type-display max-w-xl text-balance text-3xl tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground md:mt-0 md:shrink-0 md:text-right">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
