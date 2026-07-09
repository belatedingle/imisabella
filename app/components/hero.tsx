'use client'

import { useEffect, useState } from 'react'

const roles = [
  'creative developer',
  'startup founder',
  'design engineer',
  'very-online builder',
  'ai tinkerer',
]

export function Hero() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % roles.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="px-5 pb-16 pt-20 md:px-8 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-center gap-2 label text-muted">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-pink" />
          Brooklyn, NY — open to collaborations
        </div>

        <h1 className="display text-[16vw] leading-[0.85] md:text-[9rem]">
          <span className="block">Isabella</span>
          <span className="block text-muted">Builds</span>
        </h1>

        <div className="mt-12 flex flex-col gap-8 border-t border-ink/10 pt-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-lg text-pretty text-lg leading-relaxed text-ink/80">
            I&apos;m a{' '}
            <span className="relative inline-grid h-[1.3em] overflow-hidden align-bottom">
              <span key={i} className="text-pink">
                {roles[i]}
              </span>
            </span>{' '}
            turning half-baked ideas into things people actually use.
          </p>

          <a
            href="#work"
            className="label group flex shrink-0 items-center gap-3 text-muted transition-colors hover:text-ink"
          >
            <span>Selected work</span>
            <span className="inline-block transition-transform group-hover:translate-y-1">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
