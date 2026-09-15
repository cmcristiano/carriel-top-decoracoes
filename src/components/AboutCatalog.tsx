import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories, imagePath, whatsappHref } from "../data/content";

export function AboutCatalog() {
  return (
    <section id="sobre" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.16fr_0.84fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[1.6rem]"
          >
            <img
              src={imagePath("carrieltopfestasedecoracoes-20260915-0016.jpg")}
              alt="Mesa decorada com balões brancos e iluminação natural"
              className="h-[360px] w-full object-cover sm:h-[520px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-zinc-500">
              <span>Carriel Top</span>
              <span className="h-px w-12 bg-pink-400" />
            </div>
            <h2 className="font-serif text-[clamp(2.7rem,5vw,5.3rem)] leading-[0.94] text-zinc-900">
              CADA DETALHE CONTA UMA HISTÓRIA
            </h2>
            <p className="mt-7 text-lg leading-9 text-zinc-500">
              Com acervo próprio, painéis orgânicos e curadoria de móveis, a
              Carriel Top transforma salões, casas e espaços de festa em
              ambientes mágicos. O projeto nasce do tema, passa pela harmonia
              das cores e termina em uma montagem pensada para ser vivida.
            </p>
            <p className="mt-8 font-serif text-3xl italic leading-tight text-zinc-800">
              Mais que festas, criamos histórias.
            </p>
          </motion.div>
        </div>

        <div className="mt-24">
          <div className="mb-10 flex items-end justify-between gap-8">
            <div>
              <div className="mb-5 flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-zinc-500">
                <span>Nossos serviços</span>
                <span className="h-px w-12 bg-cyan-400" />
              </div>
              <h3 className="max-w-4xl font-serif text-[clamp(2.3rem,4.4vw,4.7rem)] leading-none text-zinc-900">
                Soluções completas para a sua celebração
              </h3>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.article
                  key={category.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/8"
                >
                  <div className="aspect-[1.38] overflow-hidden bg-zinc-100">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <Icon className="mb-5 size-6 text-zinc-800" strokeWidth={1.7} />
                    <h4 className="font-serif text-2xl leading-tight text-zinc-900">
                      {category.title}
                    </h4>
                    <div className={`mt-4 h-0.5 w-11 ${category.accentClass}`} />
                    <p className="mt-5 min-h-24 text-sm leading-7 text-zinc-500">
                      {category.description}
                    </p>
                    <a
                      href={whatsappHref}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900"
                    >
                      {category.action}
                      <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
