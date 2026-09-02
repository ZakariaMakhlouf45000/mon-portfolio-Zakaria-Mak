"use client";

import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import React from "react";

const projects = [
    {
        title: "Gestion de Librairie",
        subtitle: "SAE 2.01 - Application Desktop",
        description:
            "Développement d'une application complète en Java Swing pour la gestion des stocks, des adhérents et des emprunts d'une bibliothèque municipale.",
        tags: ["Java", "Swing", "MySQL"],
        gradient: "from-blue-900/80 to-slate-900/80",
        gradientHover: "from-blue-800/80",
        icon: (
            <svg className="w-12 h-12 drop-shadow-2xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
        ),
    },
    {
        title: "Architecture Réseau Ent.",
        subtitle: "SAE 2.03 - Infrastructure",
        description:
            "Conception d'une infrastructure réseau multi-sites sécurisée. Mise en place de VLANs, routage dynamique et zones démilitarisées (DMZ).",
        tags: ["Cisco IOS", "GNS3", "VLAN/ACL"],
        gradient: "from-emerald-900/80 to-slate-900/80",
        gradientHover: "from-emerald-800/80",
        icon: (
            <svg className="w-12 h-12 drop-shadow-2xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
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
            <svg className="w-12 h-12 drop-shadow-2xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
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
        icon: (
            <svg className="w-12 h-12 drop-shadow-2xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
        ),
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 relative z-10 w-full" style={{ perspective: "2000px" }}>
            <Reveal>
                <h2
                    className="flex items-center text-4xl md:text-5xl font-bold mb-16 text-3d-relief"
                    style={{ color: "var(--text-heading)", transform: "translateZ(80px)" }}
                >
                    <span className="font-mono text-3xl mr-6" style={{ color: "var(--accent)" }}>
                        02.
                    </span>
                    Projets Réalisés
                    <span
                        className="h-[2px] w-1/3 ml-8 box-3d-relief"
                        style={{ background: "var(--bg-tertiary)" }}
                    />
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
                                    className="text-3xl font-bold mb-4 transition-all duration-300 md:group-hover:text-[var(--accent)] text-3d-relief"
                                    style={{ color: "var(--text-heading)", transform: "translateZ(80px) scale(1.05)" }}
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
                <div className="mt-24 text-center pb-12" style={{ transformStyle: "preserve-3d" }}>
                    <a
                        href="https://github.com/ZakariaMakhlouf45000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 px-10 py-5 rounded-xl font-mono text-base uppercase tracking-widest transition-all duration-300 group box-3d-relief bg-[var(--bg-tertiary)] font-bold"
                        style={{
                            color: "var(--text-primary)",
                            transform: "translateZ(60px)"
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget;
                            el.style.color = "var(--accent)";
                            el.style.transform = "translateZ(90px) scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget;
                            el.style.color = "var(--text-primary)";
                            el.style.transform = "translateZ(60px) scale(1)";
                        }}
                    >
                        <span style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>Voir plus sur GitHub</span>
                        <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </Reveal>
        </section>
    );
}