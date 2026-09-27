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
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85",
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
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Coiffage & Mise en forme",
    description:
      "Une mise en forme adaptée à votre style pour une finition élégante et naturelle.",
    duration: "45 min",
    price: 30000,
    category: "Coiffure",
    image:
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=85",
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
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=85",
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
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Mèches",
    description:
      "Une technique personnalisée pour illuminer votre coiffure avec des nuances harmonieuses.",
    duration: "1h45",
    price: 100000,
    category: "Coloration",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85",
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
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=900&q=85",
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
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 9,
    name: "Soin réparateur",
    description:
      "Un soin ciblé pour accompagner les cheveux fragilisés et améliorer leur aspect.",
    duration: "45 min",
    price: 50000,
    category: "Soins",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=900&q=85",
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
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
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
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85",
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
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
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
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 14,
    name: "Mise en beauté",
    description:
      "Une mise en beauté naturelle et élégante adaptée à votre personnalité et à votre occasion.",
    duration: "1h",
    price: 65000,
    category: "Beauté",
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=85",
  },
];