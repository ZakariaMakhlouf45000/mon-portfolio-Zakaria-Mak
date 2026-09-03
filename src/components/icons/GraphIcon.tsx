export function GraphIcon() {
    return (
        <div className="relative w-14 h-14 md:w-16 md:h-16">
            <style>{`
                @keyframes graph-rotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes graph-node-pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.4); }
                }
                @keyframes edge-draw {
                    0%, 100% { stroke-dashoffset: 100; opacity: 0.3; }
                    50% { stroke-dashoffset: 0; opacity: 1; }
                }
            `}</style>
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_10px_20px_rgba(168,85,247,0.5)]">
                <g style={{ transformOrigin: "50% 50%", animation: "graph-rotate 25s linear infinite" }}>
                    <path d="M50 20 L25 70 L75 70 Z" fill="rgba(168,85,247,0.1)" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Dynamic edges */}
                    <path d="M50 50 L50 20 M50 50 L25 70 M50 50 L75 70" fill="none" stroke="#d8b4fe" strokeWidth="3" strokeDasharray="100" style={{ animation: "edge-draw 4s ease-in-out infinite alternate" }} />

                    <circle cx="50" cy="50" r="8" fill="white" style={{ transformOrigin: "50% 50%", animation: "graph-node-pulse 2s ease-in-out infinite" }} />

                    <circle cx="50" cy="20" r="9" fill="#1e293b" stroke="#c084fc" strokeWidth="3" />
                    <circle cx="25" cy="70" r="9" fill="#1e293b" stroke="#c084fc" strokeWidth="3" />
                    <circle cx="75" cy="70" r="9" fill="#1e293b" stroke="#c084fc" strokeWidth="3" />
                </g>
            </svg>
        </div>
    );
}
