import SpotlightCursor from "@/components/ui/SpotlightCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Expertise from "@/components/sections/Expertise";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <>
            <SpotlightCursor />
            <Navbar />
            <main className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24">
                <Hero />
                <About />
                <Projects />
                <Expertise />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
