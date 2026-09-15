import { MessageCircle } from "lucide-react";
import { whatsappHref } from "../data/content";

const links = [
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200/50 bg-white/75 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="group leading-none" aria-label="Carriel Top">
          <span className="block font-serif text-[1.65rem] leading-none tracking-wide text-zinc-900">
            Carriel Top
          </span>
          <span className="mt-1 block text-[0.67rem] font-medium uppercase tracking-[0.28em] text-zinc-500">
            Festas & Decorações
          </span>
        </a>

        <nav className="hidden items-center gap-9 text-sm font-medium text-zinc-700 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-zinc-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappHref}
          className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2"
        >
          <MessageCircle className="size-4" strokeWidth={2} />
          <span className="hidden sm:inline">Solicitar Orçamento</span>
          <span className="sm:hidden">Orçamento</span>
        </a>
      </div>
    </header>
  );
}
