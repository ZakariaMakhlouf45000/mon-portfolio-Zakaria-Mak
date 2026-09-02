"use client";

import React, { useEffect, useState } from "react";

export default function Scroll3DWrapper({ children }: { children: React.ReactNode }) {
    const [scrollDepth, setScrollDepth] = useState(0);

    useEffect(() => {
        let frame: number;
        const updateScroll = () => {
            frame = requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                const scrollHeight = document.body.scrollHeight - window.innerHeight;
                if (scrollHeight > 0) {
                    setScrollDepth(currentScrollY / scrollHeight);
                }
            });
        };

        window.addEventListener("scroll", updateScroll, { passive: true });
        // Initial setup
        const initialTimer = setTimeout(updateScroll, 100);
        return () => {
            window.removeEventListener("scroll", updateScroll);
            if (frame) cancelAnimationFrame(frame);
            clearTimeout(initialTimer);
        };
    }, []);

    // Calculate dynamic 3D styles based on scroll completion (0 to 1)
    // Sensation of descents: shrink a tiny bit, and perspective pushes back slightly.
    const transformScale = 1 - (scrollDepth * 0.05); // Scales down from 1 to 0.95 globally
    const transformTranslateY = scrollDepth * 20; // 0 to 20px
    const transformTranslateZ = scrollDepth * -50;
    const perspective = "2000px";

    // Earthquake triggers if user is >= 95% scrolled
    const isEarthquake = scrollDepth >= 0.95;

    return (
        <div style={{ perspective, transformStyle: "preserve-3d" }} className="w-full h-full overflow-clip">
            <div
                className="w-full h-full transition-transform duration-[400ms] ease-[cubic-bezier(0.33,1,0.68,1)]"
                style={{
                    transform: `translate3d(0, ${transformTranslateY}px, ${transformTranslateZ}px) scale(${transformScale})`,
                    transformOrigin: "center top",
                    willChange: "transform",
                    transformStyle: "preserve-3d"
                }}
            >
                <div className={`w-full h-full origin-bottom ${isEarthquake ? "animate-liquid-wobble" : ""}`} style={{ transformStyle: "preserve-3d" }}>
                    {children}
                </div>
            </div>
        </div>
    );
}
