const socials = [
  { label: 'Email', href: 'mailto:hi@isabella.dev', handle: 'hi@isabella.dev' },
  { label: 'GitHub', href: 'https://github.com', handle: '@isabella' },
  { label: 'X / Twitter', href: 'https://x.com', handle: '@isabella' },
  { label: 'Read.cv', href: 'https://read.cv', handle: '/isabella' },
]

export function Contact() {
  return (
    <footer id="contact" className="border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <p className="label text-pink">Contact</p>
        <h2 className="display mt-6 text-6xl leading-[0.9] md:text-8xl">
          Let&apos;s make
          <br />
          something good
        </h2>

        <div className="mt-16 border-t border-paper/15">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-paper/15 py-5 transition-colors hover:text-pink"
            >
              <span className="label text-paper/50 transition-colors group-hover:text-pink">
                {s.label}
              </span>
              <span className="flex items-center gap-3 text-lg">
                {s.handle}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 label text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Isabella</span>
          <span>Brooklyn, NY</span>
        </div>
      </div>
    </footer>
  )
}
