"use client";

import React, { useState, useEffect } from "react";

const text = "Mon rêve ? Devenir le roi des développeurs.\nJe suis un rêveur, d'où ce thème spatial... c'est mon univers. 🌌";

export default function DreamBubble({ show }: { show: boolean }) {
    const [displayText, setDisplayText] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (!show) {
            setDisplayText("");
            setIsTyping(false);
            return;
        }

        setIsTyping(true);
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(text.slice(0, i + 1));
                i++;
            } else {
                setIsTyping(false);
                clearInterval(interval);
            }
        }, 40); // Typing speed

        return () => clearInterval(interval);
    }, [show]);

    return (
        <div
            className={`absolute z-30 transition-all duration-500 ease-out 
                w-[180px] -top-[120px] left-1/2 -translate-x-1/2 
                md:w-[220px] md:-top-[40px] md:-right-[180px] md:left-auto md:translate-x-0
                ${show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-4 pointer-events-none"}
            `}
        >
            {/* Comic Cloud Bubble */}
            <div className="relative bg-white text-slate-900 p-4 rounded-3xl rounded-bl-sm md:rounded-bl-none md:rounded-bl-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-2 border-slate-200">

                {/* Cloud Bumps (for comic style) */}
                <div className="absolute -top-3 left-4 w-8 h-8 bg-white rounded-full border-t-2 border-slate-200" />
                <div className="absolute -top-4 right-8 w-12 h-12 bg-white rounded-full border-t-2 border-slate-200" />
                <div className="absolute -right-3 top-4 w-10 h-10 bg-white rounded-full border-r-2 border-slate-200" />
                <div className="absolute -bottom-3 right-6 w-10 h-10 bg-white rounded-full border-b-2 border-slate-200" />

                {/* Cover up inner borders created by the bumps */}
                <div className="absolute inset-2 bg-white rounded-2xl z-10" />

                {/* Bubble Tail for mobile (Points Down) */}
                <svg className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-6 h-6 z-0 md:hidden" viewBox="0 0 100 100" style={{ transform: "rotate(-45deg) translateX(-50%)" }}>
                    <path
                        d="M 100 0 Q 50 20 0 100 Q 30 70 80 80 Z"
                        fill="white"
                        stroke="#e2e8f0"
                        strokeWidth="4"
                    />
                </svg>

                {/* Bubble Tail for Desktop (Points Left-Down) */}
                <svg className="hidden md:block absolute -bottom-6 -left-4 w-8 h-8 z-0" viewBox="0 0 100 100">
                    <path
                        d="M 100 0 Q 50 20 0 100 Q 30 70 80 80 Z"
                        fill="white"
                        stroke="#e2e8f0"
                        strokeWidth="4"
                    />
                </svg>

                {/* Content */}
                <div className="relative z-20 px-1 py-1">
                    <p className="font-mono text-[11px] leading-[1.6] text-slate-700 tracking-tight">
                        {displayText.split("roi des développeurs").map((part, index, array) => (
                            <React.Fragment key={index}>
                                {part}
                                {index < array.length - 1 && (
                                    <span className="inline-block mx-1 animate-pulse font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500 drop-shadow-[0_0_8px_rgba(20,184,166,0.3)]">
                                        ROI DES DÉVELOPPEURS
                                    </span>
                                )}
                            </React.Fragment>
                        ))}
                        {isTyping && <span className="inline-block w-1.5 h-[14px] bg-teal-500 animate-pulse ml-0.5 align-middle shadow-[0_0_5px_var(--accent)]" />}
                    </p>
                </div>
            </div>

        </div>
    );
}
