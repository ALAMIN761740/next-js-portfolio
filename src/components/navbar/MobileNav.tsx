"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import { navLinks } from "./Navbar";

interface MobileNavProps {
    navOpen: boolean;
    setNavOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileNav({
    navOpen,
    setNavOpen,
}: MobileNavProps) {
    return (
        <>
            {/* Overlay */}
            <div
                onClick={() => setNavOpen(false)}
                className={`fixed inset-0 z-40 lg:hidden bg-background/70 backdrop-blur-sm transition-all duration-300 ${navOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
            />

            {/* Sidebar */}
            <aside
                className={`fixed top-0 right-0 z-50 h-screen w-[75%] max-w-sm bg-surface/95 backdrop-blur-xl border-l border-border lg:hidden transition-transform duration-300 ease-in-out ${navOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="h-full flex items-center justify-center px-6">
                    <ul className="w-full space-y-3">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setNavOpen(false)}
                                    className="block w-full text-center rounded-xl py-4 text-lg font-medium text-text transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:border-border border border-transparent"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
}