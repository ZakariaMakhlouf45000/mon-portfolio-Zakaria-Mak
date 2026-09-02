"use client";

import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import React from "react";

const skills = [
    {
        name: "Java / JEE",
        sub: "Backend & Desktop",
        color: "#3b82f6",
        icon: (
            <img src="https://cdn.simpleicons.org/openjdk/3b82f6" alt="Java Logo" className="w-10 h-10 drop-shadow-md" />
        ),
    },
    {
        name: "Python",
        sub: "Data & IA",
        color: "#eab308",
        icon: (
            <img src="https://cdn.simpleicons.org/python/eab308" alt="Python Logo" className="w-10 h-10 drop-shadow-md" />
        ),
    },
    {
        name: "SQL",
        sub: "MySQL / PostgreSQL",
        color: "#f97316",
        icon: (
            <img src="https://cdn.simpleicons.org/postgresql/f97316" alt="PostgreSQL Logo" className="w-10 h-10 drop-shadow-md" />
        ),
    },
    {
        name: "Réseaux",
        sub: "Cisco / TCP/IP",
        color: "var(--accent)",
        icon: (
            <img src="https://cdn.simpleicons.org/cisco/00bceb" alt="Cisco Logo" className="w-10 h-10 drop-shadow-md" style={{ filter: 'brightness(1.5)' }} />
        ),
    },
    {
        name: "Web Design",
        sub: "Tailwind / React",
        color: "#60a5fa",
        icon: (
            <img src="https://cdn.simpleicons.org/react/60a5fa" alt="React Logo" className="w-10 h-10 drop-shadow-md" />
        ),
    },
    {
        name: "Linux",
        sub: "Bash / Admin",
        color: "var(--text-primary)",
        icon: (
            <img src="https://cdn.simpleicons.org/linux/ffffff" alt="Linux Logo" className="w-10 h-10 drop-shadow-[0_4px_10px_rgba(255,255,255,0.2)] invert dark:invert-0" />
        ),
    },
];

export default function Expertise() {
    return (
        <section id="skills" className="py-20 relative z-10 w-full overflow-hidden">
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
                        <TiltCard
                            rotateLimit={6}
                            translateZ={12}
                            className="p-5 group h-full bg-slate-950/20 backdrop-blur-md transition-colors duration-300 md:hover:bg-slate-900/50 md:hover:border-teal-500/20 flex flex-col items-center text-center !rounded-[30px]"
                        >
                            <div
                                className="mb-4 transition-transform duration-300 origin-center group-hover:scale-125"
                                style={{ transform: "translateZ(20px)" }}
                            >
                                {skill.icon}
                            </div>
                            <h3 className="font-bold mb-1 text-sm md:text-base mt-2" style={{ color: "var(--text-heading)", transform: "translateZ(12px)" }}>
                                {skill.name}
                            </h3>
                            <p className="text-xs font-mono opacity-80" style={{ color: "var(--text-secondary)", transform: "translateZ(6px)" }}>
                                {skill.sub}
                            </p>
                        </TiltCard>
                    </Reveal>
                ))}
            </div>

            {/* Parallax ambient background element */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}
