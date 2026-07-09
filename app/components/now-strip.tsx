const now: { label: string; value: string }[] = [
  { label: 'reading', value: 'The MANIAC — Labatut' },
  { label: 'building', value: 'agent-kit v2' },
  { label: 'obsessed', value: 'cold plunges @ 3°C' },
  { label: 'drinking', value: 'ceremonial matcha' },
  { label: 'listening', value: 'Jessica Pratt' },
  { label: 'learning', value: 'Solidity + zk' },
]

export function NowStrip() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {now.map((n) => (
        <div key={n.label} className="ink-border bg-paper p-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-coral">
            {n.label}
          </p>
          <p className="mt-1 text-sm font-bold leading-snug">{n.value}</p>
        </div>
      ))}
    </div>
  )
}
