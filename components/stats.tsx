const stats = [
  { value: '1+', label: 'Año de experiencia profesional' },
  { value: '8+', label: 'Proyectos realizados' },
  { value: 'Públicos & Privados', label: 'Clientes en Argentina' },
  { value: 'IA & Automatización', label: 'Soluciones inteligentes' },
]

export function Stats() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col gap-1 bg-card p-6 text-center md:p-8"
          >
            <span className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {s.value}
            </span>
            <span className="text-pretty text-xs leading-relaxed text-muted-foreground md:text-sm">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
