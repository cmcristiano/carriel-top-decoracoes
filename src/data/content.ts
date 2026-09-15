import type { ComponentType } from "react";
import { BadgeCheck, PanelsTopLeft, Sparkles } from "lucide-react";

export const whatsappHref =
  "https://wa.me/?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20Carriel%20Top.";

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
      "Composições lúdicas com painéis orgânicos, balões desconstruídos e peças que transformam cada idade em memória afetiva.",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0019.jpg"),
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
    title: "Celebrações Intimistas & Chás",
    description:
      "Chás, revelações e pequenos encontros ganham textura com flores, mobiliário leve e um cuidado preciso com proporções.",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0010.jpg"),
    accent: "amber",
  },
  {
    eyebrow: "PORTFÓLIO EXCLUSIVO",
    title: "Eventos Adultos & Comemorações Especiais",
    description:
      "Ambientações elegantes para aniversários e encontros especiais, equilibrando cor, iluminação e acervo com sofisticação.",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0006.jpg"),
    accent: "pink",
  },
];

export type Category = {
  title: string;
  description: string;
  image: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  accentClass: string;
};

export const categories: Category[] = [
  {
    title: "Cenografia Infantil & Temática",
    description:
      "Temas infantis, fazendinha, bosque, personagens e composições completas para encantar os pequenos.",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0001.jpg"),
    icon: Sparkles,
    accentClass: "bg-pink-400",
  },
  {
    title: "Debutantes (15 Anos) & Noivados",
    description:
      "Projetos com presença cênica, cores marcantes e leitura elegante para celebrar momentos de transição.",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0018.jpg"),
    icon: BadgeCheck,
    accentClass: "bg-amber-400",
  },
  {
    title: "Aluguel de Peças & Painéis Personalizados",
    description:
      "Acervo, painéis, mobiliário e detalhes sob medida para compor a base visual da sua festa.",
    image: imagePath("carrieltopfestasedecoracoes-20260915-0016.jpg"),
    icon: PanelsTopLeft,
    accentClass: "bg-cyan-400",
  },
];
