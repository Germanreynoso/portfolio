'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import { motion, EASE_SNAP } from '@/components/motion'
import { buttonVariants } from '@/components/ui/button'
import { CalendarCheck, Menu, X } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const links = [
  { index: '01', label: 'Proyectos', href: '#projects' },
  { index: '02', label: 'Servicios', href: '#services' },
  { index: '03', label: 'Proceso', href: '#process' },
  { index: '04', label: 'Contacto', href: '#contact' },
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

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Navegación principal"
        className={`border-b transition-colors duration-300 ${
          scrolled || open
            ? 'border-border bg-background'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a
            href="#top"
            className="flex items-baseline gap-2 font-mono text-sm font-medium tracking-tight"
          >
            <span className="text-foreground">REYNOSO, G.</span>
            <span className="hidden text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground md:inline">
              Full Stack · Tucumán, AR
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="mr-1.5 text-[0.6rem] text-accent">
                  {l.index}
                </span>
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonVariants({ size: 'sm' })} font-mono text-xs uppercase tracking-wide`}
            >
              <CalendarCheck className="size-3.5" />
              <span className="hidden sm:inline">Agendar reunión</span>
              <span className="sm:hidden">Agendar</span>
            </a>
            <button
              type="button"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              aria-controls="menu-movil"
              onClick={() => setOpen((v) => !v)}
              className="grid size-11 place-items-center text-foreground md:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: EASE_SNAP }}
            className="border-b border-border bg-background md:hidden"
          >
            <nav aria-label="Navegación móvil" className="flex flex-col px-4 py-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-3 font-mono text-sm uppercase tracking-[0.12em] text-muted-foreground transition-colors last:border-b-0 hover:text-foreground"
                >
                  <span className="mr-2 text-xs text-accent">{l.index}</span>
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
