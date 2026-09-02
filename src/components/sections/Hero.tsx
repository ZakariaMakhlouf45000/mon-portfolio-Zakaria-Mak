"use client";

import Reveal from "@/components/ui/Reveal";

const signals = [
    "Animation-driven front-end",
    "Expérience immersive & performante",
    "Disponible pour alternance 24 mois",
];

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-24">
            <div className="floating-orb w-36 h-36 top-[15%] right-[9%] hidden md:block" style={{ background: "rgba(59, 130, 246, 0.18)" }} />
            <div className="floating-orb w-28 h-28 bottom-[18%] left-[5%] hidden lg:block" style={{ background: "rgba(100, 255, 218, 0.12)", animationDelay: "1.4s" }} />

            <div className="w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
                <div className="space-y-8">
                    <Reveal>
                        <p className="section-kicker">Portfolio créatif • Front-end premium</p>
                    </Reveal>

                    <Reveal delay={120}>
                        <h1 className="text-[clamp(2.5rem,8vw,6.4rem)] leading-[0.95] font-extrabold" style={{ color: "var(--text-heading)" }}>
                            Zakaria
                            <span className="block" style={{ color: "var(--accent)" }}>Makhlouf</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={200}>
                        <p className="max-w-2xl text-lg md:text-xl leading-relaxed" style={{ color: "var(--text-primary)" }}>
                            Je conçois des expériences web cinématiques où motion design, profondeur et performance travaillent ensemble.
                            Mon objectif : transformer chaque projet en une interface mémorable et techniquement solide.
                        </p>
                    </Reveal>

                    <Reveal delay={300}>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="px-7 py-4 rounded-md border font-mono text-sm transition-all duration-300 hover:-translate-y-1"
                                style={{ borderColor: "var(--accent)", color: "var(--accent)", background: "var(--border-accent)" }}
                            >
                                Explorer mes projets
                            </a>
                            <a
                                href="#contact"
                                className="px-7 py-4 rounded-md border font-mono text-sm transition-all duration-300 hover:-translate-y-1"
                                style={{ borderColor: "var(--border-subtle)", color: "var(--text-primary)" }}
                            >
                                Me contacter
                            </a>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={380} direction="left">
                    <div className="premium-panel relative p-6 md:p-8 rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 opacity-35" style={{ background: "radial-gradient(circle at 80% 20%, rgba(100, 255, 218, 0.24), transparent 45%)" }} />
                        <div className="relative space-y-6">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono tracking-widest" style={{ color: "var(--accent)" }}>SIGNALS</span>
                                <span className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>2026</span>
                            </div>

                            <ul className="space-y-4">
                                {signals.map((signal, index) => (
                                    <li key={signal} className="glass-card rounded-2xl p-4">
                                        <p className="text-xs font-mono mb-1" style={{ color: "var(--accent)" }}>{`0${index + 1}`}</p>
                                        <p className="font-semibold" style={{ color: "var(--text-heading)" }}>{signal}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className="rounded-2xl p-5 border" style={{ borderColor: "var(--border-subtle)", background: "rgba(255,255,255,0.02)" }}>
                                <p className="text-xs uppercase tracking-[0.16em] mb-2" style={{ color: "var(--text-secondary)" }}>Focus actuel</p>
                                <p className="text-xl font-semibold" style={{ color: "var(--text-heading)" }}>Alternance 24 mois · Septembre 2026</p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
