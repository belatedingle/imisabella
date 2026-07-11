type SocialIcon = 'instagram' | 'x' | 'linkedin' | 'github'

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
    label: 'GitHub',
    href: 'https://github.com/belatedingle',
    handle: '@belatedingle',
    icon: 'github' as SocialIcon,
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
    github:
      'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.372.81 1.102.81 2.222 0 1.605-.015 2.895-.015 3.285 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12Z',
  }
  const metrics: Record<SocialIcon, { size: string; y?: string }> = {
    instagram: { size: '1.7rem' },
    x: { size: '1.45rem', y: '0.01rem' },
    linkedin: { size: '1.38rem' },
    github: { size: '1.5rem', y: '-0.01rem' },
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
    <footer id="contact" className="min-w-0">
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
