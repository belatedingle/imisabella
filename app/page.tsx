import { Hero } from './components/hero'
import { Interests } from './components/interests'
import { Contact } from './components/contact'
import { AsciiBouncingBalls } from './components/ascii-bouncing-balls'

export default function Page() {
  return (
    <main className="snap-shell">
      <Hero />
      <Interests />
      <section
        id="contact"
        className="snap-window relative grid place-items-center overflow-hidden bg-black px-5 md:px-8"
      >
        <AsciiBouncingBalls />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_62%_44%,rgba(0,0,0,0.18),rgba(0,0,0,0.72)_72%)]" />
        <div className="relative z-10 w-full max-w-md translate-y-10 md:translate-y-20">
          <Contact />
        </div>
      </section>
    </main>
  )
}
