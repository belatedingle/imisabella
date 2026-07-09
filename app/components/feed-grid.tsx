import Image from 'next/image'
import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

const cardImages = [
  '/images/card-terminal.png',
  '/images/card-spectrum.png',
  '/images/card-city.png',
  '/images/card-chart.png',
]

function ImageCard({
  href,
  src,
  title,
  meta,
  external = false,
  sticker,
}: {
  href: string
  src: string
  title: string
  meta: string
  external?: boolean
  sticker?: boolean
}) {
  const Wrapper: any = external ? 'a' : Link
  const props = external
    ? { href, target: '_blank', rel: 'noreferrer' }
    : { href }
  return (
    <Wrapper
      {...props}
      className="hover-lift ink-border relative flex flex-col bg-paper"
    >
      {sticker && (
        <span className="starburst animate-wiggle absolute -right-3 -top-3 z-10 grid h-14 w-14 place-items-center font-pixel text-lg leading-none">
          NEW!
        </span>
      )}
      <div className="relative aspect-square w-full overflow-hidden border-b-2 border-ink bg-paper-dark">
        <Image
          src={src || '/placeholder.svg'}
          alt=""
          fill
          sizes="(max-width: 768px) 50vw, 240px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <p className="mb-2 text-sm font-bold leading-snug text-cobalt">
          {title}
        </p>
        <p className="mt-auto font-mono text-[10px] uppercase tracking-widest text-ink/50">
          {meta}
        </p>
      </div>
    </Wrapper>
  )
}

function NoteCard({
  accent,
  children,
}: {
  accent: string
  children: React.ReactNode
}) {
  return (
    <div
      className="hover-lift ink-border flex flex-col justify-center p-4 text-center"
      style={{ backgroundColor: accent }}
    >
      {children}
    </div>
  )
}

export function FeedGrid() {
  const posts = getBlogPosts()
    .sort((a, b) =>
      new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
        ? -1
        : 1
    )
    .slice(0, 6)

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
      {/* Widget: internet phone book style */}
      <NoteCard accent="var(--color-acid)">
        <p className="font-mono text-[11px] leading-relaxed">
          this site is listed in the
        </p>
        <p className="section-head my-1 text-2xl">Internet Phone Book</p>
        <p className="font-mono text-[11px]">you can dial-this-site at:</p>
        <p className="mt-2 font-pixel text-3xl tracking-widest">631</p>
      </NoteCard>

      {posts.map((post, i) => (
        <ImageCard
          key={post.slug}
          href={`/blog/${post.slug}`}
          src={cardImages[i % cardImages.length]}
          title={post.metadata.title}
          meta={formatDate(post.metadata.publishedAt, false)}
          sticker={i === 0}
        />
      ))}

      {/* Widget: now-playing */}
      <NoteCard accent="var(--color-cobalt)">
        <p className="font-mono text-[10px] uppercase tracking-widest text-acid">
          now playing
        </p>
        <p className="my-1 text-base font-bold text-paper">Life Is</p>
        <p className="font-mono text-xs text-paper/80">Jessica Pratt</p>
        <p className="mt-2 font-pixel text-2xl text-acid">♫ ♪ ♫</p>
      </NoteCard>

      {/* Widget: gift */}
      <NoteCard accent="var(--color-paper-dark)">
        <p className="font-mono text-[11px] leading-relaxed">
          received a gift copy of{' '}
          <span className="font-bold text-cobalt">Factorio</span> on Steam →
        </p>
        <p className="mt-2 font-pixel text-2xl">☑ thanks!</p>
      </NoteCard>
    </div>
  )
}
