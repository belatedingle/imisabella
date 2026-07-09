import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="reading px-4 py-16 md:py-20">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cobalt">
        [ words ]
      </p>
      <h1 className="mb-10 text-4xl font-bold uppercase tracking-tight md:text-6xl">
        my blog
      </h1>
      <BlogPosts />
    </section>
  )
}
