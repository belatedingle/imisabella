import Image from 'next/image'

const facts = [
  ['Role', 'Founder & dev'],
  ['Stack', 'TS · Rust · Figma'],
  ['Coffee', 'Oat flat white'],
  ['Status', 'Shipping daily'],
]

export function About() {
  return (
    <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
      <div>
        <p className="label mb-6 text-pink">( about )</p>
        <p className="text-balance text-3xl font-medium leading-[1.15] md:text-5xl">
          I build at the seam where{' '}
          <span className="text-pink">design</span>,{' '}
          <span className="italic">code</span>, and slightly-too-online
          curiosity collide.
        </p>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/80">
          Currently a final-year student and startup founder. I&apos;ve shipped
          products used by tens of thousands, contribute to open source, and
          spend my off-hours on wellness experiments and reading way too many
          changelogs. I like small teams, fast feedback loops, and interfaces
          that feel alive.
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden border-2 border-ink bg-ink sm:grid-cols-4">
          {facts.map(([k, v]) => (
            <div key={k} className="bg-paper p-4">
              <dt className="label text-ink/50">{k}</dt>
              <dd className="mt-1 font-semibold">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative">
        <div className="ink-border overflow-hidden bg-blush">
          <Image
            src="/images/portrait.png"
            alt="Portrait of Isabella"
            width={600}
            height={720}
            className="h-full w-full object-cover"
          />
        </div>
        <span className="absolute -bottom-4 -left-4 ink-border bg-acid px-3 py-1.5 label font-bold rotate-[-4deg]">
          est. online since &apos;09
        </span>
      </div>
    </div>
  )
}
