import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, LayoutGroup } from "motion/react";
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";

type Tab = "problem" | "solution" | "impact";

type Project = {
  id: string;
  n: string;
  title: string;
  category: "Web Application" | "Mobile Application" | "SaaS" | "Dashboard" | "UI Experiment";
  problem: string;
  solution: string;
  stack: string[];
  impact: string;
  live?: string;
  github?: string;
  gradient: string;
};

const PROJECTS: Project[] = [
  {
    id: "fennec",
    n: "01",
    title: "Fennec Booking — Travel Platform",
    category: "Web Application",
    problem: "Fragmented travel booking experiences across desktop and mobile with slow, dated UI.",
    solution: "Rebuilt the frontend architecture with a modern React/Next.js stack, design system, and performant booking flows.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
    impact: "Leading frontend for a production travel technology company serving real customers.",
    live: "#",
    gradient: "linear-gradient(135deg,#7c3aed 0%,#a855f7 50%,#e9d8fd 100%)",
  },
  {
    id: "hackathon",
    n: "02",
    title: "Travel Hackathon — 2nd Place Product",
    category: "Web Application",
    problem: "Design and ship a travel product in 48 hours competing against national teams.",
    solution: "Led product + frontend, built end-to-end MVP with a bookable itinerary flow and clean UI in under two days.",
    stack: ["React", "TypeScript", "Tailwind", "Firebase"],
    impact: "🏆 2nd place — Travel Hackathon 2026.",
    gradient: "linear-gradient(135deg,#5b21b6 0%,#7c3aed 60%,#f6f1e9 100%)",
  },
  {
    id: "saas-dash",
    n: "03",
    title: "Analytics SaaS Dashboard",
    category: "SaaS",
    problem: "Small businesses lacked a clean, unified view of their operational metrics.",
    solution: "Built a multi-tenant SaaS dashboard with real-time charts, role-based access, and Stripe billing.",
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    impact: "Cut client reporting time from hours to seconds.",
    live: "#",
    github: "#",
    gradient: "linear-gradient(135deg,#a855f7 0%,#e9d8fd 100%)",
  },
  {
    id: "mobile-app",
    n: "04",
    title: "Cross-Platform Mobile App",
    category: "Mobile Application",
    problem: "Client needed a single codebase mobile app shipping to both iOS and Android quickly.",
    solution: "Delivered a React Native app with offline-first sync, push notifications, and native module integrations.",
    stack: ["React Native", "TypeScript", "Firebase"],
    impact: "Shipped to both stores in under 6 weeks.",
    github: "#",
    gradient: "linear-gradient(135deg,#5b21b6 0%,#a855f7 100%)",
  },
  {
    id: "ops-dash",
    n: "05",
    title: "Internal Operations Dashboard",
    category: "Dashboard",
    problem: "Operations team was juggling five tools to run their day.",
    solution: "Consolidated into a single internal dashboard with automations, filters, and export-ready reports.",
    stack: ["React", "Node.js", "SQL"],
    impact: "Removed 4 SaaS tools from the stack.",
    gradient: "linear-gradient(135deg,#7c3aed 0%,#efe8da 100%)",
  },
  {
    id: "ui-lab",
    n: "06",
    title: "Motion & UI Experiments",
    category: "UI Experiment",
    problem: "Push the ceiling on what a browser interface can feel like.",
    solution: "Ongoing lab of scroll-driven, magnetic, and physics-based UI prototypes shared with the community.",
    stack: ["React", "Motion", "TypeScript"],
    impact: "Featured on Akram4Dev socials to educate developers.",
    gradient: "linear-gradient(135deg,#e9d8fd 0%,#7c3aed 100%)",
  },
];

const FILTERS = ["All", "Web Application", "Mobile Application", "SaaS", "Dashboard", "UI Experiment"] as const;

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
        <div className="mb-10 flex flex-wrap gap-1 rounded-full border border-[color:var(--border)] p-1 w-fit">
          {FILTERS.map((label) => {
            const active = f === label;
            return (
              <button
                key={label}
                onClick={() => setFilter(label)}
                className="relative rounded-full px-4 py-2 text-sm transition-colors"
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
                    active ? "text-[color:var(--cream)]" : "text-[color:var(--warmgray)] hover:text-[color:var(--purple-deep)]"
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
      <div className="mb-6 flex items-center justify-between">
        <div className="font-mono text-xs text-[color:var(--warmgray)]">
          {items.length === 0 ? "00" : String(safeIdx + 1).padStart(2, "0")}
          <span className="mx-2 opacity-40">/</span>
          {String(items.length).padStart(2, "0")}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => go(-1)}
            disabled={items.length < 2}
            aria-label="Previous project"
            className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] text-[color:var(--ink)] transition-colors hover:border-[color:var(--purple)] hover:text-[color:var(--purple-deep)] disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(1)}
            disabled={items.length < 2}
            aria-label="Next project"
            className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] text-[color:var(--ink)] transition-colors hover:border-[color:var(--purple)] hover:text-[color:var(--purple-deep)] disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Spread */}
      <div className="relative min-h-[640px] overflow-hidden">
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
        className="pointer-events-none absolute -left-[3vw] -top-16 z-0 select-none font-display leading-[0.8] text-transparent md:-left-[4vw] md:-top-24"
        // stroke text via -webkit-text-stroke
      >
        <span
          className="block text-[24vw] md:text-[18vw]"
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
        <div className="relative min-h-[320px] overflow-hidden md:col-span-2 md:min-h-[560px]">
          <motion.div
            style={{ y: panelY, background: p.gradient }}
            className="absolute -inset-y-16 inset-x-0"
          >
            <div
              className="absolute inset-0 mix-blend-overlay opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), transparent 55%)",
              }}
            />
          </motion.div>
          <span className="absolute left-6 top-6 z-10 font-mono text-xs uppercase tracking-widest text-white/85">
            ({p.n} / 06)
          </span>
          <span className="absolute bottom-6 left-6 z-10 font-display text-3xl text-white/95">
            {p.category}
          </span>
        </div>

        {/* Content */}
        <div className="relative p-8 md:col-span-3 md:p-14">
          {/* Clip-path wipe reveal on title */}
          <motion.h3
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1], delay: 0.15 }}
            className="font-display text-[clamp(1.9rem,4vw,3.4rem)] leading-[1.05]"
          >
            {p.title}
          </motion.h3>

          {/* Tabs — horizontal accordion */}
          <div className="mt-10">
            <LayoutGroup id={`tabs-${p.id}`}>
              <div className="flex gap-1 border-b border-[color:var(--border)]">
                {(["problem", "solution", "impact"] as Tab[]).map((t) => {
                  const active = tab === t;
                  return (
                    <button
                      key={t}
                      onClick={() => setTab(t)}
                      className="relative px-4 py-3 text-left"
                    >
                      <span
                        className={`eyebrow transition-colors ${
                          active ? "text-[color:var(--purple-deep)]" : "text-[color:var(--warmgray)]"
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
              <div className="relative mt-6 min-h-[110px]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={tab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className={`text-[15px] leading-relaxed md:text-base ${
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
          <div className="mt-8 flex flex-wrap gap-2">
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

          <div className="mt-10 flex flex-wrap gap-5">
            {p.live && (
              <a
                href={p.live}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--purple-deep)] hover:text-[color:var(--purple-electric)]"
              >
                Live Demo <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {p.github && (
              <a
                href={p.github}
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
