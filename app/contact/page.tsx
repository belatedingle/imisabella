import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'say hi',
  description: 'get in touch with isabella.',
}

const socials = [
  {
    name: 'instagram',
    handle: '@coolstuffbybella',
    href: 'https://www.instagram.com/coolstuffbybella/',
  },
  {
    name: 'x',
    handle: '@coolstuffwbella',
    href: 'https://x.com/coolstuffwbella',
  },
  {
    name: 'linkedin',
    handle: 'imisabella',
    href: 'https://www.linkedin.com/in/imisabella/',
  },
  {
    name: 'github',
    handle: 'belatedingle',
    href: 'https://github.com/belatedingle',
  },
]

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">say hi</h1>

      <p className="mb-8">
        {`the best places to reach me. come say hi.`}
      </p>

      <ul className="flex flex-col space-y-2 text-neutral-600 dark:text-neutral-300">
        {socials.map((social) => (
          <li key={social.name}>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={social.href}
            >
              <ArrowIcon />
              <p className="ml-2 h-7">
                {social.name}{' '}
                <span className="text-neutral-400 dark:text-neutral-500">
                  {social.handle}
                </span>
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
