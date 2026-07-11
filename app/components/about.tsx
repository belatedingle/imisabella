import Image from 'next/image'

const facts = [
  ['Role', 'Software dev'],
  ['Stack', 'TS · React · Figma'],
  ['Coffee', 'Oat flat white'],
  ['Status', 'Shipping daily'],
]

export function About() {
  return (
    <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
      <div>
        <p className="text-balance text-2xl font-medium leading-[1.25] md:text-4xl">
          I build where <span className="text-pink">design</span>, code, and
          very-online curiosity collide.
        </p>
        <p className="mt-8 max-w-xl leading-relaxed text-ink/70">
          I&apos;m a software developer in Sydney who likes fast prototypes,
          playful UI, and small teams that actually ship. Lately I&apos;ve been
          exploring AI tools, wellness tech, and the kind of product details that
          make a website feel alive instead of assembled.
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
        <p className="mt-3 label text-muted">Sydney, Australia</p>
      </div>
    </div>
  )
}
