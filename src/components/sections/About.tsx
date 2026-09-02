"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";

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
            className={`min-h-[100px] md:min-h-[80px] ${showCursor ? "typing-cursor" : ""}`}
            style={{ color: "var(--text-secondary)" }}
        >
            {displayText}
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

            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2 leading-relaxed space-y-4">
                    <Typewriter />

                    <Reveal delay={200}>
                        <p style={{ color: "var(--text-secondary)" }}>
                            Aujourd&apos;hui, je suis en{" "}
                            <span className="highlight">BUT Informatique</span> à l&apos;IUT
                            d&apos;Orléans, où je consolide mes bases en algorithmique,
                            gestion de bases de données et architecture réseau. Mon objectif
                            est de devenir un ingénieur logiciel complet, capable de résoudre
                            des problèmes complexes.
                        </p>
                    </Reveal>

                    <Reveal delay={300}>
                        <p style={{ color: "var(--text-secondary)" }}>
                            En dehors du code, je m&apos;intéresse beaucoup à{" "}
                            <span className="highlight">l&apos;Intelligence Artificielle</span>{" "}
                            et à la cybersécurité.
                        </p>
                    </Reveal>

                    {/* Timeline */}
                    <Reveal delay={400}>
                        <div
                            className="mt-8 pt-8"
                            style={{ borderTop: "1px solid var(--bg-tertiary)" }}
                        >
                            <h3
                                className="font-bold mb-6 flex items-center gap-2"
                                style={{ color: "var(--text-heading)" }}
                            >
                                <svg
                                    className="w-5 h-5"
                                    style={{ color: "var(--accent)" }}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 14l9-5-9-5-9 5 9 5z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    />
                                </svg>
                                Parcours Académique
                            </h3>

                            <div
                                className="space-y-6 ml-3 pl-8 relative"
                                style={{ borderLeft: "2px solid var(--bg-tertiary)" }}
                            >
                                {timeline.map((item, i) => (
                                    <div key={i} className="relative group">
                                        <span
                                            className="absolute -left-[39px] top-1 w-4 h-4 rounded-full border-4 group-hover:scale-125 transition-transform"
                                            style={{
                                                backgroundColor: item.active
                                                    ? "var(--accent)"
                                                    : "var(--text-secondary)",
                                                borderColor: "var(--bg-primary)",
                                            }}
                                        />
                                        <h4 className="text-lg font-bold" style={{ color: "var(--text-heading)" }}>
                                            {item.title}
                                        </h4>
                                        <p className="text-sm font-mono mb-1" style={{ color: "var(--accent)" }}>
                                            {item.period}
                                        </p>
                                        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Photo */}
                <Reveal delay={500} className="mx-auto md:mx-0">
                    <div className="relative group w-[260px] max-w-full">
                        <div
                            className="absolute inset-0 border-2 rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"
                            style={{ borderColor: "var(--accent)" }}
                        />
                        <div
                            className="relative rounded overflow-hidden aspect-[3/4] flex items-center justify-center shadow-lg group-hover:filter-none transition-all duration-300"
                            style={{ background: "var(--bg-tertiary)" }}
                        >
                            <img
                                src={`${basePath}/zak-photo.png`}
                                alt="Photo de Zakaria Makhlouf"
                                className="w-full h-full object-cover"
                            />
                            <div
                                className="absolute inset-0 group-hover:bg-transparent transition-colors duration-300"
                                style={{ background: "rgba(100, 255, 218, 0.15)" }}
                            />
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
