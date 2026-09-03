export function HangmanIcon() {
    return (
        <div className="relative w-14 h-14 md:w-16 md:h-16">
            <style>{`
                @keyframes hangman-draw {
                    0% { stroke-dashoffset: 150; opacity: 0; }
                    15%, 85% { stroke-dashoffset: 0; opacity: 1; }
                    100% { stroke-dashoffset: 150; opacity: 0; }
                }
                @keyframes hangman-swing {
                    0%, 100% { transform: rotate(-8deg); }
                    50% { transform: rotate(8deg); }
                }
                @keyframes part-pop {
                    0%, 25% { opacity: 0; transform: scale(0.5); }
                    35%, 85% { opacity: 1; transform: scale(1); }
                    95%, 100% { opacity: 0; transform: scale(0.5); }
                }
            `}</style>
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_10px_20px_rgba(245,158,11,0.5)]">
                {/* Gallows */}
                <path d="M20 85 L80 85 M35 85 L35 15 L65 15 L65 25 M35 25 L45 15" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                {/* Animated drawing of gallows */}
                <path d="M20 85 L80 85 M35 85 L35 15 L65 15 L65 25 M35 25 L45 15" fill="none" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="150" style={{ animation: "hangman-draw 6s ease-in-out infinite" }} />

                {/* Hanging Man */}
                <g style={{ transformOrigin: "65% 15%", animation: "hangman-swing 2.5s ease-in-out infinite" }}>
                    {/* Rope */}
                    <line x1="65" y1="15" x2="65" y2="35" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
                    {/* Head */}
                    <circle cx="65" cy="45" r="9" fill="none" stroke="white" strokeWidth="3" style={{ transformOrigin: "65% 45%", animation: "part-pop 6s infinite" }} />
                    <g style={{ transformOrigin: "65% 54%", animation: "part-pop 6s infinite", animationDelay: "0.2s" }}>
                        {/* Body */}
                        <line x1="65" y1="54" x2="65" y2="72" stroke="white" strokeWidth="3" strokeLinecap="round" />
                        {/* Arms */}
                        <line x1="65" y1="58" x2="53" y2="65" stroke="white" strokeWidth="3" strokeLinecap="round" />
                        <line x1="65" y1="58" x2="77" y2="65" stroke="white" strokeWidth="3" strokeLinecap="round" />
                        {/* Legs */}
                        <line x1="65" y1="72" x2="55" y2="85" stroke="white" strokeWidth="3" strokeLinecap="round" />
                        <line x1="65" y1="72" x2="75" y2="85" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    </g>
                </g>
            </svg>
        </div>
    );
}
