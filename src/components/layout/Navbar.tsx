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
            {/* Global Celestial Theme Toggle Background Element */}
            <ThemeToggle />

            {/* Desktop Dynamic Island */}
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] hidden md:flex justify-center w-full pointer-events-none perspective-1000">
                <nav
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative overflow-hidden pointer-events-auto rounded-full flex items-center justify-center p-2"
                    style={{
                        width: isExpanded ? '780px' : '360px',
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
                        <ul className="flex items-center gap-7">
                            {navItems.map((item) => (
                                <li key={item.href} className="relative group">
                                    <a
                                        href={item.href}
                                        className="flex items-center gap-2"
                                        style={{ color: activeSection === item.href.slice(1) ? "var(--accent)" : "var(--text-primary)" }}
                                    >
                                        <span className="font-mono text-xs opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: "var(--accent)" }}>{item.num}.</span>
                                        <span className="flex" style={{ fontFamily: "var(--font-syne)", fontSize: "16px", fontWeight: 600, letterSpacing: "0.5px" }}>
                                            {item.label.split('').map((char, i) => (
                                                <span
                                                    key={i}
                                                    className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:-translate-y-1.5"
                                                    style={{
                                                        transitionDelay: `${i * 30}ms`,
                                                        textShadow: activeSection === item.href.slice(1) ? "0 0 10px rgba(20,184,166,0.5)" : "none"
                                                    }}
                                                >
                                                    {char === ' ' ? '\u00A0' : char}
                                                </span>
                                            ))}
                                        </span>
                                    </a>
                                    {/* Animated Underline */}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full" style={{ opacity: 0.8 }} />
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-4">
                            <style>{`
                                @keyframes cv-shimmer {
                                    0% { transform: translateX(-150%); }
                                    50%, 100% { transform: translateX(150%); }
                                }
                            `}</style>
                            {/* Premium CV Button Desktop */}
                            <a
                                href={`${basePath}/resume.pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-6 py-2 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] border border-teal-500/30 flex items-center gap-2"
                                style={{
                                    background: "linear-gradient(90deg, rgba(20,184,166,0.15) 0%, rgba(59,130,246,0.15) 100%)",
                                }}
                            >
                                {/* Glowing sweep animation */}
                                <span className="absolute inset-0 -translate-x-full group-hover:animate-[cv-shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />

                                <span className="relative z-10 font-bold tracking-wide" style={{ fontFamily: "var(--font-syne)", color: "var(--text-heading)", fontSize: "14px" }}>
                                    Mon CV
                                </span>
                                <svg className="w-4 h-4 relative z-10 text-teal-400 group-hover:translate-y-0.5 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
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
                            <a
                                href={`${basePath}/resume.pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-10 py-3 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 border border-teal-500/30 flex items-center gap-3 shadow-[0_0_20px_rgba(45,212,191,0.2)]"
                                style={{
                                    background: "linear-gradient(90deg, rgba(20,184,166,0.15) 0%, rgba(59,130,246,0.15) 100%)",
                                }}
                            >
                                <span className="absolute inset-0 -translate-x-full group-hover:animate-[cv-shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                                <span className="relative z-10 font-bold tracking-wide" style={{ fontFamily: "var(--font-syne)", color: "var(--text-heading)", fontSize: "16px" }}>
                                    Télécharger le CV
                                </span>
                                <svg className="w-5 h-5 relative z-10 text-teal-400 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}
