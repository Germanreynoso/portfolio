export function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
        <span className="font-mono">© {new Date().getFullYear()} Germán Reynoso</span>
        <span className="text-pretty text-center">
          Full Stack Developer · AI · Automation · SaaS
        </span>
      </div>
    </footer>
  )
}
