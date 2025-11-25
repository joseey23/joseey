import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export interface SkillCardProps {
  icon: LucideIcon | IconType;
  name: string;
  index: number;
}

export default function SkillCard({ icon: Icon, name, index }: SkillCardProps) {
  return (
    <Card
      className="hover-elevate transition-all duration-300 cursor-default"
      data-testid={`card-skill-${index}`}
    >
      <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
        <Icon className="w-12 h-12 text-primary" data-testid={`icon-skill-${index}`} />
        <p className="text-sm font-medium text-center" data-testid={`text-skill-name-${index}`}>
          {name}
        </p>
      </CardContent>
    </Card>
  );
}
