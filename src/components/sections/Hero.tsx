"use client";

import Reveal from "@/components/ui/Reveal";
import React, { useRef, useState, MouseEvent, useEffect } from "react";

const codeTokens = [
    { type: 'keyword', text: 'import ' }, { type: 'text', text: '{ ' }, { type: 'class', text: 'Creative' }, { type: 'text', text: ' } ' }, { type: 'keyword', text: 'from ' }, { type: 'string', text: '"dev/zakaria";' },
    { type: 'br', text: '\n\n' },
    { type: 'keyword', text: 'function ' }, { type: 'function', text: 'System' }, { type: 'text', text: '() {\n' },
    { type: 'keyword', text: '  return ' }, { type: 'text', text: '(\n' },
    { type: 'text', text: '    <' }, { type: 'component', text: 'Creative' }, { type: 'br', text: '\n' },
    { type: 'prop', text: '      role' }, { type: 'text', text: '=' }, { type: 'string', text: '"Frontend Developer"' }, { type: 'br', text: '\n' },
    { type: 'prop', text: '      impact' }, { type: 'text', text: '=' }, { type: 'string', text: '"High"' }, { type: 'br', text: '\n' },
    { type: 'text', text: '    />\n' },
    { type: 'text', text: '  );\n' },
    { type: 'text', text: '}\n\n' },
    { type: 'keyword', text: 'export default ' }, { type: 'function', text: 'System' }, { type: 'text', text: ';' }
];
const fullText = codeTokens.map(t => t.text).join("");

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        setIsMounted(true);
        let frame: number;
        const onScroll = () => {
            frame = requestAnimationFrame(() => {
                setScrollY(window.scrollY);
            });
        };
        window.addEventListener("scroll", onScroll, { passive: true });

        const typingInterval = setInterval(() => {
            setCharIndex(prev => {
                if (prev >= fullText.length) {
                    clearInterval(typingInterval);
                    return prev;
                }
                const nextChar = fullText[prev];
                const jump = (nextChar === '\n' || nextChar === ' ') ? 3 : 1;
                return Math.min(prev + jump, fullText.length);
            });
        }, 50);

        return () => {
            window.removeEventListener("scroll", onScroll);
            if (frame) cancelAnimationFrame(frame);
            clearInterval(typingInterval);
        };
    }, []);

    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
        if (!heroRef.current || !isMounted || window.matchMedia("(max-width: 768px)").matches) return;
        const rect = heroRef.current.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePos({ x: 0, y: 0 });
    };

    const getAnimStyles = (depth: number, rotateLimit: number = 0) => {
        const translateYScroll = scrollY * 0.15 * depth;
        const translateZScroll = scrollY * -0.2 * depth;
        const scrollRotateX = Math.min(scrollY * 0.02 * depth, 20);
        const scrollOpacity = Math.max(1 - (scrollY / Math.max(900 * depth, 500)), 0);

        if (!isMounted || window.matchMedia("(max-width: 768px)").matches) {
            return {
                transform: `translate3d(0, ${-translateYScroll}px, 0)`,
                opacity: scrollOpacity,
                willChange: "transform, opacity",
                transformStyle: "preserve-3d" as const
            };
        }

        const mouseX = mousePos.x * (depth * 25);
        const mouseY = mousePos.y * (depth * 25);

        const rotateY = mousePos.x * rotateLimit;
        const rotateX = -mousePos.y * rotateLimit;

        return {
            transform: `perspective(1400px) translate3d(${mouseX}px, ${-translateYScroll + mouseY}px, ${translateZScroll}px) rotateX(${rotateX + scrollRotateX}deg) rotateY(${rotateY}deg)`,
            opacity: scrollOpacity,
            transition: "transform 0.1s linear",
            willChange: "transform, opacity",
            transformStyle: "preserve-3d" as const
        };
    };

    // ANIMATION DU "CUBE": Pliage géant vers l'arrière au scroll
    const heroCubeStyle = {
        transform: `translateY(${scrollY * 0.6}px) rotateX(${Math.min(scrollY * 0.08, 90)}deg)`,
        transformOrigin: "bottom center",
        filter: `brightness(${Math.max(1 - scrollY / 600, 0.2)}) scale(${Math.max(1 - scrollY / 2000, 0.8)})`,
        opacity: Math.max(1 - scrollY / 800, 0),
        willChange: "transform, opacity, filter",
        transformStyle: "preserve-3d" as const
    };

    const renderTypedCode = () => {
        let currentIdx = 0;
        return codeTokens.map((t, i) => {
            if (currentIdx >= charIndex) return null;
            let tokenText = t.text;
            if (currentIdx + tokenText.length > charIndex) {
                tokenText = tokenText.slice(0, charIndex - currentIdx);
            }
            currentIdx += t.text.length;

            const colorClass = t.type === 'keyword' ? 'text-[#c678dd]' :
                t.type === 'class' || t.type === 'component' ? 'text-[#e5c07b]' :
                    t.type === 'function' ? 'text-[#61afef]' :
                        t.type === 'string' ? 'text-[#98c379]' :
                            t.type === 'prop' ? 'text-[#d19a66]' :
                                'text-[#abb2bf]';

            if (t.type === 'br') return <br key={i} />;
            return <span key={i} className={colorClass}>{tokenText}</span>;
        });
    };

    return (
        <section
            id="hero"
            ref={heroRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="hero-stage flex flex-col justify-center min-h-[90vh] md:min-h-screen pt-28 pb-16 relative overflow-x-clip"
            style={{ perspective: "2500px" }}
        >
            <div style={heroCubeStyle} className="w-full h-full flex flex-col justify-center relative">
                <div
                    className="absolute top-1/3 left-1/4 w-[40vw] h-[40vw] md:w-[30vw] md:h-[30vw] rounded-full blur-[100px] opacity-20 pointer-events-none transition-transform duration-1000 mix-blend-screen"
                    style={{
                        background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
                        transform: `translate3d(${mousePos.x * -40}px, ${mousePos.y * -40}px, -100px)`
                    }}
                />

                <div ref={contentRef} className="z-10 relative w-[94%] xl:w-[96%] max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-center" style={{ perspective: "1500px", transformStyle: "preserve-3d" }}>

                    <div className="lg:col-span-7 xl:col-span-7 pr-0 lg:pr-8" style={{ transformStyle: "preserve-3d" }}>
                        <Reveal delay={0}>
                            <div style={getAnimStyles(0.2, 5)} className="inline-block relative origin-left">
                                <p
                                    className="eyebrow mb-8 px-5 py-3 rounded-full backdrop-blur-sm text-sm uppercase tracking-widest box-3d-relief z-20 bg-slate-900/10 border-none font-bold"
                                    style={{
                                        color: "var(--accent)",
                                        transform: "translateZ(80px) rotateX(-5deg)",
                                    }}
                                >
                                    Salut, je suis Zakaria <span className="opacity-50 mx-2" style={{ color: "var(--text-secondary)" }}>/</span> creative developer
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={100}>
                            <h1
                                className="hero-title text-5xl md:text-7xl lg:text-6xl xl:text-[6.5rem] font-bold mb-6 tracking-tighter leading-[1.05] drop-shadow-2xl origin-left"
                                style={{ ...getAnimStyles(0.5, 8), color: "var(--text-heading)" }}
                            >
                                <span className="inline-block text-3d-relief transition-transform duration-700 ease-out hover:scale-110" style={{ transform: "translateZ(120px) rotateX(8deg)" }}>
                                    Des interfaces
                                </span><br />
                                <em className="relative inline-block leading-tight pt-2 not-italic text-3d-relief transition-transform duration-700 ease-out hover:scale-110" style={{ color: "var(--accent)", transform: "translateZ(180px) rotateY(-5deg) rotateX(15deg)" }}>
                                    vivantes.
                                </em>
                            </h1>
                        </Reveal>

                        <Reveal delay={200}>
                            <p
                                className="max-w-xl text-base md:text-xl lg:text-2xl mb-12 leading-relaxed origin-left font-medium"
                                style={{ ...getAnimStyles(0.3, 3), color: "var(--text-secondary)" }}
                            >
                                Étudiant en <span className="border-b-[3px] pb-1 transition-colors relative inline-block text-3d-relief" style={{ color: "var(--text-heading)", borderColor: "var(--accent)", transform: "translateZ(40px)" }}>BUT Informatique</span>, je transforme des systèmes complexes en expériences web claires, sensibles et mémorables.
                            </p>
                        </Reveal>

                        <Reveal delay={300}>
                            <div className="flex flex-wrap gap-6 md:gap-8 origin-left" style={getAnimStyles(0.2, 5)}>
                                <a
                                    href="#contact"
                                    className="group relative px-6 md:px-8 py-3 md:py-4 overflow-hidden rounded-full font-mono text-sm tracking-wider transition-all duration-300 font-bold box-3d-relief"
                                    style={{
                                        backgroundColor: "var(--accent)",
                                        color: "var(--bg-primary)",
                                        transform: "translateZ(100px)"
                                    }}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Me contacter
                                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </span>
                                    <div className="absolute inset-0 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" style={{ backgroundColor: "var(--text-heading)" }} />
                                </a>
                                <a
                                    href="#projects"
                                    className="px-6 md:px-8 py-3 md:py-4 rounded-full font-mono text-sm tracking-wider transition-all duration-300 box-3d-relief flex items-center gap-2 bg-slate-900/10 backdrop-blur-md font-bold"
                                    style={{
                                        color: "var(--text-heading)",
                                        transform: "translateZ(60px)"
                                    }}
                                >
                                    Voir mes projets
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    <div className="hidden lg:block lg:col-span-5 xl:col-span-5 relative w-full h-full perspective-2000">
                        <Reveal delay={350} direction="right" className="w-full flex justify-end">
                            <div style={{ ...getAnimStyles(0.7, 10), transformStyle: "preserve-3d" }} className="origin-center w-full max-w-lg box-3d-relief rounded-xl"
                                aria-label="Aperçu du code">

                                {/* Window Header */}
                                <div className="bg-[#1e1e1e] flex items-center px-4 py-3 border-b border-[#333] rounded-t-xl" style={{ transform: "translateZ(10px)" }}>
                                    <div className="flex gap-2">
                                        <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-[0_4px_10px_rgba(255,95,86,0.5)]" />
                                        <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-[0_4px_10px_rgba(255,189,46,0.5)]" />
                                        <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-[0_4px_10px_rgba(39,201,63,0.5)]" />
                                    </div>
                                    <div className="flex-1 text-center font-mono text-[13px] text-[#8b929e] tracking-wider font-bold">
                                        zakaria.tsx
                                    </div>
                                </div>

                                {/* Window Body */}
                                <div className="bg-[#0d1117] p-5 lg:p-8 font-mono text-[12px] lg:text-[14px] xl:text-[15px] leading-[1.8] relative overflow-hidden h-[380px] border border-white/5 border-t-0 rounded-b-xl" style={{ transform: "translateZ(20px)" }}>
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30 pointer-events-none" style={{ transform: "translateZ(-10px)" }} />
                                    <div className="relative z-10 whitespace-pre-wrap drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] font-bold">
                                        {renderTypedCode()}
                                        {charIndex < fullText.length && (
                                            <span className="inline-block w-3 h-[1.1em] bg-white animate-pulse ml-0.5 align-middle shadow-[0_0_10px_#fff]" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* BULLE FLOTTANTE ORGANIQUE - BOUTON CONTACT */}
                <div className="absolute bottom-[2%] lg:bottom-[5%] right-[2%] md:right-[5%] z-[60] pointer-events-auto hidden md:block" style={{ animation: "floatXRight 24s ease-in-out infinite alternate" }}>
                    <style>{`
                        @keyframes gentleFloatY {
                            0% { transform: translateY(0); }
                            100% { transform: translateY(-8px); }
                        }
                        @keyframes softPing {
                            0% { transform: scale(1); opacity: 0.8; }
                            100% { transform: scale(1.4); opacity: 0; }
                        }
                    `}</style>
                    <div style={{ animation: "gentleFloatY 8s ease-in-out infinite alternate" }}>
                        <a href="#contact" className="flex items-center gap-3 px-5 py-3 rounded-full box-3d-relief backdrop-blur-xl group hover:scale-110 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.3)]" style={{ backgroundColor: "var(--bg-tertiary)", border: "1px solid var(--border-accent)" }}>
                            <span className="relative flex h-3 w-3">
                                <span className="absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "var(--accent)", animation: "softPing 2.5s cubic-bezier(0,0,0.2,1) infinite" }}></span>
                                <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: "var(--accent)" }}></span>
                            </span>
                            <span className="font-mono text-[11px] font-bold tracking-widest uppercase appearance-none drop-shadow-sm" style={{ color: "var(--text-heading)" }}>
                                Disponible
                            </span>
                        </a>
                    </div>
                </div>

            </div> {/* END OF CUBE WRAPPER */}
        </section>
    );
}
