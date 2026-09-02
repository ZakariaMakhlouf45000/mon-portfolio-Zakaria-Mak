"use client";

import Reveal from "@/components/ui/Reveal";
import React, { useRef, useState, MouseEvent } from "react";

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();

        // Normalized coordinates between -1 and 1
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

        setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePos({ x: 0, y: 0 });
    };

    // Helper to calculate parallax transformations based on depth parameter
    const getParallax = (depth: number) => ({
        transform: `translate3d(${mousePos.x * depth}px, ${mousePos.y * depth}px, 0)`,
        transition: "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)",
    });

    return (
        <section
            id="hero"
            ref={heroRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="hero-stage min-h-screen flex flex-col justify-center items-start pt-28 pb-16 relative overflow-hidden"
        >
            {/* Ambient Animated Glows behind everything */}
            <div
                className="absolute top-1/3 left-1/4 w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-20 pointer-events-none transition-transform duration-1000"
                style={{
                    background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
                    transform: `translate3d(${mousePos.x * -50}px, ${mousePos.y * -50}px, 0)`
                }}
            />

            <div className="z-10 relative w-full max-w-7xl mx-auto px-6 lg:px-8">
                <Reveal delay={0}>
                    <div style={getParallax(10)} className="inline-block relative">
                        <p className="eyebrow mb-8 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm text-sm uppercase tracking-widest text-[#64ffda]">
                            Salut, je suis Zakaria <span className="opacity-50 mx-2">/</span> creative developer
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={100}>
                    <h1
                        className="hero-title text-5xl md:text-7xl lg:text-[8.5rem] font-bold mb-6 tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 drop-shadow-2xl"
                        style={getParallax(35)}
                    >
                        Des interfaces<br />
                        <em className="text-white relative inline-block animate-pulse-slow">
                            vivantes.
                        </em>
                    </h1>
                </Reveal>

                <Reveal delay={200}>
                    <p
                        className="max-w-2xl text-lg md:text-2xl mb-12 leading-relaxed text-slate-300 mix-blend-screen"
                        style={getParallax(20)}
                    >
                        Étudiant en <span className="text-white border-b-2 border-[#64ffda] pb-1">BUT Informatique</span>, je transforme des systèmes complexes en expériences web claires, sensibles et mémorables.
                    </p>
                </Reveal>

                <Reveal delay={300}>
                    <div className="flex flex-wrap gap-6" style={getParallax(15)}>
                        <a
                            href="#contact"
                            className="group relative px-8 py-4 overflow-hidden rounded-full font-mono text-sm tracking-wider transition-all duration-300 hover:shadow-[0_0_40px_rgba(100,255,218,0.2)] bg-[#64ffda] text-[#020c1b] font-bold"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Me contacter
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                            <div className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-full font-mono text-sm tracking-wider transition-all duration-300 border border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-md flex items-center gap-2"
                        >
                            Voir mes projets
                        </a>
                    </div>
                </Reveal>
            </div>

            <Reveal delay={350} direction="right" className="absolute right-0 bottom-12 lg:bottom-28 z-0 pointer-events-none hidden md:block">
                <div style={getParallax(60)}>
                    <div className="w-[400px] h-[400px] lg:w-[550px] lg:h-[550px] bg-slate-900/30 backdrop-blur-3xl border border-white/5 rounded-3xl -ml-20 flex flex-col p-8 shadow-2xl relative overflow-hidden ring-1 ring-white/10" aria-label="Aperçu d'interface">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-teal-500/10" />
                        <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6 z-10">
                            <span className="font-mono text-sm text-teal-300">zakaria / module</span>
                            <span className="flex gap-2">
                                <i className="w-3 h-3 rounded-full bg-red-500/50" />
                                <i className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <i className="w-3 h-3 rounded-full bg-green-500/50" />
                            </span>
                        </div>
                        <div className="flex-1 rounded-xl bg-black/40 border border-white/5 p-4 z-10 font-mono text-xs text-slate-400 overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10M2 12h20" /></svg>
                            </div>
                            <p className="mb-2"><span className="text-pink-400">import</span> {'{'} <em>Creative</em> {'}'} <span className="text-pink-400">from</span> <span className="text-green-300">"dev/zakaria"</span>;</p>
                            <p className="mb-2"><span className="text-blue-400">function</span> <span className="text-yellow-200">System</span>() {'{'}</p>
                            <p className="pl-4 mb-2"><span className="text-pink-400">return</span> (</p>
                            <p className="pl-8 text-white">&lt;<span className="text-blue-300">Creative</span> <span className="text-purple-300">impact</span>=<span className="text-green-300">"high"</span> /&gt;</p>
                            <p className="pl-4 mb-2">);</p>
                            <p>{'}'}</p>
                            <div className="absolute bottom-4 left-4 right-4 h-24 bg-gradient-to-t from-black/80 to-transparent" />
                        </div>
                    </div>
                </div>
            </Reveal>

            <div className="hero-footer absolute bottom-8 left-0 right-0 flex justify-between items-center font-mono text-xs px-6 lg:px-8 text-slate-500">
                <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    Available for work
                </span>
                <a href="#about" className="flex items-center gap-2 hover:text-white transition-colors group">
                    <span className="hidden sm:inline">Scroll to explore</span>
                    <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 group-hover:animate-bounce">↓</span>
                </a>
            </div>
        </section>
    );
}
