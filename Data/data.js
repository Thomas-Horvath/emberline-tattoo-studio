export let navItems = [
    { href: "/", label: "Főoldal" },
    { href: "/rolam", label: "Rólam" },
    { href: "/munkaim", label: "Munkáim" },
    { href: "/arak", label: "Árak", dropdown: [{ href: "/arak", label: "Áraink" }, { href: "/ajandekutalvany", label: "Ajándékutalvány" }] },
    { href: "/informaciok", label: "Információk" },
    { href: "/kapcsolat", label: "Kapcsolat" },
];





export const works = [
    { id: 1, title: "Óra & Rózsa", src: "/gallery/1.jpg", tag: "Blackwork" },
    { id: 2, title: "Minimal Line", src: "/gallery/2.jpg", tag: "Fine line" },
    { id: 3, title: "Hattyú", src: "/gallery/3.jpg", tag: "Illustrative" },
    { id: 4, title: "Zene", src: "/gallery/5.jpg", tag: "Minimal" },
    { id: 5, title: "Koponya", src: "/gallery/7.jpg", tag: "Dark" },
    { id: 6, title: "Jakuza", src: "/gallery/4.jpg", tag: "Japanese" },
    { id: 7, title: "Koponya", src: "/gallery/6.jpg", tag: "Blackwork" },

    { id: 8, title: "Sárkány", src: "/gallery/8.jpg", tag: "Japanese" },
    { id: 9, title: "Geometria", src: "/gallery/9.jpg", tag: "Geometric" },
];


export const items = [
  { name: "Mini tetoválás (2–4 cm)", price: "15 000 Ft-tól", note: "Egyszerű vonalas / minimal" },
  { name: "Kicsi (5–8 cm)", price: "25 000 Ft-tól", note: "Finom részletek" },
  { name: "Közepes (10–15 cm)", price: "45 000 Ft-tól", note: "Árnyékolás / blackwork elemek" },
  { name: "Nagy (20+ cm)", price: "90 000 Ft-tól", note: "Konzultáció alapján" },
  { name: "Cover-up / javítás", price: "Egyedi", note: "Régi minta felülmunkálása" },
];