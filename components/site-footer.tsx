import {
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
} from '@/components/brand-icons'
import { siteConfig } from '@/lib/site-config'

const socials = [
  { icon: LinkedinIcon, href: siteConfig.linkedin, label: 'LinkedIn' },
  { icon: GithubIcon, href: siteConfig.github, label: 'GitHub' },
  { icon: WhatsappIcon, href: siteConfig.whatsapp, label: 'WhatsApp' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2 font-mono">
          <span className="grid size-6 place-items-center rounded-md bg-primary text-xs font-semibold text-primary-foreground">
            GR
          </span>
          © {new Date().getFullYear()} {siteConfig.name}
        </div>

        <span className="text-pretty text-center text-xs">
          Soluciones web, IA y automatización para clientes públicos y privados.
        </span>

        <div className="flex items-center gap-1">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <s.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
