"use client";

export default function Footer() {
    return (
        <footer className="pb-10 text-center px-6">
            <div className="max-w-[1280px] mx-auto pt-8 border-t" style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}>
                <p className="font-mono text-xs tracking-wide">Conçu et développé par Zakaria Makhlouf</p>
                <p className="text-xs mt-2">Next.js · Tailwind CSS · Motion premium</p>
            </div>
        </footer>
    );
}
