'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, type ReactNode } from 'react'

type Line = { id: number; node: ReactNode }

const interests = [
  'crypto',
  'ai tinkering',
  'open source',
  'wellness',
  'biohacking',
  'startups',
]

const contacts = [
  { label: 'email', handle: 'hi@isabella.dev', href: 'mailto:hi@isabella.dev' },
  { label: 'github', handle: '@isabella', href: 'https://github.com' },
  { label: 'x', handle: '@isabella', href: 'https://x.com' },
]

const files = ['about.txt', 'interests.txt', 'contact.txt', 'stack.txt']

const ASCII = String.raw` _           _          _ _       
(_)___  __ _| |__   ___| | | __ _ 
| / __|/ _` + '`' + ` | '_ \\ / _ \\ | |/ _` + '`' + ` |
| \\__ \\ (_| | |_) |  __/ | | (_| |
|_|___/\\__,_|_.__/ \\___|_|_|\\__,_|`

function Out({ children }: { children: ReactNode }) {
  return <div className="whitespace-pre-wrap leading-relaxed">{children}</div>
}

function Amber({ children }: { children: ReactNode }) {
  return <span className="text-[#ff2d8b]">{children}</span>
}

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="text-[#7fd4ff] underline underline-offset-2 hover:text-white"
    >
      {children}
    </a>
  )
}

export function Terminal() {
  const [lines, setLines] = useState<Line[]>([])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [hIndex, setHIndex] = useState(-1)
  const idRef = useRef(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const push = (node: ReactNode) =>
    setLines((prev) => [...prev, { id: idRef.current++, node }])

  // Intro / boot lines on mount
  useEffect(() => {
    const boot: ReactNode[] = [
      <Out key="a">
        <span className="text-white/50">{ASCII}</span>
      </Out>,
      <Out key="b">
        welcome. this is an interactive terminal — type{' '}
        <Amber>help</Amber> and hit enter to look around.
      </Out>,
      <Out key="c">
        <span className="text-white/50">
          (not a coder? the links up top still work.)
        </span>
      </Out>,
    ]
    boot.forEach((n) => push(n))
  }, [])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [lines])

  function run(raw: string) {
    const cmd = raw.trim()
    // echo the prompt line
    push(
      <Out>
        <Amber>isabella@web</Amber>
        <span className="text-white/50">:~$</span> {cmd}
      </Out>,
    )
    if (!cmd) return

    const [name, ...args] = cmd.split(/\s+/)
    const arg = args.join(' ')

    switch (name.toLowerCase()) {
      case 'help':
        push(
          <Out>
            {[
              ['help', 'show this list'],
              ['whoami', 'the short version'],
              ['about', 'read about.txt'],
              ['ls', 'list files'],
              ['cat <file>', 'read a file'],
              ['interests', 'what i tinker with'],
              ['contact', 'ways to reach me'],
              ['writing', 'go to the blog'],
              ['neofetch', 'system info'],
              ['clear', 'clear the screen'],
            ].map(([c, d]) => (
              <div key={c}>
                <Amber>{c.padEnd(14)}</Amber>
                <span className="text-white/70">{d}</span>
              </div>
            ))}
            <div className="mt-2 text-white/40">
              psst — there are a few undocumented commands.
            </div>
          </Out>,
        )
        break

      case 'whoami':
        push(
          <Out>
            isabella — software dev from sydney, australia. i build things for
            the web and tinker after hours.
          </Out>,
        )
        break

      case 'about':
      case 'cat':
        {
          const file = name.toLowerCase() === 'about' ? 'about.txt' : arg
          if (!file) {
            push(<Out>usage: cat &lt;file&gt; — try `ls`</Out>)
            break
          }
          if (file === 'about.txt') {
            push(
              <Out>
                {`i'm a software developer based in sydney. i like small teams,
fast feedback loops, and interfaces that feel alive. currently
building things and shipping most weekends.`}
              </Out>,
            )
          } else if (file === 'interests.txt') {
            run('interests')
          } else if (file === 'contact.txt') {
            run('contact')
          } else if (file === 'stack.txt') {
            push(
              <Out>
                typescript · react · next.js · node · postgres · a little rust
                when i&apos;m feeling brave.
              </Out>,
            )
          } else {
            push(
              <Out>
                cat: {file}: <span className="text-white/50">no such file</span>
              </Out>,
            )
          }
        }
        break

      case 'ls':
        push(
          <Out>
            <div className="flex flex-wrap gap-x-6">
              {files.map((f) => (
                <span key={f} className="text-[#7fd4ff]">
                  {f}
                </span>
              ))}
            </div>
          </Out>,
        )
        break

      case 'interests':
        push(
          <Out>
            {interests.map((i) => (
              <div key={i}>
                <Amber>▸</Amber> {i}
              </div>
            ))}
          </Out>,
        )
        break

      case 'contact':
        push(
          <Out>
            {contacts.map((c) => (
              <div key={c.label}>
                <span className="text-white/50">{c.label.padEnd(8)}</span>
                <Ext href={c.href}>{c.handle}</Ext>
              </div>
            ))}
          </Out>,
        )
        break

      case 'writing':
      case 'blog':
        push(
          <Out>
            opening the blog →{' '}
            <Link
              href="/blog"
              className="text-[#7fd4ff] underline underline-offset-2 hover:text-white"
            >
              /blog
            </Link>
          </Out>,
        )
        break

      case 'neofetch':
        push(
          <Out>
            <div className="grid grid-cols-[auto_1fr] gap-x-6">
              <span className="text-white/50 whitespace-pre">{ASCII}</span>
              <div>
                <div>
                  <Amber>isabella</Amber>@<Amber>web</Amber>
                </div>
                <div className="text-white/40">---------------</div>
                <div>
                  <span className="text-white/50">os</span> sydney, australia
                </div>
                <div>
                  <span className="text-white/50">role</span> software developer
                </div>
                <div>
                  <span className="text-white/50">uptime</span> shipping since
                  &apos;09
                </div>
                <div>
                  <span className="text-white/50">shell</span> /bin/curiosity
                </div>
              </div>
            </div>
          </Out>,
        )
        break

      case 'date':
        push(
          <Out>
            {new Date().toLocaleString('en-AU', {
              timeZone: 'Australia/Sydney',
              dateStyle: 'full',
              timeStyle: 'short',
            })}{' '}
            <span className="text-white/50">(sydney)</span>
          </Out>,
        )
        break

      case 'echo':
        push(<Out>{arg}</Out>)
        break

      case 'sudo':
        if (arg === 'hire-me') {
          push(
            <Out>
              <Amber>access granted.</Amber> excellent choice — say hi at{' '}
              <Ext href="mailto:hi@isabella.dev">hi@isabella.dev</Ext> ✨
            </Out>,
          )
        } else {
          push(
            <Out>
              <span className="text-white/50">
                [sudo] password for isabella:
              </span>{' '}
              nice try 😉
            </Out>,
          )
        }
        break

      case 'clear':
        setLines([])
        break

      default:
        push(
          <Out>
            <span className="text-white/50">command not found:</span> {name} —
            type <Amber>help</Amber>
          </Out>,
        )
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.nativeEvent.isComposing || e.keyCode === 229) return

    if (e.key === 'Enter') {
      const value = input
      run(value)
      if (value.trim()) {
        setHistory((h) => [...h, value])
      }
      setHIndex(-1)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (!history.length) return
      const next = hIndex === -1 ? history.length - 1 : Math.max(0, hIndex - 1)
      setHIndex(next)
      setInput(history[next])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (hIndex === -1) return
      const next = hIndex + 1
      if (next >= history.length) {
        setHIndex(-1)
        setInput('')
      } else {
        setHIndex(next)
        setInput(history[next])
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const all = [
        'help',
        'whoami',
        'about',
        'ls',
        'cat',
        'interests',
        'contact',
        'writing',
        'neofetch',
        'date',
        'clear',
      ]
      const match = all.find((c) => c.startsWith(input.trim()))
      if (match) setInput(match)
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      setLines([])
    }
  }

  return (
    <div
      className="crt flex h-[70vh] max-h-[640px] w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0d0d10] font-mono text-sm text-white/90 shadow-2xl"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-white/40">
          isabella@web — /bin/curiosity
        </span>
      </div>

      {/* Screen */}
      <div
        ref={scrollRef}
        className="flex-1 space-y-1 overflow-y-auto px-4 py-4 md:px-5"
      >
        {lines.map((l) => (
          <div key={l.id}>{l.node}</div>
        ))}

        {/* Live prompt */}
        <div className="flex items-center gap-2">
          <span className="shrink-0">
            <Amber>isabella@web</Amber>
            <span className="text-white/50">:~$</span>
          </span>
          <div className="relative flex-1">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              autoFocus
              spellCheck={false}
              autoComplete="off"
              aria-label="terminal input"
              className="w-full bg-transparent text-white/90 caret-[#ff2d8b] outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
