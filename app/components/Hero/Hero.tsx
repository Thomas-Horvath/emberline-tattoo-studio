export default function Hero() {
  return (
    <section className="relative pt-36 h-screen " id="hero">
      <div className="mx-auto max-w-350 px-6 ">


        {/* HERO PANEL (mint a referencián: nem tölti ki az egész viewportot) */}
        <div className="relative h-[78vh] min-h-160 overflow-hidden  bg-zinc-950/40 cut-tr">
          {/* finom háttér texture (ha akarod, maradhat) */}
          <div className="pointer-events-none absolute inset-0 opacity-70" />

          {/* TOP + RIGHT narancs keret (csak az a két oldal) */}
          <div className="pointer-events-none absolute inset-0">
            <div className="z-10 hero-reveal absolute left-0 top-0 h-1 w-full bg-orange-500/70" />
            <div className="z-10 hero-reveal absolute right-0  top-0 h-full w-1 bg-orange-500/70" />
          </div>

          {/* NARANCS “saroklap” (opcionális, ha akarod a jobb felső kis tab-et) */}
          <div className="z-10 pointer-events-none  absolute -top-3 -right-3 h-20 w-20 bg-orange-500/80" />


          {/* KÉP HÁTTÉR, NEM FULL SCREEN — a panelen belül */}
          <div
            className="
              hero-reveal
              absolute inset-0
              bg-[url('/hero.jpg')]
              bg-cover bg-center
              opacity-100
            "
          />


          {/* extra sötétítés a kép fölé, hogy a bal szöveg olvasható legyen */}
          <div className=" hero-reveal pointer-events-none absolute inset-0 bg-zinc-950/55" />

          {/* narancs glow jobbra (a referenciás hangulat) */}
          <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-orange-500/25 blur-3xl" />

          {/* TARTALOM */}
          <div className="h-full relative z-10 grid gap-10 p-10 md:grid-cols-2 md:items-center md:p-14">
            {/* BAL OLDAL */}
            <div>
              <div className="mb-6 text-xs tracking-[0.3em] text-orange-500">
                01 / FŐOLDAL
              </div>

              <h1 className="text-5xl font-bold leading-[0.95] text-zinc-100 md:text-8xl">
                EMBERLINE
                <br />
                TATTOO
              </h1>

              <p className="mt-8 text-2xl text-orange-400">
                Van egy történeted,
                amit nem kell elmondani —
                elég megmutatni.
              </p>

              <p className="mt-6 max-w-lg text-md leading-6 text-zinc-300">
                Az Emberline Tattoo egy alkotói tér,
                ahol az ötletek időtálló formát kapnak a bőrön.
              </p>

              <div className="mt-8 flex flex-wrap  gap-4">
                <a
                  href="#idopont"
                  className="rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-orange-400 transition"
                >
                  Időpontfoglalás
                </a>

                <a
                  href="#munkaim"
                  className="rounded-lg border border-orange-500/40 px-6 py-3 text-sm font-semibold text-orange-300 hover:bg-orange-500/10 transition"
                >
                  Munkáim
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-8 text-sm text-zinc-500" >
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
    </section>
  );
}
