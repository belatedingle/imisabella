import { Interests } from 'app/components/interests'
import { SocialFeed } from 'app/components/social-feed'
import { Contact } from 'app/components/contact'

export default function Page() {
  return (
    <section>
      <p className="mb-3 text-sm text-neutral-500 dark:text-neutral-400">
        based in sydney, australia
      </p>
      <h1 className="mb-6 text-3xl font-semibold tracking-tighter text-balance sm:text-4xl">
        hi, i&apos;m isabella
      </h1>

      <Interests />

      <SocialFeed />

      <Contact />
    </section>
  )
}
