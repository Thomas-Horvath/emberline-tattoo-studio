const items = [
  { name: "Mini tetoválás (2–4 cm)", price: "15 000 Ft-tól", note: "Egyszerű vonalas / minimal" },
  { name: "Kicsi (5–8 cm)", price: "25 000 Ft-tól", note: "Finom részletek" },
  { name: "Közepes (10–15 cm)", price: "45 000 Ft-tól", note: "Árnyékolás / blackwork elemek" },
  { name: "Nagy (20+ cm)", price: "90 000 Ft-tól", note: "Konzultáció alapján" },
  { name: "Cover-up / javítás", price: "Egyedi", note: "Régi minta felülmunkálása" },
];

export default function ArlistaPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-350 px-6">
        <div className="mb-10">
          <div className="text-xs tracking-[0.3em] text-orange-500">
            EMBERLINE / ÁRAK
          </div>
          <h1 className="mt-3 text-4xl font-semibold text-zinc-100 md:text-5xl">
            Árlista
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
            Az ár a mérettől, részletességtől és elhelyezéstől függ. Pontos árat konzultáció után adunk.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-zinc-800/70 bg-zinc-950/30">
          {items.map((it, idx) => (
            <div
              key={it.name}
              className={`relative grid gap-2 p-6 md:grid-cols-12 md:items-center ${
                idx !== 0 ? "border-t border-zinc-800/70" : ""
              }`}
            >
              {/* bal: név */}
              <div className="md:col-span-7">
                <div className="text-zinc-100 font-medium">{it.name}</div>
                <div className="mt-1 text-sm text-zinc-500">{it.note}</div>
              </div>

              {/* jobb: ár */}
              <div className="md:col-span-5 md:text-right">
                <div className="text-orange-400 font-semibold text-lg">{it.price}</div>
              </div>

              {/* RB accent csak hoverre (szép, de nem tolakodó) */}
              <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition">
                <div className="absolute right-0 top-0 h-full w-px bg-orange-500/45" />
                <div className="absolute bottom-0 left-0 h-px w-full bg-orange-500/45" />
                <div className="absolute right-0 bottom-0 h-3 w-3 translate-x-1 translate-y-1 rounded-full bg-orange-500 shadow-[0_0_18px_rgba(249,115,22,0.35)]" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-zinc-800/70 bg-zinc-950/30 p-6 text-sm text-zinc-400">
          <div className="text-xs font-semibold tracking-[0.26em] text-zinc-200 uppercase">
            Megjegyzés
          </div>
          <ul className="mt-4 space-y-2">
            <li>• A végleges ár a konzultáció után pontosítható.</li>
            <li>• Bizonyos elhelyezések (kéz, nyak) külön elbírálás.</li>
            <li>• Foglalás foglalóval történik (minta szabály).</li>
          </ul>
        </div>
      </div>
    </main>
  );
}