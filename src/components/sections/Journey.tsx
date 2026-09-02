"use client";

import Reveal from "@/components/ui/Reveal";

const steps = [
    {
        title: "BUT Informatique · IUT d'Orléans",
        period: "2024 — aujourd'hui",
        description: "Approfondissement en développement logiciel, architecture réseau, bases de données et méthodes de travail en équipe.",
    },
    {
        title: "Projets académiques orientés produit",
        period: "2024 — 2026",
        description: "Réalisation de cas concrets (desktop, réseau, algorithmique) avec documentation, tests manuels et livrables structurés.",
    },
    {
        title: "Approche de travail",
        period: "En continu",
        description: "Je pars du besoin utilisateur, je structure l'architecture, puis je pousse la finition visuelle et la performance jusqu'au détail.",
    },
];

export default function Journey() {
    return (
        <section id="journey">
            <Reveal>
                <div className="max-w-3xl mb-12">
                    <p className="section-kicker mb-3">Parcours · formation · méthode</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: "var(--text-heading)" }}>
                        Une progression construite autour de la rigueur et de la création.
                    </h2>
                </div>
            </Reveal>

            <div className="relative">
                <div className="absolute left-2 top-0 bottom-0 w-px" style={{ background: "var(--border-subtle)" }} />
                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <Reveal key={step.title} delay={index * 120}>
                            <article className="premium-panel rounded-3xl p-6 md:p-8 ml-7 relative">
                                <span className="absolute -left-[35px] top-8 w-4 h-4 rounded-full border-4" style={{ background: "var(--accent)", borderColor: "var(--bg-primary)" }} />
                                <p className="text-xs font-mono mb-2" style={{ color: "var(--accent)" }}>{step.period}</p>
                                <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--text-heading)" }}>{step.title}</h3>
                                <p style={{ color: "var(--text-primary)" }}>{step.description}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
