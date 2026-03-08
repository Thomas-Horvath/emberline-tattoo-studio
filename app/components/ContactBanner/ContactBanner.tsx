import Link from "next/link";

export default function ContactBanner() {
  return (
    <section className="pt-40">
      <div className="mx-auto w-full ">

        <div className="relative overflow-hidden border-t border-b border-zinc-800/70 bg-zinc-950/75 px-8 py-14 md:px-14">
          {/* glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-orange-500/15 blur-3xl" />

          {/* top line */}
          <div className="pointer-events-none hero-reveal absolute left-0 top-0 h-px w-full bg-orange-500/50" />


          <div className="relative text-center z-10  max-w-350 m-auto">

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-zinc-100 md:text-5xl">
              Van egy ötleted, amit ideje formába önteni?
            </h2>

            <p className="mt-6 max-w-3xl m-auto text-sm leading-7 text-zinc-400 md:text-base">
              Írj, meséld el az elképzelésed, és nézzük meg együtt, hogyan lehet
              belőle egy időtálló munka. Konzultáció, tervezés, kivitelezés —
              letisztultan, személyre szabva.
            </p>

          <Link
            href="/kapcsolat"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-orange-400"
          >
            Kapcsolatfelvétel →
          </Link>
          </div>





        </div>
      </div>
    </section>
  );
}