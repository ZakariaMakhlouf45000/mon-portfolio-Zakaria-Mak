"use client";

import Reveal from "@/components/ui/Reveal";

const lanes = [
    {
        title: "Engineering",
        items: ["Java / JEE", "Python", "SQL", "API Design"],
    },
    {
        title: "Front-end",
        items: ["React", "Next.js", "Tailwind", "Motion UI"],
    },
    {
        title: "Infrastructure",
        items: ["Linux", "Cisco", "Réseaux", "Sécurité"],
    },
];

export default function Expertise() {
    return (
        <section id="skills">
            <Reveal>
                <div className="max-w-3xl mb-12">
                    <p className="section-kicker mb-3">Compétences · stack · outils</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: "var(--text-heading)" }}>
                        Stack technique orchestrée pour des expériences complètes.
                    </h2>
                    <p className="text-lg" style={{ color: "var(--text-primary)" }}>
                        De l&apos;architecture backend à l&apos;interface immersive, je relie la technique et le design pour livrer des produits cohérents.
                    </p>
                </div>
            </Reveal>

            <div className="space-y-6">
                {lanes.map((lane, index) => (
                    <Reveal key={lane.title} delay={index * 120}>
                        <div className="premium-panel rounded-3xl p-6 md:p-8">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <h3 className="text-2xl font-bold" style={{ color: "var(--text-heading)" }}>{lane.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {lane.items.map((item) => (
                                        <span
                                            key={item}
                                            className="font-mono text-xs px-3 py-1.5 rounded-full border transition-all duration-300 hover:-translate-y-0.5"
                                            style={{ borderColor: "var(--border-subtle)", color: "var(--text-primary)", background: "rgba(255,255,255,0.02)" }}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
