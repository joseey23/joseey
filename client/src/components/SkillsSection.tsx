import SkillCard from "./SkillCard";
import {
  Code,
  Database,
  Server,
  Workflow,
  GitBranch,
  Terminal,
  Layout,
  Boxes,
  Cloud,
  Settings,
  FileJson,
  Package,
} from "lucide-react";
import { SiReact, SiTypescript, SiNodedotjs } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { icon: Code, name: "React.js" },
      { icon: Layout, name: "HTML/CSS" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiReact, name: "Next.js" },
      { icon: Boxes, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: Server, name: "Express.js" },
      { icon: Database, name: "PostgreSQL" },
      { icon: FileJson, name: "REST APIs" },
      { icon: Cloud, name: "Microservices" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { icon: GitBranch, name: "Git & GitHub" },
      { icon: Terminal, name: "Linux/Bash" },
      { icon: Workflow, name: "CI/CD" },
      { icon: Settings, name: "Docker" },
      { icon: Package, name: "npm/yarn" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 px-6" data-testid="section-skills">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-16"
          data-testid="text-skills-title"
        >
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3
                className="text-2xl font-semibold mb-6 text-center"
                data-testid={`text-category-${categoryIndex}`}
              >
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skillIndex}
                    {...skill}
                    index={categoryIndex * 10 + skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
