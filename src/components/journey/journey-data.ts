// data/journey-data.ts

export interface DevelopmentJourney {
    year: string;
    role: string;
    company: string;
    description: string;
    technologies: string[];
}

export interface EducationJourney {
    year: string;
    degree: string;
    institution: string;
    location: string;
    description: string;
    highlights: string[];
}

export const developmentJourney: DevelopmentJourney[] = [
    {
        year: "2025 - Present",
        role: "Full Stack Development",
        company: "Personal Projects",
        description:
            "Building modern full-stack web applications using Next.js, TypeScript, Prisma, and PostgreSQL. Developing secure authentication, REST APIs, dashboards, and scalable architectures while continuously improving performance, clean code, and user experience.",
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
            "Focused on backend engineering by building REST APIs, authentication systems, database schemas, and scalable server-side applications using modern development practices.",
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
            "Developed responsive user interfaces with React and Tailwind CSS. Learned component-based architecture, state management, API integration, animations, and modern UI/UX design principles.",
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
            "Started my web development journey by learning HTML, CSS, JavaScript, Git, and GitHub. Built multiple practice projects to strengthen programming logic, responsive design, and problem-solving skills.",
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Git",
            "GitHub",
        ],
    },
];

export const educationJourney: EducationJourney[] = [
    {
        year: "2024 - Present",
        degree: "Diploma in Computer Science & Technology",
        institution: "Rajshahi Polytechnic Institute",
        location: "Rajshahi, Bangladesh",
        description:
            "Currently pursuing a Diploma in Computer Science & Technology with a focus on software engineering, web development, databases, networking, and problem-solving.",
        highlights: [
            "Expected Graduation: 2027",
            "Computer Science & Technology",
            "Software Development",
            "Web Development",
        ],
    },
    {
        year: "2022",
        degree: "Secondary School Certificate (SSC)",
        institution: "Your School Name",
        location: "Bangladesh",
        description:
            "Completed secondary education in the Science group, building a strong academic foundation for further studies in technology and software development.",
        highlights: [
            "Science Group",
            "SSC Graduate",
            "Mathematics",
            "ICT",
        ],
    },
];