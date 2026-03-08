'use client';

import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/Data/data.js";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [hamburgerOpen, setHamnurgerOpen] = useState(false);
    const pathname = usePathname();



    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const toggleHamburger = () => { setHamnurgerOpen(!hamburgerOpen) };

    return (
        <header className="fixed top-0 left-0 z-50 w-full">

            <div
                className={`h-16 w-full
                            bg-zinc-950/65 border-zinc-800/80 shadow-[0_0_0_1px_rgba(0,0,0,0.2)]
                            duration-300 transition-all border-y
                            ${scrolled ? "mt-0  backdrop-blur-3xl": " mt-0 lg:mt-4   backdrop-blur-md"}`}
            >
                <div className="flex items-center justify-between max-w-350 mx-auto h-full px-4">

                    {/* BAL: LOGÓ + BRAND */}
                    <Link href="/" className="flex items-center gap-2 px-4" onClick={() => setHamnurgerOpen(false)}>

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
                    <nav className="hidden items-stretch lg:flex
                                    gap-10 h-full
                                    text-xs tracking-[0.22em]
                                    text-zinc-300">
                        {navItems.map((item) => {
                            if (item.label === "Árak") {
                                return <PricesDropdown key="arak-dropdown" isActive={isActive} />;
                            }

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`${isActive(item.href) ? "text-orange-400" : "text-zinc-300"} after:absolute after:bottom-4 after:left-0 flex items-center relative
                                               after:h-px after:w-0 h-full hover:after:w-full
                                               uppercase
                                               after:bg-orange-500/90 hover:text-orange-400
                                               after:transition-all transition`}
                                >
                                    {item.label}
                                </Link>);
                        })}
                    </nav>

                    {/* { hamburger menu }  */}
                    <div className="flex flex-col justify-between lg:hidden
                                    h-6
                                    cursor-pointer duration-400 ease-in-out transition-all
                                    group" onClick={toggleHamburger}>
                        <span className="block w-8 h-1 bg-orange-500 group-hover:bg-orange-400"></span>
                        <span className="block w-8 h-1 bg-orange-500 group-hover:bg-orange-400"></span>
                        <span className="block w-8 h-1 bg-orange-500 group-hover:bg-orange-400"></span>
                    </div>


                    {hamburgerOpen && (
                        <nav className="absolute flex flex-col items-stretch left-0 lg:hidden top-15.75
                                        gap-8 p-8 w-full
                                        text-xs tracking-[0.22em]
                                        bg-zinc-950/98
                                        backdrop-blur-3xl
                                        text-zinc-300">
                            {navItems.map((item) => {

                                if (item.label === "Árak" && item.dropdown) {
                                    return (
                                        <div key={item.label} className="flex flex-col gap-3">
                                            <div className="text-zinc-400 uppercase">
                                                {item.label}
                                            </div>

                                            <div className="flex flex-col ml-4 gap-4 pl-4 border-l border-zinc-800">
                                                {item.dropdown.map((subitem) => (
                                                    <Link
                                                        key={subitem.href}
                                                        href={subitem.href}
                                                        className={` ${isActive(subitem.href) ? "text-orange-400" : "text-zinc-400"} text-sm hover:text-orange-400 transition `}
                                                        onClick={toggleHamburger}
                                                    >
                                                        {subitem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                }


                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={` ${isActive(item.href) ? "text-orange-400" : "text-zinc-400"} relative flex items-center h-full after:h-px uppercase hover:text-orange-400`}
                                        onClick={toggleHamburger}
                                    >
                                        {item.label}
                                    </Link>);
                            })}
                        </nav>
                    )
                    }




                    {/* JOBB: CTA */}
                    <div className="hidden xl:block">
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






function PricesDropdown({ isActive }: { isActive: (href: string) => boolean }) {
    console.log(isActive("/arak"))
    return (
        <div className="relative group">
            {/* Trigger */}
            <button
                type="button"
                className={` ${isActive("/arak") || isActive("/ajandekutalvany") ? "text-orange-400" : "text-zinc-300"} after:absolute after:bottom-4 after:left-0 flex items-center relative
                           after:h-px after:w-0 group-hover:after:w-full h-full
                           text-xs tracking-[0.22em] uppercase
                           after:bg-orange-500/90 focus:outline-none hover:text-orange-400
                           after:transition-all transition
                          `}
                aria-haspopup="menu"
            >
                Árak
            </button>

            {/* Panel */}
            <div
                className="absolute top-0]
                           min-w-56 p-2 rounded-xl
                           bg-zinc-950/90 border border-zinc-800/70 shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                           backdrop-blur-md
                           duration-200 group-hover:translate-y-0 transition-all translate-y-2
                           -left-2 group-hover:opacity-100 group-hover:visible invisible opacity-0"
                role="menu"
            >

                {navItems.find(item => item.label === "Árak")?.dropdown?.map((subitem) => {
                    return (
                        <Link
                            key={subitem.href}
                            href={subitem.href}
                            className="block
                                       px-3 py-2 rounded-lg
                                       text-sm
                                       hover:bg-zinc-900/60 hover:text-orange-400
                                       transition
                                       text-zinc-200"
                            role="menuitem"

                        >
                            {subitem.label}
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}