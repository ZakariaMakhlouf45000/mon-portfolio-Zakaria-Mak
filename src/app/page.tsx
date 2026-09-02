import SpotlightCursor from "@/components/ui/SpotlightCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Expertise from "@/components/sections/Expertise";
import Contact from "@/components/sections/Contact";
import InternshipPopup from "@/components/ui/InternshipPopup";
import Scroll3DWrapper from "@/components/ui/Scroll3DWrapper";
import TerminalBackground from "@/components/ui/TerminalBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ChatCompanion from "@/components/ui/ChatCompanion";

export default function Home() {
    return (
        <>
            <TerminalBackground />
            <ScrollProgress />
            <InternshipPopup />
            <SpotlightCursor />
            <Navbar />
            <ChatCompanion />
            <Scroll3DWrapper>
                <main className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                    <Hero />
                    <About />
                    <Projects />
                    <Expertise />
                    <Contact />
                </main>
                <Footer />
            </Scroll3DWrapper>
        </>
    );
}
