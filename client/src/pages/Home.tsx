import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection onCtaClick={scrollToProjects} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="bg-card py-8 px-6 border-t" data-testid="footer">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p data-testid="text-footer">
            © {new Date().getFullYear()} Joseph Maruria. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
