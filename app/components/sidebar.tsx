import Image from 'next/image'
import { QrBlock } from './qr-block'

const stats: [string, string][] = [
  ['JOB', 'FOUNDER'],
  ['AGE', '22'],
  ['LOC', 'SF, CA'],
  ['LANG', 'EN / SOL'],
  ['STACK', 'WEB3 / AI'],
  ['BLOOD', 'DECAF O+'],
]

const links: { label: string; href: string; icon: string }[] = [
  { label: 'GUESTBOOK', href: '#contact', icon: '✎' },
  { label: 'TWITTER', href: 'https://twitter.com', icon: '𝕏' },
  { label: 'GITHUB', href: 'https://github.com', icon: '❐' },
  { label: 'FARCASTER', href: 'https://warpcast.com', icon: '✧' },
  { label: 'MIRROR', href: 'https://mirror.xyz', icon: '❖' },
  { label: 'ARE.NA', href: 'https://are.na', icon: '⬡' },
  { label: 'LINKEDIN', href: 'https://linkedin.com', icon: 'in' },
  { label: 'EMAIL', href: 'mailto:hi@isabella.dev', icon: '✉' },
  { label: 'SPOTIFY', href: 'https://spotify.com', icon: '♫' },
  { label: 'LETTERBOXD', href: 'https://letterboxd.com', icon: '◉' },
  { label: 'GOODREADS', href: 'https://goodreads.com', icon: '❦' },
  { label: 'STRAVA', href: 'https://strava.com', icon: '⚡' },
]

export function Sidebar() {
  return (
    <aside className="w-full shrink-0 border-ink px-5 py-6 lg:sticky lg:top-0 lg:h-screen lg:w-[280px] lg:overflow-y-auto lg:border-r-2">
      {/* Name logo */}
      <div className="mb-1 flex items-baseline gap-2">
        <span className="text-coral">❀</span>
        <h1 className="font-pixel text-5xl uppercase leading-none tracking-tight text-ink">
          isabella
        </h1>
        <span className="text-coral">❀</span>
      </div>
      <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50">
        personal homepage · est. 2026
      </p>

      {/* Stats */}
      <dl className="mb-5 border-y-2 border-dashed border-ink/30 py-3 font-mono text-xs">
        {stats.map(([k, v]) => (
          <div key={k} className="flex justify-between py-0.5">
            <dt className="text-ink/50">{k}:</dt>
            <dd className="font-bold tabular-nums">{v}</dd>
          </div>
        ))}
      </dl>

      {/* Dithered portrait */}
      <div className="ink-border mb-5 bg-paper-dark p-1">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src="/images/portrait.png"
            alt="Dithered portrait of Isabella"
            fill
            sizes="280px"
            className="dither object-cover"
          />
        </div>
      </div>

      {/* Links */}
      <nav aria-label="Elsewhere on the web" className="mb-5">
        <ul className="font-mono text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="group flex items-center justify-between border-b border-dotted border-ink/20 py-[5px] transition-colors hover:bg-cobalt hover:text-acid"
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className="tracking-widest">{l.label}</span>
                <span className="grid h-5 w-5 place-items-center text-xs opacity-70 group-hover:opacity-100">
                  {l.icon}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* QR + warning */}
      <div className="flex items-center gap-3">
        <QrBlock className="h-20 w-20 shrink-0" />
        <p className="font-mono text-[10px] uppercase leading-tight tracking-wider text-ink/60">
          scan me ↖ <br />
          do not expose <br />
          to water, please
        </p>
      </div>
    </aside>
  )
}
