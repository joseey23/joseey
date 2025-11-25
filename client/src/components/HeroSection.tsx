import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@assets/generated_images/professional_developer_workspace_hero.png";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in"
          data-testid="text-hero-name"
        >
          Joseph Maruria
        </h1>
        <p
          className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light mb-12"
          data-testid="text-hero-tagline"
        >
          Software Developer | ERP Specialist | Front-end & Backend Solutions
        </p>
        <Button
          size="lg"
          variant="outline"
          className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 h-auto"
          onClick={onCtaClick}
          data-testid="button-view-work"
        >
          View My Work
        </Button>
      </div>

      <button
        onClick={onCtaClick}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to next section"
        data-testid="button-scroll-indicator"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
}
