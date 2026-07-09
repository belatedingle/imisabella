import { Nav } from './components/nav'
import { Hero } from './components/hero'
import { Marquee } from './components/marquee'
import { WorkIndex } from './components/work-index'
import { About } from './components/about'
import { Now } from './components/now'
import { BlogPosts } from './components/posts'
import { Contact } from './components/contact'
import { Reveal } from './components/reveal'

function SectionLabel({ n, text }: { n: string; text: string }) {
  return (
    <div className="mb-8 flex items-baseline justify-between border-b-2 border-ink pb-3">
      <h2 className="display text-3xl md:text-5xl">{text}</h2>
      <span className="label text-ink/50">{n}</span>
    </div>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />

      <Marquee
        items={[
          'Design engineering',
          'Web3 & AI',
          'Open source',
          'Founder mode',
          'Wellness nerd',
        ]}
        className="border-y-2 border-ink bg-pink py-3 text-paper"
      />

      <div className="mx-auto max-w-[1400px] space-y-24 px-5 py-20 md:px-8 md:py-28">
        <section id="work">
          <SectionLabel n="01 — selected work" text="Work" />
          <WorkIndex />
        </section>

        <section id="about">
          <SectionLabel n="02 — the human" text="About" />
          <Reveal>
            <About />
          </Reveal>
        </section>

        <section id="now">
          <SectionLabel n="03 — right now" text="Now" />
          <Reveal>
            <Now />
          </Reveal>
        </section>

        <section id="words">
          <SectionLabel n="04 — writing" text="Words" />
          <Reveal>
            <BlogPosts />
          </Reveal>
        </section>
      </div>

      <Contact />
    </main>
  )
}
