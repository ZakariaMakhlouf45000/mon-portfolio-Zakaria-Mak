"use client";

import Reveal from "@/components/ui/Reveal";

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-start pt-20"
        >
            <Reveal delay={0}>
                <p className="font-mono mb-5" style={{ color: "var(--accent)" }}>
                    Salut, je m&apos;appelle
                </p>
            </Reveal>

            <Reveal delay={100}>
                <h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
                    style={{ color: "var(--text-heading)" }}
                >
                    Zakaria Makhlouf.
                </h1>
            </Reveal>

            <Reveal delay={200}>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8" style={{ color: "var(--text-secondary)" }}>
                    Je conçois le futur du web.
                </h2>
            </Reveal>

            <Reveal delay={300}>
                <p
                    className="max-w-xl text-lg mb-12 leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                >
                    Étudiant en{" "}
                    <span className="highlight">BUT Informatique</span>, je suis un
                    développeur passionné par la création d&apos;architectures robustes et
                    d&apos;interfaces intuitives.
                    <br />
                    Je recherche une{" "}
                    <span className="highlight font-semibold">
                        alternance de 24 mois
                    </span>{" "}
                    (Rythme 3 semaines/1 semaine) à partir de Septembre 2026.
                </p>
            </Reveal>

            <Reveal delay={400}>
                <div className="flex flex-wrap gap-4">
                    <a
                        href="#contact"
                        className="px-8 py-4 border rounded font-mono transition-all duration-300 hover:shadow-[0_0_20px_var(--border-accent)]"
                        style={{
                            borderColor: "var(--accent)",
                            color: "var(--accent)",
                            backgroundColor: "var(--border-accent)",
                        }}
                    >
                        Me contacter
                    </a>
                    <a
                        href="#projects"
                        className="px-8 py-4 border rounded font-mono transition-all duration-300"
                        style={{
                            borderColor: "var(--text-secondary)",
                            color: "var(--text-primary)",
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget;
                            el.style.borderColor = "var(--text-primary)";
                            el.style.color = "var(--text-heading)";
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget;
                            el.style.borderColor = "var(--text-secondary)";
                            el.style.color = "var(--text-primary)";
                        }}
                    >
                        Voir mes projets
                    </a>
                </div>
            </Reveal>
        </section>
    );
}
