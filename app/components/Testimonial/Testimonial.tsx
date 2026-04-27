"use client";

import { useEffect, useState, useMemo } from "react";
import { reviews } from "@/Data/data.js";
import { FaQuoteRight, FaStar } from "react-icons/fa";

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
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <div className="text-xs tracking-[0.3em] text-orange-500">
                            # VÉLEMÉNYEK
                        </div>
                        <h2 className="mt-3 text-3xl font-semibold md:text-4xl text-zinc-100">
                            Amit a vendégek mondanak
                        </h2>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={prev}
                            className="inline-flex items-center justify-center
                                       h-10 w-10
                                       bg-zinc-950/40 border border-zinc-800/70 hover:border-orange-500/40
                                       hover:text-orange-400
                                       cursor-pointer transition
                                       text-zinc-300"
                            aria-label="Előző vélemény"
                        >
                            ←
                        </button>
                        <button
                            onClick={next}
                            className="inline-flex items-center justify-center
                                       h-10 w-10
                                       bg-zinc-950/40 border border-zinc-800/70 hover:border-orange-500/40
                                       hover:text-orange-400
                                       cursor-pointer transition
                                       text-zinc-300"
                            aria-label="Következő vélemény"
                        >
                            →
                        </button>
                    </div>
                </div>




                <div className="grid md:grid-cols-3 gap-6">
                    {visibleReviews.map((review, index) => (
                        <article
                            key={`${review.name}-${startIndex}-${index}`}
                            className="relative overflow-hidden p-6 min-h-55 border border-zinc-800/70 bg-zinc-950/70"
                        >
                            {/* RB accent */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute right-0 top-0 h-full w-px bg-orange-500/45 hero-reveal-rev" />
                                <div className="absolute bottom-0 left-0 h-px w-full bg-orange-500/45 hero-reveal" />
                                <div className="absolute bottom-0 right-0
                                                h-3 rounded-full w-3
                                                bg-orange-500 shadow-[0_0_18px_rgba(249,115,22,0.35)]
                                                translate-x-1 translate-y-1" />
                            </div>



                            <div className="absolute
                                            h-28 rounded-full w-28
                                            bg-orange-500/20
                                            blur-3xl
                                            pointer-events-none
                                            -right-10 -top-10" />

                            <div className="relative">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-yellow-500 flex text-2xl gap-0.5">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <div className="text-3xl leading-none text-orange-500/80"><FaQuoteRight /></div>
                                </div>


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
                <div className="flex items-center justify-center mt-6 gap-3">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setStartIndex(index)}
                            className={`h-3.5 rounded-full w-3.5
                                        cursor-pointer transition
                                        ${startIndex === index
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