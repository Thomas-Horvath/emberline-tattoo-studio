"use client";

import Image from "next/image";
import { useState } from "react";
import { WorkCardSkeleton } from "./WordCardskeleton";

type Work = {
  id: number;
  title: string;
  src: string;
  tag: string;
};



export default function WorkCards({ w } : { w: Work}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="group relative overflow-hidden border border-zinc-800/70 bg-zinc-950/40">
      {!loaded && <WorkCardSkeleton />}

      <div className={loaded ? "opacity-100 transition duration-500" : "opacity-0"}>
        <div className="relative aspect-square w-full">
          <Image
            src={w.src}
            alt={w.title}
            fill
            className="object-cover"
            onLoadingComplete={() => { setTimeout(() => setLoaded(true), 700); }}
          />
        </div>

        <div className="relative p-5">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-sm font-semibold text-zinc-100">
              {w.title}
            </h3>

            <span className="rounded-md border border-orange-500/30 bg-orange-500/10 px-2 py-1 text-[11px] text-orange-300">
              {w.tag}
            </span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-px bg-orange-500/0 transition group-hover:bg-orange-500/60 hero-reveal-rev" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-orange-500/0 transition group-hover:bg-orange-500/60 hero-reveal" />
        <div className="absolute right-0 bottom-0 h-3 w-3 translate-x-1 translate-y-1 rounded-full bg-orange-500/60 opacity-0 transition group-hover:opacity-100 shadow-[0_0_18px_rgba(249,115,22,0.45)]" />
      </div>
    </div>
  );
}

