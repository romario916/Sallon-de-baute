export type ProductCategory =
  | "Shampoing"
  | "Soin"
  | "Coiffage"
  | "Maquillage"
  | "Outils";

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  category: ProductCategory;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Shampoing Réparateur",
    brand: "L'Oréal Professionnel",
    price: 45000,
    category: "Shampoing",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
    description:
      "Un shampoing professionnel conçu pour nettoyer délicatement et accompagner les cheveux fragilisés.",
  },
  {
    id: 2,
    name: "Shampoing Hydratant",
    brand: "Professionnel",
    price: 42000,
    category: "Shampoing",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85",
    description:
      "Une formule douce pour aider à maintenir l'hydratation et la souplesse des cheveux.",
  },
  {
    id: 3,
    name: "Masque Réparateur",
    brand: "Kérastase",
    price: 65000,
    category: "Soin",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85",
    description:
      "Un soin riche destiné à nourrir les cheveux et améliorer leur douceur et leur aspect.",
  },
  {
    id: 4,
    name: "Soin Hydratant Intense",
    brand: "Professionnel",
    price: 55000,
    category: "Soin",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=85",
    description:
      "Un soin hydratant pour une chevelure plus souple, douce et lumineuse.",
  },
  {
    id: 5,
    name: "Huile Capillaire",
    brand: "Beauty Care",
    price: 35000,
    category: "Soin",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=900&q=85",
    description:
      "Une huile légère pour apporter une finition brillante et soignée à la chevelure.",
  },
  {
    id: 6,
    name: "Crème Coiffante",
    brand: "Style Pro",
    price: 38000,
    category: "Coiffage",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
    description:
      "Une crème coiffante permettant de structurer la chevelure tout en conservant un aspect naturel.",
  },
  {
    id: 7,
    name: "Spray Fixant",
    brand: "Professional Style",
    price: 40000,
    category: "Coiffage",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85",
    description:
      "Un spray de finition pour maintenir votre coiffure avec une tenue élégante.",
  },
  {
    id: 8,
    name: "Rouge à lèvres",
    brand: "Beauty Paris",
    price: 30000,
    category: "Maquillage",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85",
    description:
      "Une couleur élégante pour compléter votre mise en beauté quotidienne ou événementielle.",
  },
  {
    id: 9,
    name: "Palette Maquillage",
    brand: "Beauty Studio",
    price: 75000,
    category: "Maquillage",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85",
    description:
      "Une sélection de teintes polyvalentes pour créer différents styles de maquillage.",
  },
  {
    id: 10,
    name: "Brosse Professionnelle",
    brand: "Salon Pro",
    price: 28000,
    category: "Outils",
    image:
      "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=900&q=85",
    description:
      "Une brosse adaptée au coiffage quotidien et aux différentes techniques de mise en forme.",
  },
  {
    id: 11,
    name: "Sèche-cheveux",
    brand: "Professional Tools",
    price: 180000,
    category: "Outils",
    image:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=900&q=85",
    description:
      "Un appareil pensé pour accompagner vos routines de coiffage à la maison.",
  },
  {
    id: 12,
    name: "Fer à lisser",
    brand: "Professional Tools",
    price: 150000,
    category: "Outils",
    image:
      "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=900&q=85",
    description:
      "Un outil de coiffage pratique pour réaliser différentes finitions et styles.",
  },
];