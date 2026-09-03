"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    depth: number;
    duration: number;
    delay: number;
    opacity: number;
}

function generateParticles(count: number): Particle[] {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1.5 + Math.random() * 3,
        depth: 0.2 + Math.random() * 0.8,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * -20,
        opacity: 0.15 + Math.random() * 0.45,
    }));
}

export default function FloatingParticles() {
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const particleRefs = useRef<(HTMLDivElement | null)[]>([]);
    const particles = useMemo(() => (mounted ? generateParticles(30) : []), [mounted]);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || typeof window === "undefined" || window.innerWidth < 768) return;

        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    particleRefs.current.forEach((el, i) => {
                        if (!el || !particles[i]) return;
                        const parallaxY = scrollY * particles[i].depth * 0.15;
                        el.style.transform = `translate3d(0, ${-parallaxY}px, 0)`;
                    });
                    ticking = false;
                });
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [mounted, particles]);

    if (!mounted) return null;
    if (typeof window !== "undefined" && window.innerWidth < 768) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
            aria-hidden="true"
        >
            {particles.map((p, i) => (
                <div
                    key={p.id}
                    ref={el => { particleRefs.current[i] = el; }}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        opacity: p.opacity,
                        background: "var(--accent)",
                        boxShadow: `0 0 ${p.size * 3}px ${p.size}px var(--accent)`,
                        animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
                        willChange: "transform",
                    }}
                />
            ))}
        </div>
    );
}
