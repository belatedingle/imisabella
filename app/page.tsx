import { Sidebar } from './components/sidebar'
import { Ticker } from './components/ticker'
import { StatusBar } from './components/statusbar'
import { Intro } from './components/intro'
import { FeedGrid } from './components/feed-grid'
import { ProjectsGrid } from './components/projects-grid'
import { NowStrip } from './components/now-strip'
import { Guestbook } from './components/guestbook'
import { SectionHeading } from './components/section-heading'
import { Reveal } from './components/reveal'

export default function Page() {
  return (
    <div className="bg-paper-tex min-h-screen lg:flex">
      <Sidebar />

      <div className="min-w-0 flex-1 pb-12">
        <Ticker />

        <Intro />

        <div className="space-y-12 px-5 py-10 md:px-8">
          <section>
            <SectionHeading text="articles & posts" id="writing" />
            <Reveal>
              <FeedGrid />
            </Reveal>
          </section>

          <section>
            <SectionHeading text="projects" id="projects" />
            <Reveal>
              <ProjectsGrid />
            </Reveal>
          </section>

          <section>
            <SectionHeading text="now" id="now" />
            <Reveal>
              <NowStrip />
            </Reveal>
          </section>

          <section>
            <SectionHeading text="guestbook" id="contact" />
            <Reveal>
              <Guestbook />
            </Reveal>
          </section>
        </div>
      </div>

      <StatusBar />
    </div>
  )
}
