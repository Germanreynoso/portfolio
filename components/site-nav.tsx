'use client'

import { useEffect, useState } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { CalendarCheck, Menu, X } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const links = [
  { label: 'Inicio', href: '#top' },
  { label: 'Casos', href: '#credibility' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Proceso', href: '#process' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contacto', href: '#contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
          scrolled ? 'glass border border-border shadow-lg' : 'border border-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium tracking-tight">
          <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
            GR
          </span>
          <span className="hidden sm:inline">Germán Reynoso</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonVariants({ size: 'sm' })} hidden rounded-full sm:inline-flex`}
          >
            <CalendarCheck className="size-3.5" />
            Agendar
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mx-auto mt-2 max-w-5xl rounded-2xl border border-border p-3 md:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={siteConfig.calendar}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className={`${buttonVariants({ size: 'sm' })} mt-2 rounded-lg`}
            >
              <CalendarCheck className="size-3.5" />
              Agendar reunión
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
