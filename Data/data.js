export let navItems = [
    { href: "/", label: "Főoldal" },
    { href: "/rolam", label: "Rólam" },
    { href: "/munkaim", label: "Munkáim" },
    { href: "/arak", label: "Árak", dropdown: [{ href: "/arak", label: "Áraink" }, { href: "/ajandekutalvany", label: "Ajándékutalvány" }] },
    { href: "/informaciok", label: "Információk" },
    { href: "/kapcsolat", label: "Kapcsolat" },
];





export const works = [
    { id: 1, title: "Óra & Rózsa", src: "/gallery/1.webp", tag: "Blackwork" },
    { id: 2, title: "Minimal Line", src: "/gallery/2.webp", tag: "Fine line" },
    { id: 3, title: "Hattyú", src: "/gallery/3.webp", tag: "Illustrative" },
    { id: 4, title: "Zene", src: "/gallery/5.webp", tag: "Minimal" },
    { id: 5, title: "Koponya", src: "/gallery/7.webp", tag: "Dark" },
    { id: 6, title: "Jakuza", src: "/gallery/4.webp", tag: "Japanese" },
    { id: 7, title: "Koponya", src: "/gallery/6.webp", tag: "Blackwork" },
    { id: 8, title: "Sárkány", src: "/gallery/8.webp", tag: "Japanese" },
    { id: 9, title: "Geometria", src: "/gallery/9.webp", tag: "Geometric" },
    { id: 10, title: "Virág", src: "/gallery/10.webp", tag: "Blackwork" },
    { id: 11, title: "Virág & tigris", src: "/gallery/11.webp", tag: "Blackwork" },
    { id: 12, title: "Nonfiguratív", src: "/gallery/12.webp", tag: "Illustrative" },
];


export const items = [
  { name: "Mini tetoválás (2-4 cm)", price: "15 000 Ft-tól", note: "Egyszerű vonalas / minimal" },
  { name: "Kicsi (5-8 cm)", price: "25 000 Ft-tól", note: "Finom részletek" },
  { name: "Közepes (10-15 cm)", price: "45 000 Ft-tól", note: "Árnyékolás / blackwork elemek" },
  { name: "Nagy (20+ cm)", price: "90 000 Ft-tól", note: "Konzultáció alapján" },
  { name: "Cover-up / javítás", price: "Egyedi", note: "Régi minta felülmunkálása" },
];





export const styles = [
  {
    title: "Fine line",
    desc: "Finom, precíz vonalak - tiszta forma, visszafogott részletek.",
    tags: ["Flora", "Minimal"],
    img: "/gallery/1.webp",
   
  },
  {
    title: "Blackwork",
    desc: "Erős kontraszt, mély fekete felületek - határozott kompozíció.",
    tags: ["Dark", "Geometric"],
    img: "/gallery/2.webp",
    
  },
  {
    title: "Dark illustrative",
    desc: "Sötétebb hangulat, illusztratív történetek - nyers, karakteres formák.",
    tags: ["Skulls", "Surreal"],
    img: "/gallery/4.webp",
  
  },
];


export const reviews = [
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