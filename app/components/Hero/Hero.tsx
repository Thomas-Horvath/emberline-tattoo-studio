import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-36 h-screen" id="hero">

      <div className="mx-auto max-w-350 px-6">
        {/* KÜLSŐ WRAPPER — itt lóghat ki a glow */}
        <div className="relative">

          {/* GLOW — KI TUD LÓGNI */}
          <div
            className="absolute z-0
                       h-160 rounded-full w-180
                       bg-orange-500/70
                       blur-[160px]
                       pointer-events-none
                       -right-20 -top-20"
          />

          {/* HERO PANEL (mint a referencián: nem tölti ki az egész viewportot) */}
          <div className="relative overflow-hidden h-[78vh] min-h-160 bg-zinc-950/40 cut-tr">
            {/* finom háttér texture (ha akarod, maradhat) */}
            <div className="absolute inset-0 pointer-events-none opacity-70" />

            {/* TOP + RIGHT narancs keret (csak az a két oldal) */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="z-10 absolute left-0 top-0 h-0.5 w-full bg-orange-500/70 hero-reveal" />
              <div className="z-10 absolute right-0 top-0 h-full w-0.5 bg-orange-500/70 hero-reveal" />
            </div>

            {/* NARANCS “saroklap” (opcionális, ha akarod a jobb felső kis tab-et) */}
            <div className="z-10 absolute h-19 w-19 bg-orange-500/90 pointer-events-none -top-3 -right-3" />


            {/* KÉP HÁTTÉR, NEM FULL SCREEN — a panelen belül */}
            <div
              className="absolute inset-0
                         bg-[url('/hero.jpg')] bg-center bg-cover
                         hero-reveal opacity-100"
            />


            {/* extra sötétítés a kép fölé, hogy a bal szöveg olvasható legyen */}
            <div className="absolute inset-0 bg-zinc-950/55 pointer-events-none hero-reveal" />

            {/* narancs glow jobbra (a referenciás hangulat) */}
            <div className="absolute
                            h-96 rounded-full w-96
                            bg-orange-500/40
                            blur-3xl
                            pointer-events-none
                            -right-32 -top-32" />







            {/* TARTALOM */}
            <div className="grid md:grid-cols-2 md:items-center relative z-10 gap-10 h-full md:p-14 p-10">



              {/* BAL OLDAL */}
              <div>
                <div className="mb-6 text-xs tracking-[0.3em] text-orange-500">
                  01 / FŐOLDAL
                </div>

                <h1 className="text-5xl font-bold leading-[0.95] md:text-8xl text-zinc-100">
                  EMBERLINE
                  <br />
                  TATTOO
                </h1>

                <p className="mt-8 text-2xl text-orange-400">
                  Van egy történeted,
                  amit nem kell elmondani —
                  elég megmutatni.
                </p>

                <p className="mt-6 max-w-lg leading-6 text-md text-zinc-300">
                  Az Emberline Tattoo egy alkotói tér,
                  ahol az ötletek időtálló formát kapnak a bőrön.
                </p>

                <div className="flex flex-wrap mt-8 gap-4">
                  <Link
                    href="kapcsolat"
                    className="px-6 py-3 rounded-lg
                               font-semibold text-sm
                               bg-orange-500 hover:bg-orange-400
                               transition
                               text-zinc-950"
                  >
                    Időpontfoglalás
                  </Link>

                  <Link
                    href="munkaim"
                    className="px-6 py-3 rounded-lg
                               font-semibold text-sm
                               border border-orange-500/40 hover:bg-orange-500/10 text-orange-300
                               transition"
                  >
                    Munkáim
                  </Link>
                </div>

                <div className="flex flex-wrap mt-8 gap-8 text-sm text-zinc-500" >
                  <span>● Egyedi tervek</span>
                  <span>● Tiszta stúdió</span>
                  <span>● Utóápolási útmutató</span>
                </div>
              </div>

              {/* JOBB OLDAL: üres (a kép “él”), vagy ide tehetsz bármit */}
              <div className="hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
