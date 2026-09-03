"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import DreamBubble from "@/components/ui/DreamBubble";

const typewriterText =
    "Bonjour ! Je suis Zakaria, un passionné d'informatique basé à Orléans. Mon intérêt pour le développement a commencé lorsque j'ai voulu comprendre comment fonctionnaient mes jeux vidéo préférés, ce qui m'a conduit à écrire mes premières lignes de code.";
const basePath = "";

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
    const [isHovered, setIsHovered] = useState(false);
    const photoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Enforce auto-hover animations on mobile/touch devices where real hover isn't possible
        const isTouchDevice = window.matchMedia("(hover: none)").matches;

        if (isTouchDevice && photoRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    // Activate hover state if 50% of the photo is visible
                    setIsHovered(entry.isIntersecting);
                },
                { threshold: 0.5 }
            );

            observer.observe(photoRef.current);
            return () => observer.disconnect();
        }
    }, []);

    return (
        <section id="about" className="py-20">
            <Reveal>
                <h2
                    className="flex items-center text-3xl md:text-4xl lg:text-5xl font-extrabold mb-12 md:mb-16 tracking-tight relative group"
                    style={{ fontFamily: 'var(--font-syne)' }}
                >
                    {/* Glass Numbering */}
                    <div className="relative flex items-center justify-center mr-5 md:mr-8">
                        <span className="absolute inset-0 blur-md rounded-full transition-colors duration-500 opacity-20 group-hover:opacity-40" style={{ backgroundColor: "var(--accent)" }} />
                        <span className="relative font-mono text-base md:text-2xl font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-[14px] backdrop-blur-md border" style={{ backgroundColor: "var(--bg-tertiary)", color: "var(--accent)", borderColor: "var(--accent)" }}>
                            01.
                        </span>
                    </div>

                    {/* Glowing Theme-Adaptive Text */}
                    <span className="text-transparent bg-clip-text transition-all duration-700" style={{ backgroundImage: "linear-gradient(to bottom right, var(--text-heading), var(--text-secondary))" }}>
                        À propos de moi
                    </span>

                    {/* Sci-Fi Animated Divider Line */}
                    <div className="flex-1 ml-6 md:ml-10 relative h-[1px] md:h-[2px] overflow-hidden rounded-full opacity-60">
                        <div className="absolute inset-0 bg-[var(--bg-tertiary)]" />
                        <div className="absolute top-0 left-0 h-full w-full -translate-x-[110%] group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out" style={{ backgroundImage: "linear-gradient(to right, transparent, var(--text-heading), transparent)" }} />
                    </div>
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
                                        className="mb-8 flex items-center gap-3 text-lg md:text-xl"
                                    >
                                        <span className="relative p-3 rounded-[16px] bg-gradient-to-br from-teal-500/20 to-teal-600/5 border border-teal-400/30 shadow-[0_10px_25px_rgba(0,0,0,0.6),_inset_0_2px_8px_rgba(20,184,166,0.5)] overflow-hidden flex items-center justify-center">
                                            {/* Glass Glare */}
                                            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

                                            {/* Photorealistic 3D Hat SVG */}
                                            <svg
                                                className="w-10 h-10 drop-shadow-[0_8px_8px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-110 hover:-rotate-6"
                                                viewBox="0 0 100 100"
                                            >
                                                <defs>
                                                    <linearGradient id="boardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="#475569" />
                                                        <stop offset="40%" stopColor="#1e293b" />
                                                        <stop offset="100%" stopColor="#020617" />
                                                    </linearGradient>
                                                    <linearGradient id="baseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                                        <stop offset="0%" stopColor="#0f172a" />
                                                        <stop offset="100%" stopColor="#000000" />
                                                    </linearGradient>
                                                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="#fef08a" />
                                                        <stop offset="40%" stopColor="#eab308" />
                                                        <stop offset="100%" stopColor="#854d0e" />
                                                    </linearGradient>
                                                    <filter id="insetShadow">
                                                        <feDropShadow dx="-2" dy="5" stdDeviation="5" floodColor="#000" floodOpacity="0.8" />
                                                    </filter>
                                                    <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                                                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#eab308" floodOpacity="0.5" />
                                                    </filter>
                                                </defs>

                                                {/* Skull cap (Cylinder underneath) */}
                                                <path d="M 30 50 L 30 70 Q 50 85 70 70 L 70 50 Z" fill="url(#baseGrad)" filter="url(#insetShadow)" />

                                                {/* Board (Top Rhombus) */}
                                                <path d="M 50 25 L 88 43 L 50 63 L 12 43 Z" fill="url(#boardGrad)" stroke="#64748b" strokeWidth="0.5" />

                                                {/* Top Button Center */}
                                                <ellipse cx="50" cy="43" rx="4" ry="2.5" fill="url(#goldGrad)" filter="url(#goldGlow)" />

                                                {/* Tassel String */}
                                                <path d="M 50 43 Q 65 48 78 68" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" strokeLinecap="round" />

                                                {/* Tassel Fringe */}
                                                <path d="M 78 68 L 74 85 L 82 85 Z" fill="url(#goldGrad)" filter="url(#goldGlow)" />
                                            </svg>
                                        </span>
                                        <span className="font-extrabold text-transparent bg-clip-text transition-colors duration-700" style={{ backgroundImage: "linear-gradient(to bottom right, var(--text-heading), var(--text-secondary))" }}>
                                            Parcours Académique
                                        </span>
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
                                                <h4 className="text-lg font-bold group-hover/timeline:text-teal-300 transition-colors text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(to right, var(--text-heading), var(--text-secondary))" }}>
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

                {/* Photo (Sticky on scroll) */}
                <div className="mx-auto md:mx-0 md:sticky md:top-32 self-start will-change-transform z-10 transition-all duration-300">
                    <Reveal delay={500}>
                        <div
                            ref={photoRef}
                            className="relative group w-[270px] max-w-full"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <DreamBubble show={isHovered} />

                            <div
                                style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
                            >
                                {/* ===== OUTER 3D FRAME ===== */}
                                <div
                                    className="relative rounded-2xl transition-transform duration-700 ease-out hover:rotate-y-2"
                                    style={{
                                        transform: isHovered ? "rotateY(0deg) rotateX(0deg) scale(1.02)" : "rotateY(-4deg) rotateX(2deg)",
                                        transformStyle: "preserve-3d",
                                        transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                                    }}
                                >
                                    {/* Deep shadow layer (furthest back) */}
                                    <div
                                        className="absolute -inset-1 rounded-2xl pointer-events-none"
                                        style={{
                                            transform: "translateZ(-40px)",
                                            boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 10px 30px rgba(0,0,0,0.4), 0 50px 100px rgba(0,0,0,0.3)",
                                        }}
                                    />

                                    {/* Glass outer frame */}
                                    <div
                                        className="relative p-[6px] rounded-2xl overflow-hidden"
                                        style={{
                                            background: "linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.03) 50%, rgba(0,0,0,0.2) 100%)",
                                            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3), 0 4px 20px rgba(0,0,0,0.4)",
                                            transform: "translateZ(10px)",
                                            backdropFilter: "blur(20px)",
                                        }}
                                    >
                                        {/* Inner bevel / metallic ring */}
                                        <div
                                            className="relative p-[3px] rounded-xl overflow-hidden"
                                            style={{
                                                background: "linear-gradient(135deg, var(--accent) 0%, rgba(20,184,166,0.2) 40%, rgba(255,255,255,0.05) 60%, var(--accent) 100%)",
                                                transform: "translateZ(5px)",
                                            }}
                                        >
                                            {/* Photo container */}
                                            <div
                                                className="relative rounded-lg overflow-hidden aspect-[3/4] flex items-center justify-center"
                                                style={{
                                                    background: "var(--bg-tertiary)",
                                                    transform: "translateZ(15px)",
                                                    boxShadow: "inset 0 2px 8px rgba(0,0,0,0.6), inset 0 -1px 4px rgba(255,255,255,0.05)",
                                                }}
                                            >
                                                <img
                                                    src={`${basePath}/zak-photo.png`}
                                                    alt="Photo de Zakaria Makhlouf"
                                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                                    style={{ transform: "translateZ(20px)" }}
                                                />

                                                {/* Cinematic top-light reflection */}
                                                <div
                                                    className="absolute inset-0 pointer-events-none transition-opacity duration-700 group-hover:opacity-0"
                                                    style={{
                                                        background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 40%, transparent 80%, rgba(0,0,0,0.3) 100%)",
                                                        transform: "translateZ(25px)",
                                                    }}
                                                />

                                                {/* Accent color vignette */}
                                                <div
                                                    className="absolute inset-0 opacity-15 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none"
                                                    style={{
                                                        background: "radial-gradient(ellipse at center, transparent 50%, var(--accent) 150%)",
                                                        mixBlendMode: "color",
                                                        transform: "translateZ(22px)",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating accent glow behind frame */}
                                    <div
                                        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                                        style={{
                                            transform: "translateZ(-20px) scale(1.1)",
                                            boxShadow: "0 0 60px rgba(20,184,166,0.2), 0 0 120px rgba(20,184,166,0.1)",
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Name badge floating below */}
                            <div
                                className="mt-6 text-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500"
                                style={{ transform: "perspective(800px) translateZ(30px)" }}
                            >
                                <span
                                    className="inline-block px-4 py-1.5 rounded-full font-mono text-[11px] tracking-widest uppercase backdrop-blur-md border"
                                    style={{
                                        color: "var(--accent)",
                                        backgroundColor: "var(--bg-tertiary)",
                                        borderColor: "var(--border-accent)",
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                                    }}
                                >
                                    Zakaria Makhlouf
                                </span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
