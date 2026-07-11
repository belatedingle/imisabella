'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

type Project = {
  title: string
  role: string
  year: string
  image: string
  href: string
}

const projects: Project[] = [
  {
    title: 'Home base',
    role: 'Creative dev',
    year: '2026',
    image: '/images/card-terminal.png',
    href: '/',
  },
  {
    title: 'Pink system',
    role: 'Interface design',
    year: '2026',
    image: '/images/card-spectrum.png',
    href: '#about',
  },
  {
    title: 'Sydney notes',
    role: 'Socials',
    year: 'Now',
    image: '/images/card-city.png',
    href: '#contact',
  },
  {
    title: 'Build log',
    role: 'Experiments',
    year: 'Live',
    image: '/images/card-chart.png',
    href: '#now',
  },
]

export function WorkIndex() {
  const [active, setActive] = useState<number | null>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const wrapRef = useRef<HTMLDivElement>(null)

  function handleMove(e: React.MouseEvent) {
    const rect = wrapRef.current?.getBoundingClientRect()
    if (!rect) return
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div ref={wrapRef} onMouseMove={handleMove} className="relative">
      <ul>
        {projects.map((p, idx) => (
          <li key={p.title}>
            <a
              href={p.href}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-ink/10 py-6 md:gap-8 md:py-8"
            >
              <span className="label text-muted">0{idx + 1}</span>
              <span className="display text-4xl leading-none transition-colors group-hover:text-pink md:text-6xl">
                {p.title}
              </span>
              <span className="flex flex-col items-end text-right">
                <span className="text-sm text-ink/70 md:text-base">
                  {p.role}
                </span>
                <span className="label text-muted">{p.year}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Cursor-following preview */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block"
        style={{
          transform: `translate(${pos.x + 24}px, ${pos.y - 130}px)`,
          opacity: active !== null ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
      >
        <div className="ink-border h-[260px] w-[260px] overflow-hidden bg-paper shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
          {projects.map((p, idx) => (
            <Image
              key={p.title}
              src={p.image || '/placeholder.svg'}
              alt=""
              width={260}
              height={260}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-200"
              style={{ opacity: active === idx ? 1 : 0 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
