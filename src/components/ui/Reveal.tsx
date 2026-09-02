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
                            element.style.transform = "translate3d(0, 0, 0)";
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
                return "translate3d(0, 40px, 0)";
            case "left":
                return "translate3d(-40px, 0, 0)";
            case "right":
                return "translate3d(40px, 0, 0)";
            default:
                return "translate3d(0, 40px, 0)";
        }
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: 0,
                filter: "blur(8px)",
                transform: getInitialTransform(),
                transition: `all 800ms cubic-bezier(0.22, 1, 0.36, 1)`,
                willChange: "transform, opacity, filter",
                ...style,
            }}
        >
            {children}
        </div>
    );
}
