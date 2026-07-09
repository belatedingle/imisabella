export function Marquee({
  items,
  reverse = false,
  slow = false,
  className = '',
}: {
  items: string[]
  reverse?: boolean
  slow?: boolean
  className?: string
}) {
  const speed = slow ? 'animate-marquee-slow' : 'animate-marquee'
  const dir = reverse ? 'marquee-reverse' : ''
  // duplicate the list so the -50% translate loops seamlessly
  const loop = [...items, ...items]

  return (
    <div className={`group/marquee flex overflow-hidden ${className}`}>
      <div className={`flex shrink-0 ${speed} ${dir}`}>
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 whitespace-nowrap px-6 text-2xl font-bold uppercase tracking-tight md:text-4xl"
            aria-hidden={i >= items.length}
          >
            {item}
            <span className="text-paper/70">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
