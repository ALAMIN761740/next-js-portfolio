import SectionHeader from "@/components/ui/SectionHeader";

export const developmentJourney = [
    {
        year: "2025 - Present",
        role: "Full Stack Development",
        company: "Personal Projects",
        description:
            "Building modern full-stack web applications using Next.js, TypeScript, Prisma, and PostgreSQL. Developing secure authentication, REST APIs, dashboards, and scalable application architecture while continuously improving code quality and performance.",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "Tailwind CSS",
            "REST API",
            "Git",
        ],
    },
    {
        year: "2024 - 2025",
        role: "Backend Development",
        company: "Learning & Practice Projects",
        description:
            "Focused on server-side development by building REST APIs, authentication systems, database schemas, and CRUD applications. Worked with Express.js, MongoDB, Prisma, PostgreSQL, and JWT authentication through hands-on projects.",
        technologies: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Prisma",
            "PostgreSQL",
            "JWT",
        ],
    },
    {
        year: "2023 - 2024",
        role: "Frontend Development",
        company: "Personal & Portfolio Projects",
        description:
            "Built responsive and interactive user interfaces with React and Tailwind CSS. Learned component-based architecture, API integration, state management, and modern UI/UX principles by creating multiple real-world projects.",
        technologies: [
            "React",
            "JavaScript",
            "Tailwind CSS",
            "React Router",
            "Firebase",
            "Axios",
        ],
    },
    {
        year: "2022 - 2023",
        role: "Web Development Fundamentals",
        company: "Self-Learning Journey",
        description:
            "Started my web development journey by learning HTML, CSS, JavaScript, Git, and GitHub. Built several beginner projects to strengthen programming fundamentals, responsive design, and problem-solving skills.",
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Git",
            "GitHub",
        ],
    },
];

export const educationJourney = [
    {
        year: "2024 - Present",
        degree: "Diploma in Computer Science & Technology",
        institution: "Rajshahi Polytechnic Institute",
        description:
            "Currently pursuing a Diploma in Computer Science & Technology with a strong focus on software engineering, web development, databases, and modern programming practices.",
        highlights: [
            "Expected Graduation: 2027",
            "Computer Science & Technology",
            "Web Development",
            "Software Engineering",
        ],
    },
    {
        year: "2022",
        degree: "Secondary School Certificate (SSC)",
        institution: "Your School Name",
        description:
            "Completed secondary education with a science background, building a strong academic foundation for a career in technology.",
        highlights: [
            "Science Group",
            "SSC Graduate",
        ],
    },
];

export default function DevelopmentJourney() {
    return (
        <section id="journey" className="py-24">
            <SectionHeader
                badge="Journey"
                title="My"
                highlight=" Journey"
                description="A timeline of my development journey and academic background, highlighting the skills I've gained, technologies I've learned, and the educational milestones that shaped my path as a developer."
            />

            {/* Timeline Component Here */}
        </section>
    );
}