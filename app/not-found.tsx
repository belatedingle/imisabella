import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-4 py-24 md:py-32">
      <p className="font-mono text-xs uppercase tracking-widest text-cobalt">
        [ error ]
      </p>
      <h1 className="mt-3 text-7xl font-bold uppercase leading-none tracking-tighter md:text-9xl">
        4<span className="text-cobalt">0</span>4
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed">
        This page wandered off the chain. It doesn&apos;t exist, or it never
        did.
      </p>
      <Link
        href="/"
        className="hover-lift ink-border mt-8 bg-acid px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest"
      >
        ← back home
      </Link>
    </section>
  )
}
