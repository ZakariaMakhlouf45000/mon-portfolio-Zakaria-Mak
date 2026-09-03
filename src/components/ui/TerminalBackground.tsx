"use client";

import React, { useEffect, useRef, useState } from "react";

const CODE_LINES = [
    "function initializeSystem() { ... }",
    "const db = connectDatabase(process.env.DB_URL);",
    "export default async function Page() { ... }",
    "[System] Kernel loaded successfully.",
    "sudo apt-get update && sudo apt-get upgrade -y",
    "import { motion } from 'framer-motion';",
    "const creativeDeveloper = new Developer('Zakaria');",
    "[Network] WebSocket connected to wss://matrix.net",
    "Building optimized static pages...",
    "Done in 2.45s.",
    "Warning: Unhandled Promise Rejection (Ignored)",
    "function renderMatrixGrid(width, height) {",
    "  for(let i = 0; i < height; i++) { ... }",
    "}",
    "> npm run build --production",
    "Compiling TypeScript...",
    "Server running on port 3000.",
];

export default function TerminalBackground() {
    const [lines, setLines] = useState<string[]>([]);
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsMounted(true);

        // Lighter settings on mobile to prevent jank
        const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
        const maxLines = isMobile ? 10 : 30;
        const intervalMs = isMobile ? 800 : 300;
        const initialCount = isMobile ? 8 : 20;

        const addLine = () => {
            const randomLine = CODE_LINES[Math.floor(Math.random() * CODE_LINES.length)];
            setLines(prev => [...prev.slice(-maxLines), randomLine]);
        };

        const interval = setInterval(addLine, intervalMs);

        // Populate initially
        for (let i = 0; i < initialCount; i++) addLine();

        return () => clearInterval(interval);
    }, []);

    if (!isMounted) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-50 dark:opacity-40"
            style={{
                perspective: "1500px",
                WebkitMaskImage: "radial-gradient(ellipse at center, transparent 40%, black 80%)",
                maskImage: "radial-gradient(ellipse at center, transparent 40%, black 80%)"
            }}
        >
            {/* Very soft gradient overlay just to blend the very bottom naturally, but not hiding the text */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--bg-primary)] to-transparent z-10 opacity-90" />

            {/* Added subtle grid overlays for a tech screen feel */}
            <div className="absolute inset-0 z-20 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

            <div
                className="absolute inset-x-0 -top-20 font-mono text-sm sm:text-base leading-loose tracking-wider text-teal-800/80 dark:text-[#64ffda]/90 whitespace-pre p-8"
                style={{
                    transform: "rotateX(25deg) scale(1.05)",
                    transformOrigin: "top center",
                    textShadow: "0 0 10px rgba(20, 184, 166, 0.4)"
                }}
            >
                {lines.map((text, idx) => (
                    <div key={idx} className="animate-[fade-in_0.5s_ease-out]" style={{ animationDuration: `${Math.random() * 0.5 + 0.3}s` }}>
                        <span className="opacity-40 select-none mr-4">[{String(idx + 1).padStart(4, '0')}]</span>
                        <span className="opacity-90">{text}</span>
                        {/* Simulate cursor blinking randomly */}
                        {Math.random() > 0.8 && <span className="inline-block w-2.5 h-4 ml-1 bg-teal-500 animate-pulse align-middle" />}
                    </div>
                ))}
            </div>
        </div>
    );
}
