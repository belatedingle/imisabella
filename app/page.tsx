import { Hero } from './components/hero'
import { Marquee } from './components/marquee'
import { About } from './components/about'
import { Now } from './components/now'
import { Projects } from './components/projects'
import { Writing } from './components/writing'
import { Contact } from './components/contact'

export default function Page() {
  return (
    <>
      <Hero />

      <div className="border-b-2 border-ink bg-cobalt py-3 text-paper">
        <Marquee
          items={[
            'web3',
            'ai agents',
            'startups',
            'crypto',
            'biohacking',
            'longevity',
            'building in public',
            'shipping',
          ]}
        />
      </div>

      <About />
      <Now />
      <Projects />
      <Writing />
      <Contact />
    </>
  )
}
