import { Reveal } from './reveal'
import { TiltCard } from './tilt-card'

const projects = [
  {
    no: '01',
    title: 'the startup',
    blurb:
      'The thing I spend most of my hours on. Building for a generation that grew up online and expects software to feel alive.',
    tags: ['founder', '0→1', 'stealth-ish'],
    accent: 'bg-cobalt text-paper',
  },
  {
    no: '02',
    title: 'onchain experiments',
    blurb:
      'Small web3 prototypes: identity, reputation, and consumer-friendly crypto UX that normal humans could actually use.',
    tags: ['web3', 'solidity', 'ux'],
    accent: 'bg-acid text-ink',
  },
  {
    no: '03',
    title: 'ai side quests',
    blurb:
      'Agents, tools, and automations I build to research faster and offload the boring parts of founding a company.',
    tags: ['ai', 'agents', 'tooling'],
    accent: 'bg-coral text-paper',
  },
  {
    no: '04',
    title: 'the biohacking log',
    blurb:
      'An ongoing n=1 experiment on sleep, training, and longevity. Data over vibes, mostly.',
    tags: ['health', 'n=1', 'longevity'],
    accent: 'bg-ink text-paper',
  },
]

export function Projects() {
  return (
    <section id="projects" className="border-b-2 border-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cobalt">
            [ 03 — work ]
          </p>
          <h2 className="mb-12 text-4xl font-bold uppercase tracking-tight md:text-6xl">
            things i&apos;m building
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.no} delay={(i % 2) * 120}>
              <TiltCard className="h-full">
                <article className="hover-lift brutal-border flex h-full flex-col bg-paper">
                  <div className="flex items-center justify-between border-b-2 border-ink px-5 py-3">
                    <span className="font-mono text-sm font-bold tracking-widest">
                      {p.no}
                    </span>
                    <span
                      className={`px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest ${p.accent}`}
                    >
                      case
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-3 text-3xl font-bold lowercase tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mb-6 flex-1 leading-relaxed text-ink/80">
                      {p.blurb}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="border-2 border-ink px-2 py-1 font-mono text-[10px] uppercase tracking-widest"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
