"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";

const typewriterText =
    "Bonjour ! Je suis Zakaria, un passionné d'informatique basé à Orléans. Mon intérêt pour le développement a commencé lorsque j'ai voulu comprendre comment fonctionnaient mes jeux vidéo préférés, ce qui m'a conduit à écrire mes premières lignes de code.";
const basePath = process.env.NODE_ENV === "production" ? "/mon-portfolio-Zakaria-Mak" : "";

function Typewriter() {
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(false);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                    setShowCursor(true);
                    observer.unobserve(element);
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;

        let i = 0;
        const type = () => {
            if (i < typewriterText.length) {
                setDisplayText(typewriterText.slice(0, i + 1));
                i++;
                setTimeout(type, Math.random() * 30 + 20);
            } else {
                setShowCursor(false);
            }
        };
        type();
    }, [started]);

    return (
        <p
            ref={ref}
            className={`min-h-[100px] md:min-h-[80px] text-lg lg:text-xl font-medium leading-relaxed drop-shadow-sm ${showCursor ? "typing-cursor" : ""}`}
            style={{ color: "var(--text-primary)" }}
        >
            <span className="opacity-90">{displayText}</span>
        </p>
    );
}

const timeline = [
    {
        title: "BUT Informatique",
        period: "2024 - Présent | IUT d'Orléans",
        desc: "Développement logiciel, Web, Réseaux, Bases de données.",
        active: true,
    },
    {
        title: "Baccalauréat STI2D",
        period: "2024 | Lycée Benjamin Franklin",
        desc: "Mention Assez Bien. Spécialité Systèmes d'Information et Numérique (SIN).",
        active: false,
    },
];

export default function About() {
    return (
        <section id="about" className="py-20">
            <Reveal>
                <h2
                    className="flex items-center text-2xl md:text-3xl font-bold mb-10"
                    style={{ color: "var(--text-heading)" }}
                >
                    <span className="font-mono text-xl mr-4" style={{ color: "var(--accent)" }}>
                        01.
                    </span>
                    À propos de moi
                    <span
                        className="h-[1px] w-1/3 ml-6"
                        style={{ background: "var(--bg-tertiary)" }}
                    />
                </h2>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-12 items-start">
                <div className="md:col-span-2">
                    <TiltCard rotateLimit={2} className="relative p-6 md:p-10 rounded-3xl box-3d-relief backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] mt-2 group overflow-hidden">
                        {/* Ambient Card Background Glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                        <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
                            <div className="font-mono text-sm mb-6 text-teal-400/60 select-none">{'<about>'}</div>

                            <div className="space-y-6" style={{ transformStyle: "preserve-3d" }}>
                                <Typewriter />

                                <Reveal delay={200}>
                                    <p className="text-[16px] md:text-lg leading-relaxed" style={{ color: "var(--text-secondary)", transform: "translateZ(15px)" }}>
                                        Aujourd&apos;hui, je suis en{" "}
                                        <span className="inline-flex items-center px-3 py-0.5 rounded-lg bg-teal-500/10 border border-teal-500/30 shadow-[0_0_15px_rgba(20,184,166,0.15)] font-mono text-[14px] font-bold tracking-wide mr-1" style={{ color: "var(--accent)", transform: "translateY(-1px)" }}>BUT Informatique</span>
                                        à l&apos;<strong className="text-white drop-shadow-md px-1">IUT d&apos;Orléans</strong>, où je consolide mes bases en algorithmique,
                                        gestion de bases de données et architecture réseau.
                                        <br /><br />
                                        Mon objectif est de devenir un ingénieur logiciel complet, capable de résoudre
                                        des problèmes architecturaux complexes et d'optimiser l'expérience utilisateur.
                                    </p>
                                </Reveal>

                                <Reveal delay={300}>
                                    <p className="text-[16px] md:text-lg leading-relaxed" style={{ color: "var(--text-secondary)", transform: "translateZ(10px)" }}>
                                        En dehors du code, je m&apos;intéresse profondément aux avancées de{" "}
                                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 drop-shadow-[0_0_10px_rgba(45,212,191,0.4)]">
                                            l&apos;Intelligence Artificielle
                                        </span>{" "}
                                        et aux enjeux critiques de la{" "}
                                        <span className="text-white px-1 underline decoration-teal-500/50 decoration-2 underline-offset-4">
                                            cybersécurité
                                        </span>.
                                    </p>
                                </Reveal>
                            </div>

                            {/* Timeline Inside the Card */}
                            <Reveal delay={400}>
                                <div
                                    className="mt-10 pt-8"
                                    style={{ borderTop: "1px solid var(--border-subtle)", transform: "translateZ(15px)" }}
                                >
                                    <h3
                                        className="font-bold mb-8 flex items-center gap-3 text-lg"
                                        style={{ color: "var(--text-heading)" }}
                                    >
                                        <span className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20 box-3d-relief shadow-[0_0_10px_rgba(20,184,166,0.2)]">
                                            <svg
                                                className="w-5 h-5"
                                                style={{ color: "var(--accent)" }}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            </svg>
                                        </span>
                                        Parcours Académique
                                    </h3>

                                    <div
                                        className="space-y-8 ml-4 pl-8 relative"
                                        style={{ borderLeft: "2px solid var(--bg-tertiary)" }}
                                    >
                                        {timeline.map((item, i) => (
                                            <div key={i} className="relative group/timeline hover:-translate-y-1 transition-transform duration-300">
                                                <span
                                                    className={`absolute -left-[40px] top-1 w-4 h-4 rounded-full border-4 shadow-xl transition-all duration-300 ${item.active ? 'animate-pulse scale-110 shadow-[0_0_10px_rgba(20,184,166,0.6)]' : 'group-hover/timeline:scale-125'}`}
                                                    style={{
                                                        backgroundColor: item.active ? "var(--accent)" : "transparent",
                                                        borderColor: item.active ? "var(--text-heading)" : "var(--text-secondary)",
                                                    }}
                                                />
                                                <h4 className="text-lg font-bold group-hover/timeline:text-teal-300 transition-colors" style={{ color: "var(--text-heading)" }}>
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm font-mono mb-2 opacity-90" style={{ color: "var(--accent)" }}>
                                                    {item.period}
                                                </p>
                                                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>

                            <div className="font-mono text-sm mt-8 text-teal-400/60 select-none">{'</about>'}</div>
                        </div>
                    </TiltCard>
                </div>

                {/* Photo */}
                <Reveal delay={500} className="mx-auto md:mx-0">
                    <div className="relative group w-[260px] max-w-full">
                        {/* Cadre décoratif stabilisé (sans événements pointeur pour éviter les sautillements) */}
                        <div
                            className="absolute inset-0 border-2 rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 ease-out pointer-events-none"
                            style={{ borderColor: "var(--accent)" }}
                        />
                        {/* Conteneur principal de l'image */}
                        <div
                            className="relative rounded overflow-hidden aspect-[3/4] flex items-center justify-center shadow-lg transition-transform duration-500 ease-out group-hover:-translate-y-1"
                            style={{ background: "var(--bg-tertiary)" }}
                        >
                            <img
                                src={`${basePath}/zak-photo.png`}
                                alt="Photo de Zakaria Makhlouf"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            {/* Voile d'accentuation subtil */}
                            <div
                                className="absolute inset-0 transition-opacity duration-500 ease-out opacity-20 group-hover:opacity-0"
                                style={{ background: "var(--accent)", mixBlendMode: "multiply" }}
                            />
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
