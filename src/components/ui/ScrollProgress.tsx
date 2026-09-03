"use client";

import React, { useEffect, useRef } from "react";

export default function ScrollProgress() {
    const barRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ticking = false;

        const update = () => {
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if (scrollHeight <= 0) return;

            const progress = Math.min(100, Math.max(0, (window.scrollY / scrollHeight) * 100));

            if (barRef.current) {
                barRef.current.style.transform = `scaleY(${progress / 100})`;
            }
            if (textRef.current) {
                textRef.current.style.top = `${progress}%`;
                textRef.current.textContent = `${Math.round(progress)}%`;
            }
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
    }, []);

    return (
        <div className="fixed left-2 md:left-6 top-1/4 bottom-1/4 w-[3px] bg-slate-800/20 dark:bg-slate-200/5 rounded-full z-50 pointer-events-none hidden md:block">
            <div
                ref={barRef}
                className="w-full bg-[var(--accent)] rounded-full origin-top shadow-[0_0_10px_var(--accent)]"
                style={{
                    height: "100%",
                    transform: "scaleY(0)",
                    willChange: "transform",
                }}
            />
            <div
                ref={textRef}
                className="absolute left-6 font-mono text-[10px] text-[var(--accent)] font-bold tracking-widest"
                style={{ top: "0%", transform: "translateY(-50%)", willChange: "top" }}
            >
                0%
            </div>
        </div>
    );
}
