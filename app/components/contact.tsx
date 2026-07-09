import { Reveal } from './reveal'

const socials = [
  { name: 'twitter / x', handle: '@isabella', href: 'https://x.com' },
  { name: 'github', handle: '/isabella', href: 'https://github.com' },
  { name: 'farcaster', handle: '@isabella', href: 'https://warpcast.com' },
  { name: 'email', handle: 'hi@isabella.xyz', href: 'mailto:hi@isabella.xyz' },
]

export function Contact() {
  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-acid">
            [ 05 — contact ]
          </p>
          <h2 className="text-5xl font-bold uppercase leading-[0.9] tracking-tighter text-balance md:text-8xl">
            let&apos;s make
            <br />
            <span className="text-cobalt">something</span> weird.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
            Building something in web3, AI, or health? Want to trade notes on
            sleep scores? My inbox and DMs are open.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {socials.map((s, i) => (
            <Reveal key={s.name} delay={i * 100}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-2 border-paper px-5 py-5 transition-colors hover:bg-acid hover:text-ink"
              >
                <span className="font-mono text-xs uppercase tracking-widest opacity-70 group-hover:opacity-100">
                  {s.name}
                </span>
                <span className="flex items-center gap-3 text-xl font-bold lowercase">
                  {s.handle}
                  <span className="transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
