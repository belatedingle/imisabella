'use client'

import { useRef } from 'react'

export function TiltCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateX(${(-y * 8).toFixed(
      2
    )}deg) rotateY(${(x * 8).toFixed(2)}deg) translateZ(0)`
  }

  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.transform =
      'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ transition: 'transform 0.2s ease' }}
      className={className}
    >
      {children}
    </div>
  )
}
