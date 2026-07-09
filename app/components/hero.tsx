'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const interests = [
  'crypto',
  'ai tinkering',
  'open source',
  'wellness',
  'biohacking',
  'startups',
]

const contacts = [
  { label: 'Email', handle: 'hi@isabella.dev', href: 'mailto:hi@isabella.dev' },
  { label: 'GitHub', handle: '@isabella', href: 'https://github.com' },
  { label: 'X', handle: '@isabella', href: 'https://x.com' },
]

export function Hero() {
  const [m, setM] = useState({ x: 0, y: 0 }) // normalized -1..1
  const frame = useRef<number | null>(null)

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
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden px-5 py-6 md:px-8 md:py-8">
      {/* Top row */}
      <header className="flex items-center justify-between">
        <span className="label tracking-[0.25em] text-ink">
          ISABELLA<span className="text-pink">®</span>
        </span>
        <Link
          href="/blog"
          className="link-sweep label text-muted hover:text-ink"
        >
          Writing
        </Link>
      </header>

      {/* Center */}
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center py-12">
        {/* Interactive title */}
        <div
          className="relative select-none"
          style={{
            transform: `perspective(1200px) rotateX(${m.y * -3}deg) rotateY(${m.x * 3}deg)`,
            transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <h1
            aria-hidden
            className="display absolute inset-0 text-[11vw] leading-[0.95] text-pink md:text-[7rem]"
            style={{
              transform: `translate(${m.x * 14}px, ${m.y * 14}px)`,
              transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            hi, i&apos;m
            <br />
            isabella
          </h1>
          <h1
            className="display relative text-[11vw] leading-[0.95] md:text-[7rem]"
            style={{
              transform: `translate(${m.x * -6}px, ${m.y * -6}px)`,
              transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            hi, i&apos;m
            <br />
            isabella<span className="caret">_</span>
          </h1>
        </div>

        <p className="mt-8 font-mono text-lg text-ink/80 md:text-xl">
          <span className="text-pink">&gt;</span> software dev. from sydney,
          australia.
        </p>
      </div>

      {/* Bottom: interests + contact */}
      <footer className="grid gap-8 border-t border-ink/10 pt-6 md:grid-cols-2">
        <div>
          <p className="label mb-4 text-muted">interested in:</p>
          <ul className="flex flex-wrap gap-x-2 gap-y-2">
            {interests.map((item) => (
              <li
                key={item}
                className="ink-border px-3 py-1 text-sm transition-colors hover:bg-pink hover:text-paper hover:border-pink"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:justify-self-end md:text-right">
          <p className="label mb-4 text-muted">contact me:</p>
          <ul className="flex flex-col gap-2">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-lg transition-colors hover:text-pink"
                >
                  <span className="label text-muted">{c.label}</span>
                  <span>{c.handle}</span>
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </section>
  )
}
