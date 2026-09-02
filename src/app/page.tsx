import SpotlightCursor from "@/components/ui/SpotlightCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Expertise from "@/components/sections/Expertise";
import About from "@/components/sections/About";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <>
            <SpotlightCursor />
            <Navbar />
            <main className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
                <Hero />
                <Projects />
                <Expertise />
                <About />
                <Journey />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
