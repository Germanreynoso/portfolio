import { buttonVariants } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import {
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
} from '@/components/brand-icons'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'reynosogermangonzalo@gmail.com',
    href: 'mailto:reynosogermangonzalo@gmail.com',
  },
  {
    icon: WhatsappIcon,
    label: 'WhatsApp',
    value: 'Escribime directo',
    href: 'https://wa.me/5438146789468',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: '/in/germanreynoso',
    href: 'https://www.linkedin.com/in/germanreynoso/',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: '@Germanreynoso',
    href: 'https://github.com/Germanreynoso',
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-card p-8 text-center sm:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[-40%] mx-auto h-72 max-w-lg rounded-full bg-primary/20 blur-[120px]"
        />

        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          ¿Listo para empezar?
        </span>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
          Hablemos y construyamos{' '}
          <span className="text-gradient">algo extraordinario</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
          ¿Tenés un proyecto, producto o automatización en mente? Estoy
          disponible para trabajos freelance y por contrato. Hablemos.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="mailto:reynosogermangonzalo@gmail.com"
            className={`${buttonVariants({ size: 'lg' })} rounded-full px-8`}
          >
            Contactame
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-2 bg-card p-5 transition-colors hover:bg-secondary"
            >
              <c.icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
              <span className="text-sm font-medium">{c.label}</span>
              <span className="text-xs text-muted-foreground">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
