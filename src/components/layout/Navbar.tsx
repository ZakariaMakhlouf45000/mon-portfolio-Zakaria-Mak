"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const basePath = process.env.NODE_ENV === "production" ? "/mon-portfolio-Zakaria-Mak" : "";

const navItems = [
    { label: "Projets", href: "#projects", num: "01" },
    { label: "Stack", href: "#skills", num: "02" },
    { label: "À propos", href: "#about", num: "03" },
    { label: "Parcours", href: "#journey", num: "04" },
    { label: "Contact", href: "#contact", num: "05" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = document.querySelectorAll("section");
            let current = "";
            sections.forEach((section) => {
                if (window.pageYOffset >= section.offsetTop - 240) {
                    current = section.id;
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    return (
        <nav className={`fixed w-full z-50 glass-nav transition-all duration-300 ${scrolled ? "shadow-2xl shadow-black/20" : ""}`}>
            <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 h-20 flex items-center justify-between">
                <a
                    href="#"
                    className="group flex items-center gap-3"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    <div
                        className="relative w-10 h-10 border rounded-md font-mono font-bold flex items-center justify-center text-base"
                        style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                    >
                        Z
                        <div className="absolute -inset-1 rounded-md blur opacity-0 group-hover:opacity-40 transition-opacity" style={{ background: "var(--accent)" }} />
                    </div>
                    <div className="hidden sm:block leading-tight">
                        <p className="text-xs font-mono" style={{ color: "var(--accent)" }}>Creative Developer</p>
                        <p className="text-sm font-semibold" style={{ color: "var(--text-heading)" }}>Zakaria Makhlouf</p>
                    </div>
                </a>

                <div className="hidden md:flex items-center gap-6">
                    <ul className="flex gap-7 text-sm font-mono" style={{ color: "var(--text-primary)" }}>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className={`nav-link py-2 ${activeSection === item.href.slice(1) ? "active" : ""}`}>
                                    <span style={{ color: "var(--accent)" }}>{item.num}.</span> {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href={`${basePath}/resume.pdf`}
                        className="px-5 py-2 border rounded-md font-mono text-sm transition-all duration-300 hover:-translate-y-0.5"
                        style={{ borderColor: "var(--accent)", color: "var(--accent)", background: "var(--border-accent)" }}
                    >
                        CV
                    </a>
                    <ThemeToggle />
                </div>

                <div className="flex md:hidden items-center gap-3">
                    <ThemeToggle />
                    <button onClick={() => setMenuOpen((value) => !value)} className="relative z-50" style={{ color: "var(--accent)" }} aria-label="Menu mobile">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            <div className={`fixed inset-0 z-40 flex flex-col pt-28 px-6 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`} style={{ backgroundColor: "var(--bg-primary)" }}>
                <ul className="flex flex-col gap-8 text-xl font-display" style={{ color: "var(--text-heading)" }}>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} onClick={() => setMenuOpen(false)} className="block border-b pb-4" style={{ borderColor: "var(--border-subtle)" }}>
                                <span className="block text-xs font-mono mb-1" style={{ color: "var(--accent)" }}>{item.num}.</span>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
