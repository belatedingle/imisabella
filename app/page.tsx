import { Nav } from './components/nav'
import { Hero } from './components/hero'
import { WorkIndex } from './components/work-index'
import { About } from './components/about'
import { Now } from './components/now'
import { BlogPosts } from './components/posts'
import { Contact } from './components/contact'
import { Reveal } from './components/reveal'

function SectionLabel({ n, text }: { n: string; text: string }) {
  return (
    <div className="mb-12 flex items-baseline justify-between border-t border-ink/10 pt-4">
      <span className="label text-muted">{n}</span>
      <h2 className="label text-ink">{text}</h2>
    </div>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />

      <div className="mx-auto max-w-5xl space-y-28 px-5 py-16 md:px-8 md:py-24">
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
