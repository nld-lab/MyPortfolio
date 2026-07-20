import { motion } from "motion/react";
import { BlurFade } from "../components/ui/blur-fade";
import { Button } from "../components/ui/button";
import { DotPattern } from "../components/ui/dot-pattern";
import { ArrowRight } from "lucide-react";
import { FaNodeJs, FaReact, FaWhatsapp } from "react-icons/fa";

const floatingLogos = [
  {
    label: "Figma",
    position: "-left-5 top-24 md:-left-10 md:top-40",
    delay: 0.6,
    icon: (
      <img
        src="/logo/figma.png"
        alt="Figma"
        className="h-10 w-10 object-contain"
      />
    ),
  },
  {
    label: "React",
    position: "-right-4 top-14 md:-right-10 md:top-20",
    delay: 0.75,
    icon: <FaReact className="h-10 w-10 text-cyan-400" />,
  },
  {
    label: "Node.js",
    position: "left-1/2 -bottom-8 -translate-x-1/2 md:-bottom-10",
    delay: 0.9,
    icon: <FaNodeJs className="h-10 w-10 text-green-500" />,
  },
  {
    label: "typescript",
    position: "-top-1 -translate-x-1/2 md:-bottom-10",
    delay: 1.05,
    icon: (
      <img
        src="/logo/typescript.png"
        alt="typescript"
        className="h-10 w-10 object-contain"
      />
    ),
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate w-full md:h-screen flex items-center justify-center md:pt-20 pt-30 pb-15 md:pb-0 "
    >
      <img
        src="/herobackgroud.png"
        alt="Hero Background"
        className="w-full h-full object-cover absolute inset-0 -z-40"
        loading="lazy"
      />
      <DotPattern
        className=" dark:brightness-30 -z-50  "
        width={20}
        height={20}
      />
      <div className="max-w-7xl flex items-center justify-between flex-col md:flex-row  ">
        <div className="flex items-center md:items-start md:justify-start flex-col gap-4 md:gap-6">
          <div>
            <BlurFade delay={0.1} inView>
              <h2 className="text-lg text-center md:text-left">
                Salut, je suis{" "}
                <span className="text-primary font-semibold">Nicolas DETEH,</span>
              </h2>
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <h1 className="text-4xl sm:text-5xl md:mt-2 md:text-6xl text-center max-w-2xl md:text-left">
                Développeur Web | <span className="text-primary">UI/UX </span>{" "}
                Designer.
              </h1>
            </BlurFade>
          </div>
          <BlurFade delay={0.5} inView>
            <p className="text-sm mt-4 md:max-w-lg text-center md:text-justify p-3 md:p-0">
              Je suis un développeur web passionné par la création d'expériences
              numériques exceptionnelles. Avec une expertise en développement
              front-end et en design UI/UX, je m'efforce de concevoir des
              interfaces utilisateur intuitives et des applications web
              performantes.
            </p>
          </BlurFade>

          <BlurFade delay={0.7} inView>
            <div className="flex items-center gap-4 flex-col md:flex-row">
              <a href="https://wa.me/22897310889?text=" target="_blank" rel="noopener noreferrer">
                <Button className="p-6 rounded-full ">
                  <FaWhatsapp />
                  Contacter Moi
                </Button>
              </a>
              <a href="#projects" >
              <Button variant="outline" className="p-6 rounded-full dark:border-gray-400 border-primary ">
                  Explorer mes projets <ArrowRight />{" "}
                </Button>
              </a>
            </div>
          </BlurFade>
        </div>
        <BlurFade delay={0.4} inView direction="left" className="relative mt-8 md:mt-0 w-full max-w-88 md:max-w-104">
          <div className="absolute inset-0 translate-x-4 translate-y-4 " />
          <div className="relative flex items-center justify-center overflow-visible rounded-[2rem] border border-border/70 bg-background/50 backdrop-blur-xl shadow-2xl shadow-black/10 md:h-132 h-96">
            <img
              src="/profile.png"
              alt="Hero Image"
              className="h-full w-full rounded-[2rem] object-cover"
              loading="lazy"
            />
          </div>

          {floatingLogos.map((logo) => (
            <motion.div
              key={logo.label}
              className={`absolute ${logo.position} z-10 flex h-20 w-20 items-center justify-center`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: logo.delay, duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: logo.delay,
                }}
                className="flex h-full w-full items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                {logo.icon}
              </motion.div>
            </motion.div>
          ))}
        </BlurFade>
      </div>
    </section>
  );
}
