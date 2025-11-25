import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/joe1logonobg.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
        data-testid="nav-header"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("#hero")}
              className="hover:opacity-80 transition-opacity"
              data-testid="button-logo"
            >
              <img
                src={logoImage}
                alt="Joseph Maruria Logo"
                className="h-10 w-auto"
              />
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  onClick={() => scrollToSection(link.href)}
                  data-testid={`button-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden"
          data-testid="mobile-menu"
        >
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection(link.href)}
                className="text-2xl"
                data-testid={`button-mobile-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
