import { Building2, HeartPulse, ScanSearch, Workflow } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'

const cases = [
  {
    icon: Building2,
    client: 'Municipalidad de Tafí del Valle',
    problem:
      'Un organismo público sin presencia digital sólida para una iniciativa de turismo internacional.',
    solution:
      'Plataforma institucional oficial, rápida y accesible, lista para escalar tráfico de visitantes.',
    result: 'Presencia digital oficial activa y en producción.',
  },
  {
    icon: ScanSearch,
    client: 'PliegoBot',
    problem:
      'Analizar licitaciones públicas demandaba horas de lectura manual y propenso a errores.',
    solution:
      'Sistema con IA que interpreta pliegos y extrae lo relevante en segundos.',
    result: 'Reducción drástica del tiempo de análisis por licitación.',
  },
  {
    icon: HeartPulse,
    client: 'SOSCan',
    problem:
      'Personas mayores y vulnerables sin forma rápida de compartir su información crítica en una emergencia.',
    solution:
      'Plataforma de salud y seguridad que entrega datos vitales mediante un simple escaneo QR.',
    result: 'Acceso inmediato a información que puede salvar vidas.',
  },
  {
    icon: Workflow,
    client: 'SaaS & Automatizaciones',
    problem:
      'Equipos perdiendo horas en tareas repetitivas y procesos desconectados entre herramientas.',
    solution:
      'Productos SaaS a medida y flujos automatizados que conectan todo el stack operativo.',
    result: 'Menos trabajo manual y procesos que escalan solos.',
  },
]

export function Credibility() {
  return (
    <section id="credibility" className="scroll-mt-24 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Casos reales"
            title="Experiencia construyendo soluciones reales"
            description="No diseño portfolios académicos: entrego sistemas que clientes públicos y privados usan en producción todos los días."
          />
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {cases.map((c) => (
            <StaggerItem
              key={c.client}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 ring-glow transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40">
                  <c.icon className="size-5" />
                </span>
                <h3 className="text-balance font-medium tracking-tight">
                  {c.client}
                </h3>
              </div>

              <dl className="mt-5 flex flex-col gap-4 text-sm">
                <div>
                  <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground/70">
                    Problema
                  </dt>
                  <dd className="mt-1 text-pretty leading-relaxed text-muted-foreground">
                    {c.problem}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground/70">
                    Solución
                  </dt>
                  <dd className="mt-1 text-pretty leading-relaxed text-muted-foreground">
                    {c.solution}
                  </dd>
                </div>
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-3">
                  <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-accent">
                    Resultado
                  </dt>
                  <dd className="mt-1 text-pretty font-medium leading-relaxed text-foreground">
                    {c.result}
                  </dd>
                </div>
              </dl>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
