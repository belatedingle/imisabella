import Link from 'next/link'

const navItems = {
  '/': { name: 'home' },
  '/#about': { name: 'about' },
  '/#projects': { name: 'work' },
  '/#now': { name: 'now' },
  '/blog': { name: 'blog' },
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest"
        >
          <span className="flex h-6 w-6 items-center justify-center bg-cobalt text-paper transition-transform group-hover:rotate-12">
            ✦
          </span>
          isabella
        </Link>

        <ul className="flex flex-row items-center gap-1 overflow-x-auto font-mono text-xs uppercase tracking-widest md:text-sm">
          {Object.entries(navItems).map(([path, { name }]) => (
            <li key={path}>
              <Link
                href={path}
                className="block whitespace-nowrap border-2 border-transparent px-2 py-1 transition-all hover:border-ink hover:bg-acid"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
