import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="border-t border-ink/10">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group flex flex-col gap-1 border-b border-ink/10 py-4 md:flex-row md:items-center md:gap-6"
            href={`/blog/${post.slug}`}
          >
            <p className="label text-muted md:w-[110px] tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-lg transition-colors group-hover:text-pink">
              {post.metadata.title}
            </p>
            <span className="ml-auto hidden text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink md:block">
              →
            </span>
          </Link>
        ))}
    </div>
  )
}
