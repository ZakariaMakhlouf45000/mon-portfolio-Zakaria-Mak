import React from "react";

export function AnimatedAvatarIcon({ isTalking, className = "" }: { isTalking: boolean, className?: string }) {
    return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-teal-200 to-indigo-200 shadow-inner ${className}`}>
            <style>{`
                @keyframes blink {
                    0%, 90%, 96%, 98%, 100% { transform: scaleY(1); }
                    93%, 97% { transform: scaleY(0.1); }
                }
                @keyframes mouth-talk {
                    0%, 100% { transform: scaleY(1); }
                    50% { transform: scaleY(2.5); }
                }
                @keyframes head-bob {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-3px) rotate(2deg); }
                }
                @keyframes eye-look {
                    0%, 100% { transform: translateX(0); }
                    10%, 40% { transform: translateX(-2px); }
                    60%, 90% { transform: translateX(2px); }
                }
            `}</style>
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" style={{ animation: "head-bob 6s ease-in-out infinite" }}>
                {/* Cou (Neck) */}
                <path d="M 40 70 L 40 100 L 60 100 L 60 70 Z" fill="#E2B49A" />

                {/* Visage (Face) */}
                <rect x="25" y="25" width="50" height="55" rx="25" fill="#FFCDB2" />

                {/* Cheveux (Hair) */}
                <path d="M 22 45 Q 25 10 50 10 Q 75 10 78 45 Q 85 20 50 5 Q 15 20 22 45 Z" fill="#1e293b" />

                {/* Oreilles (Ears) */}
                <circle cx="23" cy="52" r="5" fill="#E2B49A" />
                <circle cx="77" cy="52" r="5" fill="#E2B49A" />

                {/* Yeux (Eyes) */}
                <g style={{ animation: "eye-look 8s ease-in-out infinite" }}>
                    <ellipse cx="37" cy="50" rx="5" ry="6" fill="white" />
                    <ellipse cx="63" cy="50" rx="5" ry="6" fill="white" />
                    <g style={{ animation: "blink 5s infinite", transformOrigin: "50% 50%" }}>
                        <circle cx="37" cy="50" r="2.5" fill="#0f172a" />
                        <circle cx="63" cy="50" r="2.5" fill="#0f172a" />
                    </g>
                    {/* Sourcils */}
                    <path d="M 31 40 Q 37 38 43 41" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <path d="M 57 41 Q 63 38 69 40" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </g>

                {/* Nez (Nose) */}
                <path d="M 50 54 L 48 60 L 52 60 Z" fill="#E2B49A" />

                {/* Bouche (Mouth) */}
                <path
                    d={isTalking ? "M 42 68 Q 50 72 58 68" : "M 42 68 Q 50 74 58 68"}
                    stroke="#632626" fill={isTalking ? "#b83b5e" : "transparent"} strokeWidth="2.5" strokeLinecap="round"
                    style={{ animation: isTalking ? "mouth-talk 0.3s infinite" : "none", transformOrigin: "50% 68%" }}
                />
            </svg>
        </div>
    );
}
