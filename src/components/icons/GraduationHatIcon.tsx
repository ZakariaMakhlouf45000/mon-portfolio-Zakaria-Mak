import React from "react";

export function GraduationHatIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className || "w-10 h-10 drop-shadow-[0_8px_8px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-110 hover:-rotate-6"}
            viewBox="0 0 100 100"
        >
            <defs>
                <linearGradient id="boardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#475569" />
                    <stop offset="40%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#020617" />
                </linearGradient>
                <linearGradient id="baseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#000000" />
                </linearGradient>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="40%" stopColor="#eab308" />
                    <stop offset="100%" stopColor="#854d0e" />
                </linearGradient>
                <filter id="insetShadow">
                    <feDropShadow dx="-2" dy="5" stdDeviation="5" floodColor="#000" floodOpacity="0.8" />
                </filter>
                <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#eab308" floodOpacity="0.5" />
                </filter>
            </defs>
            <path d="M 30 50 L 30 70 Q 50 85 70 70 L 70 50 Z" fill="url(#baseGrad)" filter="url(#insetShadow)" />
            <path d="M 50 25 L 88 43 L 50 63 L 12 43 Z" fill="url(#boardGrad)" stroke="#64748b" strokeWidth="0.5" />
            <ellipse cx="50" cy="43" rx="4" ry="2.5" fill="url(#goldGrad)" filter="url(#goldGlow)" />
            <path d="M 50 43 Q 65 48 78 68" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 78 68 L 74 85 L 82 85 Z" fill="url(#goldGrad)" filter="url(#goldGlow)" />
        </svg>
    );
}
