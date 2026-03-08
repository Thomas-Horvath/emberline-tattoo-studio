import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " ETS - Információk",
};


export default function InformaciokPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-350 px-6">
        <div className="mb-12">
          <div className="text-xs tracking-[0.3em] text-orange-500">
            ÁLTALÁNOS INFORMÁCIÓK
          </div>
          <h1 className="mt-4 text-4xl font-semibold text-zinc-100 md:text-5xl">
            Tudnivalók tetoválás előtt és után
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-400 md:text-base">
            Itt összegyűjtöttem a legfontosabb tudnivalókat a különböző
            tetoválásstílusokról, a folyamatról, valamint az utókezelésről.
          </p>
        </div>

        <div className="space-y-12">
          <InfoSection
            title="Tetoválás típusok"
            content={[
              "A fine line tetoválások finom, vékony vonalakkal dolgoznak, elegáns és visszafogott megjelenést adnak.",
              "A blackwork erősebb fekete felületeket, markánsabb formákat és kontrasztosabb kompozíciókat használ.",
              "Az illusztratív stílus történetmesélőbb, részletgazdagabb, gyakran grafikai vagy művészibb hangulattal.",
              "A geometrikus tetoválások szabályos formákra, ritmusra és szerkezetre épülnek.",
            ]}
          />

          <InfoSection
            title="A tetoválás folyamata"
            content={[
              "A folyamat általában konzultációval indul, ahol átbeszéljük az elképzelést, a stílust, a méretet és az elhelyezést.",
              "Ezután következik a tervezés, ahol a minta a test arányaihoz és az egyéni igényekhez igazodik.",
              "A tetoválás napján a bőrfelület előkészítése után kerül fel a stencil, majd megkezdődik a kivitelezés.",
            ]}
          />

          <InfoSection
            title="Utókezelés"
            content={[
              "A friss tetoválást tisztán kell tartani, és az első napokban kerülni kell az irritációt.",
              "Fontos a megfelelő utóápoló krém használata, valamint a napozás, szauna és áztatás kerülése a gyógyulási idő alatt.",
              "A teljes gyógyulási idő egyénenként eltérhet, de általában több hét szükséges hozzá.",
            ]}
          />

          <InfoSection
            title="Mikor nem ajánlott tetoválni?"
            content={[
              "Láz, betegség, bőrgyulladás vagy legyengült állapot esetén érdemes elhalasztani az időpontot.",
              "Alkoholfogyasztás vagy bizonyos gyógyszerek szedése szintén befolyásolhatja a folyamatot.",
              "Ha bármilyen egészségügyi kérdés merül fel, érdemes előre jelezni a konzultáció során.",
            ]}
          />

          <InfoSection
            title="Fontos tudni"
            content={[
              "A tetoválás nemcsak esztétikai döntés, hanem hosszú távú elköteleződés is.",
              "Érdemes időt szánni a stílus, az elhelyezés és a jelentés átgondolására.",
              "A cél minden esetben egy olyan munka, ami később is ugyanúgy működik és jelent valamit.",
            ]}
          />
        </div>
      </div>
    </main>
  );
}

function InfoSection({
  title,
  content,
}: {
  title: string;
  content: string[];
}) {
  return (
    <section className="relative overflow-hidden border border-zinc-800/70 bg-zinc-950/30 p-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-px bg-orange-500/45" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-orange-500/45" />
        <div className="absolute bottom-0 right-0 h-3 w-3 translate-x-1 translate-y-1 rounded-full bg-orange-500 shadow-[0_0_18px_rgba(249,115,22,0.35)]" />
      </div>

      <h2 className="relative text-2xl font-semibold text-zinc-100">{title}</h2>

      <div className="relative mt-6 space-y-4">
        {content.map((paragraph, index) => (
          <p key={index} className="text-sm leading-7 text-zinc-400 md:text-base">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}