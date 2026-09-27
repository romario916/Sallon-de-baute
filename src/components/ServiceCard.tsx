import {
  ArrowRight,
  Clock3,
  
} from "lucide-react";

import type { Service } from "../data/services";
import { openWhatsApp } from "../utils/whatsapp";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const handleBooking = () => {
    openWhatsApp(
      `Bonjour Vanesa Bauté, je souhaite réserver le service "${service.name}". Pouvez-vous me renseigner sur les disponibilités ?`,
    );
  };

  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Catégorie */}
        <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-green-700 shadow-sm">
          {service.category}
        </span>

        {/* Nom sur l'image */}
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="font-serif text-2xl font-bold text-white">
            {service.name}
          </h3>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        <p className="min-h-[84px] text-sm leading-7 text-neutral-600">
          {service.description}
        </p>

        {/* Infos */}
        <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-5">
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <Clock3
              size={17}
              className="text-green-600"
            />

            {service.duration}
          </div>

          <p className="text-base font-bold text-pink-600">
            {service.price.toLocaleString("fr-FR")} Ar
          </p>
        </div>

        {/* Bouton */}
        <button
          type="button"
          onClick={handleBooking}
          className="mt-5 flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-pink-600"
        >
          Réserver ce service

          <ArrowRight
            size={17}
            className="ml-2 transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </article>
  );
};

export default ServiceCard;