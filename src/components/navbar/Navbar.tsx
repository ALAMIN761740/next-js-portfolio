"use client"

import { useEffect, useState } from "react"
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
            <div className="w-[90%] lg:w-[90%] max-auto h-16 flex items-center justify-between">
                {/* {logo} */}
                <Logo />
            </div>
        </nav>
    )
}
