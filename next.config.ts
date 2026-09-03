import type { NextConfig } from "next";

const isGitHubPages = process.env.DEPLOY_TARGET === "gh-pages";

const nextConfig: NextConfig = {
    // basePath actif uniquement si tu déploies sur GitHub Pages
    basePath: isGitHubPages ? "/mon-portfolio-Zakaria-Mak" : "",
    images: {
        unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;