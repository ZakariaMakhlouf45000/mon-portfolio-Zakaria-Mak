"use client";

import Reveal from "@/components/ui/Reveal";

export default function Contact() {
    return (
        <section id="contact" className="py-24 text-center max-w-2xl mx-auto">
            <Reveal>
                <p className="font-mono mb-4 text-sm" style={{ color: "var(--accent)" }}>
                    04. Et maintenant ?
                </p>
            </Reveal>

            <Reveal delay={100}>
                <h2
                    className="text-4xl md:text-5xl font-bold mb-6"
                    style={{ color: "var(--text-heading)" }}
                >
                    Restons en contact
                </h2>
            </Reveal>

            <Reveal delay={200}>
                <p
                    className="text-lg mb-12 leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                >
                    À la recherche d&apos;une alternance pour{" "}
                    <strong className="highlight">Septembre 2026</strong>. Ma boîte de
                    réception est toujours ouverte, que ce soit pour une opportunité ou
                    simplement pour échanger !
                </p>
            </Reveal>

            <Reveal delay={300}>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <a
                        href="mailto:zakaria.makhlouf45000@gmail.com"
                        className="glass-card px-8 py-4 rounded font-mono flex items-center gap-2 transition-all"
                        style={{
                            color: "var(--accent)",
                            borderColor: "var(--accent)",
                        }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        M&apos;envoyer un email
                    </a>

                    <a
                        href="https://www.linkedin.com/in/zakaria-makhlouf-8a263b309/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card px-8 py-4 rounded font-mono flex items-center gap-2 transition-all"
                        style={{ color: "var(--text-primary)" }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "var(--text-heading)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                        }}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                    </a>
                </div>
            </Reveal>
        </section>
    );
}
