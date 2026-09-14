import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, LayoutGroup } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { PROJECTS, type Tab, type Project } from "@/data/projects";
import { MockScreen } from "@/components/MockScreen";

const FILTERS = ["All", "Web Application", "Mobile Application", "SaaS"] as const;

export function ProjectReel() {
  const [f, setF] = useState<(typeof FILTERS)[number]>("All");
  const [idx, setIdx] = useState(0);
  const items = PROJECTS.filter((p) => f === "All" || p.category === f);
  const safeIdx = Math.min(idx, Math.max(items.length - 1, 0));
  const current = items[safeIdx];

  const go = (dir: 1 | -1) => {
    setIdx((i) => {
      const next = i + dir;
      if (next < 0) return items.length - 1;
      if (next >= items.length) return 0;
      return next;
    });
  };

  const setFilter = (label: (typeof FILTERS)[number]) => {
    setF(label);
    setIdx(0);
  };

  return (
    <div>
      {/* Filters — morphing pill */}
      <LayoutGroup id="project-filters">
        <div className="mb-8 flex flex-wrap gap-1 rounded-full border border-[color:var(--border)] p-1 w-fit md:mb-10">
          {FILTERS.map((label) => {
            const active = f === label;
            return (
              <button
                key={label}
                onClick={() => setFilter(label)}
                className="relative rounded-full px-3 py-1.5 text-xs transition-colors md:px-4 md:py-2 md:text-sm"
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-[color:var(--purple-deep)]"
                    transition={{ type: "spring", stiffness: 400, damping: 38 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    active
                      ? "text-[color:var(--cream)]"
                      : "text-[color:var(--warmgray)] hover:text-[color:var(--purple-deep)]"
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      {/* Controls */}
      <div className="mb-4 flex items-center justify-between md:mb-6">
        <div className="font-mono text-xs text-[color:var(--warmgray)]">
          {items.length === 0 ? "00" : String(safeIdx + 1).padStart(2, "0")}
          <span className="mx-2 opacity-40">/</span>
          {String(items.length).padStart(2, "0")}
        </div>
        <div className="flex gap-1.5 md:gap-2">
          <button
            onClick={() => go(-1)}
            disabled={items.length < 2}
            aria-label="Previous project"
            className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--border)] text-[color:var(--ink)] transition-colors hover:border-[color:var(--purple)] hover:text-[color:var(--purple-deep)] disabled:opacity-30 md:h-11 md:w-11"
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </button>
          <button
            onClick={() => go(1)}
            disabled={items.length < 2}
            aria-label="Next project"
            className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--border)] text-[color:var(--ink)] transition-colors hover:border-[color:var(--purple)] hover:text-[color:var(--purple-deep)] disabled:opacity-30 md:h-11 md:w-11"
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>
      </div>

      {/* Spread */}
      <div className="relative min-h-[480px] md:min-h-[640px] overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {current && <Spread key={current.id + f} p={current} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Spread({ p }: { p: Project }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [tab, setTab] = useState<Tab>("problem");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const panelY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const numX = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const body: Record<Tab, string> = {
    problem: p.problem,
    solution: p.solution,
    impact: p.impact,
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, x: 60, filter: "blur(10px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, x: -60, filter: "blur(10px)" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Oversized outline index number bleeding off edge */}
      <motion.div
        aria-hidden
        style={{ x: numX }}
        className="pointer-events-none absolute -left-[2vw] -top-10 z-0 select-none font-display leading-[0.8] text-transparent md:-left-[4vw] md:-top-24"
        // stroke text via -webkit-text-stroke
      >
        <span
          className="block text-[20vw] md:text-[18vw]"
          style={{
            WebkitTextStroke: "1.5px rgba(91,33,182,0.18)",
            color: "transparent",
          }}
        >
          {p.n}
        </span>
      </motion.div>

      <div className="relative z-10 grid gap-0 overflow-hidden rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--card)] md:grid-cols-5">
        {/* Parallax visual */}
        <div className="relative min-h-[200px] overflow-hidden bg-[color:var(--purple-deep)]/5 md:col-span-2 md:min-h-[560px]">
          <motion.div
            style={{ y: panelY }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {p.coverImage ? (
              p.cover.device === "mobile" ? (
                <img
                  src={p.coverImage}
                  alt={p.title}
                  loading="lazy"
                  className="h-[320px] w-auto max-w-[62%] rounded-[1.5rem] object-contain shadow-[0_30px_80px_-30px_rgba(91,33,182,0.45)] md:h-[440px] md:max-w-[46%]"
                />
              ) : (
                <img
                  src={p.coverImage}
                  alt={p.title}
                  loading="lazy"
                  className="w-[82%] max-w-[460px] rounded-xl object-contain shadow-[0_30px_80px_-30px_rgba(91,33,182,0.35)]"
                />
              )
            ) : (
              <MockScreen
                device={p.cover.device}
                seed={p.cover.seed}
                accent={p.cover.accent}
                className={
                  p.cover.device === "mobile"
                    ? "w-[44%] max-w-[150px] md:max-w-[190px]"
                    : "mx-auto w-[78%] max-w-[430px]"
                }
              />
            )}
          </motion.div>
          <span className="absolute left-4 top-4 z-10 font-mono text-[10px] uppercase tracking-widest text-[color:var(--purple-deep)] md:left-6 md:top-6 md:text-xs">
            ({p.n} / {String(PROJECTS.length).padStart(2, "0")})
          </span>
          <span className="absolute bottom-4 left-4 z-10 font-display text-2xl text-[color:var(--ink)] md:bottom-6 md:left-6 md:text-3xl">
            {p.category}
          </span>
        </div>

        {/* Content */}
        <div className="relative p-5 md:col-span-3 md:p-14">
          {/* Clip-path wipe reveal on title */}
          <motion.h3
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1], delay: 0.15 }}
            className="font-display text-[clamp(1.4rem,4vw,3.4rem)] leading-[1.05]"
          >
            {p.title}
          </motion.h3>

          {/* Tabs — horizontal accordion */}
          <div className="mt-6 md:mt-10">
            <LayoutGroup id={`tabs-${p.id}`}>
              <div className="flex gap-0.5 border-b border-[color:var(--border)] md:gap-1">
                {(["problem", "solution", "impact"] as Tab[]).map((t) => {
                  const active = tab === t;
                  return (
                    <button
                      key={t}
                      onClick={() => setTab(t)}
                      className="relative px-2.5 py-2 text-left md:px-4 md:py-3"
                    >
                      <span
                        className={`eyebrow transition-colors ${
                          active
                            ? "text-[color:var(--purple-deep)]"
                            : "text-[color:var(--warmgray)]"
                        }`}
                      >
                        {t}
                      </span>
                      {active && (
                        <motion.span
                          layoutId={`tab-underline-${p.id}`}
                          className="absolute -bottom-px left-0 right-0 h-[2px] bg-[color:var(--purple-deep)]"
                          transition={{ type: "spring", stiffness: 500, damping: 40 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="relative mt-4 min-h-[90px] md:mt-6 md:min-h-[110px]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={tab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className={`text-sm leading-relaxed md:text-base ${
                      tab === "impact"
                        ? "font-medium text-[color:var(--ink)]"
                        : "text-[color:var(--warmgray)]"
                    }`}
                  >
                    {body[tab]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </LayoutGroup>
          </div>

          {/* Stack pills — domino stagger */}
          <div className="mt-6 flex flex-wrap gap-1.5 md:mt-8 md:gap-2">
            {p.stack.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 14, rotate: -4 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.5 + i * 0.08,
                }}
                className="chip-outline"
              >
                {s}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10 md:gap-5">
            <Link
              to="/projects/$id"
              params={{ id: p.id }}
              className="btn-primary btn-primary-hover inline-flex items-center gap-1.5 text-sm"
            >
              View Case Study <ArrowRight className="h-4 w-4" />
            </Link>
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--purple-deep)] hover:text-[color:var(--purple-electric)]"
              >
                Live Demo <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--ink)] hover:text-[color:var(--purple-deep)]"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
