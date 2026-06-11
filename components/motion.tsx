'use client'

import { motion, useReducedMotion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

// Sistema "draft-in": las cosas no flotan, se trazan.
// EASE (draft): mecánico y simétrico, para todo lo estructural.
// EASE_SNAP: decisivo y sin rebote, para UI y hovers.
const EASE = [0.65, 0, 0.35, 1] as const
const EASE_SNAP = [0.2, 0, 0, 1] as const

/**
 * Reveal: aparición sutil al entrar en viewport (una sola vez).
 * Respeta prefers-reduced-motion (renderiza estático).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 10,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'section' | 'li' | 'span'
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Rule: regla horizontal que se dibuja de izquierda a derecha
 * al entrar en viewport. El gesto firma del sistema.
 */
export function Rule({
  className = '',
  delay = 0,
}: {
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className={`h-px w-full origin-left bg-border ${className}`}
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={reduce ? undefined : { scaleX: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    />
  )
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}

/**
 * Stagger: contenedor que revela a sus StaggerItem en cascada.
 */
export function Stagger({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'ul' | 'section' | 'ol'
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'li'
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag className={className} variants={itemVariants}>
      {children}
    </MotionTag>
  )
}

export { motion, useReducedMotion, EASE, EASE_SNAP }
