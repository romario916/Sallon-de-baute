export type ServiceCategory =
  | "Coiffure"
  | "Coloration"
  | "Soins"
  | "Coiffure événementielle"
  | "Beauté";

export interface Service {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: number;
  category: ServiceCategory;
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    name: "Coupe & Brushing",
    description:
      "Une coupe personnalisée accompagnée d'un brushing soigné pour mettre votre style en valeur.",
    duration: "45 min",
    price: 35000,
    category: "Coiffure",
    image:
      "coiffure.webp",
  },
  {
    id: 2,
    name: "Brushing",
    description:
      "Un brushing professionnel pour une chevelure souple, brillante et parfaitement coiffée.",
    duration: "30 min",
    price: 25000,
    category: "Coiffure",
    image:
      "coiffure1.webp",
  },
  
  {
    id: 4,
    name: "Coloration complète",
    description:
      "Une coloration personnalisée pour apporter profondeur, luminosité et caractère à votre chevelure.",
    duration: "1h30",
    price: 85000,
    category: "Coloration",
    image:
      "coloration.webp",
  },
  {
    id: 5,
    name: "Balayage",
    description:
      "Des nuances lumineuses et naturelles pour donner du relief et de la dimension aux cheveux.",
    duration: "2h",
    price: 120000,
    category: "Coloration",
    image:
      "coloration1.webp",
  },
  

  {
    id: 7,
    name: "Soin profond",
    description:
      "Un soin professionnel pour nourrir, hydrater et revitaliser les cheveux en profondeur.",
    duration: "45 min",
    price: 45000,
    category: "Soins",
    image:
      "soin.webp",
  },
  {
    id: 8,
    name: "Soin hydratant",
    description:
      "Un rituel hydratant pour retrouver des cheveux plus souples, doux et brillants.",
    duration: "30 min",
    price: 35000,
    category: "Soins",
    image:
      "soin1.webp",
  },
  

  {
    id: 10,
    name: "Coiffure mariage",
    description:
      "Une coiffure élégante et personnalisée pour accompagner votre journée exceptionnelle.",
    duration: "1h30",
    price: 120000,
    category: "Coiffure événementielle",
    image:
      "even.webp",
  },
  {
    id: 11,
    name: "Coiffure événement",
    description:
      "Une mise en beauté raffinée pour vos cérémonies, fêtes et événements importants.",
    duration: "1h",
    price: 80000,
    category: "Coiffure événementielle",
    image:
      "even1.webp",
  },

  {
    id: 12,
    name: "Manucure",
    description:
      "Un soin complet des mains et des ongles pour une finition propre et élégante.",
    duration: "45 min",
    price: 30000,
    category: "Beauté",
    image:
      "beaute.webp",
  },
  {
    id: 13,
    name: "Beauté des ongles",
    description:
      "Une prestation dédiée à la beauté et à la finition de vos ongles.",
    duration: "1h",
    price: 45000,
    category: "Beauté",
    image:
      "beaute1.webp",
  },
  
];