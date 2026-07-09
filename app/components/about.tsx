import { Reveal } from './reveal'
import { Marquee } from './marquee'

const facts = [
  ['age', 'final-year hs'],
  ['role', 'founder'],
  ['thesis', 'crypto is early'],
  ['fuel', 'cold plunge + sun'],
  ['status', 'building in public'],
]

export function About() {
  return (
    <section id="about" className="border-b-2 border-ink">
      <Marquee
        items={['about', 'about', 'about', 'about', 'about']}
        className="border-b-2 border-ink bg-coral py-3 text-paper"
        slow
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-5 md:px-6 md:py-24">
        <div className="md:col-span-3">
          <Reveal>
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-cobalt">
              [ 01 — who ]
            </p>
            <h2 className="text-4xl font-bold uppercase leading-none tracking-tight text-balance md:text-6xl">
              a very online
              <br />
              <span className="bg-acid px-1">optimist</span> with a
              <br />
              build habit.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 max-w-xl space-y-4 text-lg leading-relaxed">
              <p>
                I&apos;m Isabella. I&apos;m finishing high school and running a
                startup at the same time, which is exactly as chaotic as it
                sounds. I love the messy zero-to-one part where an idea is
                still a rumor.
              </p>
              <p>
                My obsessions cluster around three things: frontier tech
                (web3, AI, the weird internet), markets, and the human
                operating system, sleep, training, light, and everything
                Bryan Johnson keeps yapping about.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-2">
          <Reveal delay={200}>
            <ul className="brutal-border brutal-shadow divide-y-2 divide-ink bg-paper">
              {facts.map(([k, v]) => (
                <li
                  key={k}
                  className="flex items-center justify-between gap-4 px-4 py-4"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-ink/60">
                    {k}
                  </span>
                  <span className="text-right font-bold uppercase">{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
