"use client";

import { MouseEvent, useRef } from "react";
import Reveal from "@/components/ui/Reveal";

const projects = [
    {
        title: "Gestion de Librairie",
        context: "SAE 2.01 · Application desktop complète",
        role: "Architecture, UI Java Swing, logique métier",
        stack: ["Java", "Swing", "MySQL"],
        result: "Automatisation des prêts, adhérents et stock avec workflows fiables.",
    },
    {
        title: "Architecture Réseau Multi-sites",
        context: "SAE 2.03 · Infrastructure sécurisée",
        role: "Conception réseau, segmentation, routage",
        stack: ["Cisco IOS", "GNS3", "VLAN", "ACL"],
        result: "Réseau résilient avec isolation des zones critiques (DMZ).",
    },
    {
        title: "Analyse de Graphes",
        context: "Algorithmique avancée · Data JSON massive",
        role: "Modélisation, optimisation, traitement de graphes",
        stack: ["Java", "Graph Theory", "JSON"],
        result: "Calculs de chemins minimaux sur grands ensembles de données.",
    },
    {
        title: "Jeu Interactif (Pendu)",
        context: "IHM · Expérience utilisateur",
        role: "Design UX, architecture événementielle, animations",
        stack: ["JavaFX", "UX", "Event-Driven"],
        result: "Prototype pédagogique fluide avec feedback visuel immédiat.",
    },
];

function TiltProject({
    title,
    context,
    role,
    stack,
    result,
    large,
}: {
    title: string;
    context: string;
    role: string;
    stack: string[];
    result: string;
    large?: boolean;
}) {
    const cardRef = useRef<HTMLDivElement>(null);

    const onMove = (event: MouseEvent<HTMLDivElement>) => {
        const element = cardRef.current;
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * -6;
        const rotateY = ((x / rect.width) - 0.5) * 8;
        element.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    };

    const reset = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
        }
    };

    return (
        <article
            ref={cardRef}
            onMouseMove={onMove}
            onMouseLeave={reset}
            className={`premium-panel rounded-3xl p-6 md:p-7 h-full transition-transform duration-300 ${large ? "lg:p-9" : ""}`}
        >
            <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                    <p className="section-kicker mb-2">Case study</p>
                    <h3 className={`font-bold ${large ? "text-3xl" : "text-2xl"}`} style={{ color: "var(--text-heading)" }}>{title}</h3>
                    <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>{context}</p>
                </div>
                <span className="text-xs font-mono px-3 py-2 rounded-full border" style={{ borderColor: "var(--border-subtle)", color: "var(--accent)" }}>
                    Featured
                </span>
            </div>

            <div className="space-y-4">
                <p style={{ color: "var(--text-primary)" }}><span className="highlight">Rôle :</span> {role}</p>
                <p style={{ color: "var(--text-primary)" }}><span className="highlight">Résultat :</span> {result}</p>
                <ul className="flex flex-wrap gap-2 pt-2">
                    {stack.map((tech) => (
                        <li key={tech} className="text-xs font-mono px-3 py-1.5 rounded-full" style={{ background: "var(--bg-tertiary)", color: "var(--accent-blue)" }}>
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default function Projects() {
    return (
        <section id="projects">
            <Reveal>
                <div className="max-w-3xl mb-12">
                    <p className="section-kicker mb-3">Projets en vedette</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: "var(--text-heading)" }}>
                        Des réalisations pensées comme des pièces centrales.
                    </h2>
                    <p className="text-lg" style={{ color: "var(--text-primary)" }}>
                        Je privilégie des projets concrets avec un contexte clair, un rôle défini et un impact mesurable.
                    </p>
                </div>
            </Reveal>

            <div className="grid lg:grid-cols-12 gap-6">
                <Reveal className="lg:col-span-7" delay={80}>
                    <TiltProject {...projects[0]} large />
                </Reveal>
                <Reveal className="lg:col-span-5" delay={150}>
                    <TiltProject {...projects[1]} />
                </Reveal>
                <Reveal className="lg:col-span-5" delay={230}>
                    <TiltProject {...projects[2]} />
                </Reveal>
                <Reveal className="lg:col-span-7" delay={290}>
                    <TiltProject {...projects[3]} large />
                </Reveal>
            </div>
        </section>
    );
}
