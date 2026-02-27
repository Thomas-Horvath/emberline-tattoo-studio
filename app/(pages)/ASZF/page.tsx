export default function AszfPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-semibold text-zinc-100">
          Általános Szerződési Feltételek
        </h1>

        <div className="mt-10 space-y-10 text-sm leading-7 text-zinc-400">
          <section>
            <h2 className="text-lg font-semibold text-zinc-200">1. Időpontfoglalás</h2>
            <p className="mt-3">
              Időpont egyeztetés előzetes konzultációval történik. A foglalás
              foglaló befizetésével válik véglegessé.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-200">2. Lemondás</h2>
            <p className="mt-3">
              48 órán belüli lemondás esetén a foglaló nem visszatérítendő.
              Időpont módosítás egyeztetés alapján lehetséges.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-200">3. Egészségügyi nyilatkozat</h2>
            <p className="mt-3">
              A vendég köteles tájékoztatni a szolgáltatót minden releváns
              egészségügyi körülményről.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}