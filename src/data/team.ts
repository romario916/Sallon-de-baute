export interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialty: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Vanesa",
    role: "Fondatrice & Experte beauté",
    specialty:
      "Coiffure, conseil beauté et accompagnement personnalisé.",
    image:
      "apropo1.webp",
  },
  {
    id: 2,
    name: "Sophie",
    role: "Coiffeuse professionnelle",
    specialty:
      "Coupes, brushing, coiffures et mise en forme.",
    image:
      "apropo2.webp",
  },
  {
    id: 3,
    name: "Nathalie",
    role: "Experte coloration",
    specialty:
      "Coloration, balayage, mèches et soins capillaires.",
    image:
      "apropo3.webp",
  },
];