import { useEffect, useRef, type RefObject } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import Lenis from "lenis";

export interface ProjectItem {
  id: string | number;
  tabTitle: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  color: string;
  textColor?: string;
  /** Bullet-separated tags shown below the description */
  metrics?: string[];
  /** Array of showcase images for the bottom strip */
  images?: string[];
}

export const DEFAULT_PROJECTS: ProjectItem[] = [
  {
    id: 1,
    tabTitle: "01 · 2024",
    title: "Loom: A quieter workspace for deep focus teams",
    description:
      "An uncluttered collaboration suite built around calm layouts, soft surfaces, and intentional empty space so teams can think without visual noise.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    color: "#E8F0F8",
    metrics: ["Product Design", "Web App", "Figma", "React"],
  },
  {
    id: 2,
    tabTitle: "02 · 2024",
    title: "Meridian: Mapping brand systems that scale",
    description:
      "A living token library and component kit that keeps product, marketing, and docs speaking the same visual language across every surface.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=80",
    color: "#E6F2EB",
    metrics: ["Design System", "Tokens", "Storybook"],
  },
];

interface AnimatedCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  smoothProgress: MotionValue<number>;
}

function buildCardKeyframes(index: number, totalCards: number) {
  const steps: number[] = [];
  const yValues: number[] = [];
  const scaleValues: number[] = [];
  const numTransitions = Math.max(totalCards - 1, 1);

  for (let step = 0; step <= numTransitions; step++) {
    const progress = step / numTransitions;
    steps.push(progress);

    if (step < index) {
      yValues.push(1000);
      scaleValues.push(1);
    } else if (step === index) {
      yValues.push(0);
      scaleValues.push(1);
    } else {
      const stackDepth = step - index;
      yValues.push(-stackDepth * 52);
      scaleValues.push(1 - stackDepth * 0.036);
    }
  }

  if (index === 0) {
    return { steps, y: yValues, scale: scaleValues };
  }

  const entryStart = (index - 1) / numTransitions;
  const entryEnd = index / numTransitions;
  const fullSteps: number[] = [];
  const fullY: number[] = [];
  const fullScale: number[] = [];

  for (let i = 0; i < steps.length; i++) {
    if (steps[i] < entryStart) {
      fullSteps.push(steps[i]);
      fullY.push(1000);
      fullScale.push(1);
    }
  }

  fullSteps.push(entryStart);
  fullY.push(1000);
  fullScale.push(1);

  for (let i = 0; i < steps.length; i++) {
    if (steps[i] >= entryEnd) {
      fullSteps.push(steps[i]);
      fullY.push(yValues[i]);
      fullScale.push(scaleValues[i]);
    }
  }

  return { steps: fullSteps, y: fullY, scale: fullScale };
}

function AnimatedCard({ project, index, totalCards, smoothProgress }: AnimatedCardProps) {
  const keyframes = buildCardKeyframes(index, totalCards);
  const y = useTransform(smoothProgress, keyframes.steps, keyframes.y);
  const scale = useTransform(smoothProgress, keyframes.steps, keyframes.scale);

  const imgs = project.images?.length ? project.images : project.image ? [project.image] : [];
  const isExternal = project.link?.startsWith("http");

  return (
    <motion.div
      style={{
        y,
        scale,
        zIndex: 700 + index * 10,
        transformOrigin: "center top",
        willChange: "transform",
        backfaceVisibility: "hidden" as const,
        transformStyle: "preserve-3d" as const,
      }}
      className="absolute inset-x-0 top-0 h-full w-full select-none"
    >
      <div
        style={{ backgroundColor: project.color }}
        className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl"
      >
        {/* ── Top text section ── */}
        <div className="flex shrink-0 items-start justify-between gap-6 px-8 pb-4 pt-8 md:px-14 md:pt-10">
          {/* Left: eyebrow + headline + description + metrics */}
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-black/40">
              {project.tabTitle}
            </p>
            <h3 className="mt-3 font-display text-[clamp(1.5rem,2.5vw,2.8rem)] font-medium leading-[1.1] tracking-tight text-black">
              {project.title}
            </h3>
            <p className="mt-2.5 max-w-2xl text-[0.85rem] leading-relaxed text-black/55 md:text-sm">
              {project.description}
            </p>
            {project.metrics && project.metrics.length > 0 && (
              <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-widest text-black/35">
                {project.metrics.join("  ·  ")}
              </p>
            )}
          </div>

          {/* Right: View case study button */}
          {project.link && (
            <a
              href={project.link}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              onClick={(e) => e.stopPropagation()}
              className="mt-1 shrink-0 inline-flex items-center gap-1.5 rounded-full bg-[#0f0f0f] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#333] active:scale-95"
            >
              View case study
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          )}
        </div>

        {/* ── Flexible gap ── */}
        <div className="flex-1 min-h-4" />

        {/* ── Creative image display — full images, wave stagger, up to 6 ── */}
        {imgs.length > 0 && (() => {
          const shown = imgs.slice(0, 6);
          const count = shown.length;
          // Wave stagger pattern — repeats for 5-6 images
          const slots = [
            { y: 0,   rot: "-2deg",   z: 4 },
            { y: -55, rot: "1deg",    z: 5 },
            { y: -20, rot: "-1deg",   z: 4 },
            { y: -50, rot: "2deg",    z: 3 },
            { y: -10, rot: "-1.5deg", z: 4 },
            { y: -45, rot: "1.5deg",  z: 3 },
          ];
          // Narrower images when showing more of them
          const mw = count <= 3
            ? "clamp(200px, 28vw, 360px)"
            : count === 4
              ? "clamp(180px, 23vw, 300px)"
              : "clamp(150px, 18vw, 250px)";
          const gap = count >= 5 ? 10 : 14;
          return (
            <div
              className="flex items-end overflow-hidden px-8 pb-4 md:px-14"
              style={{ height: "clamp(280px, 50vh, 400px)", gap: `${gap}px` }}
            >
              {shown.map((src, i) => {
                const s = slots[i] ?? slots[i % slots.length];
                return (
                  <div
                    key={i}
                    className="shrink-0"
                    style={{
                      transform: `translateY(${s.y}px) rotate(${s.rot})`,
                      zIndex: s.z,
                      position: "relative",
                    }}
                  >
                    <img
                      src={src}
                      alt=""
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      draggable={false}
                      style={{
                        maxHeight: "clamp(230px, 44vh, 360px)",
                        maxWidth: mw,
                        width: "auto",
                        height: "auto",
                        display: "block",
                        borderRadius: "14px",
                        boxShadow: "0 12px 44px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.09)",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          );
        })()}
      </div>
    </motion.div>
  );
}

export interface ScrollStackDeckProps {
  projects?: ProjectItem[];
  title?: string;
  subtitle?: string;
  scrollIndicatorText?: string;
  className?: string;
  showFooter?: boolean;
  enableLenis?: boolean;
  container?: RefObject<HTMLElement | null>;
}

export function ScrollStackDeck({
  projects = DEFAULT_PROJECTS,
  title = "Selected work",
  subtitle = "",
  scrollIndicatorText = "Scroll",
  className = "",
  showFooter = true,
  enableLenis = true,
  container,
}: ScrollStackDeckProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const showIntro = Boolean(title || subtitle || scrollIndicatorText);

  useEffect(() => {
    if (!enableLenis || container) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let animationFrameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [enableLenis, container]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    ...(container ? { container } : {}),
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.15,
    restDelta: 0.0001,
  });

  return (
    <div className={`w-full selection:bg-neutral-900 selection:text-white ${className}`}>
      {showIntro && (
        <section className="flex w-full flex-col items-center justify-center px-4 py-16 text-center">
          <div className="flex max-w-3xl flex-col items-center gap-5">
            {title && (
              <h1 className="m-0 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="m-0 max-w-2xl text-xl font-normal leading-relaxed text-neutral-600 sm:text-2xl">
                {subtitle}
              </p>
            )}
            {scrollIndicatorText && (
              <div className="mt-2 flex items-center justify-center gap-2.5">
                <span className="text-lg text-neutral-600">{scrollIndicatorText}</span>
                <motion.svg
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                  className="h-6 w-6 text-black"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M12 4.75v13.5M6.75 13.75l5.25 5.5 5.25-5.5" />
                </motion.svg>
              </div>
            )}
          </div>
        </section>
      )}

      <section
        ref={containerRef}
        aria-label="Stacked project showcase"
        className="relative w-full"
        style={{ height: `${projects.length * 110}vh` }}
      >
        {/* sticky viewport: full-width, card anchored from top */}
        <div className="pointer-events-none sticky top-0 flex h-screen min-h-screen w-full items-start justify-center px-4 pt-12">
          <div className="pointer-events-auto relative h-[min(86vh,54rem)] w-full overflow-visible">
            {projects.map((project, index) => (
              <AnimatedCard
                key={project.id}
                project={project}
                index={index}
                totalCards={projects.length}
                smoothProgress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </section>

      {showFooter && (
        <footer className="flex h-[50vh] flex-col items-center justify-center gap-2 text-sm text-neutral-500">
          <p>shadcnlabs</p>
          <p className="text-xs text-neutral-400">Soft systems · product craft · motion</p>
        </footer>
      )}
    </div>
  );
}

export default ScrollStackDeck;
