"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorOutlineRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Detect touch devices to disable custom cursor on mobile
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const dot = cursorDotRef.current;
        const outline = cursorOutlineRef.current;
        if (!dot || !outline) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let outlineX = window.innerWidth / 2;
        let outlineY = window.innerHeight / 2;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            const target = e.target as HTMLElement;
            // Check if hovering clickable elements (buttons, links, inputs)
            if (target.closest('a, button, [role="button"], input, select, textarea')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", onMouseMove);

        let reqId: number;
        const render = () => {
            // Use exact position for the tiny dot
            if (dot) {
                dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 9999px) translate(-50%, -50%)`;
            }

            // Apply extremely smooth Lerping for the outline
            outlineX += (mouseX - outlineX) * 0.20; // 0.20 is very snappy but fluid
            outlineY += (mouseY - outlineY) * 0.20;

            if (outline) {
                outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 9999px) translate(-50%, -50%)`;
            }

            reqId = requestAnimationFrame(render);
        };
        reqId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(reqId);
        };
    }, []);

    // A tiny invisible dot that just tracks state to trigger React re-renders for styles
    return (
        <>
            {/* The lagging glassmorphic outline / aura */}
            <div
                ref={cursorOutlineRef}
                className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border hidden md:block transition-all duration-300 ease-out will-change-transform shadow-[0_0_15px_rgba(20,184,166,0.3)]
                ${isHovering
                        ? "w-16 h-16 bg-teal-500/20 border-teal-400/50 backdrop-blur-[2px]"
                        : "w-10 h-10 bg-transparent border-teal-500/30"
                    }`}
            />
            {/* The instant primary dot */}
            <div
                ref={cursorDotRef}
                className={`fixed top-0 left-0 pointer-events-none z-[10000] rounded-full hidden md:block transition-all duration-200 ease-out will-change-transform shadow-[0_0_10px_rgba(20,184,166,0.8)]
                ${isHovering
                        ? "w-2 h-2 opacity-0" // Disappears when hovering clickable items to let the big circle shine
                        : "w-2 h-2"
                    }`}
                style={{ backgroundColor: "var(--accent)" }}
            />

            {/* No styled-jsx here, moved to globals.css */}
        </>
    );
}
