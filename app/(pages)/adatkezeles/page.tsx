export default function AdatvedelemPage() {
  return (
    <main className="pt-32 pb-20 flex items-center min-h-screen">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-semibold text-zinc-100">
          Adatkezelési Tájékoztató
        </h1>

        <p className="mt-6 text-sm leading-7 text-zinc-400">
          Jelen adatkezelési tájékoztató ismerteti, hogy az Emberline Tattoo
          milyen személyes adatokat kezel, milyen célból, mennyi ideig, és
          milyen jogok illetik meg az érintetteket az adatok kezelése során.
        </p>

        <div className="mt-10 space-y-10 text-sm leading-7 text-zinc-400">
          
          <section>
            <h2 className="text-lg font-semibold text-zinc-200">
              1. Az adatkezelő adatai
            </h2>
            <ul className="mt-3 space-y-2 list-disc pl-6">
              <li>Szolgáltató neve: Emberline Tattoo</li>
              <li>E-mail: info@emberlinetattoo.hu</li>
              <li>Telefon: +36 30 123 4567</li>
              <li>Székhely / Stúdió: Budapest</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-200">
              2. Milyen adatokat kezelünk?
            </h2>
            <p className="mt-3">
              A szolgáltatás igénybevételéhez és az időpontfoglaláshoz az alábbi
              személyes adatok kezelésére kerülhet sor:
            </p>

            <ul className="mt-3 space-y-2 list-disc pl-6">
              <li>Név</li>
              <li>E-mail cím</li>
              <li>Telefonszám</li>
              <li>Az időpontfoglalással kapcsolatos információk</li>
              <li>A tetoválással kapcsolatos elképzelések rövid leírása</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-200">
              3. Az adatkezelés célja
            </h2>
            <p className="mt-3">
              A személyes adatok kezelése az alábbi célokból történik:
            </p>

            <ul className="mt-3 space-y-2 list-disc pl-6">
              <li>Időpont egyeztetés és foglalás</li>
              <li>Kapcsolattartás a vendéggel</li>
              <li>A szolgáltatás teljesítése</li>
              <li>Adminisztráció és nyilvántartás vezetése</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-200">
              4. Az adatkezelés jogalapja
            </h2>
            <p className="mt-3">
              A személyes adatok kezelése az érintett hozzájárulásán, illetve
              a szolgáltatás nyújtásához szükséges szerződés teljesítésén alapul.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-200">
              5. Az adatok megőrzésének időtartama
            </h2>
            <p className="mt-3">
              A személyes adatokat az adatkezelő a szolgáltatás teljesítéséhez
              szükséges ideig, illetve a kapcsolattartás időtartamáig kezeli.
              Az adatok ezt követően törlésre kerülnek, kivéve ha jogszabály
              hosszabb megőrzési időt ír elő.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-200">
              6. Az érintettek jogai
            </h2>

            <p className="mt-3">
              Az érintett az alábbi jogokkal rendelkezik a személyes adatai
              kezelésével kapcsolatban:
            </p>

            <ul className="mt-3 space-y-2 list-disc pl-6">
              <li>Tájékoztatás kérés az adatkezelésről</li>
              <li>A személyes adatok helyesbítése</li>
              <li>Az adatok törlésének kérése</li>
              <li>Az adatkezelés korlátozása</li>
              <li>Panasz benyújtása a felügyeleti hatóságnál</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-200">
              7. Kapcsolat
            </h2>

            <p className="mt-3">
              Amennyiben kérdése merül fel az adatkezeléssel kapcsolatban,
              kérjük vegye fel velünk a kapcsolatot az alábbi elérhetőségek
              egyikén:
            </p>

            <ul className="mt-3 space-y-2 list-disc pl-6">
              <li>E-mail: info@emberlinetattoo.hu</li>
              <li>Telefon: +36 30 123 4567</li>
            </ul>
          </section>

        </div>
      </div>
    </main>
  );
}