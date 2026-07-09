export function Guestbook() {
  return (
    <div className="ink-border bg-paper-dark p-5">
      <p className="font-mono text-sm leading-relaxed text-ink/70">
        made it to the bottom? leave a mark. sign the guestbook, send an
        email, or just yell at me on the internet.
      </p>
      <form
        className="mt-4 flex flex-col gap-2 sm:flex-row"
        action="mailto:hi@isabella.dev"
        method="post"
        encType="text/plain"
      >
        <label htmlFor="msg" className="sr-only">
          Your message
        </label>
        <input
          id="msg"
          name="message"
          type="text"
          placeholder="type something nice…"
          className="ink-border flex-1 bg-paper px-3 py-2 font-mono text-sm placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-cobalt"
        />
        <button
          type="submit"
          className="hover-lift ink-border bg-cobalt px-4 py-2 font-pixel text-lg uppercase tracking-wider text-acid"
        >
          sign ✎
        </button>
      </form>
      <div className="mt-4 flex flex-wrap gap-2">
        {['★ 631 visitors', 'since 2026', 'best viewed in 800×600', 'no cookies'].map(
          (b) => (
            <span
              key={b}
              className="ink-border bg-paper px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-ink/60"
            >
              {b}
            </span>
          )
        )}
      </div>
    </div>
  )
}
