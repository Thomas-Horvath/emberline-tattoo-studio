import Image from "next/image";
import { styles } from "@/Data/data.js";



export default function SignatureStyles() {
  return (
    <section id="stilusok" className="py-20">
      <div className="mx-auto max-w-350 px-6">
        <div className="mb-8 flex items-center justify-between">
          <div className="text-xs tracking-[0.3em] text-orange-500">
            # SIGNATURE STÍLUSOK
          </div>


        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {styles.map((s) => (
            <StyleCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StyleCard({
  title,
  desc,
  tags,
  img,
}: {
  title: string;
  desc: string;
  tags: string[];
  img: string;
}) {
  return (
    <article
      className="
        group relative overflow-hidden 
        border border-zinc-800/70 bg-zinc-950/30
        hover:bg-zinc-950/45 transition
      "
    >
      {/* Kép */}
      <div className="relative h-48 w-full">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* sötét overlay + finom vignette */}
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/85 via-zinc-950/35 to-zinc-950/20" />
      </div>

      {/* Tartalom */}
      <div className="relative p-6">
        <h3 className="text-2xl font-semibold text-zinc-100">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{desc}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="
                rounded-md border border-zinc-700/60
                bg-zinc-950/30 px-3 py-1
                text-xs text-zinc-300
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Narancs kiemelő keret + pötty (mint a referencián) */}
      <AccentBorder />
    </article>
  );
}

function AccentBorder() {
  // alap: hoverre jelenjen meg (ha mindig látszódjon, vedd ki az opacity/group-hover részt)
  const line =
    "absolute bg-orange-500/80 transition";
  const dot =
    "absolute h-3 w-3 rounded-full bg-orange-500/60  transition " +
    "shadow-[0_0_18px_rgba(249,115,22,0.55)]";

  return (
    <div className="pointer-events-none absolute inset-0">
      <>
        <div className={`${line} hero-reveal-rev right-0 top-0 h-full w-px`} />
        <div className={`${line} bottom-0 hero-reveal left-0 h-px w-full`} />
        <div className={`${dot} right-0 bottom-0 translate-x-1 translate-y-1`} />
      </>
    </div>
  );
}
