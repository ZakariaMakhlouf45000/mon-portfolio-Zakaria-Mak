"use client";

import { useEffect, useRef, ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    direction?: "up" | "left" | "right";
    delay?: number;
    className?: string;
    threshold?: number;
    style?: React.CSSProperties;
}

export default function Reveal({
    children,
    direction = "up",
    delay = 0,
    className = "",
    threshold = 0.15,
    style,
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
                            element.style.transform = "perspective(1200px) translate3d(0, 0, 0) rotateX(0deg) scale(1)";
                            element.style.filter = "blur(0px)";
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
                return "perspective(1200px) translate3d(0, 50px, -80px) rotateX(6deg) scale(0.96)";
            case "left":
                return "perspective(1200px) translate3d(-60px, 0, -60px) rotateY(4deg) scale(0.97)";
            case "right":
                return "perspective(1200px) translate3d(60px, 0, -60px) rotateY(-4deg) scale(0.97)";
            default:
                return "perspective(1200px) translate3d(0, 50px, -80px) rotateX(6deg) scale(0.96)";
        }
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: 0,
                filter: "blur(4px)",
                transform: getInitialTransform(),
                transition: `transform 900ms cubic-bezier(0.16, 1, 0.3, 1), opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), filter 600ms ease-out`,
                willChange: "transform, opacity",
                transformStyle: "preserve-3d",
                contain: "layout style",
                ...style,
            }}
        >
            {children}
        </div>
    );
}
