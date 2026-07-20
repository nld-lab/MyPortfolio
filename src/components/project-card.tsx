import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import type { Project } from "../types/project";
import { SquareArrowOutDownRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group w-full max-h-96 max-w-sm overflow-hidden bg-background/70 shadow-lg shadow-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20  ">
      <div className="relative rounded-2xl overflow-hidden px-4 ">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full rounded-xl object-cover"
        />
      </div>

      <CardHeader >
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex flex-col gap-3 sm:flex-row sm:justify-between mt-auto">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto rounded-full px-4">
              Details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>{project.description}</DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-xl border border-border/60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-foreground">
                  Description complète
                </h4>
                <p className="text-sm leading-6 text-muted-foreground">
                  {project.fullDescription}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-foreground">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      variant="outline"
                      className="px-3 py-1"
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <DialogFooter className="sm:justify-between">
              <Button asChild className="w-full sm:w-auto rounded-full px-6">
                <a href={project.viewUrl} target="_blank" rel="noreferrer">
                  Voir le projet <SquareArrowOutDownRight/>
                </a>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Button asChild className="w-full sm:w-auto rounded-full px-4">
          <a href={project.viewUrl} target="_blank" rel="noreferrer">
            Voir le projet <SquareArrowOutDownRight />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
