export type GalleryCategory =
  | "Coiffure"
  | "Coloration"
  | "Soins"
  | "Mariage"
  | "Beauté";

export interface GalleryItem {
  id: number;
  title: string;
  category: GalleryCategory;
  image: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Coupe élégante",
    category: "Coiffure",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "Brushing naturel",
    category: "Coiffure",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    title: "Chevelure lumineuse",
    category: "Coloration",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    title: "Balayage naturel",
    category: "Coloration",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    title: "Soin capillaire",
    category: "Soins",
    image:
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    title: "Rituel beauté",
    category: "Soins",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 7,
    title: "Coiffure de mariée",
    category: "Mariage",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 8,
    title: "Élégance événementielle",
    category: "Mariage",
    image:
      "https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 9,
    title: "Manucure élégante",
    category: "Beauté",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 10,
    title: "Mise en beauté",
    category: "Beauté",
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 11,
    title: "Style contemporain",
    category: "Coiffure",
    image:
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 12,
    title: "Finition professionnelle",
    category: "Coloration",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85",
  },
];