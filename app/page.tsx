import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        hi, i’m isabella
      </h1>
      
      <p className="mb-4">
        {`final year of high school, startup founder, web3/ai evangelist, exploring the crypto space, wellness + biohacker #bryanjohnson`}
      </p>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold">projects</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
