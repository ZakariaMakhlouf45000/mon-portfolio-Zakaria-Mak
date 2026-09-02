"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const basePath = process.env.NODE_ENV === "production" ? "/mon-portfolio-Zakaria-Mak" : "";

const navItems = [
    { label: "À propos", href: "#about", num: "01" },
    { label: "Projets", href: "#projects", num: "02" },
    { label: "Compétences", href: "#skills", num: "03" },
    { label: "Contact", href: "#contact", num: "04" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Active section detection
            const sections = document.querySelectorAll("section");
            let current = "";
            sections.forEach((section) => {
                const top = section.offsetTop;
                if (window.pageYOffset >= top - 300) {
                    current = section.getAttribute("id") || "";
                }
            });
            setActiveSection(current);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // La navbar est étendue si on ne scrolle pas OU si on la survole
    const isExpanded = !scrolled || isHovered;

    return (
        <>
            {/* Desktop Dynamic Island */}
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] hidden md:flex justify-center w-full pointer-events-none perspective-1000">
                <nav
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative overflow-hidden pointer-events-auto rounded-full flex items-center justify-center p-2"
                    style={{
                        width: isExpanded ? '650px' : '360px',
                        height: '64px',
                        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.5s, box-shadow 0.5s",

                        /* Deep 3D Texture & Theme responsiveness block */
                        backgroundColor: "var(--bg-tertiary)",
                        backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(0,0,0,0.15))",
                        border: "1px solid var(--border-subtle)",
                        // Ombre projetée 3D + biseautage de la vitre avec inset
                        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.15), inset 0 -3px 6px rgba(0,0,0,0.25)",
                        backdropFilter: "blur(24px)",
                        WebkitBackdropFilter: "blur(24px)",
                    }}
                >
                    {/* Contenu Compact (Bulle réduite) */}
                    <div
                        className={`absolute inset-0 flex items-center justify-between px-6 transition-all duration-300 ${isExpanded ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className="w-8 h-8 rounded-full border font-mono font-bold flex items-center justify-center text-sm shadow-inner"
                                style={{ borderColor: "var(--accent)", color: "var(--accent)", textShadow: "0 0 10px var(--border-accent)" }}
                            >
                                Z
                            </div>
                            <span className="font-mono text-sm tracking-widest uppercase font-semibold" style={{ color: "var(--text-heading)" }}>Zakaria</span>
                        </div>
                        <div
                            className="flex items-center gap-2 px-4 py-1.5 rounded-full shadow-inner"
                            style={{ backgroundColor: "var(--border-accent)", border: "1px solid var(--border-accent)" }}
                        >
                            <div className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ backgroundColor: "var(--accent)", boxShadow: "0 0 10px var(--accent)" }} />
                            <span className="text-xs font-mono whitespace-nowrap font-medium" style={{ color: "var(--text-heading)" }}>Recherche de stage</span>
                        </div>
                    </div>

                    {/* Contenu Étendu (Menu complet) avec effet Mac Dock */}
                    <div
                        className={`absolute inset-0 flex items-center justify-between px-8 transition-all duration-400 ${isExpanded ? 'opacity-100 scale-100 delay-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                    >
                        <ul className="flex items-center gap-6 font-mono text-xs mac-dock">
                            {navItems.map((item) => (
                                <li key={item.href} className="dock-item relative">
                                    <a
                                        href={item.href}
                                        className="flex items-center gap-1 font-bold"
                                        style={{ color: activeSection === item.href.slice(1) ? "var(--accent)" : "var(--text-primary)" }}
                                    >
                                        <span className="opacity-50" style={{ color: "var(--accent)" }}>{item.num}.</span>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <a
                                href={`${basePath}/resume.pdf`}
                                className="px-4 py-1.5 border rounded-full font-mono text-xs transition-all hover:scale-105 shadow-sm"
                                style={{
                                    borderColor: "var(--border-subtle)",
                                    color: "var(--text-heading)",
                                    backgroundColor: "var(--bg-primary)"
                                }}
                            >
                                CV
                            </a>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Mobile Navbar with same 3D treatments */}
            <div className="md:hidden fixed top-4 right-4 z-[100]">
                <nav
                    className="p-2 flex items-center gap-2 rounded-full"
                    style={{
                        backgroundColor: "var(--bg-tertiary)",
                        backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(0,0,0,0.15))",
                        border: "1px solid var(--border-subtle)",
                        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.15), inset 0 -3px 6px rgba(0,0,0,0.25)",
                        backdropFilter: "blur(24px)",
                        WebkitBackdropFilter: "blur(24px)",
                    }}
                >
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                        style={{ color: "var(--accent)" }}
                    >
                        <span className={`block w-5 h-0.5 bg-current transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-current transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-current transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                    {!isMobileMenuOpen && (
                        <div className="pr-3 pl-1 hidden sm:flex">
                            <div
                                className="flex items-center gap-2 px-3 py-1 rounded-full shadow-inner"
                                style={{ backgroundColor: "var(--border-accent)", border: "1px solid var(--border-accent)" }}
                            >
                                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent)" }} />
                                <span className="text-[10px] font-mono whitespace-nowrap" style={{ color: "var(--text-heading)" }}>En stage</span>
                            </div>
                        </div>
                    )}
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-500 origin-top ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                style={{ backgroundColor: "var(--bg-primary)" }}
            >
                <div
                    className="absolute top-6 left-6 w-10 h-10 rounded-full border font-mono font-bold flex items-center justify-center shadow-inner"
                    style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                >
                    Z
                </div>
                <ul className="flex flex-col items-center gap-8 font-mono">
                    {navItems.map((item) => (
                        <li key={item.href} style={{ transitionDelay: `${parseInt(item.num) * 100}ms` }} className={`transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            <a
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl flex flex-col items-center gap-2"
                                style={{ color: "var(--text-heading)" }}
                            >
                                <span className="text-sm opacity-50" style={{ color: "var(--accent)" }}>{item.num}.</span>
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li className={`mt-4 transition-all duration-500 delay-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                        <div className="flex flex-col items-center gap-6">
                            <ThemeToggle />
                            <a
                                href={`${basePath}/resume.pdf`}
                                className="px-8 py-3 border rounded-full font-bold shadow-inner"
                                style={{
                                    backgroundColor: "var(--border-accent)",
                                    borderColor: "var(--accent)",
                                    color: "var(--text-heading)"
                                }}
                            >
                                Télécharger le CV
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}
