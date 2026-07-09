const projects: {
  name: string
  blurb: string
  tag: string
  href: string
  accent: string
}[] = [
  {
    name: 'agent-kit',
    blurb: 'open-source toolkit for building durable AI agents that actually ship.',
    tag: 'FOUNDER',
    href: 'https://github.com',
    accent: 'var(--color-cobalt)',
  },
  {
    name: 'onchain diary',
    blurb: 'a daily journal minted to the blockchain. immutable, oversharing.',
    tag: 'WEB3',
    href: '#',
    accent: 'var(--color-acid)',
  },
  {
    name: 'biohack.log',
    blurb: 'self-quantified wellness dashboard — sleep, HRV, cold plunges, matcha.',
    tag: 'WELLNESS',
    href: '#',
    accent: 'var(--color-coral)',
  },
  {
    name: 'dither.cam',
    blurb: 'turns any photo into a 1-bit floyd-steinberg dithered zine image.',
    tag: 'TOY',
    href: '#',
    accent: 'var(--color-paper-dark)',
  },
]

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {projects.map((p) => (
        <a
          key={p.name}
          href={p.href}
          target={p.href.startsWith('http') ? '_blank' : undefined}
          rel={p.href.startsWith('http') ? 'noreferrer' : undefined}
          className="hover-lift ink-border group flex flex-col bg-paper p-4"
        >
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-pixel text-2xl uppercase tracking-tight text-ink">
              {p.name}
            </h3>
            <span
              className="ink-border px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest"
              style={{ backgroundColor: p.accent }}
            >
              {p.tag}
            </span>
          </div>
          <p className="font-mono text-xs leading-relaxed text-ink/70">
            {p.blurb}
          </p>
          <span className="mt-3 font-mono text-xs text-cobalt transition-transform group-hover:translate-x-1">
            open →
          </span>
        </a>
      ))}
    </div>
  )
}
