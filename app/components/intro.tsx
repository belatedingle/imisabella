import { Marquee } from './marquee'

export function Intro() {
  return (
    <section className="border-b-2 border-ink">
      <div className="px-5 py-8 md:px-8 md:py-10">
        <p className="mb-3 inline-block bg-acid px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.3em]">
          ◍ online now — say hi
        </p>
        <h2 className="section-head max-w-3xl text-5xl leading-[0.95] md:text-7xl">
          founder, builder, and{' '}
          <span className="text-cobalt">web3 / ai</span> evangelist who is
          extremely online.
        </h2>
        <p className="mt-5 max-w-2xl font-mono text-sm leading-relaxed text-ink/70">
          final-year student · biohacker · shipping small weird software.
          this is my corner of the internet — part résumé, part diary, part
          link-dump. poke around.
        </p>
      </div>

      {/* interests ticker */}
      <div className="border-t-2 border-ink bg-coral py-2 text-paper">
        <Marquee
          items={[
            'web3',
            'ai agents',
            'longevity',
            'crypto',
            'cold plunges',
            'building in public',
            'zines',
            'dithering',
            'esolangs',
            'matcha',
          ]}
        />
      </div>
    </section>
  )
}
