"use client";

import Reveal from "@/components/ui/Reveal";
import React, { useRef, useState, MouseEvent } from "react";

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
            <svg className="w-10 h-10 drop-shadow-xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <svg className="w-10 h-10 drop-shadow-xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <svg className="w-10 h-10 drop-shadow-xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <svg className="w-10 h-10 drop-shadow-xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
        ),
    },
];

// Interactive 3D Tilt Wrapper inside Projects
function TiltCard({ children, isFeatured }: { children: React.ReactNode, isFeatured?: boolean }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState({});

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();

        // Calculate X and Y coordinates inside the card (ranging from -0.5 to 0.5)
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        // Multiply by intensity (e.g. 20 degrees limit)
        const rotateY = x * 20;
        const rotateX = -y * 20;

        setStyle({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
            transition: 'transform 0.1s ease-out',
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
            transition: 'transform 0.5s ease-out',
        });
    };

    return (
        <article
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ ...style, willChange: "transform", transformStyle: "preserve-3d" }}
            className={`project-card glass-card rounded-xl overflow-hidden flex flex-col group h-full cursor-pointer shadow-lg hover:shadow-[0_0_40px_rgba(100,255,218,0.1)] ${isFeatured ? "md:col-span-2 featured-project" : ""}`}
        >
            <div style={{ transform: "translateZ(30px)", display: "flex", flexDirection: "column", height: "100%" }}>
                {children}
            </div>
        </article>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-20 relative z-10">
            <Reveal>
                <h2
                    className="flex items-center text-2xl md:text-3xl font-bold mb-10"
                    style={{ color: "var(--text-heading)" }}
                >
                    <span className="font-mono text-xl mr-4" style={{ color: "var(--accent)" }}>
                        02.
                    </span>
                    Projets Réalisés
                    <span
                        className="h-[1px] w-1/3 ml-6"
                        style={{ background: "var(--bg-tertiary)" }}
                    />
                </h2>
            </Reveal>

            <div className="projects-editorial grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative" style={{ perspective: "1500px" }}>
                {projects.map((project, i) => (
                    <Reveal key={project.title} delay={i * 120} className={i === 0 ? "md:col-span-2" : ""}>
                        <TiltCard isFeatured={i === 0}>
                            {/* Card Header */}
                            <div
                                className={`project-visual h-48 ${i === 0 ? "md:h-80" : ""} bg-gradient-to-br ${project.gradient} relative overflow-hidden p-6 transition-all duration-700 group-hover:${project.gradientHover}`}
                            >
                                {/* Decorative elements for depth */}
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.4),transparent_70%)]" />
                                <div className="project-window" aria-hidden="true"><span /><span /><span /><i /></div>
                                <div className="flex justify-between items-start z-10 relative">
                                    <div style={{ color: "var(--accent)", transform: "translateZ(50px)" }}>{project.icon}</div>
                                    <div className="flex gap-3" style={{ transform: "translateZ(40px)" }}>
                                        <a
                                            href="#"
                                            className="transition-colors backdrop-blur-md bg-white/5 p-2 rounded-full border border-white/10 hover:bg-white/10"
                                            style={{ color: "var(--text-primary)" }}
                                            onMouseEnter={(e) => {
                                                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                                            }}
                                            onMouseLeave={(e) => {
                                                (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                                            }}
                                            title="Code Source"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 md:p-8 flex flex-col flex-grow bg-slate-950/20 backdrop-blur-sm border-t border-white/5">
                                <p className="project-index font-mono text-xs mb-3" style={{ transform: "translateZ(20px)" }}>CASE STUDY / 0{i + 1}</p>
                                <h3
                                    className="text-2xl font-bold mb-3 transition-colors group-hover:text-[var(--accent)]"
                                    style={{ color: "var(--text-heading)", transform: "translateZ(40px)" }}
                                >
                                    {project.title}
                                </h3>
                                <div className="text-sm font-mono mb-4" style={{ color: "var(--accent)", opacity: 0.8, transform: "translateZ(30px)" }}>
                                    {project.subtitle}
                                </div>
                                <p className="text-sm mb-8 flex-grow leading-relaxed" style={{ color: "var(--text-secondary)", transform: "translateZ(20px)" }}>
                                    {project.description}
                                </p>
                                <ul className="flex flex-wrap gap-2 text-xs font-mono mt-auto" style={{ transform: "translateZ(30px)" }}>
                                    {project.tags.map((tag) => (
                                        <li
                                            key={tag}
                                            className="px-3 py-1.5 rounded-md border border-white/10 shadow-sm"
                                            style={{
                                                background: "rgba(255,255,255,0.03)",
                                                color: "var(--text-primary)",
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
                <div className="mt-16 text-center">
                    <a
                        href="https://github.com/ZakariaMakhlouf45000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 border rounded font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                        style={{
                            borderColor: "var(--bg-tertiary)",
                            color: "var(--text-primary)",
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget;
                            el.style.borderColor = "var(--accent)";
                            el.style.color = "var(--accent)";
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget;
                            el.style.borderColor = "var(--bg-tertiary)";
                            el.style.color = "var(--text-primary)";
                        }}
                    >
                        <span>Voir plus sur GitHub</span>
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </Reveal>
        </section>
    );
}