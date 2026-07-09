import Image from 'next/image'

const facts = [
  ['Role', 'Founder & dev'],
  ['Stack', 'TS · Rust · Figma'],
  ['Coffee', 'Oat flat white'],
  ['Status', 'Shipping daily'],
]

export function About() {
  return (
    <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
      <div>
        <p className="text-balance text-2xl font-medium leading-[1.25] md:text-4xl">
          I build at the seam where{' '}
          <span className="text-pink">design</span>, code, and
          slightly-too-online curiosity collide.
        </p>
        <p className="mt-8 max-w-xl leading-relaxed text-ink/70">
          Currently a final-year student and startup founder. I&apos;ve shipped
          products used by tens of thousands, contribute to open source, and
          spend my off-hours on wellness experiments and reading way too many
          changelogs. I like small teams, fast feedback loops, and interfaces
          that feel alive.
        </p>

        <dl className="mt-10 divide-y divide-ink/10 border-t border-ink/10">
          {facts.map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between py-3">
              <dt className="label text-muted">{k}</dt>
              <dd className="text-sm font-medium">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div>
        <div className="overflow-hidden bg-blush">
          <Image
            src="/images/portrait.png"
            alt="Portrait of Isabella"
            width={600}
            height={720}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="mt-3 label text-muted">Online since &apos;09</p>
      </div>
    </div>
  )
}
