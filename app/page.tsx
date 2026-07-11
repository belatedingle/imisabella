import { Hero } from './components/hero'
import { Interests } from './components/interests'
import { Contact } from './components/contact'
import { AsciiBouncingBalls } from './components/ascii-bouncing-balls'

export default function Page() {
  return (
    <main className="snap-shell">
      <Hero />
      <Interests />
      <section className="snap-window relative flex items-center justify-center overflow-y-auto overflow-x-hidden border-t border-ink/10 bg-black px-5 py-10 md:px-8 md:py-12">
        <AsciiBouncingBalls />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_62%_44%,rgba(0,0,0,0.18),rgba(0,0,0,0.72)_72%)]" />
        <div className="relative z-10 w-full max-w-md">
          <Contact />
        </div>
      </section>
    </main>
  )
}
