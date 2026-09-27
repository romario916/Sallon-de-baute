import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import type { Product } from "../data/products";
import { openWhatsApp } from "../utils/whatsapp";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleOrder = () => {
    openWhatsApp(
      `Bonjour Vanesa Bauté, je souhaite avoir des informations sur le produit "${product.name}" de la marque ${product.brand}.`,
    );
  };

  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Catégorie */}
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-green-700 shadow-sm backdrop-blur">
          {product.category}
        </span>

        {/* Overlay au hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleOrder}
            className="flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-xl transition hover:bg-pink-600 hover:text-white"
          >
            <MessageCircle size={17} className="mr-2" />
            Commander
          </button>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-pink-600">
          {product.brand}
        </p>

        <h3 className="mt-2 font-serif text-2xl font-bold text-black">
          {product.name}
        </h3>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-neutral-600">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-5">
          <span className="text-lg font-bold text-pink-600">
            {product.price.toLocaleString("fr-FR")} Ar
          </span>

          <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
            En salon
          </span>
        </div>

        <button
          type="button"
          onClick={handleOrder}
          className="mt-5 flex w-full items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
        >
          Commander via WhatsApp
          <ArrowRight size={17} className="ml-2 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;