"use client";

import { useEffect, useRef, ReactNode, useState } from "react";

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

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches);

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
                            element.style.transform = isMobile
                                ? "translate3d(0, 0, 0)"
                                : "perspective(1200px) translate3d(0, 0, 0) rotateX(0deg) scale(1)";
                            element.style.filter = "none";
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
    }, [delay, threshold, isMobile]);

    const getInitialTransform = () => {
        if (isMobile) {
            switch (direction) {
                case "up": return "translate3d(0, 40px, 0)";
                case "left": return "translate3d(-40px, 0, 0)";
                case "right": return "translate3d(40px, 0, 0)";
                default: return "translate3d(0, 40px, 0)";
            }
        }

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
                filter: isMobile ? "none" : "blur(4px)",
                transform: getInitialTransform(),
                transition: isMobile
                    ? `transform 700ms cubic-bezier(0.16, 1, 0.3, 1), opacity 600ms cubic-bezier(0.16, 1, 0.3, 1)`
                    : `transform 900ms cubic-bezier(0.16, 1, 0.3, 1), opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), filter 600ms ease-out`,
                willChange: "transform, opacity",
                ...(isMobile ? {} : { transformStyle: "preserve-3d" }),
                contain: "layout style",
                ...style,
            }}
        >
            {children}
        </div>
    );
}
