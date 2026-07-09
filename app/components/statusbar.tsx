'use client'

import { useEffect, useState } from 'react'

export function StatusBar() {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour12: false,
        })
      )
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t-2 border-ink bg-paper-dark px-3 py-1 font-mono text-[11px] uppercase tracking-wider">
      {/* battery */}
      <span className="ink-border flex items-center gap-1 bg-paper px-1.5 py-0.5">
        <span className="inline-block h-2 w-8 bg-ink/10">
          <span className="block h-full w-[88%] bg-cobalt" />
        </span>
        88%
      </span>
      <span className="hidden sm:inline">do not expose to water</span>
      <span className="ml-auto flex items-center gap-3">
        <a
          href="/rss"
          className="underline decoration-cobalt underline-offset-2 hover:bg-cobalt hover:text-acid"
        >
          atom.xml
        </a>
        <span className="tabular-nums text-ink/70">{time || '--:--:--'}</span>
        <span className="text-coral">❀</span>
      </span>
    </div>
  )
}
