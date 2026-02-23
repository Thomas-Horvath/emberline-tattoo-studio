'use client';

import Image from "next/image";
import Link from "next/link";
import navItems from "@/Data/Navlinks.js";

import { useEffect, useState } from "react";


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 z-50 w-full">

            <div
                className={`h-16 w-full  transition-all duration-300
                   ${scrolled ? "h-14 mt-0 border-b backdrop-blur-3xl" : "h-16 mt-4 border-y backdrop-blur-md"}
                           bg-zinc-950/650  border-zinc-800/80 shadow-[0_0_0_1px_rgba(0,0,0,0.2)]
                           `}
            >
                <div className="flex items-center justify-between max-w-350 mx-auto h-full">

                    {/* BAL: LOGÓ + BRAND */}
                    <Link href="/" className="flex items-center gap-2 px-4">
                       
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
                            <Link
                                key={item.href}
                                href={item.href}
                                className="after:absolute after:left-0 relative
                                           after:h-px after:w-0 hover:after:w-full
                                           uppercase
                                           after:bg-orange-500/90
                                           after:transition-all transition
                                           after:-bottom-2 
                                           hover:text-orange-400"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* JOBB: CTA */}
                    <div className="pr-4">
                        <Link
                            href="/kapcsolat"
                            className="inline-flex items-center justify-center
                                       h-10 px-5 rounded-lg
                                       font-semibold text-xs tracking-[0.18em] uppercase
                                       bg-orange-500 hover:bg-orange-400
                                       transition
                                       text-zinc-950"
                        >
                            Időpontfoglalás
                        </Link>
                    </div>
                </div>
            </div>

        </header>
    );
}
