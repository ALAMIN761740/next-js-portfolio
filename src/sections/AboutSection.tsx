import Image from "next/image";
import { LuCode, LuDatabase, LuRocket } from "react-icons/lu";

export default function AboutSection() {
    return (
        <section id="about" className="relative overflow-hidden py-24">
            {/* Background Glow */}
            <div
                aria-hidden="true"
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
            />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side */}
                <div className="flex justify-center lg:justify-start">
                    <div className="relative flex items-center justify-center w-85 h-85 md:w-[30rem] md:h-[30rem] rounded-2xl border border-border bg-surface/80 backdrop-blur-md">

                        <div
                            aria-hidden="true"
                            className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl"
                        />

                        <div className="relative w-[90%] h-[90%] overflow-hidden rounded-xl">
                            <Image
                                fill
                                src="/images/profile.png"
                                alt="About me"
                                sizes="(max-width: 1024px) 90vw, 40vw"
                                className="object-cover object-top transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="space-y-6">

                    <span className="inline-block px-4 py-1.5 text-sm rounded-full border border-border bg-primary/10 text-primary">
                        About Me
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold leading-tight text-text">
                        Turning ideas into modern digital experiences
                    </h2>

                    <p className="max-w-xl leading-relaxed text-gray-400">
                        I&apos;m a Full Stack Developer passionate about building
                        modern, scalable, and user-friendly web applications. I
                        enjoy transforming ideas into fast, responsive, and
                        reliable digital products using React, Next.js,
                        TypeScript, Node.js, Express.js, Prisma, PostgreSQL,
                        MongoDB, and Tailwind CSS.
                    </p>

                    <p className="max-w-xl leading-relaxed text-gray-400">
                        I believe great software is built with clean code,
                        thoughtful design, and continuous learning. Every
                        project is an opportunity to improve my skills, solve
                        real-world problems, and create meaningful experiences
                        that deliver value to both users and businesses.
                    </p>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">

                        <div className="h-full rounded-xl border border-border bg-surface p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                            <LuCode className="mx-auto mb-3 h-6 w-6 text-primary" />
                            <p className="text-sm font-medium text-text">
                                Clean Code
                            </p>
                        </div>

                        <div className="h-full rounded-xl border border-border bg-surface p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                            <LuDatabase className="mx-auto mb-3 h-6 w-6 text-primary" />
                            <p className="text-sm font-medium text-text">
                                Full Stack Apps
                            </p>
                        </div>

                        <div className="h-full rounded-xl border border-border bg-surface p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                            <LuRocket className="mx-auto mb-3 h-6 w-6 text-primary" />
                            <p className="text-sm font-medium text-text">
                                Performance
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}