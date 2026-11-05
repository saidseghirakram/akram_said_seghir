import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Globe, Smartphone, Layers, BarChart2, Code2 } from "lucide-react";
import { PROJECTS, type Project } from "@/data/projects";

const CAT_ICON: Record<string, React.ElementType> = {
  "Web Application": Globe,
  "Mobile Application": Smartphone,
  "SaaS": Layers,
  "Dashboard": BarChart2,
  "UI Experiment": Code2,
};

// Stagger variants — container triggers children
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 38 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export function WorkList() {
  return (
    <div className="border-t border-[color:var(--border)]">
      {PROJECTS.map((p) => <WorkItem key={p.id} p={p} />)}
    </div>
  );
}

function WorkItem({ p }: { p: Project }) {
  const Icon = CAT_ICON[p.category] ?? Code2;
  const images = (p.showcase ?? []).filter((s) => !!s.image).slice(0, 8);
  const stripRef = useRef<HTMLDivElement>(null);

  return (
    <motion.article
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="border-b border-[color:var(--border)] py-14 md:py-20"
    >
      {/* Header row */}
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-16">
        <div className="min-w-0 flex-1">
          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-2.5">
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[color:var(--border)]">
              <Icon className="h-3.5 w-3.5 text-[color:var(--ink)]" />
            </span>
            <span className="font-mono text-[0.7rem] uppercase tracking-widest text-[color:var(--warmgray)]">
              {p.category}
              {p.meta?.year ? ` — ${p.meta.year}` : ""}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            variants={item}
            className="mt-4 font-display text-[clamp(1.5rem,2.8vw,2.5rem)] leading-[1.1] text-[color:var(--ink)]"
          >
            {p.title}
          </motion.h3>

          {/* Impact */}
          <motion.p
            variants={item}
            className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--warmgray)] md:text-[0.95rem]"
          >
            {p.impact}
          </motion.p>

          {/* Stack */}
          <motion.p
            variants={item}
            className="mt-3 font-mono text-[0.68rem] tracking-wide text-[color:var(--warmgray)] opacity-60"
          >
            {p.stack.join("  ·  ")}
          </motion.p>
        </div>

        {/* CTA */}
        <motion.div variants={item} className="shrink-0 self-start md:pt-14">
          <Link
            to="/projects/$id"
            params={{ id: p.id }}
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-3 text-sm font-medium text-[color:var(--cream)] transition-all duration-300 hover:bg-[color:var(--purple-deep)] hover:scale-[1.03] hover:shadow-[0_8px_30px_-8px_rgba(91,33,182,0.5)]"
          >
            View Case Study <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      {/* Draggable image strip */}
      {images.length > 0 && (
        <motion.div variants={item} className="mt-8 overflow-hidden -mx-6">
          <motion.div
            ref={stripRef}
            drag="x"
            dragConstraints={{ left: -(images.length * 220), right: 0 }}
            dragElastic={0.05}
            dragMomentum={true}
            whileDrag={{ cursor: "grabbing" }}
            style={{ cursor: "grab", userSelect: "none", touchAction: "pan-y", x: 0 }}
            className="flex gap-3 px-6 will-change-transform"
            /* prevent text/img selection while dragging */
          >
            {images.map((s) => (
              <div
                key={s.seed}
                className="shrink-0 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--cream-alt)] pointer-events-none"
                draggable={false}
              >
                <img
                  src={s.image!}
                  alt={s.title}
                  loading="lazy"
                  draggable={false}
                  className={
                    s.device === "mobile"
                      ? "h-48 w-auto max-w-[88px] object-cover"
                      : "h-48 w-auto max-w-[280px] object-cover"
                  }
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </motion.article>
  );
}
