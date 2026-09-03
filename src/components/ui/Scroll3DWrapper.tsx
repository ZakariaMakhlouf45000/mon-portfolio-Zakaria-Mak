"use client";

import React, { useEffect, useRef } from "react";

export default function Scroll3DWrapper({ children }: { children: React.ReactNode }) {
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const wobbleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ticking = false;

        const updateScroll = () => {
            const inner = innerRef.current;
            if (!inner) return;

            // Skip 3D transforms on mobile to prevent layout issues
            const isMobile = window.innerWidth < 768;
            if (isMobile) return;

            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if (scrollHeight <= 0) return;

            const scrollDepth = window.scrollY / scrollHeight;
            const scale = 1 - scrollDepth * 0.05;
            const ty = scrollDepth * 20;
            const tz = scrollDepth * -50;

            inner.style.transform = `translate3d(0, ${ty}px, ${tz}px) scale(${scale})`;

            // Wobble at bottom
            const wobble = wobbleRef.current;
            if (wobble) {
                if (scrollDepth >= 0.95) {
                    wobble.classList.add("animate-liquid-wobble");
                } else {
                    wobble.classList.remove("animate-liquid-wobble");
                }
            }

            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(updateScroll);
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        requestAnimationFrame(updateScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            ref={outerRef}
            style={{ perspective: "2000px", transformStyle: "preserve-3d" }}
            className="w-full h-full overflow-clip"
        >
            <div
                ref={innerRef}
                className="w-full h-full"
                style={{
                    transformOrigin: "center top",
                    willChange: "transform",
                    transformStyle: "preserve-3d",
                }}
            >
                <div
                    ref={wobbleRef}
                    className="w-full h-full origin-bottom"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
