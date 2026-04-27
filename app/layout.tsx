import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";


export const metadata: Metadata = {
  title: " ETS - Főoldal",
  description: "Emberline Tattoo Studio - Egy alkotói tér, ahol a történetek formát kapnak. Sötét tónusok, tiszta kompozíciók, nyugodt és precíz kivitelezés.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-100">
        <div className="relative min-h-screen overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0 bg-fixed bg-cover  bg-top-right bg-no-repeat bg-[url('/bg.webp')]" />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-zinc-950/70" />

          <Navbar />
          {/* PAGE CONTENT */}
          <div className="relative z-10">
            {children}
          </div>

          
        </div>
        <Footer />
      </body>
    </html>
  );
}
