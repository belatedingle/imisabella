'use client'

import { useRef, useState } from 'react'

const CHARS = '!<>-_\\/[]{}—=+*^?#________'

export function ScrambleText({
  text,
  className = '',
}: {
  text: string
  className?: string
}) {
  const [display, setDisplay] = useState(text)
  const frame = useRef(0)
  const raf = useRef<number | null>(null)

  const scramble = () => {
    if (raf.current) cancelAnimationFrame(raf.current)
    const duration = 26 // frames
    frame.current = 0

    const tick = () => {
      const progress = frame.current / duration
      const revealed = Math.floor(progress * text.length)
      let output = ''
      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          output += ' '
        } else if (i < revealed) {
          output += text[i]
        } else {
          output += CHARS[Math.floor(Math.random() * CHARS.length)]
        }
      }
      setDisplay(output)
      frame.current++
      if (frame.current <= duration) {
        raf.current = requestAnimationFrame(tick)
      } else {
        setDisplay(text)
      }
    }
    tick()
  }

  return (
    <span
      onMouseEnter={scramble}
      onFocus={scramble}
      tabIndex={0}
      className={`inline-block cursor-default font-mono ${className}`}
    >
      {display}
    </span>
  )
}
