"use client";

import Reveal from "@/components/ui/Reveal";

export default function Contact() {
    return (
        <section id="contact" className="pb-28">
            <Reveal>
                <div className="premium-panel rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 50% 0%, rgba(100,255,218,0.24), transparent 55%)" }} />
                    <div className="relative">
                        <p className="section-kicker mb-4">Prêt à collaborer</p>
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-5" style={{ color: "var(--text-heading)" }}>
                            Construisons une expérience web qui marque.
                        </h2>
                        <p className="text-lg md:text-xl mb-10" style={{ color: "var(--text-primary)" }}>
                            Disponible pour une alternance dès septembre 2026. Parlons produit, design d'interface et ingénierie front-end.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:zakaria.makhlouf45000@gmail.com"
                                className="px-7 py-3.5 rounded-md border font-mono text-sm transition-all duration-300 hover:-translate-y-1"
                                style={{ borderColor: "var(--accent)", color: "var(--accent)", background: "var(--border-accent)" }}
                            >
                                zakaria.makhlouf45000@gmail.com
                            </a>
                            <a
                                href="https://www.linkedin.com/in/zakaria-makhlouf-8a263b309/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-7 py-3.5 rounded-md border font-mono text-sm transition-all duration-300 hover:-translate-y-1"
                                style={{ borderColor: "var(--border-subtle)", color: "var(--text-heading)" }}
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/ZakariaMakhlouf45000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-7 py-3.5 rounded-md border font-mono text-sm transition-all duration-300 hover:-translate-y-1"
                                style={{ borderColor: "var(--border-subtle)", color: "var(--text-heading)" }}
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
