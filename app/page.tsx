import { BlogPosts } from 'app/components/posts'
import { Interests } from 'app/components/interests'
import { Contact } from 'app/components/contact'

export default function Page() {
  return (
    <section>
      <p className="mb-3 text-sm text-neutral-500 dark:text-neutral-400">
        based in sydney, australia
      </p>
      <h1 className="mb-6 text-3xl font-semibold tracking-tighter text-balance sm:text-4xl">
        hi, i&apos;m isabella — a 17 y/o builder who likes to make things.
      </h1>

      <p className="mb-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
        {`final year of high school and a startup founder. i build across ai, web3, and game dev, keep an eye on the crypto space, and spend the rest of my time deep in wellness + biohacking.`}
      </p>
      <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">
        {`i love learning fast, shipping often, and turning ambitious ideas into real, working products.`}
      </p>

      <Interests />

      <div className="my-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">writing</h2>
        <BlogPosts />
      </div>

      <Contact />
    </section>
  )
}
