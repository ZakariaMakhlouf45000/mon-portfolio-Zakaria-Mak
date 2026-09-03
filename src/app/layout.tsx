import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

const syne = Syne({
    subsets: ["latin"],
    variable: "--font-syne",
    display: "swap",
    weight: ["400", "500", "600", "700", "800"],
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

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" className={`${dmSans.variable} ${syne.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
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
                {children}
            </body>
        </html>
    );
}
