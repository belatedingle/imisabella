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
    <section className="relative overflow-hidden px-5 pb-10 pt-14 md:px-8 md:pt-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="label text-ink/60">Based in Brooklyn</span>
          <span className="label text-ink/60">Available — Spring &apos;26</span>
          <span className="flex items-center gap-2 label text-ink/60">
            <span className="inline-block h-2 w-2 rounded-full bg-pink" />
            Open to collabs
          </span>
        </div>

        <h1 className="display text-[19vw] leading-[0.8] md:text-[15vw]">
          <span className="block">Isabella</span>
          <span className="block text-outline">Builds</span>
        </h1>

        <div className="mt-6 flex flex-col gap-6 border-t-2 border-ink pt-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-pretty text-lg leading-relaxed md:text-xl">
            I&apos;m a{' '}
            <span className="relative inline-grid h-[1.3em] overflow-hidden align-bottom">
              <span
                key={i}
                className="font-semibold text-pink"
                style={{ animation: 'blink 0s' }}
              >
                {roles[i]}
              </span>
            </span>{' '}
            turning half-baked ideas into things people actually use — on the
            web, in the terminal, and everywhere in between.
          </p>

          <a
            href="#work"
            className="label group flex shrink-0 items-center gap-3 text-ink"
          >
            <span className="link-sweep">Scroll to explore</span>
            <span className="inline-block transition-transform group-hover:translate-y-1">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
