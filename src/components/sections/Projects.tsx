"use client";

import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import React from "react";
import { BookIcon } from "@/components/icons/BookIcon";
import { NetworkIcon } from "@/components/icons/NetworkIcon";
import { HangmanIcon } from "@/components/icons/HangmanIcon";

const projects = [
    {
        title: "Gestion de Librairie",
        subtitle: "SAE 2.01 - Application Desktop",
        description:
            "Développement d'une application complète en Java Swing pour la gestion des stocks, des adhérents et des emprunts d'une bibliothèque municipale.",
        tags: ["Java", "Swing", "MySQL"],
        gradient: "from-blue-900/80 to-slate-900/80",
        gradientHover: "from-blue-800/80",
        icon: <BookIcon />,
    },
    {
        title: "Architecture Réseau Ent.",
        subtitle: "SAE 2.03 - Infrastructure",
        description:
            "Conception d'une infrastructure réseau multi-sites sécurisée. Mise en place de VLANs, routage dynamique et zones démilitarisées (DMZ).",
        tags: ["Cisco IOS", "GNS3", "VLAN/ACL"],
        gradient: "from-emerald-900/80 to-slate-900/80",
        gradientHover: "from-emerald-800/80",
        icon: <NetworkIcon />,
    },
    {
        title: "Analyse de Graphes",
        subtitle: "Algorithmique Avancée",
        description:
            "Traitement de données massives (JSON) pour modéliser des réseaux d'acteurs. Implémentation d'algorithmes de plus court chemin.",
        tags: ["Java", "Graph Theory", "JSON"],
        gradient: "from-purple-900/80 to-slate-900/80",
        gradientHover: "from-purple-800/80",
        icon: (
            <div className="relative w-14 h-14 md:w-16 md:h-16">
                <style>{`
                    @keyframes graph-rotate {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    @keyframes graph-node-pulse {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.4); }
                    }
                    @keyframes edge-draw {
                        0%, 100% { stroke-dashoffset: 100; opacity: 0.3; }
                        50% { stroke-dashoffset: 0; opacity: 1; }
                    }
                `}</style>
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_10px_20px_rgba(168,85,247,0.5)]">
                    <g style={{ transformOrigin: "50% 50%", animation: "graph-rotate 25s linear infinite" }}>
                        <path d="M50 20 L25 70 L75 70 Z" fill="rgba(168,85,247,0.1)" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                        {/* Dynamic edges */}
                        <path d="M50 50 L50 20 M50 50 L25 70 M50 50 L75 70" fill="none" stroke="#d8b4fe" strokeWidth="3" strokeDasharray="100" style={{ animation: "edge-draw 4s ease-in-out infinite alternate" }} />

                        <circle cx="50" cy="50" r="8" fill="white" style={{ transformOrigin: "50% 50%", animation: "graph-node-pulse 2s ease-in-out infinite" }} />

                        <circle cx="50" cy="20" r="9" fill="#1e293b" stroke="#c084fc" strokeWidth="3" />
                        <circle cx="25" cy="70" r="9" fill="#1e293b" stroke="#c084fc" strokeWidth="3" />
                        <circle cx="75" cy="70" r="9" fill="#1e293b" stroke="#c084fc" strokeWidth="3" />
                    </g>
                </svg>
            </div>
        ),
    },
    {
        title: "Jeu Interactif (Pendu)",
        subtitle: "Interface Homme-Machine",
        description:
            "Conception centrée utilisateur d'un jeu classique avec JavaFX. Focus sur l'accessibilité et le feedback visuel.",
        tags: ["JavaFX", "UX Design", "Event-Driven"],
        gradient: "from-amber-900/80 to-slate-900/80",
        gradientHover: "from-amber-800/80",
        icon: <HangmanIcon />,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 relative z-10 w-full" style={{ perspective: "2000px" }}>
            <Reveal>
                <h2
                    className="flex items-center text-3xl md:text-4xl lg:text-5xl font-extrabold mb-12 md:mb-16 tracking-tight relative group"
                    style={{ fontFamily: 'var(--font-syne)', transform: "translateZ(80px)" }}
                >
                    {/* Glass Numbering */}
                    <div className="relative flex items-center justify-center mr-5 md:mr-8">
                        <span className="absolute inset-0 blur-md rounded-full transition-colors duration-500 opacity-20 group-hover:opacity-40" style={{ backgroundColor: "var(--accent)" }} />
                        <span className="relative font-mono text-base md:text-2xl font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-[14px] backdrop-blur-md border" style={{ backgroundColor: "var(--bg-tertiary)", color: "var(--accent)", borderColor: "var(--accent)" }}>
                            02.
                        </span>
                    </div>

                    {/* Glowing Theme-Adaptive Text */}
                    <span className="text-transparent bg-clip-text transition-all duration-700" style={{ backgroundImage: "linear-gradient(to bottom right, var(--text-heading), var(--text-secondary))" }}>
                        Projets Réalisés
                    </span>

                    {/* Sci-Fi Animated Divider Line */}
                    <div className="flex-1 ml-6 md:ml-10 relative h-[1px] md:h-[2px] overflow-hidden rounded-full opacity-60 box-3d-relief">
                        <div className="absolute inset-0 bg-[var(--bg-tertiary)]" />
                        <div className="absolute top-0 left-0 h-full w-full -translate-x-[110%] group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out" style={{ backgroundImage: "linear-gradient(to right, transparent, var(--text-heading), transparent)" }} />
                    </div>
                </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 relative w-full items-stretch" style={{ perspective: "2500px", alignItems: "stretch" }}>
                {projects.map((project, i) => (
                    <Reveal key={project.title} delay={i * 120} className={`h-full flex ${i === 0 ? "md:col-span-2" : ""}`} style={{ transformStyle: "preserve-3d" }}>
                        <TiltCard
                            className={`group w-full h-full flex flex-col bg-slate-950/40 border-white/5 box-3d-relief rounded-2xl ${i === 0 ? "md:col-span-2 featured-project" : ""}`}
                            rotateLimit={8}
                            translateZ={50}
                        >
                            {/* Card Header */}
                            <div
                                className={`project-visual shrink-0 h-48 ${i === 0 ? "md:h-80" : "md:h-60"} bg-gradient-to-br ${project.gradient} relative overflow-hidden p-6 transition-all duration-700 md:group-hover:${project.gradientHover} rounded-t-2xl`}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Decorative elements for extreme depth */}
                                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.6),transparent_70%)]" style={{ transform: "translateZ(-20px)" }} />
                                <div className="project-window" aria-hidden="true" style={{ transform: "translateZ(10px)" }}><span /><span /><span /><i /></div>

                                <div className="flex justify-between items-start z-10 relative h-full">
                                    <div style={{ color: "var(--accent)", transform: "translateZ(100px)" }}>{project.icon}</div>
                                    <div className="flex gap-4" style={{ transform: "translateZ(80px)" }}>
                                        <a
                                            href="#"
                                            className="transition-colors backdrop-blur-md bg-white/10 p-3 rounded-full box-3d-relief hover:bg-white/20 text-white"
                                            title="Code Source"
                                            aria-label="Code Source"
                                        >
                                            <svg className="w-6 h-6 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-8 md:p-10 flex flex-col flex-1 bg-[var(--bg-tertiary)] backdrop-blur-sm border-t border-[var(--border-subtle)] rounded-b-2xl shadow-inner transition-colors duration-500" style={{ transformStyle: "preserve-3d" }}>
                                <p className="font-mono text-sm mb-4 font-bold tracking-widest uppercase" style={{ transform: "translateZ(30px)", color: "var(--accent)" }}>CASE STUDY / 0{i + 1}</p>
                                <h3
                                    className="text-3xl font-extrabold mb-4 transition-all duration-300 md:group-hover:text-transparent md:group-hover:bg-clip-text text-transparent bg-clip-text z-10 relative"
                                    style={{
                                        backgroundImage: "linear-gradient(to bottom right, var(--text-heading), var(--text-secondary))",
                                        transform: "translateZ(80px) scale(1.05)"
                                    }}
                                >
                                    {project.title}
                                </h3>
                                <div className="text-base font-mono mb-6 font-semibold" style={{ color: "var(--accent)", opacity: 0.9, transform: "translateZ(50px)" }}>
                                    {project.subtitle}
                                </div>
                                <p className="text-base mb-8 flex-1 leading-relaxed font-medium" style={{ color: "var(--text-secondary)", transform: "translateZ(20px)" }}>
                                    {project.description}
                                </p>
                                <ul className="flex flex-wrap gap-3 text-xs font-mono mt-auto pt-6" style={{ transform: "translateZ(60px)" }}>
                                    {project.tags.map((tag) => (
                                        <li
                                            key={tag}
                                            className="px-4 py-2 rounded-lg font-bold box-3d-relief"
                                            style={{
                                                backgroundColor: "var(--bg-secondary)",
                                                color: "var(--text-heading)",
                                                border: "1px solid var(--border-subtle)"
                                            }}
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TiltCard>
                    </Reveal>
                ))}
            </div>

            {/* GitHub CTA */}
            <Reveal delay={500}>
                <div className="mt-24 flex justify-center pb-12" style={{ transformStyle: "preserve-3d" }}>
                    <a
                        href="https://github.com/ZakariaMakhlouf45000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-6 pr-8 p-2 rounded-full cursor-pointer transition-transform duration-500 ease-out hover:-translate-y-2 backdrop-blur-sm md:backdrop-blur-[20px] shadow-md md:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5),inset_0_2px_10px_rgba(255,255,255,0.1),inset_0_-2px_10px_rgba(20,184,166,0.2)]"
                        style={{
                            background: "linear-gradient(135deg, rgba(20,184,166,0.1) 0%, rgba(15,23,42,0.6) 100%)",
                            border: "1px solid rgba(45,212,191,0.2)",
                            transform: "translateZ(60px)"
                        }}
                    >
                        {/* Cadre de survol lumineux */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/0 via-teal-500/20 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        {/* Logo Photorealiste GitHub dans une bulle de verre */}
                        <div className="relative w-16 h-16 rounded-full flex items-center justify-center bg-slate-950 border border-slate-700 shadow-[0_10px_20px_rgba(0,0,0,0.6),_inset_0_2px_5px_rgba(255,255,255,0.2)] overflow-hidden">
                            {/* Reflet de verre courbé */}
                            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none rounded-t-full" />

                            <svg
                                className="w-10 h-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-transform duration-500 group-hover:scale-110"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <defs>
                                    <linearGradient id="gitMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ffffff" />
                                        <stop offset="50%" stopColor="#cbd5e1" />
                                        <stop offset="100%" stopColor="#475569" />
                                    </linearGradient>
                                    <filter id="gitShadow">
                                        <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.8" />
                                    </filter>
                                </defs>
                                <path
                                    fill="url(#gitMetal)"
                                    filter="url(#gitShadow)"
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                />
                            </svg>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col items-start justify-center">
                            <span className="font-mono text-xs text-teal-400/80 uppercase tracking-widest mb-1 shadow-sm">
                                Découvrir
                            </span>
                            <span className="font-bold text-lg text-slate-100 group-hover:text-teal-300 transition-colors drop-shadow-md">
                                Explorer mon univers
                            </span>
                        </div>

                        {/* Arrow indicator */}
                        <div className="ml-4 w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-slate-900 text-teal-300 transition-all duration-300 shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)]">
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </a>
                </div>
            </Reveal>
        </section>
    );
}