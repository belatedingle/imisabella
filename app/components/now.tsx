import { Reveal } from './reveal'

const columns = [
  {
    tag: 'building',
    color: 'bg-cobalt text-paper',
    items: [
      'my startup (heads-down mode)',
      'shipping small tools weekly',
      'a personal AI research agent',
    ],
  },
  {
    tag: 'exploring',
    color: 'bg-acid text-ink',
    items: [
      'onchain identity + reputation',
      'AI agents that actually do work',
      'the crypto x consumer overlap',
    ],
  },
  {
    tag: 'optimizing',
    color: 'bg-coral text-paper',
    items: [
      'sleep score > vanity metrics',
      'zone 2 + heavy lifting',
      'morning sun, cold, no doomscroll',
    ],
  },
]

export function Now() {
  return (
    <section id="now" className="border-b-2 border-ink bg-paper-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cobalt">
            [ 02 — now ]
          </p>
          <h2 className="mb-12 text-4xl font-bold uppercase tracking-tight md:text-6xl">
            what i&apos;m on right now
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {columns.map((col, i) => (
            <Reveal key={col.tag} delay={i * 120}>
              <div className="hover-lift brutal-border h-full bg-paper">
                <div
                  className={`border-b-2 border-ink px-4 py-3 font-mono text-sm font-bold uppercase tracking-widest ${col.color}`}
                >
                  {col.tag}
                </div>
                <ul className="space-y-3 px-4 py-5">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span className="mt-1 text-cobalt">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
