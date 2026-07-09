const cards = [
  {
    tag: 'Building',
    title: 'Loomlace v2',
    body: 'Rewriting the editor core in Rust + WASM for buttery real-time collab.',
  },
  {
    tag: 'Reading',
    title: 'The Timeless Way of Building',
    body: 'Christopher Alexander. Pattern languages, but for software this time.',
  },
  {
    tag: 'Learning',
    title: 'Shader art',
    body: 'GLSL noise fields and dithering. Half science, half witchcraft.',
  },
  {
    tag: 'Wellness',
    title: 'Zone 2 + cold plunges',
    body: 'Chasing a lower resting heart rate and a clearer head.',
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
