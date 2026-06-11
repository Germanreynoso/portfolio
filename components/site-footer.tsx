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

// El cajetín: rótulo de plano técnico como cierre de la página.
const titleBlock = [
  { label: 'Proyecto', value: 'Portfolio web' },
  { label: 'Autor', value: 'Reynoso, Germán' },
  { label: 'Ubicación', value: 'Tucumán, Argentina' },
  { label: 'Escala', value: '1:1' },
  { label: 'Rev', value: '2026.06' },
  { label: 'Estado', value: '● En producción', accent: true },
]

export function SiteFooter() {
  return (
    <footer className="grid-paper-inverse bg-blueprint px-4 pb-10 pt-4 text-blueprint-foreground sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-px border border-white/25 bg-white/25 sm:grid-cols-3 lg:grid-cols-6">
          {titleBlock.map((cell) => (
            <div key={cell.label} className="bg-blueprint px-4 py-3">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-white/50">
                {cell.label}
              </p>
              <p
                className={`mt-1 font-mono text-xs uppercase tracking-[0.08em] ${
                  cell.accent ? 'text-[oklch(0.72_0.15_45)]' : 'text-white/90'
                }`}
              >
                {cell.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-xs text-white/60">
            © {new Date().getFullYear()} {siteConfig.name} — Soluciones web, IA
            y automatización
          </p>
          <div className="flex items-center gap-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid size-10 place-items-center text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
