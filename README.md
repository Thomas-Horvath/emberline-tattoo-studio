# Emberline Tattoo Studio

Az `Emberline Tattoo Studio` egy Next.js alapú, vizuálisan erős bemutatkozó és kapcsolatfelvételi weboldal egy tetoválóstúdió számára. A projekt célja, hogy letisztult, sötét hangulatú, prémium megjelenésben mutassa be a stúdió stílusát, munkáit, árait és a kapcsolódó információkat.

## Projekt áttekintése

A weboldal több statikus aloldalból és újrafelhasználható komponensekből áll. A tartalom egy része központi adatfájlból érkezik, így a navigáció, a galériaelemek, az árlista, a stílusblokkok és a vendégvélemények könnyen frissíthetők.

Főbb jellemzők:

- Next.js App Router alapú felépítés
- React 19 + TypeScript használat
- Tailwind CSS v4 alapú egyedi vizuális rendszer
- Reszponzív navigáció desktop és mobil nézettel
- Galéria, árlista, információs oldalak és kapcsolat szekció
- Statikus SEO metaadatok több aloldalon
- Kliensoldali interakciók, például hamburger menü és vélemény slider

## Technológiai stack

- `Next.js 16.1.6`
- `React 19.2.3`
- `TypeScript 5`
- `Tailwind CSS 4`
- `react-icons`
- `ESLint 9`

## Könyvtárstruktúra

```text
app/
  (pages)/
    rolam/
    munkaim/
    arak/
    ajandekutalvany/
    informaciok/
    kapcsolat/
    adatkezeles/
    ASZF/
  components/
    Hero/
    Styles/
    Works/
    ContactBanner/
    Testimonial/
    Footer/
  globals.css
  layout.tsx
  page.tsx
Data/
  data.js
public/
  hero.webp
  bg.webp
  gallery/
  work/
  artist/
  logo.png
  logo1.png
```

## Oldalak és funkciók

### Főoldal

A főoldal az alábbi szekciókból áll:

- hero blokk fő üzenettel és CTA gombokkal
- kiemelt stílusok bemutatása
- válogatott munkák mozaikos galériában
- kapcsolatfelvételi banner
- automatikusan váltakozó vendégvélemények

### Aloldalak

- `/rolam` - személyes/stúdió bemutatkozó oldal
- `/munkaim` - teljes referencia galéria
- `/arak` - szolgáltatásárak és megjegyzések
- `/ajandekutalvany` - ajándékutalvány bemutató oldal
- `/informaciok` - tetoválás előtti és utáni tudnivalók
- `/kapcsolat` - elérhetőségek, térkép és kapcsolatfelvételi űrlap
- `/adatkezeles` - adatkezelési tájékoztató
- `/ASZF` - általános szerződési feltételek

## Tartalomkezelés

A legtöbb szerkeszthető tartalom a [Data/data.js](./Data/data.js) fájlban található:

- `navItems` - navigációs elemek
- `works` - galéria és munkák listája
- `items` - árlista tételek
- `styles` - kiemelt stílusok
- `reviews` - vendégvélemények

Ha új munka, ár vagy vélemény kerül az oldalra, jellemzően ezt a fájlt kell módosítani.

## Dizájn és UI működés

A projekt erős, sötét vizuális világot használ narancs akcentusokkal. A megjelenés fő elemei:

- fix, áttetsző navigáció scroll állapot alapján változó háttérrel
- háttérképes layout sötét overlay-jel
- egyedi maszkolások és kivágások a `globals.css` fájlban
- hangsúlyos hero felület narancs glow effektekkel
- egyszerű, statikus tartalomblokkok sok képi támogatással

## Telepítés

### 1. Függőségek telepítése

```bash
npm install
```

### 2. Fejlesztői szerver indítása

```bash
npm run dev
```

### 3. Production build készítése

```bash
npm run build
```

### 4. Production szerver indítása

```bash
npm run start
```

## Elérhető npm scriptek

- `npm run dev` - fejlesztői szerver indítása
- `npm run build` - production build készítése
- `npm run start` - a buildelt alkalmazás futtatása
- `npm run lint` - ESLint futtatása

## Fontos fájlok

- [app/layout.tsx](./app/layout.tsx) - globális layout, háttér, navbar, footer
- [app/page.tsx](./app/page.tsx) - főoldal összeállítása
- [app/globals.css](./app/globals.css) - globális stílusok és egyedi effektek
- [Data/data.js](./Data/data.js) - központi tartalomforrás
- [app/components/Navbar.tsx](./app/components/Navbar.tsx) - navigáció és mobilmenü
- [app/components/Testimonial/Testimonial.tsx](./app/components/Testimonial/Testimonial.tsx) - vélemény slider

## Assetek

A képek a `public/` mappában találhatók:

- `public/gallery/` - galériaképek
- `public/work/` - további munkaképek
- `public/artist/` - bemutatkozó oldal képei
- `public/hero.webp` - fő hero háttérkép
- `public/bg.webp` - globális oldalháttér
- `public/logo.png`, `public/logo1.png` - logó assetek

## Jelenlegi állapot és ismert hiányosságok

A projekt jelenleg jó alap egy stúdió landing page-hez és bemutatkozó oldalhoz, de több helyen még inkább demo/prototípus jellegű:

- a kapcsolat oldali űrlapnak jelenleg nincs backend bekötése vagy submit logikája
- a social linkek egy része placeholder (`#` vagy általános Instagram URL)
- több kapcsolatadat mintaértéknek tűnik
- a `Rólam` oldalon a komponens `jpg` képekre hivatkozik, miközben a `public/artist/` mappában jelenleg `webp` fájlok látszanak
- a projektben van néhány kisebb finomításra váró részlet, például debug `console.log` a navbar dropdown komponensében

## Fejlesztési javaslatok

- kapcsolatfelvételi űrlap backend vagy email szolgáltatás bekötése
- adminisztrálható CMS vagy headless tartalomkezelő integrálása
- valós közösségi linkek és stúdióadatok feltöltése
- képfájl-hivatkozások egységesítése
- részletesebb SEO és Open Graph metaadatok beállítása
- képtömörítés és további teljesítményoptimalizálás

## Összegzés

Ez a projekt egy esztétikailag erős, modern tetoválóstúdió weboldal, amely jó alapot ad egy éles bemutatkozó oldalhoz. A struktúra átlátható, a tartalom nagy része könnyen szerkeszthető, és néhány funkcionális kiegészítéssel gyorsan production-közeli állapotba hozható.
