"use client";

import { useEffect, useRef, ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    direction?: "up" | "left" | "right";
    delay?: number;
    className?: string;
    threshold?: number;
}

export default function Reveal({
    children,
    direction = "up",
    delay = 0,
    className = "",
    threshold = 0.15,
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        element.style.opacity = "1";
                        element.style.transform = "translate(0, 0)";
                    }, delay);
                    observer.unobserve(element);
                }
            },
            { threshold }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [delay, threshold]);

    const getInitialTransform = () => {
        switch (direction) {
            case "up":
                return "translateY(30px)";
            case "left":
                return "translateX(-30px)";
            case "right":
                return "translateX(30px)";
            default:
                return "translateY(30px)";
        }
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: 0,
                transform: getInitialTransform(),
                transition: `opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`,
            }}
        >
            {children}
        </div>
    );
}
