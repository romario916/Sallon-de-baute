import { MessageCircle } from "lucide-react";

import { openWhatsApp } from "../utils/whatsapp";

const WhatsAppFloatingButton = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <span className="absolute inset-0 animate-ping rounded-full bg-green-500/30" />

      <button
        type="button"
        onClick={() => openWhatsApp()}
        aria-label="Contacter Vanesa Bauté sur WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl shadow-green-900/20 transition duration-300 hover:scale-105 hover:bg-green-700"
      >
        <MessageCircle size={25} strokeWidth={2.2} />

        <span className="absolute -bottom-1 -right-1 rounded-full border-2 border-white bg-green-600 px-1.5 py-0.5 text-[8px] font-bold">
          WA
        </span>
      </button>
    </div>
  );
};

export default WhatsAppFloatingButton;