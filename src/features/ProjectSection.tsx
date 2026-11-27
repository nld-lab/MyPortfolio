import { BlurFade } from "../components/ui/blur-fade";
import { ProjectCard } from "../components/project-card";
import { Button } from "../components/ui/button";
import { projects } from "../data/projects";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectSectionProps {
  mode?: "preview" | "all";
}

export default function ProjectSection({
  mode = "preview",
}: ProjectSectionProps) {
  const uiProjects = projects.filter((project) => project.type === "ui/ux");
  const webProjects = projects.filter((project) => project.type === "web");
  const isPreview = mode === "preview";
  const displayedUiProjects = isPreview ? uiProjects.slice(0, 3) : uiProjects;
  const displayedWebProjects = isPreview ? webProjects.slice(0, 3) : webProjects;

  return (
    <section
      id="projects"
      className="w-full pt-10 flex flex-col items-center justify-center bg-accent dark:bg-accent/20"
    >
      <div className="w-full max-w-6xl flex flex-col items-center justify-center gap-10 py-20">
        <BlurFade
          inView
          delay={0.1}
          className="max-w-2xl text-center space-y-3 px-4"
        >
          <h2 className="text-3xl font-bold text-center">
            {isPreview ? "Mes Projets" : "Tous mes projets"}
          </h2>
          <p className="text-muted-foreground">
            {isPreview
              ? "Découvrez une sélection de mes réalisations récentes."
              : "Découvrez l'ensemble de mes réalisations web et UI/UX."}
          </p>
        </BlurFade>

        {displayedWebProjects.length > 0 && (
          <div className="flex flex-col gap-4 w-full px-4 sm:px-6 lg:px-8">
            <BlurFade inView delay={0.15}>
              <h3 className="text-xl font-semibold">Projets Web</h3>
            </BlurFade>
            <div className="w-full max-w-6xl grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {displayedWebProjects.map((project, index) => (
                <BlurFade
                  key={project.id}
                  inView
                  delay={0.1 + index * 0.12}
                  offset={12}
                  className="w-full h-full"
                >
                  <ProjectCard project={project} />
                </BlurFade>
              ))}
            </div>
          </div>
        )}

        {displayedUiProjects.length > 0 && (
          <div className="flex flex-col gap-4 w-full px-4 sm:px-6 lg:px-8">
            <BlurFade inView delay={0.15}>
              <h3 className="text-xl font-semibold">Projets UI/UX</h3>
            </BlurFade>
            <div className="w-full max-w-6xl grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {displayedUiProjects.map((project, index) => (
                <BlurFade
                  key={project.id}
                  inView
                  delay={0.1 + index * 0.12}
                  offset={12}
                  className="w-full h-full"
                >
                  <ProjectCard project={project} />
                </BlurFade>
              ))}
            </div>
          </div>
        )}

        {isPreview && (
          <BlurFade inView delay={0.25}>
            <Button asChild className="rounded-full px-6">
              <Link to="/projects">
                Voir tous les projets <ArrowRight />
              </Link>
            </Button>
          </BlurFade>
        )}
      </div>
    </section>
  );
}
