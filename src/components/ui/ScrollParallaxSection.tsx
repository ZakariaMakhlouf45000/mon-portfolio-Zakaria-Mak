"use client";

import React, { useEffect, useRef } from "react";

interface ScrollParallaxSectionProps {
    children: React.ReactNode;
    className?: string;
    intensity?: number;
}

export default function ScrollParallaxSection({
    children,
    className = "",
    intensity = 1,
}: ScrollParallaxSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Skip heavy 3D on mobile
        if (window.innerWidth < 768) return;

        let ticking = false;

        const update = () => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const rawProgress = 1 - rect.top / windowHeight;
            const progress = Math.max(-0.2, Math.min(1.5, rawProgress));

            const entryT = Math.min(Math.max(progress / 0.3, 0), 1);
            const entryEase = 1 - Math.pow(1 - entryT, 3);

            let rotateX: number, translateZ: number, scale: number, opacity: number;

            if (progress >= 0.3) {
                rotateX = 0;
                translateZ = 0;
                scale = 1;
                opacity = 1;
            } else {
                rotateX = (1 - entryEase) * 8 * intensity;
                translateZ = (1 - entryEase) * -100 * intensity;
                scale = 0.95 + entryEase * 0.05;
                opacity = 0.2 + entryEase * 0.8;
            }

            section.style.transform = `perspective(1800px) translate3d(0, 0px, ${translateZ}px) rotateX(${rotateX}deg) scale(${scale})`;
            section.style.opacity = String(opacity);
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        requestAnimationFrame(update);

        return () => window.removeEventListener("scroll", onScroll);
    }, [intensity]);

    return (
        <div
            ref={sectionRef}
            className={className}
            style={{
                transformOrigin: "center top",
                willChange: "transform, opacity",
                transformStyle: "preserve-3d",
            }}
        >
            {children}
        </div>
    );
}
