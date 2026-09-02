"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        setIsLight(document.documentElement.classList.contains("light"));
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        document.body.classList.add("theme-transitioning");

        if (isLight) {
            html.classList.remove("light");
            localStorage.setItem("theme", "dark");
        } else {
            html.classList.add("light");
            localStorage.setItem("theme", "light");
        }

        setIsLight(!isLight);

        setTimeout(() => {
            document.body.classList.remove("theme-transitioning");
        }, 600);
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
                color: "var(--accent)",
                background: "var(--glass-card)",
                border: "1px solid var(--border-subtle)",
            }}
            aria-label="Basculer le thème"
        >
            {/* Sun icon */}
            <svg
                className={`w-5 h-5 absolute transition-all duration-500 ${isLight ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
                    }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>
            {/* Moon icon */}
            <svg
                className={`w-5 h-5 absolute transition-all duration-500 ${isLight ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                    }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
            </svg>
        </button>
    );
}
