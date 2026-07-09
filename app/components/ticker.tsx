const feed: { tag: string; text: string }[] = [
  { tag: 'letterboxd', text: '★★★★½ — In the Mood for Love, 2000' },
  { tag: 'rym', text: '★★★★ — Feed Me Weird Things, Squarepusher' },
  { tag: 'are.na', text: 'added → "interfaces that feel like toys"' },
  { tag: 'github', text: 'pushed 14 commits to isabella/agent-kit' },
  { tag: 'spotify', text: 'now playing — Jessica Pratt, Life Is' },
  { tag: 'letterboxd', text: '★★★½ — Nosferatu, 2024' },
  { tag: 'goodreads', text: 'finished — The MANIAC, Benjamín Labatut' },
  { tag: 'strava', text: 'ran 8.2km · avg 5:12 /km · sunrise' },
  { tag: 'are.na', text: 'added → "dithered portraits"' },
  { tag: 'rym', text: '★★★★½ — Still, Joy Orbison' },
]

export function Ticker() {
  const loop = [...feed, ...feed]
  return (
    <div className="group/marquee flex overflow-hidden border-b-2 border-ink bg-ink text-paper">
      <div className="flex shrink-0 animate-marquee-slow">
        {loop.map((f, i) => (
          <span
            key={i}
            className="flex items-center gap-2 whitespace-nowrap px-4 py-1.5 font-mono text-xs"
            aria-hidden={i >= feed.length}
          >
            <span className="bg-cobalt px-1.5 py-0.5 text-[10px] uppercase tracking-widest text-acid">
              {f.tag}
            </span>
            <span className="opacity-90">{f.text}</span>
            <span className="text-coral">■</span>
          </span>
        ))}
      </div>
    </div>
  )
}
