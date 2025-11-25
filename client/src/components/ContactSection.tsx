import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/joseph-maruria-67226619a/",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/joseey23",
      color: "hover:text-gray-800",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:josephmaruia@gmail.com",
      color: "hover:text-primary",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-6 bg-card"
      data-testid="section-contact"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-16"
          data-testid="text-contact-title"
        >
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-5 gap-8">
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle data-testid="text-form-title">
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    data-testid="input-email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or inquiry..."
                    className="min-h-[150px]"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    data-testid="input-message"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  data-testid="button-submit"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle data-testid="text-social-title">
                  Connect with me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start gap-3"
                    onClick={() => {
                      console.log(`Opening ${social.label}: ${social.url}`);
                      window.open(social.url, "_blank");
                    }}
                    data-testid={`button-social-${index}`}
                  >
                    <social.icon className="w-5 h-5" />
                    {social.label}
                  </Button>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p
                  className="text-sm text-muted-foreground text-center"
                  data-testid="text-availability"
                >
                  Available for freelance projects and full-time opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
