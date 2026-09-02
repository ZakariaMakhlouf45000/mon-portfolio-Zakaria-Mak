"use client";

import Reveal from "@/components/ui/Reveal";

const skills = [
    {
        name: "Java / JEE",
        sub: "Backend & Desktop",
        color: "#3b82f6",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
    },
    {
        name: "Python",
        sub: "Data & IA",
        color: "#eab308",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        name: "SQL",
        sub: "MySQL / PostgreSQL",
        color: "#f97316",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        ),
    },
    {
        name: "Réseaux",
        sub: "Cisco / TCP/IP",
        color: "var(--accent)",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
    },
    {
        name: "Web Design",
        sub: "Tailwind / React",
        color: "#60a5fa",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
    },
    {
        name: "Linux",
        sub: "Bash / Admin",
        color: "var(--text-primary)",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
];

export default function Expertise() {
    return (
        <section id="skills" className="py-20">
            <Reveal>
                <h2
                    className="flex items-center text-2xl md:text-3xl font-bold mb-10"
                    style={{ color: "var(--text-heading)" }}
                >
                    <span className="font-mono text-xl mr-4" style={{ color: "var(--accent)" }}>
                        03.
                    </span>
                    Compétences Techniques
                    <span
                        className="h-[1px] w-1/3 ml-6"
                        style={{ background: "var(--bg-tertiary)" }}
                    />
                </h2>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {skills.map((skill, i) => (
                    <Reveal key={skill.name} delay={i * 80}>
                        <div
                            className="p-5 rounded-xl cursor-default transition-all duration-300 hover:-translate-y-2 border group"
                            style={{
                                background: "var(--bg-secondary)",
                                borderColor: "transparent",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget;
                                el.style.borderColor = "var(--border-accent)";
                                el.style.background = "var(--bg-tertiary)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget;
                                el.style.borderColor = "transparent";
                                el.style.background = "var(--bg-secondary)";
                            }}
                        >
                            <div
                                className="mb-3 group-hover:scale-110 transition-transform origin-left"
                                style={{ color: skill.color }}
                            >
                                {skill.icon}
                            </div>
                            <h3 className="font-bold mb-1" style={{ color: "var(--text-heading)" }}>
                                {skill.name}
                            </h3>
                            <p className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
                                {skill.sub}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
