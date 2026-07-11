const cards = [
  {
    tag: 'Building',
    title: 'Portfolio v2',
    body: 'Turning the homepage into a warmer, lighter personal site.',
  },
  {
    tag: 'Reading',
    title: 'Tiny product details',
    body: 'The microcopy, timing, and empty states that make tools feel cared for.',
  },
  {
    tag: 'Learning',
    title: 'AI workflows',
    body: 'Better ways to pair with models without losing taste or momentum.',
  },
  {
    tag: 'Wellness',
    title: 'Zone 2 + cold plunges',
    body: 'Chasing a lower resting heart rate and a clearer head between builds.',
  },
]

export function Now() {
  return (
    <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c) => (
        <div key={c.title} className="flex flex-col border-t border-ink/10 pt-4">
          <span className="label text-pink">{c.tag}</span>
          <h3 className="mt-3 text-lg font-medium leading-tight">{c.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/60">{c.body}</p>
        </div>
      ))}
    </div>
  )
}
