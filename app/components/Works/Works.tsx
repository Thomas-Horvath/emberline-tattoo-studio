import Image from "next/image";
import Link from "next/link";
import {works} from "@/Data/data"


export default function HomeGallery() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-350 px-6">

        {/* HEADER */}
        <div className="mb-10 flex items-center justify-between">
          <div className="text-xs tracking-[0.3em] text-orange-500 uppercase">
            # néhány munkám
          </div>

          <Link
            href="/munkaim"
            className="text-sm tracking-wider uppercase text-zinc-400 hover:text-orange-400 transition"
          >
            Összes munka →
          </Link>
        </div>

        {/* MOSAIC GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[250px]">

          {/* nagy bal felső */}
          <GalleryItem work={works[0]} className="col-span-2 row-span-2" />

          <GalleryItem work={works[1]} />
          <GalleryItem work={works[2]} />

          <GalleryItem work={works[3]} className="row-span-2" />
          <GalleryItem work={works[4]} />


          <GalleryItem work={works[5]} className="col-span-2" />
          <GalleryItem work={works[6]} />

        </div>
      </div>
    </section>
  );
}

function GalleryItem({
  work,
  className = "",
}: {
  work: { title: string; src: string };
  className?: string;
}) {
  return (
    <article
      className={`group relative overflow-hidden ${className}`}
    >
      {/* KÉP */}
      <Image
        src={work.src}
        alt={work.title}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
      />

      {/* SÖTÉT OVERLAY */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition duration-300" />

      {/* CÍM */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-semibold text-orange-500 opacity-0 group-hover:opacity-100 transition duration-300 tracking-wider">
          {work.title}
        </span>
      </div>
    </article>
  );
}