import Link from 'next/link'
import { Reveal } from './reveal'
import { BlogPosts } from './posts'

export function Writing() {
  return (
    <section id="writing" className="border-b-2 border-ink bg-paper-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cobalt">
                [ 04 — words ]
              </p>
              <h2 className="text-4xl font-bold uppercase tracking-tight md:text-6xl">
                from the blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="hover-lift brutal-border bg-paper px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest"
            >
              all posts →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <BlogPosts />
        </Reveal>
      </div>
    </section>
  )
}
