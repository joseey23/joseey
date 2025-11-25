import ProjectCard from "../ProjectCard";
import projectImage from "@assets/generated_images/erp_dashboard_project_thumbnail.png";

export default function ProjectCardExample() {
  return (
    <div className="max-w-md">
      <ProjectCard
        title="ERP Dashboard System"
        description="A comprehensive enterprise resource planning dashboard with real-time analytics and reporting capabilities."
        image={projectImage}
        liveUrl="https://example.com"
        githubUrl="https://github.com"
        index={0}
      />
    </div>
  );
}
