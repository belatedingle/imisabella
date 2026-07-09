const links = [
  { name: 'rss', href: '/rss' },
  { name: 'github', href: 'https://github.com' },
  { name: 'twitter', href: 'https://x.com' },
]

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="font-sans text-2xl font-bold uppercase tracking-tighter">
          isabella<span className="text-cobalt">.</span>
        </p>

        <ul className="flex flex-wrap gap-2 font-mono text-xs uppercase tracking-widest">
          {links.map((l) => (
            <li key={l.name}>
              <a
                className="block border-2 border-ink px-3 py-2 transition-colors hover:bg-acid"
                rel="noopener noreferrer"
                target="_blank"
                href={l.href}
              >
                {l.name} ↗
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs uppercase tracking-widest text-ink/50">
          © {new Date().getFullYear()} — built in public
        </p>
      </div>
    </footer>
  )
}
