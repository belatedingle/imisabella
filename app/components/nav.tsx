import Link from 'next/link'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#now', label: 'Now' },
  { href: '/blog', label: 'Words' },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="label tracking-[0.25em] text-ink">
          ISABELLA
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-sweep label text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <a
          href="#contact"
          className="link-sweep label text-ink"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
