import { BlurFade } from "../components/ui/blur-fade";
import { ProjectCard } from "../components/project-card";
import { projects } from "../data/projects";

export default function ProjectSection() {
  const uiProjects = projects.filter((project) => project.type === "ui/ux");
  const webProjects = projects.filter((project) => project.type === "web");

  return (
    <section
      id="projects"
      className="w-full flex flex-col items-center justify-center bg-accent dark:bg-accent/20"
    >
      <div className="w-full max-w-6xl flex flex-col items-center justify-center gap-10 py-20">
        <BlurFade
          inView
          delay={0.1}
          className="max-w-2xl text-center space-y-3 px-4"
        >
          <h2 className="text-3xl font-bold text-center">Mes Projets</h2>
          <p className="text-muted-foreground">
            Une sélection de projets d'exemple présentés avec une carte
            réutilisable et un modal de détails.
          </p>
        </BlurFade>

        <div className="flex flex-col gap-4 w-full px-4 sm:px-6 lg:px-8">
          <BlurFade inView delay={0.15}>
            <h3 className="text-xl font-semibold">Projets Web</h3>
          </BlurFade>
          <div className="w-full max-w-6xl grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {webProjects.map((project, index) => (
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

        <div className="flex flex-col gap-4 w-full px-4 sm:px-6 lg:px-8">
          <BlurFade inView delay={0.15}>
            <h3 className="text-xl font-semibold">Projets UI/UX</h3>
          </BlurFade>
          <div className="w-full max-w-6xl grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {uiProjects.map((project, index) => (
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
      </div>
    </section>
  );
}
