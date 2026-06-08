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
    <section id="stack" className="scroll-mt-24 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Stack tecnológico"
            title="Las herramientas detrás del resultado"
            description="La tecnología es el medio, no el fin. Este es el stack con el que diseño, lanzo y automatizo soluciones que escalan."
          />
        </Reveal>

        <Stagger className="flex flex-col gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {stack.map((group) => (
            <StaggerItem
              key={group.category}
              className={`grid grid-cols-1 gap-4 p-6 sm:grid-cols-[180px_1fr] sm:items-center ${
                group.featured ? 'bg-card' : 'bg-card/60'
              }`}
            >
              <span
                className={`font-mono text-sm uppercase tracking-wider ${
                  group.featured ? 'text-accent' : 'text-muted-foreground'
                }`}
              >
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                      group.featured
                        ? 'border-primary/25 bg-primary/5 text-foreground hover:border-primary/50 hover:text-primary'
                        : 'border-border bg-secondary text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
