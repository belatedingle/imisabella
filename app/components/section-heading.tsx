import { Typewriter } from './typewriter'

export function SectionHeading({
  hash = '#',
  text,
  id,
}: {
  hash?: string
  text: string
  id?: string
}) {
  return (
    <h2
      id={id}
      className="section-head mb-4 flex scroll-mt-16 items-end gap-1 text-4xl md:text-5xl"
    >
      <span className="text-coral">{hash}</span>
      <Typewriter text={text} />
    </h2>
  )
}
