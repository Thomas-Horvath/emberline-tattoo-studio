const works = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  title: `Munka #${i + 1}`,
  tag: i % 3 === 0 ? "Blackwork" : i % 3 === 1 ? "Fine line" : "Dark illustrative",
}));

export default function MunkakPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-semibold text-zinc-100">
          Munkáim
        </h1>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <div
              key={w.id}
              className="group relative overflow-hidden rounded-xl border border-zinc-800/70 bg-zinc-950/40"
            >
              {/* Fake image */}
              <div className="relative h-64 w-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.15),transparent_60%)]" />
              </div>

              <div className="relative p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {w.title}
                  </h3>
                  <span className="rounded-md border border-orange-500/30 bg-orange-500/10 px-2 py-1 text-[11px] text-orange-300">
                    {w.tag}
                  </span>
                </div>
              </div>

              {/* RB accent hoverre */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-0 top-0 h-full w-px bg-orange-500/0 transition group-hover:bg-orange-500/60" />
                <div className="absolute bottom-0 left-0 h-px w-full bg-orange-500/0 transition group-hover:bg-orange-500/60" />
                <div className="absolute right-0 bottom-0 h-3 w-3 translate-x-1 translate-y-1 rounded-full bg-orange-500 opacity-0 transition group-hover:opacity-100 shadow-[0_0_18px_rgba(249,115,22,0.45)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}