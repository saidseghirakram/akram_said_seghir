import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useState } from "react";

type Stage = {
  n: string;
  title: string;
  body: string;
  note: string;
  projectId: string;
};

const STAGES: Stage[] = [
  {
    n: "01",
    title: "Idea",
    body: "Spotting a real problem worth solving — noisy scribbles on a napkin.",
    note: "// rough & unfiltered",
    projectId: "hackathon",
  },
  {
    n: "02",
    title: "Experiment",
    body: "Rapid prototypes and honest signal — kill it fast or keep going.",
    note: "// test → learn → repeat",
    projectId: "ui-lab",
  },
  {
    n: "03",
    title: "MVP",
    body: "Shipping the smallest useful version. Real users, real feedback.",
    note: "// ship, don't polish",
    projectId: "saas-dash",
  },
  {
    n: "04",
    title: "Future Product",
    body: "Scaling into a real business. Systems, team, longevity.",
    note: "// solidified",
    projectId: "fennec",
  },
];

export function ProcessMap() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  // Translate the horizontal track across the viewport
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-72%"]);
  const dashOffset = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(STAGES.length - 1, Math.max(0, Math.floor(v * STAGES.length)));
    setActive(idx);
  });

  const jumpToProject = () => {
    const el = document.getElementById("work");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={wrapRef} className="relative" style={{ height: "320vh" }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        {/* Header stays pinned */}
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="eyebrow">(Process)</div>
          <h3 className="display-h mt-4 text-[clamp(1.6rem,3.4vw,2.6rem)]">
            The idea <span className="italic text-[color:var(--purple-deep)]">solidifies</span> as it moves.
          </h3>
          <div className="mt-2 font-mono text-xs text-[color:var(--warmgray)]">
            {String(active + 1).padStart(2, "0")}
            <span className="mx-2 opacity-40">/</span>
            {String(STAGES.length).padStart(2, "0")} — scroll to advance
          </div>
        </div>

        {/* Horizontal track */}
        <div className="relative mt-10">
          <motion.div
            style={{ x }}
            className="flex items-stretch gap-10 pl-[8vw] pr-[8vw] will-change-transform"
          >
            {/* Connecting SVG line drawn behind cards */}
            <svg
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-1/2 h-24 w-[220%] -translate-y-1/2"
              viewBox="0 0 2200 100"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 20 50 Q 300 10 600 50 T 1200 50 T 1800 50 T 2180 50"
                stroke="var(--purple-deep)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="1"
                pathLength={1}
                style={{ strokeDashoffset: dashOffset }}
                strokeLinecap="round"
              />
            </svg>

            {STAGES.map((s, i) => {
              const isActive = i === active;
              return (
                <motion.button
                  key={s.n}
                  onClick={jumpToProject}
                  animate={{
                    opacity: isActive ? 1 : 0.35,
                    scale: isActive ? 1 : 0.9,
                    filter: isActive ? "blur(0px)" : "blur(2px)",
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 w-[78vw] max-w-[420px] shrink-0 text-left"
                >
                  {/* Margin note */}
                  <div className="mb-4 h-6 font-mono text-xs text-[color:var(--warmgray)]">
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                      >
                        {s.note}
                      </motion.span>
                    )}
                  </div>

                  {/* Progression glyph — rough → solid */}
                  <StageGlyph index={i} active={isActive} />

                  <div className="mt-6 flex items-baseline gap-3">
                    <span className="font-mono text-sm text-[color:var(--purple-deep)]">
                      {s.n}
                    </span>
                    <h4 className="font-display text-3xl md:text-4xl">{s.title}</h4>
                  </div>
                  <p className="mt-3 max-w-sm text-[color:var(--warmgray)]">{s.body}</p>

                  <span
                    className={`mt-6 inline-flex items-center gap-1 text-xs font-medium transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ color: "var(--purple-deep)" }}
                  >
                    See a real example →
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function StageGlyph({ index, active }: { index: number; active: boolean }) {
  // 0 = rough scribble circle, 3 = clean filled shape
  const size = 88;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" width={size} height={size}>
        {index === 0 && (
          <motion.path
            d="M50 12 C 78 14, 90 38, 86 58 S 60 92, 40 86 S 10 62, 14 42 S 28 12, 50 12 Z"
            fill="none"
            stroke="var(--purple-deep)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="4 6"
            animate={{ rotate: active ? [0, 3, -2, 0] : 0 }}
            transition={{ duration: 4, repeat: active ? Infinity : 0, ease: "easeInOut" }}
            style={{ transformOrigin: "50% 50%" }}
          />
        )}
        {index === 1 && (
          <>
            <circle cx="50" cy="50" r="34" fill="none" stroke="var(--purple-deep)" strokeWidth="1.4" strokeDasharray="2 4" />
            <circle cx="50" cy="50" r="18" fill="var(--lilac)" opacity="0.6" />
          </>
        )}
        {index === 2 && (
          <>
            <circle cx="50" cy="50" r="36" fill="none" stroke="var(--purple-deep)" strokeWidth="1.6" />
            <circle cx="50" cy="50" r="22" fill="var(--purple)" opacity="0.55" />
          </>
        )}
        {index === 3 && (
          <circle cx="50" cy="50" r="38" fill="var(--purple-deep)" />
        )}
      </svg>
    </div>
  );
}
