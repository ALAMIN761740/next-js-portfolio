import Image from "next/image";


export default function AboutSection() {
    return (
        <section id="about" className="py-24 overflow-hidden relative">
            <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* leftside */}
                <div className="flex justify-center lg:justify-start">
                    <div className="relative w-85 h-85 md:w-120 md:h-120 rounded-2xl bg-surface/80 backdrop-blur-md border border-border flex items-center justify-center">
                        <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl" />

                        <div className="w-[85%] h-[85%] relative">
                            <Image fill src="/images/profile.png" alt="About me" className="object-cover object-top rounded-xl z-10" />
                        </div>
                    </div>
                </div>

                {/* rightside */}
                <div className="space-y-6 ">
                    <span className="text-sm text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-border inline-block">
                        About Me
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-text leading-tight">
                        Turning ideas into modern digital experiences
                    </h2>

                    <p className="text-gray-300 max-w-xl">
                        I&apos;m a Full Stack Developer passionate about building modern, scalable, and user-friendly web applications. I enjoy transforming ideas into fast, responsive, and reliable digital products using technologies like React, Next.js, TypeScript, Node.js, Express.js, Prisma, PostgreSQL, MongoDB, and Tailwind CSS.

                        I believe great software is built with clean code, thoughtful design, and continuous learning. Every project is an opportunity to improve my skills, solve real-world problems, and create meaningful experiences that deliver value to both users and businesses.


                    </p>
                </div>
            </div>

        </section>
    )
}
