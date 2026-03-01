export default function AdatvedelemPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-semibold text-zinc-100">
          Adatkezelési Tájékoztató
        </h1>

        <div className="mt-10 space-y-8 text-sm leading-7 text-zinc-400">
          <section>
            <h2 className="text-lg font-semibold text-zinc-200">
              1. Milyen adatokat kezelünk?
            </h2>
            <ul className="mt-3 space-y-2 list-disc pl-6">
              <li>Név</li>
              <li>E-mail cím</li>
              <li>Telefonszám</li>
              <li>Foglalási adatok</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-200">
              2. Adatkezelés célja
            </h2>
            <p className="mt-3">
              Időpont egyeztetés, kapcsolattartás és szolgáltatás teljesítése.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}