import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="reading px-4 py-16 md:py-20">
      <a
        href="/"
        className="mb-8 inline-block label text-pink underline underline-offset-2"
      >
        ← isabella.dev
      </a>
      <p className="mb-3 label text-pink">[ words ]</p>
      <h1 className="display mb-10 text-5xl md:text-7xl">Words</h1>
      <BlogPosts />
    </section>
  )
}
