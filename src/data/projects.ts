import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "assigame",
    title: "Assigame",
    description:
      "Il s'agit d'une maquette de marketplace pensée pour mettre en relation directe vendeurs et acheteurs, avec une gestion avancée des produits.",
    fullDescription:
      "C'est une maquette d'application pensée pour offrir une navigation simple, des composants cohérents et une lecture rapide des informations importantes. Le travail s'est concentré sur l'ergonomie, la lisibilité et l'impact visuel des blocs de contenu.",
    technologies: ["Figma"],
    image: "/ui/assigame.jpg",
    viewUrl: "https://example.com/assigame",
    type: "ui/ux",
  },
  {
    id: "assigame-web",
    title: "Assigame Marketplace",
    description:
      "Une plateforme web d'achat et de vente pensée pour connecter directement vendeurs et acheteurs dans une interface moderne.",
    fullDescription:
      "Cette version web d'Assigame met en avant une expérience e-commerce claire, avec une héro section forte, une navigation épurée et une présentation visuelle orientée conversion. L'objectif est de rendre la découverte des produits et la prise de contact plus naturelles, tout en gardant une ambiance premium et rassurante.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    image: "/web/assigame.png",
    viewUrl: "https://example.com/assigame-web",
    type: "web",
  },
  {
    id: "epreuves-examens",
    title: "Épreuves d'Examens",
    description:
      "Une plateforme web pour retrouver, consulter et télécharger des sujets d'examens par pôle, filière et année.",
    fullDescription:
      "Cette interface web facilite l'accès aux épreuves d'examens grâce à une recherche rapide, une mise en avant claire des catégories et une navigation pensée pour un usage simple et efficace. Le design s'appuie sur une grande image héro, une barre de recherche centrale et des cartes informatives pour donner une lecture immédiate des contenus disponibles.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    image: "/web/epreuves.png",
    viewUrl: "https://example.com/epreuves",
    type: "web",
  },
  {
    id: "popstore",
    title: "POPS STORE",
    description:
      "POPS STORE est un site vitrine pour une boutique de sneakers, pensée pour vendre des sneakers de qualité.",
    fullDescription:
      "POPS STORE propose une interface de site vitrine avec une navigation simple et efficace, des composants cohérents et une lecture rapide des informations importantes. Le travail s'est concentré sur l'ergonomie, la lisibilité et l'impact visuel des blocs de contenu.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "DaisyUI"],
    image: "/web/popstore.png",
    viewUrl: "https://example.com/popstore",
    type: "web",
  },
  {
    id: "sameway-app",
    title: "SameWay",
    description:
      "C'est une solution de covoiturage solidaire et écologique qui permet aux étudiants d'un même quartier de partager leurs trajets vers l'université.",
    fullDescription:
      "SameWay est une maquette d'application pensée pour offrir une navigation simple, des composants cohérents et une lecture rapide des informations importantes. Le travail s'est concentré sur l'ergonomie, la lisibilité et l'impact visuel des blocs de contenu.",
    technologies: ["Figma"],
    image: "/ui/sameway.jpg",
    viewUrl: "https://example.com/sameway",
    type: "ui/ux",
  },
  {
    id: "yogachill-landing",
    title: "YogaChill",
    description:
      "YOGA CHILL est une landing page épurée pour un studio de yoga, pensée pour transmettre une sensation de sérénité et maximiser les inscriptions.",
    fullDescription:
      "YogaChill met en avant une ambiance visuelle douce, des appels à l'action visibles et un storytelling centré sur le bien-être. Le design a été pensé pour inspirer la confiance et guider naturellement l'utilisateur vers la prise de contact ou la réservation.",
    technologies: ["Figma", "UI Design", "Responsive Design", "Accessibility"],
    image: "/ui/yogachill.jpg",
    viewUrl: "https://example.com/yogachill",
    type: "ui/ux",
  },
];
