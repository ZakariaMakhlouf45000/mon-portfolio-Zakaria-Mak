"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
    { label: "À propos", href: "#about", num: "01" },
    { label: "Projets", href: "#projects", num: "02" },
    { label: "Compétences", href: "#skills", num: "03" },
    { label: "Contact", href: "#contact", num: "04" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

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

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.style.overflow = menuOpen ? "auto" : "hidden";
    };

    const closeMenu = () => {
        setMenuOpen(false);
        document.body.style.overflow = "auto";
    };

    return (
        <nav
            className={`fixed w-full z-50 glass-nav transition-all duration-300 ${scrolled ? "shadow-lg" : ""
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    className="group flex items-center gap-2"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    <div
                        className="relative w-10 h-10 border-2 rounded font-mono font-bold flex items-center justify-center text-lg transition-colors"
                        style={{
                            borderColor: "var(--accent)",
                            color: "var(--accent)",
                        }}
                    >
                        Z
                        <div
                            className="absolute -inset-1 rounded blur opacity-20 group-hover:opacity-40 transition-opacity"
                            style={{ background: "var(--accent)" }}
                        />
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <ul className="flex gap-8 text-sm font-mono" style={{ color: "var(--text-primary)" }}>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className={`nav-link py-2 transition-colors hover:text-[var(--accent)] ${activeSection === item.href.slice(1) ? "active" : ""
                                        }`}
                                >
                                    <span style={{ color: "var(--accent)" }}>{item.num}.</span>{" "}
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="/resume.pdf"
                        className="px-5 py-2 border rounded font-mono text-sm transition-all duration-300 transform hover:-translate-y-1"
                        style={{
                            borderColor: "var(--accent)",
                            color: "var(--accent)",
                        }}
                        onMouseEnter={(e) => {
                            (e.target as HTMLElement).style.backgroundColor = "var(--border-accent)";
                        }}
                        onMouseLeave={(e) => {
                            (e.target as HTMLElement).style.backgroundColor = "transparent";
                        }}
                    >
                        CV
                    </a>

                    <ThemeToggle />
                </div>

                {/* Mobile Burger */}
                <div className="flex md:hidden items-center gap-3">
                    <ThemeToggle />
                    <button
                        className="z-50 relative focus:outline-none"
                        style={{ color: "var(--accent)" }}
                        onClick={toggleMenu}
                        aria-label="Menu"
                    >
                        <svg className="w-8 h-8 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 flex flex-col pt-28 px-6 overflow-y-auto h-screen transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                style={{ backgroundColor: "var(--bg-primary)" }}
            >
                <ul className="flex flex-col items-center gap-8 text-lg font-mono pb-10" style={{ color: "var(--text-primary)" }}>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                onClick={closeMenu}
                                className="hover:text-[var(--accent)] w-full text-center py-2 block"
                            >
                                <span className="block text-center text-sm mb-1" style={{ color: "var(--accent)" }}>
                                    {item.num}.
                                </span>
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li className="mt-4">
                        <a
                            href="/resume.pdf"
                            className="px-8 py-4 border rounded transition-colors"
                            style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                        >
                            Télécharger CV
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
