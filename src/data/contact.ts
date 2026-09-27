export interface SocialLink {
  name: string;
  url: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
}

export const contact = {
  salonName: "Vanesa Bauté",

  whatsapp: "261378911098",

  phone: "037 89 110 98",

  email: "romarhenry08@gmail.com",

  address: "Antananarivo, Madagascar",

  defaultWhatsAppMessage:
    "Bonjour Vanesa Bauté, je souhaite prendre rendez-vous. Pouvez-vous me renseigner sur les disponibilités ?",

  openingHours: [
    {
      day: "Lundi",
      hours: "09:00 - 18:00",
    },
    {
      day: "Mardi",
      hours: "09:00 - 18:00",
    },
    {
      day: "Mercredi",
      hours: "09:00 - 18:00",
    },
    {
      day: "Jeudi",
      hours: "09:00 - 18:00",
    },
    {
      day: "Vendredi",
      hours: "09:00 - 18:00",
    },
    {
      day: "Samedi",
      hours: "09:00 - 17:00",
    },
    {
      day: "Dimanche",
      hours: "Fermé",
    },
  ] as OpeningHour[],

  socialLinks: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
    },
  ] as SocialLink[],
};