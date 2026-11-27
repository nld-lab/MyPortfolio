import { BlurFade } from "../components/ui/blur-fade";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Code2, PanelsTopLeft, Palette } from "lucide-react";

const services = [
  {
    number: "01",
    category: "Développement web",
    title: "Des plateformes web utiles et performantes",
    description:
      "Des interfaces modernes, adaptées à tous les écrans et pensées pour offrir une expérience fluide.",
    icon: Code2,
    image: "/services/web.png",
  },
  {
    number: "02",
    category: "Design UI/UX",
    title: "Des expériences simples à utiliser",
    description:
      "Des parcours clairs et des maquettes soignées pour transformer les besoins en interfaces intuitives.",
    icon: PanelsTopLeft,
    image: "/services/uiux.png",

  },
  {
    number: "03",
    category: "Création visuelle",
    title: "Des visuels qui attirent l’attention",
    description:
      "Des créations graphiques cohérentes pour donner une identité forte à vos projets et événements.",
    icon: Palette,
    image: "/services/visuel.png",

  },
];

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="w-full flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <BlurFade inView delay={0.1} className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Ce que je peux faire pour vous
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">Mes services</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
            Du premier croquis à la mise en ligne, je donne vie à vos idées
            numériques et visuelles.
          </p>
        </BlurFade>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <BlurFade
                key={service.number}
                inView
                delay={0.12 + index * 0.1}
                offset={14}
                className="h-full"
              >
                <Card className="group h-full overflow-hidden border-border/70 bg-card/80 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div
                    className="relative m-4 mb-0 flex aspect-4/3 items-center justify-center overflow-hidden rounded-xl border border-dashed "
                    aria-label={`Emplacement de l'image pour ${service.category}`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,var(--color-primary)_0%,transparent_45%)] opacity-[0.08]" />
                    <span className="absolute left-4 top-4 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                      {service.number} / 03
                    </span>
                    <div className="relative flex flex-col items-center gap-3 text-center text-muted-foreground transition-transform duration-300 group-hover:scale-105">
                      
                      
                        <img src={service.image} alt="image du service" />
                      
                      
                    </div>
                    
                  </div>

                  <CardHeader className="gap-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {service.category}
                    </p>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-sm leading-6">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-1 w-12 rounded-full bg-primary/30 transition-all duration-300 group-hover:w-20 group-hover:bg-primary" />
                  </CardContent>
                </Card>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
