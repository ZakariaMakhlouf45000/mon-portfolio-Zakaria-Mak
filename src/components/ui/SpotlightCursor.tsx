"use client";

import { useEffect, useRef } from "react";

export default function SpotlightCursor() {
    const spotlightRef = useRef<HTMLDivElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const currentRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Skip on touch devices
        if (typeof window !== "undefined" && "ontouchstart" in window) return;

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        document.addEventListener("mousemove", handleMouseMove);

        let animationId: number;
        const animate = () => {
            currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * 0.1;
            currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * 0.1;

            if (spotlightRef.current) {
                spotlightRef.current.style.setProperty(
                    "--x",
                    `${currentRef.current.x}px`
                );
                spotlightRef.current.style.setProperty(
                    "--y",
                    `${currentRef.current.y}px`
                );
            }

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return <div id="spotlight" ref={spotlightRef} />;
}
