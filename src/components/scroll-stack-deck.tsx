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
  demo?: string;
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
  const mockup = imgs[0];

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
        className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl md:flex-row"
      >
        {/* ── TEXT ROW (mobile: top; desktop: left column) ── */}
        <div
          className="flex w-full shrink-0 flex-col items-center justify-start px-5 text-center md:w-[44%] md:items-start md:justify-center md:px-14 md:text-left"
          style={{
            paddingTop: "clamp(2rem,4vh,3rem)",
            paddingBottom: "clamp(0.75rem,2vh,2rem)",
          }}
        >
          {/* Eyebrow */}
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-black/40">
            {project.tabTitle}
          </p>
          {/* Title */}
          <h3 className="mt-3 font-display text-[clamp(1.5rem,2.5vw,2.4rem)] font-medium leading-[1.1] tracking-tight text-black">
            {project.title}
          </h3>
          {/* Description — hidden on mobile to save space */}
          <p className="mt-2 hidden text-[0.82rem] leading-relaxed text-black/55 md:block">
            {project.description}
          </p>
          {/* Metrics — hidden on mobile */}
          {project.metrics && project.metrics.length > 0 && (
            <p className="mt-2 hidden font-mono text-[0.58rem] uppercase tracking-widest text-black/35 md:block">
              {project.metrics.join("  ·  ")}
            </p>
          )}
          {/* CTAs */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:justify-start md:gap-2.5">
            {project.link && (
              <a
                href={project.link}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#0f0f0f] px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-[#333] active:scale-95 md:px-5 md:py-2.5 md:text-sm"
              >
                Case study
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-full border border-black/20 bg-white/60 px-4 py-2 text-xs font-medium text-black/80 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:border-black/40 active:scale-95 md:px-5 md:py-2.5 md:text-sm"
              >
                Live demo
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* ── IMAGE ROW (mobile: bottom; desktop: right column) ── */}
        {mockup && (
          <div className="relative flex min-h-0 flex-1 items-end justify-center overflow-hidden pb-0 md:overflow-visible">
            <img
              src={mockup}
              alt=""
              loading="eager"
              decoding="async"
              draggable={false}
              style={{
                maxWidth: "88%",
                maxHeight: "115%",
                width: "auto",
                height: "auto",
                display: "block",
                filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.18)) drop-shadow(0 8px 16px rgba(0,0,0,0.12))",
                transform: "translateY(4%)",
              }}
            />
          </div>
        )}
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
    stiffness: 280,
    damping: 32,
    mass: 0.08,
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
        style={{ height: `${projects.length * 80}vh` }}
      >
        {/* sticky viewport: full-width, card anchored from top */}
        <div className="pointer-events-none sticky top-0 flex h-screen min-h-screen w-full items-start justify-center px-4 pt-20 md:pt-12">
          <div className="pointer-events-auto relative h-[min(72vh,34rem)] w-full overflow-visible md:h-[min(86vh,54rem)]">
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
