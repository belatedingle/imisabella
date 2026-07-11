import type { CSSProperties } from 'react'

const center = { id: 'center', label: 'cool stuff im exploring', x: 50, y: 50 }

const nodes = [
  { label: 'app development', x: 15, y: 28, delay: '-0.8s', tone: 'soft' },
  { label: 'artificial intelligence', x: 50, y: 15, delay: '-1.3s', tone: 'hot' },
  { label: 'web3', x: 83, y: 22, delay: '-3.1s', tone: 'soft' },
  { label: 'crypto', x: 86, y: 48, delay: '-4.9s', tone: 'rose' },
  { label: 'startups', x: 66, y: 62, delay: '-2.2s', tone: 'hot' },
  { label: 'game development', x: 16, y: 70, delay: '-2.4s', tone: 'rose' },
  { label: 'music technology', x: 39, y: 74, delay: '-4.2s', tone: 'soft' },
  { label: 'health & wellness tech', x: 80, y: 86, delay: '-1.9s', tone: 'rose' },
  { label: 'biohacking', x: 28, y: 88, delay: '-3.6s', tone: 'hot' },
]

const drift = [
  { x: '0.95rem', y: '-0.8rem', x2: '-0.42rem', y2: '0.62rem' },
  { x: '-0.9rem', y: '0.7rem', x2: '0.52rem', y2: '-0.48rem' },
  { x: '0.78rem', y: '0.86rem', x2: '-0.58rem', y2: '-0.36rem' },
  { x: '-0.72rem', y: '-0.74rem', x2: '0.46rem', y2: '0.54rem' },
]

function lineFromCenter(target: { x: number; y: number }) {
  const dx = target.x - center.x
  const dy = target.y - center.y
  const length = Math.hypot(dx, dy) || 1
  const gap = Math.min(7, Math.max(length - 2, 0))

  return {
    x: center.x + (dx / length) * gap,
    y: center.y + (dy / length) * gap,
  }
}

export function Interests() {
  return (
    <section className="snap-window relative flex items-center overflow-hidden border-t border-ink/10 bg-black px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grouped-mind-map">
          <svg
            aria-hidden
            className="grouped-mind-lines"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            {nodes.map((node) => {
              const lineStart = lineFromCenter(node)

              return (
                <line
                  key={`center-${node.label}`}
                  className={`grouped-mind-line grouped-mind-line-${node.tone}`}
                  x1={lineStart.x}
                  x2={node.x}
                  y1={lineStart.y}
                  y2={node.y}
                />
              )
            })}
          </svg>

          <div
            className="grouped-mind-core"
            style={
              {
                '--node-x': `${center.x}%`,
                '--node-y': `${center.y}%`,
              } as CSSProperties
            }
          >
            <span className="label grouped-mind-label glitch-label text-pink" data-text="#collab with me">
              #collab with me
            </span>
            <span className="grouped-mind-title">{center.label}</span>
          </div>

          {nodes.map((node, index) => {
            const movement = drift[index % drift.length]

            return (
              <div
                key={node.label}
                className={`group-node group-node-${node.tone}`}
                style={
                  {
                    '--drift-delay': node.delay,
                    '--drift-x': movement.x,
                    '--drift-y': movement.y,
                    '--drift-x-2': movement.x2,
                    '--drift-y-2': movement.y2,
                    '--node-x': `${node.x}%`,
                    '--node-y': `${node.y}%`,
                  } as CSSProperties
                }
              >
                {node.label}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
