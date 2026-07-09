'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ScrambleText } from './scramble-text'

export function Hero() {
  const blobRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const blob = blobRef.current
    if (!section || !blob) return

    let raf = 0
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        blob.style.transform = `translate(${x - 160}px, ${y - 160}px)`
      })
    }
    section.addEventListener('mousemove', onMove)
    return () => {
      section.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b-2 border-ink bg-grid"
    >
      {/* pointer-follow accent */}
      <div
        ref={blobRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-cobalt opacity-20 blur-3xl transition-transform duration-300 ease-out"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-6 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest">
          <span className="border-2 border-ink bg-acid px-2 py-1">
            open to build
          </span>
          <span className="border-2 border-ink px-2 py-1">est. y2k+</span>
          <span className="flex items-center gap-2 border-2 border-ink px-2 py-1">
            <span className="h-2 w-2 animate-blink bg-coral" />
            currently: shipping
          </span>
        </div>

        <h1 className="font-sans text-6xl font-bold uppercase leading-[0.85] tracking-tighter text-balance sm:text-7xl md:text-[9rem]">
          <span className="block">isa</span>
          <span className="block text-cobalt">bella</span>
        </h1>

        <div className="mt-8 max-w-2xl">
          <p className="text-lg leading-relaxed md:text-2xl">
            final-year student. startup founder.{' '}
            <span className="bg-ink px-1 text-paper">web3 / ai</span>{' '}
            evangelist, deep in the crypto trenches, wellness + biohacker in the{' '}
            <ScrambleText
              text="#bryanjohnson"
              className="bg-acid px-1 font-bold"
            />{' '}
            arc.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/#projects"
            className="hover-lift brutal-border bg-cobalt px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-paper"
          >
            see the work →
          </Link>
          <Link
            href="/#contact"
            className="hover-lift brutal-border bg-paper px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest"
          >
            say hi
          </Link>
        </div>
      </div>
    </section>
  )
}
