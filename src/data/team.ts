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
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Sophie",
    role: "Coiffeuse professionnelle",
    specialty:
      "Coupes, brushing, coiffures et mise en forme.",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Nathalie",
    role: "Experte coloration",
    specialty:
      "Coloration, balayage, mèches et soins capillaires.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
  },
];