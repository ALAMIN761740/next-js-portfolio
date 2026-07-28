import Image from "next/image";
import DotGrid from "@/components/hero/background";
import LinkButton from "@/components/ui/LinkButton";
import { LuArrowRight } from "react-icons/lu";


export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen overflow-hidden flex items-center pt-30 py-10">
            <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10 " />

            {/* background */}
            <div className="inset-0 absolute">
                <DotGrid
                    dotSize={2}
                    gap={15}
                    baseColor="#2F293A"
                    activeColor="#3b82f6"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>

            {/* content */}
            <div className="relative z-10 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                {/* leftside */}
                <div className="space-y-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm border border-border">Fullstack Developer | Next.js Specialist </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-text/90">
                        Building modern web experiences with{" "}
                        <span className="text-primary">clean code</span>
                    </h1>

                    <p className="text-gray-400 max-w-lg tracking-wide">
                        I&apos;m a Full-Stack Developer passionate about building modern, scalable, and user-focused web applications. Using technologies like Next.js, React, TypeScript, and JavaScript, I create fast, responsive, and maintainable products with clean UI, strong performance, and seamless user experiences.
                    </p>

                    <div className="flex items-center gap-4 pt-2">
                        <LinkButton text="Get in touch" href="#contact" rounded icon={LuArrowRight} />
                        <LinkButton text="View projects" href="#projects" rounded variant="outline" />
                    </div>
                </div>

                {/* rightside */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative w-85 h-85 md:w-110 md:h-110 rounded-full bg-surface/80 backdrop-blur-md border-border flex items-center justify-center">
                        {/* image glow */}
                        <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
                        <Image
                            fill
                            src="/images/profile.png"
                            alt="Profile"
                            className="z-10 object-cover rounded-full"
                            sizes="(max-width: 768px) 340px, 440px"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
