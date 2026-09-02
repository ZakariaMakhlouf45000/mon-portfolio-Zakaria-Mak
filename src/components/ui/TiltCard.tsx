"use client";

import React, { useRef, useState, MouseEvent, ReactNode } from "react";

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    translateZ?: number;
    rotateLimit?: number;
}

export default function TiltCard({
    children,
    className = "",
    translateZ = 24,
    rotateLimit = 5,
}: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState({});

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || window.matchMedia("(max-width: 768px)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof window === 'undefined') return;

        const rect = cardRef.current.getBoundingClientRect();

        // Calculate X and Y coordinates inside the card (ranging from -0.5 to 0.5)
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        // Constraint: max +- limit degrees (Default 5)
        const rotateY = x * (rotateLimit * 2);
        const rotateX = -y * (rotateLimit * 2);

        setStyle({
            transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`,
            transition: 'transform 0.1s ease-out',
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: `perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)`,
            transition: 'transform 0.5s ease-out',
        });
    };

    return (
        <article
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ ...style, willChange: "transform", transformStyle: "preserve-3d" }}
            className={`glass-card rounded-xl overflow-hidden flex flex-col cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(100,255,218,0.1)] transition-colors ${className}`}
        >
            <div style={{ transform: `translateZ(${translateZ}px)`, transformStyle: "preserve-3d", display: "flex", flexDirection: "column", height: "100%" }}>
                {children}
            </div>
        </article>
    );
}
