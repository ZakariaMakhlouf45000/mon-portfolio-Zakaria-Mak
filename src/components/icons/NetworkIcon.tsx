export function NetworkIcon() {
    return (
        <div className="relative w-14 h-14 md:w-16 md:h-16">
            <style>{`
                @keyframes dash-pulse {
                    0% { stroke-dashoffset: 100; opacity: 0.3; }
                    50% { opacity: 1; }
                    100% { stroke-dashoffset: 0; opacity: 0.3; }
                }
                @keyframes node-pulse {
                    0%, 100% { transform: scale(1); filter: brightness(1); }
                    50% { transform: scale(1.3); filter: brightness(1.5); }
                }
            `}</style>
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_10px_20px_rgba(16,185,129,0.5)]">
                {/* Background paths */}
                <path d="M20,50 L50,20 L80,50 L50,80 Z" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
                {/* Pulsing data packets */}
                <path d="M20,50 L50,20 L80,50 L50,80 Z" fill="none" stroke="#34d399" strokeWidth="3.5" strokeDasharray="15 30" strokeLinecap="round" style={{ animation: "dash-pulse 2s linear infinite" }} />
                <line x1="20" y1="50" x2="80" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="4 4" />

                {/* Nodes */}
                <circle cx="50" cy="50" r="10" fill="rgba(16,185,129,0.2)" stroke="white" strokeWidth="2" />
                <circle cx="50" cy="50" r="5" fill="white" style={{ animation: "node-pulse 2s ease-in-out infinite" }} />

                <circle cx="20" cy="50" r="7" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
                <circle cx="80" cy="50" r="7" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
                <circle cx="50" cy="20" r="7" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
                <circle cx="50" cy="80" r="7" fill="#1e293b" stroke="#34d399" strokeWidth="2" />
            </svg>
        </div>
    );
}
