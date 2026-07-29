import SectionHeader from "@/components/ui/SectionHeader"



const projects = [
    {
        title: "Fullstack Dashboard",
        description: "A modern full-stack dashboard with authentication, role-based access, analytics, and a responsive admin interface.",
        image: "/images/p1.jpeg",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth", "JWT", "REST API", "Shadcn UI"],
        liveURL: "#",
        githubURL: "#"
    },
    {
        title: "E-Commerce Platform",
        description:
            "A scalable e-commerce application featuring product management, shopping cart, secure checkout, order tracking, and responsive design.",
        image: "/images/p2.jpeg",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB", "Express.js", "Node.js", "JWT"],
        liveURL: "#",
        githubURL: "#",
    },
    {
        title: "Task Management App",
        description:
            "A collaborative task management platform with drag-and-drop boards, team collaboration, real-time updates, and deadline tracking.",
        image: "/images/p3.jpeg",
        tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Zustand", "Framer Motion", "REST API"],
        liveURL: "#",
        githubURL: "#",
    },
    {
        title: "Learning Management System",
        description:
            "A modern LMS with course enrollment, video lessons, progress tracking, quizzes, and an intuitive dashboard for students and instructors.",
        image: "/images/p4.jpeg",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Cloudinary", "NextAuth"],
        liveURL: "#",
        githubURL: "#",
    },
]


export default function ProjectSection() {
    return (
        <section id="projects" className="relative py-24">
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="container mx-auto px-6">
                <SectionHeader
                    badge="Projects"
                    title="Some of my recent"
                    highlight="work"
                    description="A selection of projects showcasing my ability to design, build, and scale modern full-stack applications."
                />

                {/* Projects Grid */}
                <div className="mt-16">
                    {/* Your project cards go here */}
                </div>
            </div>
        </section>
    )
}
