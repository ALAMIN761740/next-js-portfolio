"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Logo from "./Logo";




const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" }
]



export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)
        }
        window.addEventListener("scroll", handleScroll);

        // return a clean up
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])



    return (
        <nav className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${scrolled ? "backdrop-blur-2xl" : "bg-transparent"}`}>
            <div className="w-[90%] lg:w-[90%] mx-auto h-16 flex items-center justify-between">
                {/* {logo} */}
                <Logo />

                {/* desktop nav */}
                <ul className="hidden lg:flex items-center gap-1 py-2.5 px-1 rounded-full bg-surface/60 backdrop-blur-xl border border-border">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href} className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:text-primary hover:bg-surface">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
