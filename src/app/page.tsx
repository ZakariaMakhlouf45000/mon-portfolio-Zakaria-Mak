import SpotlightCursor from "@/components/ui/SpotlightCursor";
import CustomCursor from "@/components/ui/CustomCursor";
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
import FloatingParticles from "@/components/ui/FloatingParticles";
import ScrollParallaxSection from "@/components/ui/ScrollParallaxSection";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
    return (
        <>
            <TerminalBackground />
            <FloatingParticles />
            <ScrollProgress />
            <InternshipPopup />
            <SpotlightCursor />
            <CustomCursor />
            <Navbar />
            <ChatCompanion />
            <Scroll3DWrapper>
                <main className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                    <Hero />
                    <SectionDivider />
                    <ScrollParallaxSection>
                        <About />
                    </ScrollParallaxSection>
                    <SectionDivider />
                    <ScrollParallaxSection>
                        <Projects />
                    </ScrollParallaxSection>
                    <SectionDivider />
                    <ScrollParallaxSection>
                        <Expertise />
                    </ScrollParallaxSection>
                    <SectionDivider />
                    <ScrollParallaxSection intensity={0.7}>
                        <Contact />
                    </ScrollParallaxSection>
                </main>
                <Footer />
            </Scroll3DWrapper>
        </>
    );
}
