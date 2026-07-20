import { BlurFade } from "../components/ui/blur-fade";
import { Badge } from "../components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import {
  BookOpenText,
  BriefcaseBusiness,
  CalendarDays,
  Palette,
  School2,
} from "lucide-react";

const experiences = [
  {
    icon: <BookOpenText className="size-5" />,
    title: "Création de visuels",
    company: "Google Developer Group Lomé (GDG)",
    period: "2026",
    bullets: [
      "Création d'affiches pour des événements organisés par la GDG Lomé.",
    ],
  },
  {
    icon: <Palette className="size-5" />,
    title: "Stage en Développement Web et UI/UX Design",
    company: "THE BRAIN PIN",
    period: "Avril - Juin 2026",
    bullets: [
      "Conception de maquettes et prototypes d'interfaces utilisateur avec Figma.",
      "Application des principes UI/UX dans des projets concrets de design produit.",
    ],
  },
  {
    icon: <BookOpenText className="size-5" />,
    title: "Création de visuels",
    company: "Tech Campus Club (TCC)",
    period: "2026",
    bullets: [
      "Création d'affiches pour des événements organisés par la TCC ESGIS.",
    ],
  },
  {
    icon: <BriefcaseBusiness className="size-5" />,
    title: "Stage en Développement Mobile",
    company: "ANIEK & AYO",
    period: "Sept. - Oct. 2025",
    bullets: [
      "Contribution au développement d'une application mobile (NEYLA) avec Flutter.",
      "Mise en pratique du versionnage de code avec Git et travail en équipe agile.",
    ],
  },
];

const parcours = [
  {
    icon: <School2 className="size-4" />,
    title: "Licence professionnelle en Génie Logiciel",
    school: "ESGIS TOGO",
    period: "En cours",
  },
  {
    icon: <CalendarDays className="size-4" />,
    title: "Baccalauréat Série D, 2ème partie",
    school: "NDE Vapkossito",
    period: "2023 - 2024",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center bg-accent dark:bg-accent/20"
    >
      <div className="w-full max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <BlurFade inView delay={0.1} className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Expériences et parcours
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
            Une vue condensée de mes expériences professionnelles, de mes
            réalisations créatives et de mon parcours académique.
          </p>
        </BlurFade>

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.9fr]">
          <div className="space-y-4">
            <BlurFade inView delay={0.15} direction="right">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BriefcaseBusiness className="size-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Expériences professionnelles
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Des expériences marquées par le design, le mobile et la
                    création visuelle.
                  </p>
                </div>
              </div>
            </BlurFade>

            <div className="space-y-4">
              {experiences.map((experience, index) => (
                <BlurFade
                  key={`${experience.company}-${experience.title}`}
                  inView
                  delay={0.1 + index * 0.1}
                  offset={16}
                  direction="right"
                >
                  <Card className="border-border/70 bg-background/70 shadow-lg shadow-black/5 transition-transform duration-300 hover:-translate-y-1">
                    <CardHeader className="flex flex-row items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        {experience.icon}
                      </div>

                      <div className="flex-1 space-y-2">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                          <CardTitle className="text-base sm:text-lg">
                            {experience.title}
                          </CardTitle>
                          <Badge className="w-fit bg-primary text-white">
                            {experience.period}
                          </Badge>
                        </div>
                        <CardDescription className="text-sm font-medium text-foreground/80">
                          {experience.company}
                        </CardDescription>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-3 pt-0">
                      <Separator />
                      <ul className="space-y-2 pt-1 text-sm leading-6 text-muted-foreground">
                        {experience.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>

          <BlurFade inView delay={0.25} direction="left">
            <Card className="ring-0 bg-transparent shadow-none">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <School2 className="size-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Parcours</CardTitle>
                    <CardDescription>
                      Une timeline simple pour suivre mon évolution académique.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="relative pl-5">
                  <div className="absolute left-1.75 top-1.5 h-full w-px bg-border" />
                  <div className="space-y-8">
                    {parcours.map((item, index) => (
                      <BlurFade
                        key={item.title}
                        inView
                        delay={0.3 + index * 0.15}
                        offset={12}
                      >
                        <div className="relative">
                          <div className="absolute -left-6 top-10 flex h-6 w-6 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-sm">
                            {item.icon}
                          </div>

                          <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex items-start justify-between gap-3">
                                <h4 className="font-semibold leading-snug">
                                  {item.title}
                                </h4>
                                <Badge className="shrink-0 bg-primary text-white">
                                  {item.period}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {item.school}
                              </p>
                            </div>
                          </div>
                        </div>
                      </BlurFade>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
