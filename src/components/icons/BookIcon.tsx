export function BookIcon() {
    return (
        <div className="relative w-14 h-14 md:w-16 md:h-16">
            <style>{`
                @keyframes book-float {
                    0%, 100% { transform: translateY(0) rotate(-5deg); }
                    50% { transform: translateY(-10px) rotate(0deg); }
                }
                @keyframes page-turn {
                    0% { transform: rotateY(0deg) skewY(0deg); opacity: 0.8; }
                    50% { transform: rotateY(-90deg) skewY(10deg); opacity: 0.5; }
                    100% { transform: rotateY(-180deg) skewY(0deg); opacity: 0; }
                }
            `}</style>
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_10px_20px_rgba(59,130,246,0.5)]" style={{ animation: "book-float 4s ease-in-out infinite" }}>
                <path d="M50 85 L20 75 V25 L50 35 Z" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="3" strokeLinejoin="round" />
                <path d="M50 85 L80 75 V25 L50 35 Z" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinejoin="round" />
                {/* Turning page */}
                <path d="M50 85 L80 75 V25 L50 35 Z" fill="rgba(255,255,255,0.8)" style={{ transformOrigin: "50% 50%", animation: "page-turn 3s cubic-bezier(0.4, 0, 0.2, 1) infinite" }} />
                <path d="M50 85 L80 75 V25 L50 35 Z" fill="rgba(255,255,255,0.5)" style={{ transformOrigin: "50% 50%", animation: "page-turn 3s cubic-bezier(0.4, 0, 0.2, 1) infinite", animationDelay: "0.2s" }} />
                {/* Lines context */}
                <line x1="30" y1="40" x2="45" y2="45" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" />
                <line x1="30" y1="55" x2="40" y2="58.5" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" />
                <line x1="50" y1="35" x2="50" y2="85" stroke="rgba(255,255,255,0.9)" strokeWidth="3" strokeLinecap="round" />
            </svg>
        </div>
    );
}
