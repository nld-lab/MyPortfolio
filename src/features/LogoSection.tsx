import { BlurFade } from "../components/ui/blur-fade";
import { Marquee } from "../components/ui/marquee";

const technologies = [
  {
    id: 1,
    name: "Figma",
    image: "/logo/figma.png",
  },
  {
    id: 2,
    name: "React",
    image: "/logo/react.png",
  },
  {
    id: 3,
    name: "TypeScript",
    image: "/logo/typescript.png",
  },
  {
    id: 4,
    name: "Node.js",
    image: "/logo/node.png",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    image: "/logo/tailwind.png",
  },
  {
    id: 6,
    name: "JavaScript",
    image: "/logo/javascript.png",
  },
  {
    id: 7,
    name: "HTML",
    image: "/logo/html.png",
  },
  {
    id: 8,
    name: "CSS",
    image: "/logo/css.png",
  },
  {
    id: 9,
    name: "MongoDB",
    image: "/logo/mongo.png",
  },
  {
    id: 10,
    name: "postgresql.js",
    image: "/logo/postgresql.png",
  },
];

const firstRow = technologies.slice(0, technologies.length / 2);
const secondRow = technologies.slice(
  technologies.length / 2,
  technologies.length,
);

export default function LogoSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center md:py-20 py-10">
      <BlurFade inView delay={0.1}>
        <h2 className="text-3xl font-bold text-center mb-10">
          Technologies favoris
        </h2>
      </BlurFade>

      <BlurFade
        inView
        delay={0.2}
        offset={20}
        className="relative md:max-w-5xl flex w-full gap-6 flex-col items-center justify-center overflow-hidden py-10 px-4 sm:px-6 lg:px-8"
      >
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <div
              key={review.id}
              className="mx-4 flex items-center justify-center"
            >
              <img
                src={review.image}
                alt={review.name}
                className="h-12 w-12 object-contain"
              />
            </div>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <div
              key={review.id}
              className="mx-4 flex items-center justify-center"
            >
              <img
                src={review.image}
                alt={review.name}
                className="h-12 w-12 object-contain"
              />
            </div>
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
      </BlurFade>
    </section>
  );
}
