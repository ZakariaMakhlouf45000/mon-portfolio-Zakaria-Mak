"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Scroll3DWrapper({ children }: { children: React.ReactNode }) {
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const wobbleRef = useRef<HTMLDivElement>(null);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
        checkDesktop();

        let ticking = false;

        const updateScroll = () => {
            const inner = innerRef.current;
            if (!inner || window.innerWidth < 768) {
                ticking = false;
                return;
            }

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
        window.addEventListener("resize", checkDesktop);
        requestAnimationFrame(updateScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", checkDesktop);
        };
    }, []);

    return (
        <div
            ref={outerRef}
            style={isDesktop ? { perspective: "2000px", transformStyle: "preserve-3d" } : undefined}
            className="w-full h-full overflow-clip"
        >
            <div
                ref={innerRef}
                className="w-full h-full"
                style={isDesktop ? {
                    transformOrigin: "center top",
                    willChange: "transform",
                    transformStyle: "preserve-3d",
                } : undefined}
            >
                <div
                    ref={wobbleRef}
                    className="w-full h-full origin-bottom"
                    style={isDesktop ? { transformStyle: "preserve-3d" } : undefined}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
