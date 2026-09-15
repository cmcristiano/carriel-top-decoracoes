import { ArrowRight, MessageCircle } from "lucide-react";
import {
  instagramHandle,
  instagramHref,
  whatsappHref,
  whatsappLabel,
} from "../data/content";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
        width="17"
        x="3.5"
        y="3.5"
      />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" fill="currentColor" r="1.2" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="contato" className="bg-[#FAFAFA] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 rounded-[1.6rem] bg-white px-7 py-10 shadow-sm ring-1 ring-zinc-200/80 sm:px-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-zinc-500">
              <span>Carriel Top</span>
              <span className="h-px w-12 bg-pink-400" />
            </div>
            <h2 className="font-serif text-[clamp(2.4rem,5vw,4.8rem)] leading-none text-zinc-900">
              Vamos planejar a sua celebração?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-500">
              Fale com a equipe e receba um orçamento personalizado para a data,
              o espaço e o estilo da sua festa.
            </p>
          </div>

          <a
            href={whatsappHref}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-8 py-5 text-base font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2"
          >
            <MessageCircle className="size-6" />
            Falar pelo WhatsApp
            <ArrowRight className="size-5" />
          </a>
        </div>

        <div className="flex flex-col gap-6 border-t border-zinc-200 py-8 text-sm text-zinc-500 lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 Carriel Top - Festas & Decorações.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <span className="font-medium text-zinc-600">Redes sociais e contato</span>
            <a
              href={instagramHref}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 font-semibold text-zinc-800 transition hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
            >
              <InstagramIcon className="size-4" />
              {instagramHandle}
            </a>
            <a
              href={whatsappHref}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 font-semibold text-emerald-700 transition hover:border-emerald-200 hover:bg-emerald-100 hover:text-emerald-800"
            >
              <MessageCircle className="size-4" />
              WhatsApp {whatsappLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
