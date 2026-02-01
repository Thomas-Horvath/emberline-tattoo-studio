import Image from "next/image";
import Link from "next/link";

const navItems = [
    { href: "#munkaim", label: "Munkáim" },
    { href: "#stilusok", label: "Stílusok" },
    { href: "#folyamat", label: "Folyamat" },
    { href: "#velemenyek", label: "Vélemények" },
];

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full">

            <div
                className="h-16 mt-4 w-full
                           bg-zinc-950/650 border-y border-zinc-800/80 shadow-[0_0_0_1px_rgba(0,0,0,0.2)]
                           backdrop-blur-md"
            >
                <div className="flex items-center justify-between max-w-[1400px] mx-auto">

                    {/* BAL: LOGÓ + BRAND */}
                    <Link href="/" className="flex items-center gap-2 px-4">
                        {/* Itt később cseréld a logódra (SVG/PNG) */}
                        <Image src='/logo1.png' alt="Logo" width={80} height={80} className="h-14 w-14" />

                        <div className="leading-none">
                            <div className="text-xl font-semibold tracking-[0.18em] text-zinc-100">
                                EMBERLINE
                            </div>
                            <div className="font-medium tracking-[0.22em] text-orange-500 text-[14px]">
                                TATTOO
                            </div>
                        </div>
                    </Link>

                    {/* KÖZÉP: NAV */}
                    <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.22em] text-zinc-300">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="after:absolute after:left-0 relative
                                           after:h-px after:w-0 hover:after:w-full
                                           uppercase
                                           after:bg-orange-500/90
                                           after:transition-all transition
                                           after:-bottom-2 hover:text-zinc-100"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* JOBB: CTA */}
                    <div className="pr-4">
                        <a
                            href="#idopont"
                            className="inline-flex items-center justify-center
                                       h-10 px-5 rounded-lg
                                       font-semibold text-xs tracking-[0.18em] uppercase
                                       bg-orange-500 hover:bg-orange-400
                                       transition
                                       text-zinc-950"
                        >
                            Időpontfoglalás
                        </a>
                    </div>
                </div>
            </div>

        </header>
    );
}
