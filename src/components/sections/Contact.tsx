"use client";

import Reveal from "@/components/ui/Reveal";

export default function Contact() {
    return (
        <section id="contact" className="py-24 text-center flex flex-col items-center max-w-2xl mx-auto">
            <Reveal delay={100}>
                <h2
                    className="flex flex-col items-center text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight relative group"
                    style={{ fontFamily: 'var(--font-syne)' }}
                >
                    {/* Glass Numbering */}
                    <div className="relative flex items-center justify-center mb-6">
                        <span className="absolute inset-0 blur-md rounded-full transition-colors duration-500 opacity-20 group-hover:opacity-40" style={{ backgroundColor: "var(--accent)" }} />
                        <span className="relative font-mono text-sm md:text-base font-bold px-5 py-2 rounded-[14px] uppercase tracking-widest backdrop-blur-md border shadow-sm" style={{ backgroundColor: "var(--bg-tertiary)", color: "var(--accent)", borderColor: "var(--accent)" }}>
                            04. Et maintenant ?
                        </span>
                    </div>

                    {/* Glowing Theme-Adaptive Text */}
                    <span className="text-transparent bg-clip-text transition-all duration-700 pb-2" style={{ backgroundImage: "linear-gradient(to bottom right, var(--text-heading), var(--text-secondary))" }}>
                        Restons en contact
                    </span>

                    {/* Sci-Fi Animated Centered Divider Line */}
                    <div className="mt-8 relative h-[2px] w-24 overflow-hidden rounded-full opacity-60">
                        <div className="absolute inset-0 bg-[var(--bg-tertiary)]" />
                        <div className="absolute top-0 left-0 h-full w-full -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out" style={{ backgroundImage: "linear-gradient(to right, transparent, var(--text-heading), transparent)" }} />
                    </div>
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
                <style>{`
                    @keyframes mail-float {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-4px); }
                    }
                    @keyframes in-wiggle {
                        0%, 100% { transform: rotate(-10deg) scale(1.1); }
                        50% { transform: rotate(10deg) scale(1.1); }
                    }
                `}</style>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <a
                        href="mailto:zakaria.makhlouf45000@gmail.com"
                        className="group glass-card px-8 py-4 rounded-xl font-mono flex items-center gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(20,184,166,0.25)] relative overflow-hidden box-3d-relief"
                        style={{
                            color: "var(--accent)",
                            borderColor: "var(--accent)",
                        }}
                    >
                        <div className="absolute inset-0 bg-teal-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:block" style={{ animation: "mail-float 2s ease-in-out infinite" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <span className="relative z-10 font-bold">M&apos;envoyer un email</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/zakaria-makhlouf-8a263b309/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group glass-card px-8 py-4 rounded-xl font-mono flex items-center gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(255,255,255,0.1)] relative overflow-hidden box-3d-relief"
                        style={{ color: "var(--text-primary)" }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "#38bdf8"; // LinkedIn blue tint
                            (e.currentTarget as HTMLElement).style.borderColor = "#38bdf8";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                            (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                        }}
                    >
                        <div className="absolute inset-0 bg-[#38bdf8]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <svg className="w-5 h-5 relative z-10 transition-transform group-hover:block" style={{ animation: "in-wiggle 1s ease-in-out infinite" }} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        <span className="relative z-10 font-bold">LinkedIn</span>
                    </a>
                </div>
            </Reveal>
        </section>
    );
}
