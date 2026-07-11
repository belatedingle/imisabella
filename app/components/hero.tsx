'use client'

import { useEffect, useState, type CSSProperties } from 'react'

const sparkChars = ['*', '+', 'x', 'o', '.', ':', '`', "'"]
const bursts = [
  { color: '#ff4fd8', delay: '-0.2s', left: '18%', top: '28%' },
  { color: '#35ff78', delay: '-1.6s', left: '68%', top: '22%' },
  { color: '#ffe66d', delay: '-3.1s', left: '42%', top: '36%' },
  { color: '#62d8ff', delay: '-4.4s', left: '82%', top: '48%' },
  { color: '#ff7a45', delay: '-5.7s', left: '28%', top: '58%' },
]

const sparkVectors = [
  [0, -5],
  [2, -4],
  [4, -3],
  [5, -1],
  [5, 1],
  [4, 3],
  [2, 4],
  [0, 5],
  [-2, 4],
  [-4, 3],
  [-5, 1],
  [-5, -1],
  [-4, -3],
  [-2, -4],
  [1, -7],
  [6, -3],
  [6, 3],
  [1, 7],
  [-6, 3],
  [-6, -3],
]

function AsciiFireworks() {
  return (
    <div aria-hidden className="ascii-fireworks">
      {bursts.map((burst, burstIndex) => (
        <div
          key={burst.left}
          className="firework-burst"
          style={
            {
              '--burst-color': burst.color,
              '--delay': burst.delay,
              '--left': burst.left,
              '--top': burst.top,
            } as CSSProperties
          }
        >
          <span className="firework-core">@</span>
          {sparkVectors.map(([x, y], sparkIndex) => (
            <span
              key={`${x}-${y}-${sparkIndex}`}
              className="firework-spark"
              style={
                {
                  '--x': `${x * (10 + (burstIndex % 2) * 2)}px`,
                  '--y': `${y * (10 + (burstIndex % 3))}px`,
                } as CSSProperties
              }
            >
              {sparkChars[(sparkIndex + burstIndex) % sparkChars.length]}
            </span>
          ))}
        </div>
      ))}
      {bursts.map((burst, index) => (
        <span
          key={index}
          className="firework-rocket"
          style={
            {
              '--delay': burst.delay,
              '--left': burst.left,
              '--rocket-color': burst.color,
              '--top': burst.top,
            } as CSSProperties
          }
        >
          |
        </span>
      ))}
    </div>
  )
}

function SydneyClock() {
  const [localTime, setLocalTime] = useState('')

  useEffect(() => {
    function updateLocalTime() {
      const now = new Date()
      const time = new Intl.DateTimeFormat('en-AU', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Australia/Sydney',
      }).format(now)
      const offsetParts = new Intl.DateTimeFormat('en-AU', {
        timeZone: 'Australia/Sydney',
        timeZoneName: 'longOffset',
      }).formatToParts(now)
      const offset =
        offsetParts.find((part) => part.type === 'timeZoneName')?.value ??
        'GMT+10:00'

      setLocalTime(`${time} (${offset.replace('GMT', 'UTC ')})`)
    }

    updateLocalTime()
    const timer = window.setInterval(updateLocalTime, 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="mt-5 flex items-center gap-2 font-mono text-sm leading-none text-[#f5f1f4]/65 md:text-base">
      <span className="text-pink/80">&gt;</span>{' '}
      <span
        aria-label="time"
        title="time"
        className="clock-tick -translate-y-px text-2xl leading-none text-pink/80 md:text-3xl"
      >
        ◷
      </span>{' '}
      <span className="text-[#fff8fb]/85">{localTime || '--:-- (UTC +10:00)'}</span>
    </div>
  )
}

export function Hero() {
  return (
    <section className="snap-window relative flex flex-col overflow-hidden bg-black px-5 py-6 md:px-8 md:py-8">
      <AsciiFireworks />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_32%_48%,rgba(0,0,0,0.28),rgba(0,0,0,0.86)_68%)]" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(rgba(245,241,244,0.035)_1px,transparent_1px)] bg-[length:100%_4px]" />

      <header className="relative z-10 flex items-center justify-end">
        <nav>
          <a
            href="#contact"
            className="link-sweep font-mono text-xs uppercase tracking-[0.22em] text-[#f5f1f4]/75 hover:text-[#f5f1f4] md:text-sm"
          >
            Socials
          </a>
        </nav>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 items-center py-16">
        <div>
          <h1 className="display whitespace-nowrap text-[clamp(2.55rem,11vw,4.5rem)] leading-[0.95] text-[#fff8fb] drop-shadow-[0_0_18px_rgba(255,45,139,0.22)]">
            hi, i&apos;m isabella
          </h1>
          <p className="mt-5 font-mono text-base text-[#f5f1f4]/70 md:text-lg">
            software dev. from sydney, australia
          </p>
          <SydneyClock />
        </div>
      </div>
    </section>
  )
}
