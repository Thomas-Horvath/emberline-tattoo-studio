"use client";

import { useEffect, useState, useMemo } from "react";

const reviews = [
    {
        name: "Anna",
        text: "Nagyon nyugodt légkör, precíz munka és végig éreztem, hogy figyelembe vannak véve az elképzeléseim.",
    },
    {
        name: "Máté",
        text: "Pont azt a letisztult, sötétebb hangulatot kaptam, amit szerettem volna. A végeredmény még jobb lett, mint vártam.",
    },
    {
        name: "Dóra",
        text: "A konzultációtól a kész tetoválásig végig profi volt minden. Igényes, átgondolt, nagyon korrekt élmény.",
    },
    {
        name: "Bence",
        text: "Nem sablonos hozzáállás, hanem valódi figyelem. Ritka az ilyen nyugodt, mégis magabiztos stílus.",
    },
    {
        name: "Eszter",
        role: "Vendég",
        text: "Tiszta, rendezett stúdió, jó kommunikáció, és nagyon szép lett a munka.",
    },
    {
        name: "Tamás",
        role: "Vendég",
        text: "A tervezési folyamat is nagyon korrekt volt. Nem csak gyorsan elkészült, hanem átgondolt lett.",
    },
];
const VISIBLE_COUNT = 3;

export default function Testimonial() {
    const [startIndex, setStartIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 3500);

        return () => clearInterval(interval);
    }, [startIndex]);



    const visibleReviews = useMemo(() => {
        return Array.from({ length: VISIBLE_COUNT }, (_, i) => {
            return reviews[(startIndex + i) % reviews.length];
        });
    }, [startIndex]);

    const next = () => {
        setStartIndex((prev) => (prev + 1) % reviews.length);
    };

    const prev = () => {
        setStartIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };


    return (
        <section id="velemenyek" className="py-40">
            <div className="mx-auto max-w-350 px-6">
                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <div className="text-xs tracking-[0.3em] text-orange-500">
                           # VÉLEMÉNYEK
                        </div>
                        <h2 className="mt-3 text-3xl font-semibold text-zinc-100 md:text-4xl">
                            Amit a vendégek mondanak
                        </h2>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={prev}
                            className="cursor-pointer inline-flex h-10 w-10 items-center justify-center border border-zinc-800/70 bg-zinc-950/40 text-zinc-300 transition hover:border-orange-500/40 hover:text-orange-400"
                            aria-label="Előző vélemény"
                        >
                            ←
                        </button>
                        <button
                            onClick={next}
                            className="cursor-pointer inline-flex h-10 w-10 items-center justify-center border border-zinc-800/70 bg-zinc-950/40 text-zinc-300 transition hover:border-orange-500/40 hover:text-orange-400"
                            aria-label="Következő vélemény"
                        >
                            →
                        </button>
                    </div>
                </div>




                <div className="grid gap-6 md:grid-cols-3">
                    {visibleReviews.map((review, index) => (
                        <article
                            key={`${review.name}-${startIndex}-${index}`}
                            className="relative overflow-hidden border border-zinc-800/70 bg-zinc-950/70 p-6 min-h-55"
                        >
                            {/* RB accent */}
                            <div className="pointer-events-none absolute inset-0">
                                <div className="absolute hero-reveal-rev right-0 top-0 h-full w-px bg-orange-500/45" />
                                <div className="absolute hero-reveal bottom-0 left-0 h-px w-full bg-orange-500/45" />
                                <div className="absolute right-0 bottom-0 h-3 w-3 translate-x-1 translate-y-1 rounded-full bg-orange-500 shadow-[0_0_18px_rgba(249,115,22,0.35)]" />
                            </div>

                            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-500/20 blur-3xl" />

                            <div className="relative">
                                <div className="text-6xl leading-none text-orange-500/60">“</div>

                                <p className="mt-2 text-sm leading-7 text-zinc-300">
                                    {review.text}
                                </p>

                                <div className="mt-6">
                                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-100">
                                        {review.name}
                                    </div>
                                    <div className="mt-2 text-xs uppercase tracking-[0.22em] text-zinc-500">
                                        {review.role ?? "Vendég"}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>



                {/* dots */}
                <div className="mt-6 flex items-center justify-center gap-3">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setStartIndex(index)}
                            className={`h-3.5 w-3.5 rounded-full transition cursor-pointer ${startIndex === index
                                    ? "bg-orange-500"
                                    : "bg-zinc-700 hover:bg-zinc-500"
                                }`}
                            aria-label={`Ugrás a ${index + 1}. véleményre`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}