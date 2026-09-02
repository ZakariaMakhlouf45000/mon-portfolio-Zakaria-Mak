"use client";

import Reveal from "@/components/ui/Reveal";

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
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
        ),
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, i) => (
                    <Reveal key={project.title} delay={i * 120}>
                        <div className="glass-card rounded-xl overflow-hidden flex flex-col group h-full">
                            {/* Card Header */}
                            <div
                                className={`h-40 bg-gradient-to-r ${project.gradient} relative overflow-hidden p-6 transition-colors duration-500`}
                            >
                                <div className="flex justify-between items-start z-10 relative">
                                    <div style={{ color: "var(--accent)" }}>{project.icon}</div>
                                    <div className="flex gap-3">
                                        <a
                                            href="#"
                                            className="transition-colors"
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
                            <div className="p-6 flex flex-col flex-grow">
                                <h3
                                    className="text-xl font-bold mb-2 transition-colors group-hover:text-[var(--accent)]"
                                    style={{ color: "var(--text-heading)" }}
                                >
                                    {project.title}
                                </h3>
                                <div className="text-xs font-mono mb-4" style={{ color: "var(--text-secondary)" }}>
                                    {project.subtitle}
                                </div>
                                <p className="text-sm mb-6 flex-grow" style={{ color: "var(--text-secondary)" }}>
                                    {project.description}
                                </p>
                                <ul className="flex flex-wrap gap-2 text-xs font-mono mt-auto">
                                    {project.tags.map((tag) => (
                                        <li
                                            key={tag}
                                            className="px-2 py-1 rounded"
                                            style={{
                                                background: "var(--bg-secondary)",
                                                color: "var(--accent-blue)",
                                            }}
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

            {/* GitHub CTA */}
            <Reveal delay={500}>
                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/ZakariaMakhlouf45000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border rounded transition-all duration-300 font-mono text-sm"
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
                        Voir plus sur GitHub
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </Reveal>
        </section>
    );
}
