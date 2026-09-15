import type { ComponentType } from "react";
import { BadgeCheck, PanelsTopLeft, Sparkles } from "lucide-react";

export const whatsappHref =
  "https://wa.me/5547996122174?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20Carriel%20Top.";

export const instagramHandle = "@carrieltopfestasedecoracoes";
export const instagramHref = "https://www.instagram.com/carrieltopfestasedecoracoes";

export const imagePath = (fileName: string) => `${import.meta.env.BASE_URL}images/${fileName}`;

export type Slide = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  accent: "pink" | "amber" | "cyan";
};

export const slides: Slide[] = [
  {
    eyebrow: "PORTFÓLIO EXCLUSIVO",
    title: "Cenários Infantis & Temáticos",
    description:
      "Cores vivas, painéis personalizados e personagens entram em cena para transformar cada idade em memória afetiva.",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0021.jpg"),
    accent: "pink",
  },
  {
    eyebrow: "PORTFÓLIO EXCLUSIVO",
    title: "Festas de 15 Anos & Debutantes",
    description:
      "Paletas noturnas, brilhos pontuais e cenografia de impacto para entradas, mesas principais e registros fotográficos.",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0018.jpg"),
    accent: "cyan",
  },
  {
    eyebrow: "PORTFÓLIO EXCLUSIVO",
    title: "Celebrações Intimistas & Baby",
    description:
      "Chás, revelações e pequenos encontros ganham textura com flores, mobiliário leve e proporções delicadas.",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0024.jpg"),
    accent: "amber",
  },
  {
    eyebrow: "PORTFÓLIO EXCLUSIVO",
    title: "Eventos Adultos & Comemorações Especiais",
    description:
      "Ambientações elegantes para aniversários e encontros especiais, equilibrando cor, iluminação e acervo com sofisticação.",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0016.jpg"),
    accent: "cyan",
  },
  {
    eyebrow: "PORTFÓLIO EXCLUSIVO",
    title: "Bride to Be & Encontros Afetivos",
    description:
      "Balões, molduras e paletas suaves criam pontos de foto para celebrar noivas, amigas e histórias que começam.",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0030.jpg"),
    accent: "pink",
  },
  {
    eyebrow: "PORTFÓLIO EXCLUSIVO",
    title: "Cenários Naturais & Sofisticados",
    description:
      "Mobiliário, folhagens e luz quente constroem ambientes acolhedores para aniversários adultos e recepções especiais.",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0032.jpg"),
    accent: "amber",
  },
];

export type Category = {
  title: string;
  description: string;
  action: string;
  image: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  accentClass: string;
};

export const categories: Category[] = [
  {
    title: "Cenografia Infantil & Temática",
    description:
      "Temas infantis, fazendinha, bosque, personagens e composições completas para encantar os pequenos.",
    action: "Criar uma festa inesquecível",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0001.jpg"),
    icon: Sparkles,
    accentClass: "bg-pink-400",
  },
  {
    title: "Debutantes (15 Anos) & Noivados",
    description:
      "Projetos com presença cênica, cores marcantes e leitura elegante para celebrar momentos de transição.",
    action: "Desenhar uma celebração especial",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0018.jpg"),
    icon: BadgeCheck,
    accentClass: "bg-amber-400",
  },
  {
    title: "Aluguel de Peças & Painéis Personalizados",
    description:
      "Acervo, painéis, mobiliário e detalhes sob medida para compor a base visual da sua festa.",
    action: "Montar uma composição sob medida",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0016.jpg"),
    icon: PanelsTopLeft,
    accentClass: "bg-cyan-400",
  },
];

export type GalleryImage = {
  title: string;
  caption: string;
  image: string;
  className: string;
};

export const galleryImages: GalleryImage[] = [
  {
    title: "Infantil Tropical",
    caption: "cores, folhagens e personagens",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0021.jpg"),
    className: "md:col-span-5 md:row-span-2",
  },
  {
    title: "Noite de Debutante",
    caption: "brilho, estrelas e presença",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0018.jpg"),
    className: "md:col-span-4 md:row-span-2",
  },
  {
    title: "Mesa Branca",
    caption: "leveza para receber",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0016.jpg"),
    className: "md:col-span-3",
  },
  {
    title: "Baby Neutro",
    caption: "tons calmos e delicados",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0024.jpg"),
    className: "md:col-span-3",
  },
  {
    title: "Circo Encantado",
    caption: "cenografia lúdica completa",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0027.jpg"),
    className: "md:col-span-4",
  },
  {
    title: "Bride to Be",
    caption: "um cenário para celebrar",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0030.jpg"),
    className: "md:col-span-4",
  },
  {
    title: "Painel Floral",
    caption: "folhagens e luz quente",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0031.jpg"),
    className: "md:col-span-4",
  },
];

export const detailImages = [
  imagePath("carrieltopfestasedecoracoes-20260915-0020.jpg"),
  imagePath("carrieltopfestasedecoracoes-20260915-0022.jpg"),
  imagePath("carrieltopfestasedecoracoes-20260915-0028.jpg"),
  imagePath("carrieltopfestasedecoracoes-20260915-0029.jpg"),
  imagePath("carrieltopfestasedecoracoes-20260915-0033.jpg"),
];
