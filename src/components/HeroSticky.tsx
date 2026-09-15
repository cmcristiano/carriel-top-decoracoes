import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef, useState } from "react";
import { slides } from "../data/content";

const accentColor = {
  pink: "bg-pink-400",
  amber: "bg-amber-400",
  cyan: "bg-cyan-400",
};

export function HeroSticky() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = Math.min(slides.length - 1, Math.floor(latest * slides.length));
    setActiveIndex(nextIndex);
  });

  const active = slides[activeIndex];
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["25%", "100%"]);

  return (
    <section ref={containerRef} id="projetos" className="relative h-[350vh] bg-[#FAFAFA]">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-y-20 left-1/2 hidden w-px bg-zinc-200 lg:block" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-5 py-6 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          <div className="z-10 max-w-2xl">
            <div className="mb-7 flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-zinc-500">
              <span>{active.eyebrow}</span>
              <span className={`h-px w-12 ${accentColor[active.accent]}`} />
            </div>

            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-serif text-[clamp(3rem,7vw,6.2rem)] leading-[0.9] tracking-normal text-zinc-900">
                {active.title}
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-zinc-500 sm:text-lg">
                {active.description}
              </p>
            </motion.div>

            <div className="mt-8 flex max-w-lg items-center gap-4">
              <span className="w-24 shrink-0 whitespace-nowrap text-sm font-medium tabular-nums tracking-[0.18em] text-zinc-700">
                {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
              <div className="h-px flex-1 bg-zinc-200">
                <motion.div className="h-px bg-zinc-950" style={{ width: progressWidth }} />
              </div>
            </div>

            <div className="mt-8 hidden items-center gap-4 text-sm text-zinc-500 sm:flex">
              <span className="grid size-11 place-items-center rounded-full border border-zinc-300 bg-white">
                <ArrowDown className="size-4" />
              </span>
              <span>Role para explorar</span>
            </div>
          </div>

          <div className="relative min-h-[48vh] lg:min-h-[72vh]">
            <div className="absolute -right-4 top-4 hidden h-52 w-px bg-pink-200 lg:block" />
            <div className="relative mx-auto aspect-[4/5] max-h-[72vh] w-[min(76vw,520px)] overflow-hidden rounded-[2rem] bg-zinc-100 shadow-2xl shadow-zinc-900/10 lg:mr-20">
              {slides.map((slide, index) => {
                const start = index / slides.length;
                const center = (index + 0.5) / slides.length;
                const end = (index + 1) / slides.length;
                const opacityRange: number[] =
                  index === 0
                    ? [0, center, Math.min(1, end + 0.08)]
                    : index === slides.length - 1
                      ? [Math.max(0, start - 0.08), center, 1]
                      : [Math.max(0, start - 0.08), center, Math.min(1, end + 0.08)];
                const opacityOutput: number[] =
                  index === 0 ? [1, 1, 0] : index === slides.length - 1 ? [0, 1, 1] : [0, 1, 0];
                const opacity = useTransform(scrollYProgress, opacityRange, opacityOutput);
                const scale = useTransform(
                  scrollYProgress,
                  [Math.max(0, start - 0.08), end],
                  [1.08, 1],
                );

                return (
                  <motion.img
                    key={slide.image}
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ opacity, scale }}
                  />
                );
              })}
            </div>

            <div className="mt-5 flex justify-center gap-4 text-xs font-medium tabular-nums text-zinc-400 lg:mr-20 lg:justify-end">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={index === activeIndex ? "text-zinc-950" : "text-zinc-400"}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
