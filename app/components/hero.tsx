'use client'

import Link from 'next/link'
import { Terminal } from './terminal'

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col px-5 py-6 md:px-8 md:py-8">
      {/* Top row — always-visible links */}
      <header className="flex items-center justify-between">
        <span className="label tracking-[0.25em] text-ink">
          ISABELLA<span className="text-pink">®</span>
        </span>
        <nav className="flex items-center gap-6">
          <Link
            href="/blog"
            className="link-sweep label text-muted hover:text-ink"
          >
            Writing
          </Link>
          <a
            href="mailto:hi@isabella.dev"
            className="link-sweep label text-ink"
          >
            Say hi
          </a>
        </nav>
      </header>

      {/* Center */}
      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center py-10">
        <h1 className="display text-4xl leading-[0.95] md:text-6xl">
          hi, i&apos;m isabella<span className="caret">_</span>
        </h1>
        <p className="mt-4 mb-8 font-mono text-base text-ink/70 md:text-lg">
          <span className="text-pink">&gt;</span> software dev. from sydney,
          australia.
        </p>

        <Terminal />

        <p className="mt-4 label text-muted">
          type <span className="text-pink">help</span> to explore — or just poke
          around
        </p>
      </div>
    </section>
  )
}
