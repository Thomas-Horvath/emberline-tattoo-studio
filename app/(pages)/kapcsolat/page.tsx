import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " ETS - Kapcsolat",
};



export default function KapcsolatPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-350 px-6">
        <div className="mb-10">
          <div className="text-xs tracking-[0.3em] text-orange-500">
            EMBERLINE / KAPCSOLAT
          </div>
          <h1 className="mt-3 text-4xl font-semibold text-zinc-100 md:text-5xl">
            Kapcsolat
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
            Írj üzenetet vagy kérj időpontot. Ha kényelmesebb, Instagramon is elérsz.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Bal: adatok */}
          <section className="lg:col-span-5">
            <div className="rounded-xl border border-zinc-800/70 bg-zinc-950/30 p-6">
              <h2 className="text-xs font-semibold tracking-[0.26em] text-zinc-200 uppercase">
                Elérhetőség
              </h2>

              <div className="mt-5 space-y-4 text-sm">
                <Row label="Telefon">
                  <a
                    href="tel:+36301234567"
                    className="text-zinc-200 hover:text-orange-400 transition"
                  >
                    +36 30 123 4567
                  </a>
                </Row>

                <Row label="E-mail">
                  <a
                    href="mailto:info@emberlinetattoo.hu"
                    className="text-zinc-200 hover:text-orange-400 transition"
                  >
                    info@emberlinetattoo.hu
                  </a>
                </Row>

                <Row label="Instagram">
                  <a
                    href="https://www.instagram.com"
                    className="text-zinc-200 hover:text-orange-400 transition"
                    target="_blank"
                  >
                    @emberline.tattoo
                  </a>
                </Row>

                <div className="mt-6 border-t border-zinc-800/70 pt-5">
                  <div className="text-xs tracking-[0.22em] text-zinc-400">
                    NYITVATARTÁS
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-zinc-300">Hétfő – Vasárnap</span>
                    <span className="text-zinc-400">12:00 – 20:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-6 h-56 overflow-hidden rounded-xl border border-zinc-800/70 bg-zinc-950/30">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.590502980424!2d19.03539259154275!3d47.49789022117672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc3c504206db%3A0xd744a89933a55784!2zMCBraWxvbcOpdGVya8WR!5e0!3m2!1shu!2shu!4v1772978485131!5m2!1shu!2shu" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </section>



          {/* Jobb: űrlap */}
          <section className="lg:col-span-7 ">
            <div className="relative flex flex-col items-center justify-between h-full overflow-hidden rounded-xl border border-zinc-800/70 bg-zinc-950/30 p-6">

              <h2 className="relative w-full text-xs font-semibold tracking-[0.26em] text-zinc-200 uppercase">
                Üzenetküldés
              </h2>

              <form className="relative mt-6 grid gap-4 w-full">
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Név" name="name" placeholder="Teljes név" />
                  <Field label="E-mail" name="email" placeholder="email@cim.hu" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Stílus" name="style" placeholder="Fine line / Blackwork..." />
                  <Field label="Elhelyezés" name="placement" placeholder="Alkar / váll / boka..." />
                </div>

                <Field
                  label="Üzenet"
                  name="message"
                  placeholder="Írd le röviden az ötleted (méret, stílus, referencia, időpont)..."
                  textarea
                />

                <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    className=" cursor-pointer rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-orange-400 transition"
                  >
                    Küldés
                  </button>

                  <a
                    href="https://www.instagram.com"
                    className="text-sm text-zinc-400 hover:text-orange-400 transition"
                    target="_blank"
                  >
                    Inkább DM-ben? Instagram →
                  </a>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}



function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-xs tracking-[0.22em] text-zinc-400 uppercase">
        {label}
      </span>
      <span className="text-right">{children}</span>
    </div>
  );
}




function Field({
  label,
  name,
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  const base =
    "w-full rounded-lg border border-zinc-800/70 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-orange-500/50 transition";

  return (
    <label className="grid gap-2">
      <span className="text-xs tracking-[0.22em] text-zinc-400 uppercase">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={5}
          placeholder={placeholder}
          className={base}
        />
      ) : (
        <input name={name} placeholder={placeholder} className={base} />
      )}
    </label>
  );
}