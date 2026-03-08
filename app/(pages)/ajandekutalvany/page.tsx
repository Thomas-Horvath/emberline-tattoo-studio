import Image from "next/image";
import Link from "next/link";

export default function AjandekutalvanyPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-350 px-6">
        {/* FEJLÉC */}
        <section className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs tracking-[0.3em] text-orange-500">
              AJÁNDÉKUTALVÁNY
            </div>

            <h1 className="mt-4 text-4xl font-semibold text-zinc-100 md:text-5xl">
              Ajándékozz valami személyeset.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 md:text-base">
              Az Emberline Tattoo ajándékutalvány jó választás, ha valami igazán
              egyedit szeretnél adni. Felhasználható tetoválásra, konzultációra
              vagy egyéni tervezésre is.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/kapcsolat"
                className="rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-orange-400"
              >
                Érdekel az utalvány
              </Link>

              <a
                href="#reszletek"
                className="rounded-lg border border-orange-500/40 px-6 py-3 text-sm font-semibold text-orange-300 transition hover:bg-orange-500/10"
              >
                Részletek
              </a>
            </div>
          </div>


          {/* AJÁNDÉKUTALVÁNY MOCKUP */}
          <div className="relative">
            <GiftVoucher />
          </div>
        </section>

        {/* RÉSZLETEK */}
        <section id="reszletek" className="mt-24 grid gap-6 md:grid-cols-3">
          <InfoCard
            title="Egyedi összeg"
            text="Az utalvány tetszőleges összegben kérhető, így könnyen személyre szabható."
          />
          <InfoCard
            title="Szép megjelenés"
            text="Nyomtatható vagy digitális formában is átadható, esztétikus kivitelben."
          />
          <InfoCard
            title="Rugalmas felhasználás"
            text="Tetoválásra, konzultációra vagy későbbi egyéni munkára is beváltható."
          />
        </section>

        {/* HOGYAN MŰKÖDIK */}
        <section className="mt-24">
          <div className="mb-8">
            <div className="text-xs tracking-[0.3em] text-orange-500">
              HOGYAN MŰKÖDIK
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-100">
              Ajándékutalvány vásárlás 3 lépésben
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <StepCard
              number="01"
              title="Kapcsolatfelvétel"
              text="Írj üzenetet, és egyeztetjük az összeget, valamint a formátumot."
            />
            <StepCard
              number="02"
              title="Elkészítés"
              text="Az utalvány elkészül digitális vagy nyomtatható változatban."
            />
            <StepCard
              number="03"
              title="Átadás"
              text="Az ajándékozott később időpontot foglalhat, és beválthatja az utalványt."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="relative mt-24 overflow-hidden border border-zinc-800/70 bg-zinc-950/30 p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/15 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-100 md:text-3xl">
                Kérj ajándékutalványt személyre szabva
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
                Ha szeretnéd, elkészítem az utalványt egyedi névvel, üzenettel vagy
                meghatározott összeggel.
              </p>
            </div>

            <Link
              href="/kapcsolat"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-orange-400"
            >
              Kapcsolatfelvétel
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function GiftVoucher() {
  return (
    <div className="relative mx-auto max-w-xl">
      {/* külső glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative overflow-hidden border border-zinc-800/70 bg-zinc-950 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
        {/* narancs accent */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute hero-reveal-rev right-0 top-0 h-full w-px bg-orange-500/50" />
          <div className="absolute hero-reveal bottom-0 left-0 h-px w-full bg-orange-500/50" />
          <div className="absolute bottom-0 right-0 h-3 w-3 translate-x-1 translate-y-1 rounded-full bg-orange-500 shadow-[0_0_18px_rgba(249,115,22,0.45)]" />
        </div>

        {/* díszítő háttér */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.14),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_55%,rgba(249,115,22,0.06)_100%)]" />

        <div className="relative z-10 grid min-h-80 md:grid-cols-[1.2fr_0.8fr]">
          {/* bal */}
          <div className="flex flex-col justify-between p-8 md:p-10">
            <div>
              <div className="text-xs tracking-[0.28em] text-orange-500">
                EMBERLINE TATTOO
              </div>

              <div className="mt-6">
                <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Ajándékutalvány
                </div>
                <h2 className="mt-2 text-3xl font-semibold text-zinc-100 md:text-4xl">
                  Gift Voucher
                </h2>
              </div>

              <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-400">
                Felhasználható egyedi tetoválásra, konzultációra vagy
                személyre szabott tervezésre.
              </p>
            </div>

            <div className="mt-10 grid gap-4 text-sm text-zinc-300 md:grid-cols-2">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Érték
                </div>
                <div className="mt-2 text-lg font-semibold text-orange-400">
                  30 000 Ft
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Kód
                </div>
                <div className="mt-2 text-lg font-semibold text-zinc-100">
                  EMB-2026-014
                </div>
              </div>
            </div>
          </div>

          {/* jobb */}
          <div className="relative flex flex-col items-center justify-center border-l border-zinc-800/70 p-8">
            <Image
              src="/logo.png"
              alt="Emberline Tattoo logo"
              width={120}
              height={120}
              className="h-24 w-24 object-contain opacity-95"
            />

            <div className="mt-6 text-center">
              <div className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                Ajándékozott
              </div>
              <div className="mt-2 text-lg font-medium text-zinc-100">
                Név helye
              </div>
            </div>

            <div className="mt-8 text-center text-xs leading-6 text-zinc-500">
              Érvényes a kiállítástól számított 6 hónapig.
              <br />
              Előzetes időpont-egyeztetés szükséges.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="relative overflow-hidden border border-zinc-800/70 bg-zinc-950/30 p-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute hero-reveal-rev right-0 top-0 h-full w-px bg-orange-500/45" />
        <div className="absolute hero-reveal bottom-0 left-0 h-px w-full bg-orange-500/45" />
        <div className="absolute bottom-0 right-0 h-3 w-3 translate-x-1 translate-y-1 rounded-full bg-orange-500 shadow-[0_0_18px_rgba(249,115,22,0.35)]" />
      </div>

      <h3 className="relative text-lg font-semibold text-zinc-100">{title}</h3>
      <p className="relative mt-4 text-sm leading-7 text-zinc-400">{text}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border border-zinc-800/70 bg-zinc-950/30 p-6">
      <div className="text-xs tracking-[0.25em] text-orange-500">{number}</div>
      <h3 className="mt-4 text-xl font-semibold text-zinc-100">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-zinc-400">{text}</p>
    </div>
  );
}