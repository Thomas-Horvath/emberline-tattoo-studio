import type { Metadata } from "next";

export const metadata: Metadata = {
    title: " ETS - Rólam",
    description: "Tattoo művész vagyok, aki a testet vászonként használja, hogy egyedi és személyes történeteket meséljen el. Munkáim sötét tónusokkal, tiszta kompozíciókkal és precíz kivitelezéssel jellemezhetők, amelyek a megrendelők egyéni stílusát és életútját tükrözik.",
};


import Image from "next/image";
import Link from "next/link";

export default function RolamPage() {
    return (
        <main className="pt-32 pb-20">
            <div className="mx-auto max-w-350 px-6">


                {/* HEADER */}
                <section className="mt-4 grid gap-12 md:grid-cols-2 ">
                    <div>

                        <h1 className=" text-4xl md:text-5xl font-semibold text-zinc-100">
                            A tetoválás számomra nem csak munka,
                            hanem történetmesélés.
                        </h1>

                        <p className="mt-6 text-zinc-400 leading-7">
                            Több mint 8 éve foglalkozom tetoválással. Az Emberline Tattoo
                            számomra egy olyan alkotói tér, ahol az elképzelésekből
                            időtálló minták születnek. A munkáim főként blackwork,
                            fine line és illusztratív stílusban készülnek.
                        </p>

                        <p className="mt-4 text-zinc-400 leading-7">
                            Hiszek abban, hogy egy jó tetoválás nem csak jól néz ki,
                            hanem jelentése is van. Ezért minden munka előtt időt
                            szánok arra, hogy megismerjem az ötlet mögötti történetet.
                        </p>
                    </div>

                    {/* kép */}
                    <div className="relative h-105 w-full overflow-hidden">
                        <Image
                            src="/artist/1.jpg"
                            alt="Tetováló művész"
                            fill
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent" />
                    </div>
                </section>


                {/* STORY */}
                <section className="mt-20 max-w-350">
                    <h2 className="text-2xl font-semibold text-zinc-100">
                        Hogyan kezdődött
                    </h2>

                    <p className="mt-5 text-zinc-400 leading-7">
                        A rajz mindig is része volt az életemnek. Már fiatalon
                        elkezdtem különböző grafikai stílusokkal kísérletezni,
                        majd ez vezetett el a tetoválás világához.
                    </p>

                    <p className="mt-4 text-zinc-400 leading-7">
                        Az első években különböző stúdiókban tanultam és
                        fejlesztettem a technikámat. Azóta több száz tetoválást
                        készítettem, és minden munka új inspirációt ad.
                    </p>

                    <p className="mt-4 text-zinc-400 leading-7">
                        A célom mindig ugyanaz: olyan mintát készíteni,
                        amely hosszú évek múlva is ugyanúgy jelent valamit
                        annak, aki viseli.
                    </p>
                </section>


                {/* GALLERY */}
                <section className="mt-20 grid gap-6 md:grid-cols-3">
                    <div className="relative h-80 overflow-hidden">
                        <Image
                            src="/artist/2.jpg"
                            alt="Tetováló munka közben"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="relative h-80 overflow-hidden">
                        <Image
                            src="/artist/3.jpg"
                            alt="Tetováló stúdió"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="relative h-80 overflow-hidden">
                        <Image
                            src="/artist/4.jpg"
                            alt="Tetováló művész"
                            fill
                            className="object-cover"
                        />
                    </div>
                </section>


                {/* CTA */}
                <section className="mt-20 border border-zinc-800/70 bg-zinc-950/30 p-10 text-center relative overflow-hidden">

                    <div className="absolute -top-16 right-0 h-48 w-48 rounded-full bg-orange-500/15 blur-3xl" />

                    <h2 className="text-3xl font-semibold text-zinc-100">
                        Van egy ötleted, amit meg szeretnél valósítani?
                    </h2>

                    <p className="mt-4 text-zinc-400">
                        Írj, és beszéljük át a részleteket.
                    </p>

                    <Link
                        href="/kapcsolat"
                        className="inline-block mt-6 px-6 py-3 rounded-lg bg-orange-500 text-zinc-950 font-semibold hover:bg-orange-400 transition"
                    >
                        Időpontfoglalás
                    </Link>

                </section>

            </div>
        </main>
    );
}