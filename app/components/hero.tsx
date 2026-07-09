'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const roles = [
  'creative developer',
  'startup founder',
  'design engineer',
  'ai tinkerer',
]

export function Hero() {
  const [i, setI] = useState(0)
  const [m, setM] = useState({ x: 0, y: 0 }) // normalized -1..1
  const frame = useRef<number | null>(null)

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % roles.length), 2200)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (frame.current) return
      frame.current = requestAnimationFrame(() => {
        setM({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: (e.clientY / window.innerHeight) * 2 - 1,
        })
        frame.current = null
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden px-5 py-6 md:px-8 md:py-8">
      {/* Top row */}
      <header className="flex items-center justify-between">
        <Link href="/" className="label tracking-[0.25em] text-ink">
          ISABELLA<span className="text-pink">®</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/blog" className="link-sweep label text-muted hover:text-ink">
            Writing
          </Link>
          <a
            href="mailto:hi@isabella.dev"
            className="link-sweep label text-ink"
          >
            Say hi
          </a>
        </div>
      </header>

      {/* Center interactive type */}
      <div className="flex flex-1 flex-col items-center justify-center">
        <div
          className="relative select-none"
          style={{
            transform: `perspective(1200px) rotateX(${m.y * -4}deg) rotateY(${m.x * 4}deg)`,
            transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* Pink echo layer */}
          <h1
            aria-hidden
            className="display absolute inset-0 text-[22vw] leading-[0.8] text-pink md:text-[19vw]"
            style={{
              transform: `translate(${m.x * 18}px, ${m.y * 18}px)`,
              transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <span className="block text-center">Isabella</span>
            <span className="block text-center">Builds</span>
          </h1>

          {/* Foreground layer */}
          <h1
            className="display relative text-[22vw] leading-[0.8] md:text-[19vw]"
            style={{
              transform: `translate(${m.x * -8}px, ${m.y * -8}px)`,
              transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <span className="block text-center">Isabella</span>
            <span className="block text-center text-outline">Builds</span>
          </h1>
        </div>
      </div>

      {/* Bottom row */}
      <footer className="flex flex-col gap-4 border-t border-ink/10 pt-5 md:flex-row md:items-end md:justify-between">
        <p className="max-w-md text-pretty leading-relaxed text-ink/70">
          I&apos;m a{' '}
          <span key={i} className="font-medium text-pink">
            {roles[i]}
          </span>{' '}
          in Brooklyn turning half-baked ideas into things people actually use.
        </p>
        <div className="flex items-center gap-2 label text-muted">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-pink" />
          Open to collaborations
        </div>
      </footer>
    </section>
  )
}
