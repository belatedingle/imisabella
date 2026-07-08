const interests = [
  { title: 'ai', blurb: 'agents, tooling & building with LLMs' },
  { title: 'startups', blurb: "cos, y'know, cutting-edge solutions ¯\\_(ツ)_/¯" },
  { title: 'web3', blurb: 'onchain apps & decentralized tech' },
  { title: 'game dev', blurb: 'interactive worlds & real-time systems' },
  { title: 'crypto', blurb: 'markets, protocols & the open economy' },
  { title: 'wellness', blurb: 'biohacking & optimizing the human stack #bryanjohnson' },
]

export function Interests() {
  return (
    <section className="my-12">
      <h2 className="mb-4 text-xl font-semibold tracking-tight">what i&apos;m into</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {interests.map(({ title, blurb }) => (
          <div
            key={title}
            className="rounded-lg border border-neutral-200 p-4 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
          >
            <h3 className="font-medium tracking-tight">{title}</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              {blurb}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
