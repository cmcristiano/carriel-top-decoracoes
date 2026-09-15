import { MessageCircle } from "lucide-react";
import { whatsappHref } from "../data/content";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref}
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/25 transition hover:scale-105 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 lg:hidden"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/30" />
      <MessageCircle className="relative size-7" />
    </a>
  );
}
