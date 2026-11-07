type SocialIcon = 'instagram' | 'x' | 'linkedin' | 'discord'

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/coolstuffbybella/',
    handle: '@coolstuffbybella',
    icon: 'instagram' as SocialIcon,
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/coolstuffwbella',
    handle: '@coolstuffwbella',
    icon: 'x' as SocialIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/imisabella/',
    handle: '/in/imisabella',
    icon: 'linkedin' as SocialIcon,
  },
  {
    label: 'Discord: @neonsausage',
    href: 'https://discord.com/channels/@me',
    handle: '@neonsausage',
    icon: 'discord' as SocialIcon,
  },
]

function BrandIcon({ name }: { name: SocialIcon }) {
  const paths: Record<SocialIcon, string> = {
    instagram:
      'M7.6 2h8.8A5.6 5.6 0 0 1 22 7.6v8.8a5.6 5.6 0 0 1-5.6 5.6H7.6A5.6 5.6 0 0 1 2 16.4V7.6A5.6 5.6 0 0 1 7.6 2Zm0 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z',
    x:
      'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z',
    linkedin:
      'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z',
    discord:
      'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.994 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 13.108 13.108 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.011c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.1.246.199.373.293a.077.077 0 0 1-.007.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03ZM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.095 2.157 2.419 0 1.334-.955 2.42-2.157 2.42Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.095 2.157 2.419 0 1.334-.946 2.42-2.157 2.42Z',
  }
  const metrics: Record<SocialIcon, { size: string; y?: string }> = {
    instagram: { size: '1.7rem' },
    x: { size: '1.45rem', y: '0.01rem' },
    linkedin: { size: '1.38rem' },
    discord: { size: '1.6rem' },
  }
  const metric = metrics[name]

  return (
    <svg
      aria-hidden
      className="block"
      fill="currentColor"
      style={{
        height: metric.size,
        transform: metric.y ? `translateY(${metric.y})` : undefined,
        width: metric.size,
      }}
      viewBox="0 0 24 24"
    >
      <path d={paths[name]} />
    </svg>
  )
}

export function Contact() {
  return (
    <footer className="w-full min-w-0">
      <div>
        <div className="flex flex-col gap-6">
          <div className="pb-2">
            <p className="label socials-heading text-center text-pink">Socials</p>
          </div>

          <div className="mx-auto grid w-fit grid-cols-1 gap-x-16 gap-y-4 text-xs sm:grid-cols-2 sm:text-sm">
            {socials.map((s) => (
              <a
                key={s.label}
                aria-label={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group grid min-h-16 grid-cols-[2.5rem_auto] items-center gap-3 text-left text-ink/75 transition-colors hover:text-pink"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center text-white/90 transition-transform transition-colors group-hover:-translate-y-0.5 group-hover:text-white">
                  <BrandIcon name={s.icon} />
                </span>
                <span className="min-w-0 whitespace-nowrap font-mono leading-none">
                  {s.handle}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
