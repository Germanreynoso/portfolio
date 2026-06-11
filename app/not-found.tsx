import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="grid-paper grid min-h-screen place-items-center bg-background px-4 text-foreground">
      <div className="w-full max-w-md border border-border bg-card p-8">
        <p className="font-mono text-xs uppercase tracking-[0.18em]">
          <span className="text-accent">Error 404</span>
          <span className="ml-3 text-muted-foreground">
            Lámina no encontrada
          </span>
        </p>
        <h1 className="type-display mt-4 text-3xl tracking-tight">
          Esta página no existe en el legajo.
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          La dirección puede estar mal tipeada o la página fue archivada.
        </p>
        <Link href="/" className={`${buttonVariants({ size: 'lg' })} mt-8`}>
          Volver a la portada
        </Link>
      </div>
    </main>
  )
}
