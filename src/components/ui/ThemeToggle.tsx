"use client";

import { useState, useEffect } from "react";

const basePath = process.env.NODE_ENV === "production" ? "/mon-portfolio-Zakaria-Mak" : "";

export default function ThemeToggle() {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        setIsLight(document.documentElement.classList.contains("light"));
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        document.body.classList.add("theme-transitioning");

        if (isLight) {
            html.classList.remove("light");
            localStorage.setItem("theme", "dark");
        } else {
            html.classList.add("light");
            localStorage.setItem("theme", "light");
        }

        setIsLight(!isLight);

        setTimeout(() => {
            document.body.classList.remove("theme-transitioning");
        }, 600);
    };

    return (
        <div className="fixed top-5 left-4 md:top-8 md:left-auto md:right-8 md:translate-x-0 z-[40]">
            <style>{`
                @keyframes orbit-float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>

            <button
                onClick={toggleTheme}
                className="relative w-11 h-11 md:w-28 md:h-28 rounded-full flex items-center justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-110 group cursor-pointer"
                style={{
                    animation: "orbit-float 6s ease-in-out infinite",
                    boxShadow: isLight
                        ? "0 0 120px rgba(250, 204, 21, 0.4), inset 0 0 40px rgba(250, 204, 21, 0.8), inset 15px 15px 30px rgba(255, 255, 255, 0.8)"
                        : "0 0 100px rgba(45, 212, 191, 0.2), inset -20px -20px 50px rgba(0, 0, 0, 0.8), inset 10px 10px 30px rgba(255, 255, 255, 0.9)",
                    background: isLight
                        ? "radial-gradient(circle at 30% 30%, #fef08a 0%, #eab308 50%, #ca8a04 100%)"
                        : "radial-gradient(circle at 35% 30%, #f1f5f9 0%, #cbd5e1 40%, #94a3b8 80%, #475569 100%)",
                    transform: isLight ? 'rotate(0deg)' : 'rotate(-15deg)'
                }}
                aria-label="Basculer le thème"
            >
                {/* Photorealistic Volumetric Glare (Orb Reflection) */}
                <div className={`absolute top-1 left-2 md:top-2 md:left-4 w-3/4 h-1/3 bg-gradient-to-b from-white/30 to-transparent rounded-[100%] rotate-[-15deg] pointer-events-none transition-opacity duration-1000 z-10 mix-blend-overlay ${isLight ? 'opacity-80' : 'opacity-40'}`} />

                {/* Tooltip to explain action */}
                <span className="absolute -bottom-12 md:-bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-bold px-4 py-2 bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] pointer-events-none" style={{ fontFamily: "var(--font-syne)" }}>
                    {isLight ? 'Mode Sombre' : 'Mode Clair'}
                </span>

                <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full pointer-events-none">

                    {/* Images from user */}
                    <img
                        src={`${basePath}/lune.png`}
                        alt="Moon"
                        className={`absolute inset-0 w-full h-full object-cover scale-[1.35] transition-all duration-[1200ms] ease-out ${isLight ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 rotate-0'}`}
                    />

                    <img
                        src={`${basePath}/soleil.png`}
                        alt="Sun"
                        className={`absolute inset-0 w-full h-full object-cover scale-[1.4] transition-all duration-[1200ms] ease-out ${isLight ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90 scale-50'}`}
                    />
                </div>
                {/* Hide standard SVG icons since the button itself IS the celestial body */}
            </button>
        </div>
    );
}
