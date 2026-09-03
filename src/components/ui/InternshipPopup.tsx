"use client";
import React, { useState, useEffect } from 'react';

// Typewriter Helper Component
const Typewriter = ({ text, delay = 0, onComplete, showCursor = false }: { text: string, delay?: number, onComplete?: () => void, showCursor?: boolean }) => {
    const [displayed, setDisplayed] = useState("");
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            let i = 0;
            const interval = setInterval(() => {
                i++;
                setDisplayed(text.substring(0, i));
                if (i > text.length) {
                    clearInterval(interval);
                    setIsDone(true);
                    if (onComplete) onComplete();
                }
            }, 15);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timer);
    }, [text, delay]);

    return (
        <span>
            {displayed}
            {showCursor && !isDone && <span className="animate-pulse inline-block w-1.5 h-4 ml-1 bg-teal-400 translate-y-1"></span>}
            {showCursor && isDone && <span className="animate-pulse inline-block w-1.5 h-4 ml-1 bg-teal-400/50 translate-y-1"></span>}
        </span>
    );
};

export default function InternshipPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isRendered, setIsRendered] = useState(false);
    const [para1Done, setPara1Done] = useState(false);

    useEffect(() => {
        // Trigger entrance after a short delay for ultra-style
        const timer = setTimeout(() => {
            setIsRendered(true);
            setTimeout(() => setIsVisible(true), 50);
        }, 1200); // Popup arises 1.2s after load
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsVisible(false);
        setTimeout(() => setIsRendered(false), 700); // Wait for exit animation
    };

    if (!isRendered) return null;

    return (
        // Backdrop overlay
        <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 bg-black/60 backdrop-blur-md' : 'opacity-0 bg-black/0 backdrop-blur-none'}`}>

            {/* Main Modal Container */}
            <div
                className={`relative w-[90vw] max-w-lg p-10 rounded-3xl box-3d-relief overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'scale-100 translate-y-0 opacity-100 delay-100' : 'scale-90 translate-y-24 opacity-0'}`}
                style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-accent)',
                    borderWidth: '1px',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1)'
                }}
            >
                {/* Ambient Glows */}
                <div className="absolute -top-20 -right-20 w-56 h-56 bg-teal-500/20 rounded-full blur-[50px] pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-blue-500/20 rounded-full blur-[50px] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Pulsing Badge */}
                    <div className="flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
                        </span>
                        <span className="text-xs font-mono font-bold text-teal-400 tracking-wider uppercase">Recherche de Stage</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-heading)' }}>
                        Stage Informatique (BUT 2)
                    </h2>

                    <div className="text-sm md:text-base leading-relaxed mb-8 opacity-90 min-h-[100px] flex flex-col gap-4 text-center" style={{ color: 'var(--text-secondary)' }}>
                        <p>
                            {isVisible && (
                                <Typewriter
                                    text="Afin de valider ma deuxième année de BUT Informatique, je cherche activement mon stage de fin d'année."
                                    delay={400}
                                    onComplete={() => setPara1Done(true)}
                                    showCursor={!para1Done}
                                />
                            )}
                        </p>
                        <p>
                            {para1Done && (
                                <Typewriter
                                    text="Passionné par le développement d'interfaces vivantes et robustes, je suis prêt à m'investir concrètement au sein de vos équipes !"
                                    showCursor={true}
                                />
                            )}
                        </p>
                    </div>

                    <button
                        onClick={closePopup}
                        className="group relative px-8 py-3 rounded-full font-bold overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
                        style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' }}
                    >
                        <span className="relative z-10">Découvrir mon profil</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </button>

                    {/* Close Cross */}
                    <button
                        onClick={closePopup}
                        className="absolute -top-4 -right-4 p-2 opacity-40 hover:opacity-100 transition-opacity rounded-full hover:bg-black/10"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
