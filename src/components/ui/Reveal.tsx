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

        let revealFrame = 0;
        let revealTimeout: ReturnType<typeof setTimeout> | undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    revealTimeout = setTimeout(() => {
                        revealFrame = requestAnimationFrame(() => {
                            element.style.opacity = "1";
                            element.style.transform = "translate3d(0, 0, 0)";
                        });
                    }, delay);
                    observer.unobserve(element);
                }
            },
            { threshold }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
            if (revealTimeout) clearTimeout(revealTimeout);
            cancelAnimationFrame(revealFrame);
        };
    }, [delay, threshold]);

    const getInitialTransform = () => {
        switch (direction) {
            case "up":
                return "translate3d(0, 30px, 0)";
            case "left":
                return "translate3d(-30px, 0, 0)";
            case "right":
                return "translate3d(30px, 0, 0)";
            default:
                return "translate3d(0, 30px, 0)";
        }
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: 0,
                transform: getInitialTransform(),
                transition: `opacity 520ms cubic-bezier(0.22, 1, 0.36, 1), transform 520ms cubic-bezier(0.22, 1, 0.36, 1)`,
            }}
        >
            {children}
        </div>
    );
}
