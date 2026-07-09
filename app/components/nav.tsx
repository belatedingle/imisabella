import Link from 'next/link'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#now', label: 'Now' },
  { href: '/blog', label: 'Words' },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="label font-bold tracking-[0.25em] text-ink">
          ISABELLA<span className="text-pink">®</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-sweep label text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <a
          href="#contact"
          className="hover-lift ink-border bg-pink px-3 py-1.5 label font-bold text-paper"
        >
          Let&apos;s talk ↗
        </a>
      </nav>
    </header>
  )
}
