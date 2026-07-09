import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="ink-border divide-y-2 divide-ink bg-paper">
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
            className="group flex flex-col gap-1 px-4 py-4 transition-colors hover:bg-acid md:flex-row md:items-center md:gap-4"
            href={`/blog/${post.slug}`}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-ink/60 md:w-[110px] tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-lg font-bold tracking-tight">
              {post.metadata.title}
            </p>
            <span className="ml-auto hidden font-mono text-ink/40 transition-transform group-hover:translate-x-1 group-hover:text-ink md:block">
              →
            </span>
          </Link>
        ))}
    </div>
  )
}
