'use client'

import { useEffect, useRef, useState } from 'react'

const GLYPHS = '01<>/{}[]#*+=$%&|;:~^'.split('')

type Trail = {
  id: number
  char: string
  x: number
  y: number
}

export function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [down, setDown] = useState(false)
  const [pointer, setPointer] = useState(false)
  const [trails, setTrails] = useState<Trail[]>([])
  const idRef = useRef(0)
  const lastSpawn = useRef(0)

  useEffect(() => {
    // Skip on touch devices and when reduced motion is preferred
    const touch =
      window.matchMedia('(pointer: coarse)').matches ||
      navigator.maxTouchPoints > 0
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (touch || reduced) return
    setEnabled(true)
    document.documentElement.classList.add('cursor-none')

    function onMove(e: MouseEvent) {
      setPos({ x: e.clientX, y: e.clientY })

      // Detect interactive elements to grow the cursor
      const target = e.target
      const interactive =
        target instanceof Element &&
        !!target.closest(
          'a, button, input, textarea, [role="button"], [data-cursor="link"]',
        )
      setPointer(interactive)

      // Spawn a glyph occasionally while moving
      const now = performance.now()
      if (now - lastSpawn.current > 40) {
        lastSpawn.current = now
        const id = idRef.current++
        const char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        const jitterX = e.clientX + (Math.random() - 0.5) * 24
        const jitterY = e.clientY + (Math.random() - 0.5) * 24
        setTrails((prev) => [
          ...prev.slice(-18),
          { id, char, x: jitterX, y: jitterY },
        ])
        window.setTimeout(() => {
          setTrails((prev) => prev.filter((t) => t.id !== id))
        }, 650)
      }
    }

    function onDown() {
      setDown(true)
    }
    function onUp() {
      setDown(false)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.documentElement.classList.remove('cursor-none')
    }
  }, [])

  if (!enabled) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden>
      {/* Scattering glyph trail */}
      {trails.map((t) => (
        <span
          key={t.id}
          className="cursor-glyph absolute font-mono text-xs"
          style={{ left: t.x, top: t.y }}
        >
          {t.char}
        </span>
      ))}

      {/* Main block cursor */}
      <div
        className="cursor-block absolute font-mono"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%) scale(${
            down ? 0.7 : pointer ? 1.9 : 1
          })`,
        }}
      >
        <span className="cursor-block-inner">{pointer ? '[ ]' : '█'}</span>
      </div>
    </div>
  )
}
