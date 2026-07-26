import DotGrid from "@/components/hero/background";


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
            <div className="relative z-10 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2">

            </div>
        </section>
    )
}
