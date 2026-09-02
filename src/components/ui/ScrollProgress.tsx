"use client";

import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if (scrollHeight > 0) {
                setProgress(Math.min(100, Math.max(0, (currentScrollY / scrollHeight) * 100)));
            }
        };

        window.addEventListener("scroll", updateScroll, { passive: true });
        updateScroll(); // initial call
        return () => window.removeEventListener("scroll", updateScroll);
    }, []);

    return (
        <div className="fixed left-2 md:left-6 top-1/4 bottom-1/4 w-[3px] bg-slate-800/20 dark:bg-slate-200/5 rounded-full z-50 pointer-events-none hidden md:block">
            {/* The fill bar */}
            <div
                className="w-full bg-[var(--accent)] rounded-full transition-transform duration-100 ease-out origin-top shadow-[0_0_10px_var(--accent)]"
                style={{
                    height: "100%",
                    transform: `scaleY(${progress / 100})`
                }}
            />

            {/* Percent text indicator */}
            <div
                className="absolute left-6 font-mono text-[10px] text-[var(--accent)] transition-all duration-100 font-bold tracking-widest"
                style={{ top: `${progress}%`, transform: "translateY(-50%)" }}
            >
                {Math.round(progress)}%
            </div>
        </div>
    );
}
