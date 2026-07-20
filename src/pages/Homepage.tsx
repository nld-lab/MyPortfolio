import HeroSection from "../features/HeroSection";
import ProjectSection from "../features/ProjectSection";
import LogoSection from "../features/LogoSection";
import AboutSection from "../features/AboutSection";
import ContactSection from "../features/ContactSection";

export default function Homepage() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <HeroSection />
      <ProjectSection />
      <LogoSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
