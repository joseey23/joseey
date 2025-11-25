import HeroSection from "../HeroSection";

export default function HeroSectionExample() {
  return <HeroSection onCtaClick={() => console.log("CTA clicked")} />;
}
