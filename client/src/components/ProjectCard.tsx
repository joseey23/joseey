import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  liveUrl = "#",
  githubUrl = "#",
  index,
}: ProjectCardProps) {
  return (
    <Card
      className="overflow-hidden hover-elevate transition-all duration-300 h-full flex flex-col"
      data-testid={`card-project-${index}`}
    >
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          data-testid={`img-project-${index}`}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl" data-testid={`text-project-title-${index}`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground line-clamp-2" data-testid={`text-project-desc-${index}`}>
          {description}
        </p>
      </CardContent>
      <CardFooter className="gap-2 flex-wrap">
        <Button
          variant="default"
          size="sm"
          onClick={() => {
            console.log(`Opening live demo: ${liveUrl}`);
            window.open(liveUrl, "_blank");
          }}
          data-testid={`button-live-demo-${index}`}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Live Demo
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            console.log(`Opening GitHub: ${githubUrl}`);
            window.open(githubUrl, "_blank");
          }}
          data-testid={`button-github-${index}`}
        >
          <Github className="w-4 h-4 mr-2" />
          GitHub
        </Button>
      </CardFooter>
    </Card>
  );
}
