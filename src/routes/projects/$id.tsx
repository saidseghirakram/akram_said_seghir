import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, AnimatePresence, LayoutGroup, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
  ChevronRight,
  Plane,
  Building2,
  Package,
  Car,
  Stamp,
  Smartphone,
  Wallet,
  Bot,
  Film,
  Globe,
  Layers,
  Database,
  Shield,
  MessageCircle,
  Languages,
} from "lucide-react";
import { Grain } from "@/components/Grain";
import { Reveal } from "@/components/Reveal";
import { MockScreen } from "@/components/MockScreen";
import {
  getProjectById,
  PROJECTS,
  type Tab,
  type Project,
  type ShowcaseItem,
} from "@/data/projects";

export const Route = createFileRoute("/projects/$id")({
  head: ({ params }) => {
    const project = getProjectById(params.id);
    return {
      meta: [
        { title: `${project?.title ?? "Project"} — Akram4Dev` },
        {
          name: "description",
          content: project?.solution ?? "A case study by Akram Said Seghir.",
        },
        { property: "og:title", content: `${project?.title ?? "Project"} — Case Study` },
        { property: "og:description", content: project?.solution ?? "" },
      ],
    };
  },
  component: ProjectDetail,
});

const FEATURE_ICONS: Record<string, React.FC<{ className?: string }>> = {
  plane: Plane,
  building: Building2,
  package: Package,
  car: Car,
  stamp: Stamp,
  smartphone: Smartphone,
  wallet: Wallet,
  bot: Bot,
  film: Film,
};

const ARCH_ICONS: React.FC<{ className?: string }>[] = [
  Layers,
  Shield,
  Database,
  Globe,
  MessageCircle,
  Languages,
];

function ProjectDetail() {
  const { id } = Route.useParams();
  const project = getProjectById(id);

  if (!project) {
    throw notFound();
  }

  const currentIndex = PROJECTS.findIndex((p) => p.id === id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="relative min-h-screen">
      <Grain />
      <ScrollProgress />
      <ProjectNav projectId={id} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroSection project={project} />
        <StatsBar project={project} />
        <MetaStrip project={project} />
        {project.showcase && project.showcase.length > 0 && <ShowcaseSection project={project} />}
        <OverviewSection project={project} />
        {project.features && project.features.length > 0 && <FeaturesSection project={project} />}
        {project.architecture && project.architecture.length > 0 && (
          <ArchitectureSection project={project} />
        )}
        {project.capabilities && project.capabilities.length > 0 && (
          <CapabilitiesSection project={project} />
        )}
        <NextProjectSection next={nextProject} />
      </motion.main>

      <Footer />
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[color:var(--purple)]"
    />
  );
}

function ProjectNav({ projectId }: { projectId: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-[color:var(--cream)]/50 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="font-display text-xl tracking-tight text-[color:var(--ink)]">
          Akram<span className="text-[color:var(--purple-deep)]">4</span>Dev
        </a>
        <div className="flex items-center gap-4">
          <Link
            to="/"
            hash="work"
            className="inline-flex items-center gap-2 text-sm text-[color:var(--warmgray)] transition-colors hover:text-[color:var(--purple-deep)]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden md:inline">Back to Work</span>
          </Link>
          <a href="#contact" className="hidden md:inline-flex chip-lilac">
            Available for work
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroSection({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const coverY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const numX = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const totalProjects = PROJECTS.length;

  return (
    <section ref={ref} className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="pointer-events-none absolute right-[-10%] top-[8%] h-[520px] w-[520px] purple-glow opacity-50" />

      {/* Oversized outline index number */}
      <motion.div
        aria-hidden
        style={{ x: numX }}
        className="pointer-events-none absolute -left-[2vw] top-20 z-0 select-none font-display leading-[0.8] md:-left-[4vw] md:top-28"
      >
        <span
          className="block text-[20vw] md:text-[16vw]"
          style={{
            WebkitTextStroke: "1.5px rgba(91,33,182,0.12)",
            color: "transparent",
          }}
        >
          {project.n}
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Eyebrow */}
        <Reveal>
          <div className="eyebrow flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--purple)]" />
            ({project.n} / {String(totalProjects).padStart(2, "0")}) — Full Case Study
          </div>
        </Reveal>

        {project.meta?.degree && (
          <Reveal delay={0.15}>
            <span className="chip-lilac mt-4 inline-flex">{project.meta.degree}</span>
          </Reveal>
        )}

        {project.meta?.award && (
          <Reveal delay={0.15}>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[0.78rem] font-medium tracking-wide text-amber-800 md:mt-5">
              <span aria-hidden>🥈</span>
              {project.meta.award}
            </span>
          </Reveal>
        )}

        <div className="mt-8 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left — narrative */}
          <div>
            <motion.h1
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1], delay: 0.15 }}
              className="display-h max-w-3xl text-[clamp(2.4rem,6vw,4.6rem)]"
            >
              {project.title}
            </motion.h1>

            <Reveal delay={0.25}>
              <p className="mt-8 max-w-2xl text-lg text-[color:var(--warmgray)] md:text-xl">
                {project.solution}
              </p>
            </Reveal>

            {/* Tools */}
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="chip-outline">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.35}>
              <div className="mt-10 flex flex-wrap gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-primary-hover inline-flex items-center gap-2"
                  >
                    Live Demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline btn-outline-hover inline-flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                )}
              </div>
            </Reveal>
          </div>

          {/* Right — hero photo */}
          <Reveal delay={0.25}>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-[color:var(--purple-deep)]/8 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.8rem] border border-[color:var(--border)] bg-[color:var(--card)] p-4 md:p-6">
                <div className="mb-4 flex items-center justify-between px-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--warmgray)]">
                    Cover — {project.meta?.platform ?? project.category}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--purple-deep)]">
                    Shot 01
                  </span>
                </div>
                <motion.div style={{ y: coverY }}>
                  {project.coverImage ? (
                    project.cover.device === "mobile" ? (
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="mx-auto h-[480px] w-auto max-w-full rounded-[1rem] object-contain md:h-[560px]"
                      />
                    ) : (
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full rounded-[1rem] object-contain"
                      />
                    )
                  ) : (
                    <MockScreen
                      device={project.cover.device}
                      seed={project.cover.seed}
                      accent={project.cover.accent}
                      className={
                        project.cover.device === "mobile" ? "mx-auto w-[min(100%,290px)]" : "w-full"
                      }
                    />
                  )}
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Stats strip
function StatsBar({ project }: { project: Project }) {
  if (!project.stats || project.stats.length === 0) return null;
  return (
    <section className="border-y border-[color:var(--border)] bg-[color:var(--cream-alt)]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 md:grid-cols-4">
        {project.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="border-r border-[color:var(--border)] px-4 py-8 text-center md:py-10 last:border-r-0 max-md:[&:nth-child(2n)]:border-r-0">
              <div className="font-display text-4xl text-[color:var(--purple-deep)] md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 eyebrow">[{s.label}]</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// Fact sheet — Behance-style meta strip
function MetaStrip({ project }: { project: Project }) {
  const rows = [
    { label: "Role", value: project.meta?.role },
    { label: "Year", value: project.meta?.year },
    { label: "Client", value: project.meta?.client },
    { label: "Platform", value: project.meta?.platform },
    { label: "Degree", value: project.meta?.degree },
    { label: "Award", value: project.meta?.award },
    { label: "Stack", value: project.stack.join(" · ") },
  ].filter((r): r is { label: string; value: string } => Boolean(r.value));

  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="eyebrow">Fact Sheet</div>
        </Reveal>
        <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {rows.map((r, i) => (
            <Reveal key={r.label} delay={i * 0.05}>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--warmgray)]">
                  {r.label}
                </div>
                <div className="mt-2 font-display text-lg text-[color:var(--ink)] md:text-xl">
                  {r.value}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ███████╗██╗░░██╗░█████╗░░█████╗░░█████╗░░░░░░░██╗███████╗██╗
// ██╔════╝██║░░██║██╔══██╗██╔══██╗██╔══██╗░░░░░░██║██╔════╝██║
function ShowcaseSection({ project }: { project: Project }) {
  const items = project.showcase ?? [];
  const total = items.length;

  return (
    <section id="showcase" className="bg-[color:var(--cream-alt)] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="eyebrow">The Showcase</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-h mt-6 max-w-4xl text-[clamp(2rem,5vw,4rem)]">
            A visual journey through the{" "}
            <span className="italic text-[color:var(--purple-deep)]">screens.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-lg text-[color:var(--warmgray)]">
            {total} frames, capture by capture — how {project.title.split("—")[0]} actually flows,
            from first launch to final booking.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 max-w-6xl space-y-28 px-6 md:mt-28 md:space-y-36 md:px-0">
        {items.map((item, i) => {
          const chapterIndex = items.filter((it, j) => it.chapter && j <= i).length;
          return (
            <div key={`${item.seed}-${i}`}>
              {item.chapter && (
                <ChapterDivider chapter={item.chapter} n={chapterIndex} total={total} />
              )}
              <ShowcaseSlide item={item} index={i} total={total} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ChapterDivider({ chapter, n, total }: { chapter: string; n: number; total: number }) {
  return (
    <Reveal>
      <div className="my-20 flex flex-col items-center gap-3 py-10 text-center md:my-24">
        <span className="eyebrow">
          Chapter {String(n).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <h3 className="display-h mt-2 text-[clamp(2.4rem,7vw,5rem)]">{chapter}</h3>
        <span className="mt-4 h-px w-24 bg-[color:var(--purple-deep)]/25" />
      </div>
    </Reveal>
  );
}

function ShowcaseSlide({
  item,
  index,
  total,
}: {
  item: ShowcaseItem;
  index: number;
  total: number;
}) {
  const mediaLeft = index % 2 === 0;
  const frame = String(index + 1).padStart(2, "0");

  const media = (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-[color:var(--purple-deep)]/6 blur-2xl" />
      <div className="relative overflow-hidden rounded-[1.6rem] border border-[color:var(--border)] bg-[color:var(--card)] p-3 md:p-4">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className={
              item.device === "browser"
                ? "w-full rounded-[1.1rem] object-contain"
                : "mx-auto h-[460px] w-auto max-w-full rounded-[1.1rem] object-contain md:h-[580px]"
            }
          />
        ) : item.video ? (
          <video
            src={item.video}
            autoPlay
            muted
            loop
            playsInline
            className={
              item.device === "browser"
                ? "w-full rounded-[1.1rem] object-contain"
                : "mx-auto h-[460px] w-auto max-w-full rounded-[1.1rem] object-cover md:h-[580px]"
            }
          />
        ) : (
          <MockScreen
            device={item.device ?? "mobile"}
            seed={item.seed}
            animated={item.animated}
            className={
              item.device === "browser" ? "w-full" : "mx-auto w-[min(100%,260px)] md:w-[280px]"
            }
          />
        )}
        <div className="mt-3 flex items-center justify-between border-t border-[color:var(--border)] pt-3 font-mono text-[10px] uppercase tracking-widest text-[color:var(--warmgray)]">
          <span>
            Frame {frame} / {String(total).padStart(2, "0")}
          </span>
          <span>
            {item.video
              ? "Video · recording"
              : item.device === "browser"
                ? "Web · browser"
                : "Mobile · phone"}
          </span>
        </div>
      </div>
    </div>
  );

  const text = (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="eyebrow">Frame {frame}</span>
        <span className="chip-lilac">{item.device === "browser" ? "Web View" : "Mobile View"}</span>
        {item.video && (
          <span className="chip-outline items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--purple)]" />
            Recording
          </span>
        )}
        {item.animated && !item.video && (
          <span className="chip-outline items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--purple)]" />
            Live
          </span>
        )}
      </div>
      <h3 className="display-h mt-5 text-[clamp(1.6rem,3vw,2.6rem)]">{item.title}</h3>
      <p className="mt-4 text-base leading-relaxed text-[color:var(--warmgray)] md:text-lg">
        {item.body}
      </p>
      <div className="mt-6 h-px w-16 bg-[color:var(--purple-deep)]/30" />
    </div>
  );

  return (
    <Reveal>
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {mediaLeft ? (
          <>
            <div className="lg:col-span-7">{media}</div>
            <div className="lg:col-span-5">{text}</div>
          </>
        ) : (
          <>
            <div className="lg:order-last lg:col-span-7">{media}</div>
            <div className="lg:col-span-5">{text}</div>
          </>
        )}
      </div>
    </Reveal>
  );
}

function OverviewSection({ project }: { project: Project }) {
  const [tab, setTab] = useState<Tab>("problem");

  const body: Record<Tab, string> = {
    problem: project.problem,
    solution: project.solution,
    impact: project.impact,
  };

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="eyebrow">Overview</div>
        </Reveal>

        {/* Tabs */}
        <div className="mt-10">
          <LayoutGroup id={`detail-tabs-${project.id}`}>
            <div className="flex gap-0.5 border-b border-[color:var(--border)] md:gap-1">
              {(["problem", "solution", "impact"] as Tab[]).map((t) => {
                const active = tab === t;
                return (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className="relative px-3 py-3 text-left md:px-5 md:py-4"
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
                        layoutId={`detail-tab-underline-${project.id}`}
                        className="absolute -bottom-px left-0 right-0 h-[2px] bg-[color:var(--purple-deep)]"
                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
            <div className="relative mt-8 min-h-[100px] md:min-h-[120px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={tab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`text-base leading-relaxed md:text-lg ${
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

        {/* Tech stack */}
        <div className="mt-10 flex flex-wrap gap-2 md:mt-14 md:gap-2.5">
          {project.stack.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 14, rotate: -4 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3 + i * 0.08,
              }}
              className="chip-outline"
            >
              {s}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-8 flex flex-wrap gap-5 md:mt-10 md:gap-6">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--purple-deep)] hover:text-[color:var(--purple-electric)]"
            >
              Live Demo <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--ink)] hover:text-[color:var(--purple-deep)]"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection({ project }: { project: Project }) {
  const total = project.features!.length;
  return (
    <section className="bg-[color:var(--cream-alt)] py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <div className="eyebrow">Features</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-h mt-6 max-w-3xl text-[clamp(1.8rem,4vw,3.4rem)]">
                What users can <span className="italic text-[color:var(--purple-deep)]">do.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="flex items-baseline gap-2 font-display text-[color:var(--purple-deep)]">
              <span className="text-5xl md:text-6xl">{String(total).padStart(2, "0")}</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[color:var(--warmgray)]">
                product
                <br />
                lines
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {project.features!.map((feat, i) => {
            const Icon = FEATURE_ICONS[feat.icon] ?? Globe;
            return (
              <Reveal key={feat.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="card-cream group relative overflow-hidden p-6 md:p-7"
                >
                  {/* Ghost index */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-3 -top-7 select-none font-display text-[6rem] leading-none text-[color:var(--purple-deep)]/8 transition-all duration-500 group-hover:text-[color:var(--purple-deep)]/14"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Hover bloom */}
                  <span className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[color:var(--purple)]/12 blur-2xl transition-all duration-700 group-hover:scale-[1.6] group-hover:bg-[color:var(--purple)]/20" />

                  <div className="relative">
                    {/* Icon tile */}
                    <div className="mb-5 grid h-13 w-13 place-items-center rounded-2xl bg-gradient-to-br from-[color:var(--purple-deep)] to-[color:var(--purple-electric)] shadow-[0_10px_24px_-10px_rgba(124,58,237,0.7)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                      <Icon className="h-5 w-5 text-[color:var(--cream)]" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--purple-deep)]">
                        {String(i + 1).padStart(2, "0")} /
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--warmgray)]">
                        {String(total).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-1 font-display text-xl md:text-2xl">{feat.title}</h3>

                    <p className="mt-3 text-sm leading-relaxed text-[color:var(--warmgray)]">
                      {feat.description}
                    </p>

                    {feat.tags && feat.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {feat.tags.map((t, j) => (
                          <motion.span
                            key={t}
                            initial={{ opacity: 0, y: 6 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + j * 0.05 }}
                            className="chip-lilac px-2 py-1 text-[11px]"
                          >
                            {t}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Hover footer */}
                  <div className="relative mt-5 flex items-center justify-between border-t border-[color:var(--border)] pt-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--warmgray)]">
                      [{String(i + 1).padStart(2, "0")}] · {feat.title}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[color:var(--purple-deep)] opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection({ project }: { project: Project }) {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="eyebrow">Architecture</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-h mt-6 max-w-3xl text-[clamp(1.8rem,4vw,3.4rem)]">
            What I built{" "}
            <span className="italic text-[color:var(--purple-deep)]">under the hood.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
          {project.architecture!.map((item, i) => {
            const Icon = ARCH_ICONS[i % ARCH_ICONS.length];
            return (
              <Reveal key={item.label} delay={i * 0.06}>
                <div className="card-cream flex gap-5 p-7 md:p-8">
                  <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--purple-deep)]/10">
                    <Icon className="h-5 w-5 text-[color:var(--purple-deep)]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl">{item.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--warmgray)]">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection({ project }: { project: Project }) {
  return (
    <section className="bg-[color:var(--cream-alt)] py-20 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="eyebrow">Additional Capabilities</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-h mt-6 max-w-3xl text-[clamp(1.8rem,4vw,3.4rem)]">
            Beyond the <span className="italic text-[color:var(--purple-deep)]">core.</span>
          </h2>
        </Reveal>

        <div className="mt-14 space-y-0 divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
          {project.capabilities!.map((cap, i) => (
            <Reveal key={cap} delay={i * 0.04}>
              <div className="group flex items-center gap-8 py-6 transition-colors">
                <span className="font-mono text-sm text-[color:var(--purple-deep)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl transition-all duration-500 group-hover:translate-x-2 group-hover:text-[color:var(--purple-deep)] md:text-2xl">
                  {cap}
                </span>
                <ChevronRight className="ml-auto h-4 w-4 text-[color:var(--warmgray)] opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-[color:var(--purple-deep)]" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function NextProjectSection({ next }: { next: Project }) {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <div className="eyebrow">Next Project</div>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/projects/$id" params={{ id: next.id }} className="group mt-8 inline-block">
            <h2 className="display-h text-[clamp(2rem,5vw,4.5rem)] transition-colors duration-500 group-hover:text-[color:var(--purple-deep)]">
              {next.title}
            </h2>
          </Link>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8">
            <Link
              to="/projects/$id"
              params={{ id: next.id }}
              className="btn-primary btn-primary-hover inline-flex items-center gap-2"
            >
              View Case Study <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        <a href="/" className="font-display text-xl tracking-tight text-[color:var(--ink)]">
          Akram<span className="text-[color:var(--purple-deep)]">4</span>Dev
        </a>
        <a
          href="#top"
          className="inline-flex items-center gap-2 text-sm text-[color:var(--warmgray)] hover:text-[color:var(--purple-deep)]"
        >
          Back to top <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
