import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profileImage from "@assets/generated_images/joseey.jpg";

const skills = [
  "JavaScript",
  "TypeScript",
  "ERP Systems",
  "Front-End Development",
  "Backend Development",
  "API Integrations",
  "Data Analytics",
  "React",
  "Node.js",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-6"
      data-testid="section-about"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-16"
          data-testid="text-about-title"
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 flex justify-center">
            <Avatar
              className="w-64 h-64 md:w-80 md:h-80 border-4 border-primary/20"
              data-testid="img-profile"
            >
              <AvatarImage src={profileImage} alt="Joseph Maruria" />
              <AvatarFallback className="text-6xl">JM</AvatarFallback>
            </Avatar>
          </div>

          <div className="md:col-span-3 space-y-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p data-testid="text-about-intro-1">
                I'm a passionate software developer with extensive experience in
                building scalable enterprise solutions. With a strong focus on
                ERP systems and modern web technologies, I help businesses
                transform their digital infrastructure.
              </p>
              <p data-testid="text-about-intro-2">
                My expertise spans both front-end and backend development,
                allowing me to architect complete solutions from database design
                to polished user interfaces. I thrive on solving complex
                technical challenges and delivering high-quality software that
                makes a real impact.
              </p>
            </div>

            <div>
              <h3
                className="text-xl font-semibold mb-4"
                data-testid="text-skills-heading"
              >
                Key Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm border border-primary/20"
                    data-testid={`badge-skill-${index}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
