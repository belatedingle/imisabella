const socials = [
  { label: 'Email', href: 'mailto:hi@isabella.dev', handle: 'hi@isabella.dev' },
  { label: 'GitHub', href: 'https://github.com', handle: '@isabella' },
  { label: 'X / Twitter', href: 'https://x.com', handle: '@isabella' },
  { label: 'Read.cv', href: 'https://read.cv', handle: '/isabella' },
]

export function Contact() {
  return (
    <footer id="contact" className="border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
        <p className="label text-pink">( contact )</p>
        <h2 className="display mt-4 text-[15vw] leading-[0.82] md:text-[11vw]">
          Let&apos;s
          <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: '2px var(--color-paper)' }}
          >
            make it
          </span>{' '}
          weird
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden border-2 border-paper/30 bg-paper/20 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1 bg-ink p-6 transition-colors hover:bg-pink"
            >
              <span className="label text-paper/50 group-hover:text-paper">
                {s.label}
              </span>
              <span className="text-lg font-semibold">{s.handle}</span>
              <span className="mt-2 inline-block transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-paper/20 pt-6 label text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Isabella — built with too much coffee</span>
          <span>Brooklyn, NY · 40.6°N</span>
        </div>
      </div>
    </footer>
  )
}
