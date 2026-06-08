import { SectionHeading } from '@/components/section-heading'

const stack = [
  {
    category: 'Frontend',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'FastAPI', 'Python', 'REST', 'tRPC'],
  },
  {
    category: 'Bases de Datos',
    items: ['PostgreSQL', 'Supabase', 'Neon', 'Redis', 'Prisma'],
  },
  {
    category: 'IA & Integraciones',
    items: ['OpenAI', 'LangChain', 'RAG', 'Embeddings', 'Vercel AI SDK'],
  },
  {
    category: 'Automatización',
    items: ['n8n', 'Zapier', 'Make', 'WhatsApp API', 'Telegram Bots'],
  },
]

export function TechStack() {
  return (
    <section id="stack" className="scroll-mt-24 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Stack Tecnológico"
          title="Tecnologías con las que construyo a diario"
          description="Un stack moderno y probado en cada etapa del ciclo de vida del producto."
        />

        <div className="flex flex-col gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {stack.map((group) => (
            <div
              key={group.category}
              className="grid grid-cols-1 gap-4 bg-card p-6 sm:grid-cols-[160px_1fr] sm:items-center"
            >
              <span className="font-mono text-sm uppercase tracking-wider text-accent">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
