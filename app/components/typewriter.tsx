'use client'

import { useEffect, useRef, useState } from 'react'

export function Typewriter({
  text,
  className = '',
  speed = 45,
}: {
  text: string
  className?: string
  speed?: number
}) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  // only start typing once scrolled into view
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!started || count >= text.length) return
    const id = setTimeout(() => setCount((c) => c + 1), speed)
    return () => clearTimeout(id)
  }, [started, count, text.length, speed])

  const done = count >= text.length

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span
        aria-hidden="true"
        className={`ml-1 inline-block w-[0.5ch] ${
          done ? 'animate-blink' : ''
        }`}
      >
        ▋
      </span>
    </span>
  )
}
