"use client";

import Reveal from "@/components/ui/Reveal";

const principles = [
    "Narration visuelle utile, jamais décorative.",
    "Interfaces rapides, accessibles et fluides.",
    "Détails UI soignés pour un rendu premium.",
];

export default function About() {
    return (
        <section id="about">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
                <Reveal className="lg:col-span-7">
                    <div className="premium-panel rounded-3xl p-7 md:p-9">
                        <p className="section-kicker mb-3">À propos</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-5" style={{ color: "var(--text-heading)" }}>
                            Un profil humain, ambitieux et orienté impact.
                        </h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--text-primary)" }}>
                            Basé à Orléans, je suis étudiant en BUT Informatique et je développe des interfaces qui combinent exigence technique et sens visuel.
                            J&apos;aime transformer des idées complexes en produits clairs, élégants et utilisables.
                        </p>
                        <p className="text-lg leading-relaxed" style={{ color: "var(--text-primary)" }}>
                            Je recherche une <span className="highlight">alternance de 24 mois</span> à partir de septembre 2026 pour contribuer à des projets web modernes et exigeants.
                        </p>
                    </div>
                </Reveal>

                <Reveal className="lg:col-span-5" delay={140}>
                    <div className="space-y-4">
                        {principles.map((principle, index) => (
                            <div key={principle} className="glass-card rounded-2xl p-5">
                                <p className="text-xs font-mono mb-2" style={{ color: "var(--accent)" }}>{`0${index + 1}`}</p>
                                <p style={{ color: "var(--text-heading)" }}>{principle}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
