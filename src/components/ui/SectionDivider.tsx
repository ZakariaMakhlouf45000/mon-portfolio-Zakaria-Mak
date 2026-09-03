"use client";

import React from "react";

export default function SectionDivider() {
    return (
        <div className="relative flex items-center justify-center my-16 md:my-24 select-none" aria-hidden="true" style={{ perspective: "800px" }}>
            {/* Left gradient line */}
            <div
                className="flex-1 h-[1px] relative overflow-hidden"
                style={{
                    background: "linear-gradient(to right, transparent, var(--border-accent))",
                    transform: "rotateY(2deg)",
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)",
                        animation: "divider-scan 4s ease-in-out infinite",
                    }}
                />
            </div>

            {/* Center glowing orb */}
            <div className="relative mx-4 md:mx-6 flex items-center justify-center">
                {/* Outer pulse ring */}
                <div
                    className="absolute w-8 h-8 rounded-full opacity-20"
                    style={{
                        background: "var(--accent)",
                        animation: "glow-pulse 3s ease-in-out infinite",
                        filter: "blur(8px)",
                    }}
                />
                {/* Inner core dot */}
                <div
                    className="relative w-2 h-2 rounded-full z-10"
                    style={{
                        background: "var(--accent)",
                        boxShadow: `0 0 10px 3px var(--accent), 0 0 25px 8px color-mix(in srgb, var(--accent) 30%, transparent)`,
                    }}
                />
            </div>

            {/* Right gradient line */}
            <div
                className="flex-1 h-[1px] relative overflow-hidden"
                style={{
                    background: "linear-gradient(to left, transparent, var(--border-accent))",
                    transform: "rotateY(-2deg)",
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)",
                        animation: "divider-scan 4s ease-in-out infinite reverse",
                    }}
                />
            </div>
        </div>
    );
}
