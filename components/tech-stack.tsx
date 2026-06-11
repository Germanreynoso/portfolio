import { SectionHeading } from '@/components/section-heading'
import { Reveal, Stagger, StaggerItem } from '@/components/motion'

// Las categorías estratégicas (lo que el cliente compra) van primero y destacadas.
const stack = [
  {
    category: 'IA & Integraciones',
    items: ['OpenAI', 'LangChain', 'RAG', 'Embeddings', 'Vercel AI SDK'],
    featured: true,
  },
  {
    category: 'Automatización',
    items: ['n8n', 'Make', 'Zapier', 'WhatsApp API', 'Telegram Bots'],
    featured: true,
  },
  {
    category: 'SaaS & Producto',
    items: ['Auth', 'Billing', 'Multi-tenant', 'Dashboards', 'Webhooks'],
    featured: true,
  },
  {
    category: 'Backend & Datos',
    items: ['Node.js', 'FastAPI', 'PostgreSQL', 'Supabase', 'Prisma'],
    featured: false,
  },
  {
    category: 'Frontend',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    featured: false,
  },
]

export function TechStack() {
  return (
    <section id="stack" className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="A-05"
            eyebrow="Stack tecnológico"
            title="Las herramientas detrás del resultado"
            description="La tecnología es el medio, no el fin. Este es el stack con el que diseño, lanzo y automatizo soluciones que escalan."
          />
        </Reveal>

        <Stagger className="border border-border">
          <div className="grid grid-cols-1 gap-4 border-b border-border bg-secondary px-5 py-2.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground sm:grid-cols-[200px_1fr]">
            <span>Componente</span>
            <span className="hidden sm:inline">Detalle</span>
          </div>
          {stack.map((group) => (
            <StaggerItem
              key={group.category}
              className="grid grid-cols-1 gap-2 border-b border-border bg-card px-5 py-4 last:border-b-0 sm:grid-cols-[200px_1fr] sm:items-baseline sm:gap-4"
            >
              <span
                className={`font-mono text-xs uppercase tracking-[0.12em] ${
                  group.featured ? 'text-accent' : 'text-muted-foreground'
                }`}
              >
                {group.category}
              </span>
              <span
                className={`font-mono text-sm ${
                  group.featured ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {group.items.join(' · ')}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
