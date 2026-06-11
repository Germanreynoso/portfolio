/**
 * Primitivas decorativas del sistema "plano técnico".
 * Server-safe: sin estado ni motion.
 */

/**
 * Corners: cuatro escuadras en L sobre las esquinas del contenedor
 * (estilo enfoque de cámara / marco CAD). El contenedor debe ser relative.
 */
export function Corners({ className = '' }: { className?: string }) {
  const corner = 'absolute size-3 border-primary'
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
    >
      <span className={`${corner} left-0 top-0 border-l-2 border-t-2`} />
      <span className={`${corner} right-0 top-0 border-r-2 border-t-2`} />
      <span className={`${corner} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${corner} bottom-0 right-0 border-b-2 border-r-2`} />
    </span>
  )
}
