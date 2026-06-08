import { CalendarCheck, Mail } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import {
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
} from '@/components/brand-icons'
import { Reveal } from '@/components/motion'
import { siteConfig, mailto } from '@/lib/site-config'

const contacts = [
  { icon: Mail, label: 'Email', value: 'Escribime un correo', href: mailto },
  {
    icon: WhatsappIcon,
    label: 'WhatsApp',
    value: 'Respuesta rápida',
    href: siteConfig.whatsapp,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: '/in/germanreynoso',
    href: siteConfig.linkedin,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: '@Germanreynoso',
    href: siteConfig.github,
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 py-24">
      <Reveal>
        <div className="grain relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-card p-8 text-center ring-glow sm:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[-40%] mx-auto h-72 max-w-lg rounded-full bg-primary/20 blur-[120px]"
          />

          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Hablemos
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-4xl">
            ¿Tenés un proceso que querés automatizar o una idea que querés{' '}
            <span className="text-gradient">convertir en producto</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Trabajo con empresas, emprendedores y organismos que necesitan
            soluciones digitales reales, escalables y enfocadas en resultados.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={siteConfig.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonVariants({ size: 'lg' })} group rounded-full px-8`}
            >
              <CalendarCheck className="size-4" />
              Agendar reunión
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonVariants({ size: 'lg', variant: 'outline' })} group rounded-full border-border bg-transparent px-8 hover:bg-secondary`}
            >
              <WhatsappIcon className="size-4 text-emerald-400" />
              Escribirme por WhatsApp
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
      </Reveal>
    </section>
  )
}
