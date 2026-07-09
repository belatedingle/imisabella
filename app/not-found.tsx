import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-4 py-24 md:py-32">
      <p className="label text-pink">[ error ]</p>
      <h1 className="display mt-3 text-8xl leading-none md:text-9xl">
        4<span className="text-pink">0</span>4
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed">
        This page wandered off the chain. It doesn&apos;t exist, or it never
        did.
      </p>
      <Link
        href="/"
        className="hover-lift ink-border mt-8 bg-pink px-6 py-3 label font-bold text-paper"
      >
        ← back home
      </Link>
    </section>
  )
}
