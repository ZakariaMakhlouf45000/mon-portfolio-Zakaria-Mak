"use client";

import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import React from "react";
import Image from "next/image";

const RealisticBadge = ({ children, animClass, bgColor }: { children: React.ReactNode, animClass?: string, bgColor?: string }) => (
    <div
        className={`relative w-20 h-20 flex items-center justify-center rounded-[22px] border border-white/20 overflow-hidden ${animClass}`}
        style={{
            background: bgColor ? bgColor : "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 100%)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6), inset 0 2px 5px rgba(255, 255, 255, 0.5), inset 0 -2px 5px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(20px)"
        }}
    >
        {/* Photorealistic glass glare / reflection */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-t-[22px]" />
        {/* Deep inner shadow for volumetric physical depth */}
        <div className="absolute inset-0 rounded-[22px] shadow-[inset_0_4px_15px_rgba(255,255,255,0.2)] pointer-events-none" />
        {children}
    </div>
);

const skills = [
    {
        name: "Java / JEE",
        sub: "Backend & Desktop",
        color: "#3b82f6",
        icon: (
            <RealisticBadge animClass="animate-[skill-float_4s_ease-in-out_infinite]">
                <Image src="https://cdn.simpleicons.org/openjdk/3b82f6" alt="Java Logo" width={40} height={40} className="w-10 h-10 drop-shadow-[0_8px_8px_rgba(0,0,0,0.6)]" />
            </RealisticBadge>
        ),
    },
    {
        name: "Python",
        sub: "Data & IA",
        color: "#eab308",
        icon: (
            <RealisticBadge animClass="animate-[skill-slither_5s_ease-in-out_infinite]">
                <Image src="https://cdn.simpleicons.org/python/eab308" alt="Python Logo" width={40} height={40} className="w-10 h-10 drop-shadow-[0_8px_8px_rgba(0,0,0,0.6)]" />
            </RealisticBadge>
        ),
    },
    {
        name: "SQL",
        sub: "MySQL / PostgreSQL",
        color: "#f97316",
        icon: (
            <RealisticBadge animClass="animate-[skill-db-pulse_3s_ease-in-out_infinite]">
                <Image src="https://cdn.simpleicons.org/postgresql/f97316" alt="PostgreSQL Logo" width={40} height={40} className="w-10 h-10 drop-shadow-[0_8px_8px_rgba(0,0,0,0.6)]" />
            </RealisticBadge>
        ),
    },
    {
        name: "Réseaux",
        sub: "Cisco / TCP/IP",
        color: "var(--accent)",
        icon: (
            <RealisticBadge animClass="animate-[skill-ping_3s_infinite]">
                <Image src="https://cdn.simpleicons.org/cisco/00bceb" alt="Cisco Logo" width={48} height={48} className="w-12 h-12 drop-shadow-[0_8px_8px_rgba(0,0,0,0.6)]" style={{ filter: 'brightness(1.2)' }} />
            </RealisticBadge>
        ),
    },
    {
        name: "Web Design",
        sub: "Tailwind / React",
        color: "#60a5fa",
        icon: (
            <RealisticBadge animClass="animate-[skill-spin_10s_linear_infinite]">
                <Image src="https://cdn.simpleicons.org/react/60a5fa" alt="React Logo" width={40} height={40} className="w-10 h-10 drop-shadow-[0_8px_8px_rgba(0,0,0,0.6)]" />
            </RealisticBadge>
        ),
    },
    {
        name: "Linux",
        sub: "Bash / Admin",
        color: "var(--text-primary)",
        icon: (
            <RealisticBadge animClass="animate-[skill-waddle_3s_ease-in-out_infinite]" bgColor="rgba(255,255,255,0.05)">
                <Image src="https://cdn.simpleicons.org/linux/ffffff" alt="Linux Logo" width={44} height={44} className="w-11 h-11 drop-shadow-[0_8px_8px_rgba(0,0,0,0.8)] invert dark:invert-0" />
            </RealisticBadge>
        ),
    },
];

export default function Expertise() {
    return (
        <section id="skills" className="py-20 relative z-10 w-full overflow-hidden">
            <Reveal>
                <h2
                    className="flex items-center text-3xl md:text-4xl lg:text-5xl font-extrabold mb-12 md:mb-16 tracking-tight relative group"
                    style={{ fontFamily: 'var(--font-syne)' }}
                >
                    {/* Glass Numbering */}
                    <div className="relative flex items-center justify-center mr-5 md:mr-8">
                        <span className="absolute inset-0 blur-md rounded-full transition-colors duration-500 opacity-20 group-hover:opacity-40" style={{ backgroundColor: "var(--accent)" }} />
                        <span className="relative font-mono text-base md:text-2xl font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-[14px] backdrop-blur-md border" style={{ backgroundColor: "var(--bg-tertiary)", color: "var(--accent)", borderColor: "var(--accent)" }}>
                            03.
                        </span>
                    </div>

                    {/* Glowing Theme-Adaptive Text */}
                    <span className="text-transparent bg-clip-text transition-all duration-700" style={{ backgroundImage: "linear-gradient(to bottom right, var(--text-heading), var(--text-secondary))" }}>
                        Compétences Techniques
                    </span>

                    {/* Sci-Fi Animated Divider Line */}
                    <div className="flex-1 ml-6 md:ml-10 relative h-[1px] md:h-[2px] overflow-hidden rounded-full opacity-60">
                        <div className="absolute inset-0 bg-[var(--bg-tertiary)]" />
                        <div className="absolute top-0 left-0 h-full w-full -translate-x-[110%] group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out" style={{ backgroundImage: "linear-gradient(to right, transparent, var(--text-heading), transparent)" }} />
                    </div>
                </h2>
            </Reveal>

            <style>{`
                @keyframes skill-float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                @keyframes skill-slither {
                    0%, 100% { transform: rotate(-8deg); }
                    50% { transform: rotate(8deg); }
                }
                @keyframes skill-db-pulse {
                    0%, 100% { transform: scale(1); filter: brightness(1); }
                    50% { transform: scale(1.1); filter: brightness(1.2); }
                }
                @keyframes skill-ping {
                    0%, 20%, 100% { opacity: 1; transform: translateX(0); }
                    10% { opacity: 0.5; transform: translateX(-2px); }
                    15% { opacity: 0.8; transform: translateX(2px); }
                }
                @keyframes skill-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes skill-waddle {
                    0%, 100% { transform: rotate(0deg) translateY(0); }
                    25% { transform: rotate(-10deg) translateY(-3px); }
                    75% { transform: rotate(10deg) translateY(-3px); }
                }
            `}</style>
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
                            <h3 className="font-extrabold mb-1 text-sm md:text-base mt-2 text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(to right, var(--text-heading), var(--text-secondary))", transform: "translateZ(12px)" }}>
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
