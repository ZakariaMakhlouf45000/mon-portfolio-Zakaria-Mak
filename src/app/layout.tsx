import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
    weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains",
    display: "swap",
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Zakaria Makhlouf | Développeur Fullstack & Étudiant",
    description:
        "Portfolio de Zakaria Makhlouf, étudiant en informatique et développeur Fullstack.",
    keywords: [
        "Zakaria Makhlouf",
        "développeur",
        "fullstack",
        "portfolio",
        "BUT Informatique",
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" className={`${outfit.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
            <head>
                {/* Inline script to prevent flash of wrong theme */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
                    }}
                />
            </head>
            <body className="font-sans antialiased relative">
                {/* Background ambient blobs */}
                <div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none opacity-40">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
                    <div
                        className="absolute top-0 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob"
                        style={{ animationDelay: "2s" }}
                    />
                    <div
                        className="absolute -bottom-32 left-1/3 w-96 h-96 bg-accent-teal/5 rounded-full mix-blend-screen filter blur-[100px] animate-blob"
                        style={{ animationDelay: "4s" }}
                    />
                </div>

                {children}
            </body>
        </html>
    );
}
