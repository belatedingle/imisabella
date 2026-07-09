// Purely decorative QR-style pixel block (deterministic, no data encoded).
const SIZE = 11

function seeded(i: number) {
  // cheap deterministic hash so the pattern is stable across renders
  const x = Math.sin(i * 12.9898) * 43758.5453
  return x - Math.floor(x) > 0.5
}

function isFinder(r: number, c: number) {
  const inCorner = (br: number, bc: number) =>
    r >= br && r < br + 3 && c >= bc && c < bc + 3
  return inCorner(0, 0) || inCorner(0, SIZE - 3) || inCorner(SIZE - 3, 0)
}

export function QrBlock({ className = '' }: { className?: string }) {
  const cells: boolean[] = []
  for (let i = 0; i < SIZE * SIZE; i++) {
    const r = Math.floor(i / SIZE)
    const c = i % SIZE
    cells.push(isFinder(r, c) ? true : seeded(i))
  }

  return (
    <div
      className={`ink-border grid bg-paper p-1 ${className}`}
      style={{ gridTemplateColumns: `repeat(${SIZE}, 1fr)` }}
      aria-hidden="true"
    >
      {cells.map((on, i) => (
        <div
          key={i}
          style={{ backgroundColor: on ? 'var(--color-ink)' : 'transparent' }}
        />
      ))}
    </div>
  )
}
