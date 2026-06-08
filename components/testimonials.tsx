import { Quote } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'

// TODO: reemplazar por testimonios reales (con permiso del cliente).
const testimonials = [
  {
    quote:
      'Entendió el problema antes de escribir una sola línea de código. La solución redujo nuestro trabajo manual de forma notable.',
    name: 'Nombre Apellido',
    role: 'Responsable de Operaciones',
    org: 'Organismo público',
  },
  {
    quote:
      'Profesional, claro con los tiempos y enfocado en resultados. Entregó un producto en producción que hoy usamos a diario.',
    name: 'Nombre Apellido',
    role: 'Founder',
    org: 'Startup SaaS',
  },
  {
    quote:
      'La automatización con IA nos ahorró horas cada semana. Comunicación impecable de principio a fin.',
    name: 'Nombre Apellido',
    role: 'Gerente de Proyectos',
    org: 'Empresa privada',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonios"
            title="Lo que dicen quienes ya trabajaron conmigo"
            description="La confianza se construye con resultados. Esto es lo que opinan clientes y equipos."
          />
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <StaggerItem
              key={i}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6 ring-glow"
            >
              <Quote className="size-7 text-primary/40" aria-hidden="true" />
              <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-foreground/90">
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-secondary font-mono text-sm font-medium text-primary">
                  {t.name
                    .split(' ')
                    .map((w) => w[0])
                    .join('')
                    .slice(0, 2)}
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.org}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
