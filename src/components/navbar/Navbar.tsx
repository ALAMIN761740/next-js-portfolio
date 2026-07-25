"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";

import Logo from "./Logo";
import MobileNav from "./MobileNav";
import LinkButton from "../ui/LinkButton";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = navOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [navOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${scrolled
                        ? "backdrop-blur-2xl bg-background/60 border-b border-border"
                        : "bg-transparent"
                    }`}
            >
                <div className="w-[90%] mx-auto h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Logo />

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center gap-1 py-2.5 px-1 rounded-full bg-surface/60 backdrop-blur-xl border border-border">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:text-primary hover:bg-surface"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Button */}
                    <div className="hidden lg:block">
                        <LinkButton
                            icon={LuDownload}
                            iconPosition="left"
                            rounded
                            text="Download CV"
                            href="/documents/cv.pdf"
                            download
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setNavOpen((prev) => !prev)}
                        aria-label="Toggle Menu"
                        className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center border border-border bg-surface/60 backdrop-blur text-text transition hover:border-primary hover:text-primary"
                    >
                        {navOpen ? <LuX size={22} /> : <LuMenu size={22} />}
                    </button>
                </div>
            </nav>

            <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
        </>
    );
}