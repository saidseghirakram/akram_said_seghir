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
import { PageFooter } from "@/components/PageFooter";
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
        { name: "description", content: project?.solution ?? "A case study by Akram Said Seghir." },
        { property: "og:title", content: `${project?.title ?? "Project"} — Case Study` },
        { property: "og:description", content: project?.solution ?? "" },
      ],
    };
  },
  component: ProjectDetail,
});

const FEATURE_ICONS: Record<string, React.FC<{ className?: string }>> = {
  plane: Plane, building: Building2, package: Package, car: Car,
  stamp: Stamp, smartphone: Smartphone, wallet: Wallet, bot: Bot, film: Film,
};

const ARCH_ICONS: React.FC<{ className?: string }>[] = [
  Layers, Shield, Database, Globe, MessageCircle, Languages,
];

const validProjects = PROJECTS.filter(Boolean) as Project[];

function ProjectDetail() {
  const { id } = Route.useParams();
  const project = getProjectById(id);
  if (!project) throw notFound();

  const currentIndex = validProjects.findIndex((p) => p.id === id);
  const nextProject = validProjects[(currentIndex + 1) % validProjects.length];

  return (
    <div id="top" className="relative min-h-screen" style={{ backgroundColor: "#fafafa" }}>
      <Grain />
      <ScrollProgress />
      <ProjectNav />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroSection project={project} />
        <StatsBar project={project} />
        <MetaStrip project={project} />
        {project.showcase && project.showcase.length > 0 && <ShowcaseSection project={project} />}
        <OverviewSection project={project} />
        {project.features && project.features.length > 0 && <FeaturesSection project={project} />}
        {project.architecture && project.architecture.length > 0 && <ArchitectureSection project={project} />}
        {project.capabilities && project.capabilities.length > 0 && <CapabilitiesSection project={project} />}
        {nextProject && <NextProjectSection next={nextProject} />}
      </motion.main>

      <PageFooter />
    </div>
  );
}

/* ── Scroll progress bar ── */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-[color:var(--purple-deep)]"
    />
  );
}

/* ── Top nav ── */
function ProjectNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--border)] bg-[#fafafa]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="font-display text-xl tracking-tight text-[color:var(--ink)]">
          Akram<span className="text-[color:var(--purple-deep)]">4</span>Dev
        </a>
        <Link
          to="/"
          hash="work"
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-4 py-2 text-sm text-[color:var(--warmgray)] transition-colors hover:border-[color:var(--purple)] hover:text-[color:var(--purple-deep)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">All Work</span>
        </Link>
      </div>
    </header>
  );
}

/* ── Hero ── */
function HeroSection({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const coverY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-28 pb-0 md:pt-36">
      {/* Background number */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[2vw] top-16 select-none font-display leading-none opacity-[0.04]"
        style={{ fontSize: "22vw", color: "var(--ink)" }}
      >
        {project.n}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Eyebrow row */}
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow">
              {project.n} / {String(validProjects.length).padStart(2, "0")} — Case Study
            </span>
            <span className="chip-outline">{project.category}</span>
            {project.meta?.award && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[0.72rem] font-medium text-amber-700">
                🥈 {project.meta.award}
              </span>
            )}
            {project.meta?.degree && (
              <span className="chip-lilac">{project.meta.degree}</span>
            )}
          </div>
        </Reveal>

        {/* Title */}
        <Reveal delay={0.08}>
          <h1 className="display-h mt-6 max-w-5xl text-[clamp(2.6rem,6vw,5.2rem)] leading-[1.0]">
            {project.title}
          </h1>
        </Reveal>

        {/* One-line impact */}
        <Reveal delay={0.14}>
          <p className="mt-6 max-w-2xl text-lg text-[color:var(--warmgray)] md:text-xl">
            {project.impact}
          </p>
        </Reveal>

        {/* Stack chips + CTAs */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.stack.map((s) => (
              <span key={s} className="chip-outline">{s}</span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="btn-primary btn-primary-hover inline-flex items-center gap-2">
                Live Demo <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="btn-outline btn-outline-hover inline-flex items-center gap-2">
                <Github className="h-4 w-4" /> GitHub
              </a>
            )}
          </div>
        </Reveal>
      </div>

      {/* Full-width cover image */}
      {project.coverImage && (
        <Reveal delay={0.3}>
          <div className="relative mt-16 overflow-hidden">
            <motion.div style={{ y: coverY }} className="will-change-transform">
              <div className="mx-auto max-w-7xl px-6">
                <div className="overflow-hidden rounded-2xl border border-[color:var(--border)]">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className={
                      project.cover.device === "mobile"
                        ? "mx-auto block max-h-[70vh] w-auto object-contain"
                        : "block w-full object-cover"
                    }
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>
      )}
    </section>
  );
}

/* ── Stats bar ── */
function StatsBar({ project }: { project: Project }) {
  if (!project.stats || project.stats.length === 0) return null;
  return (
    <section className="mt-16 border-y border-[color:var(--border)]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[color:var(--border)] px-0 md:grid-cols-4">
        {project.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="px-6 py-10 text-center md:py-12">
              <div className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-none text-[color:var(--purple-deep)]">
                {s.value}
              </div>
              <div className="mt-2 font-mono text-[0.6rem] uppercase tracking-widest text-[color:var(--warmgray)]">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Meta fact sheet ── */
function MetaStrip({ project }: { project: Project }) {
  const rows = [
    { label: "Role",     value: project.meta?.role },
    { label: "Year",     value: project.meta?.year },
    { label: "Client",   value: project.meta?.client },
    { label: "Platform", value: project.meta?.platform },
    { label: "Stack",    value: project.stack.join("  ·  ") },
  ].filter((r): r is { label: string; value: string } => Boolean(r.value));

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 border-t border-[color:var(--border)] pt-12 sm:grid-cols-2 lg:grid-cols-5">
          {rows.map((r, i) => (
            <Reveal key={r.label} delay={i * 0.05}>
              <div>
                <div className="font-mono text-[0.6rem] uppercase tracking-widest text-[color:var(--warmgray)]">
                  {r.label}
                </div>
                <div className="mt-2 font-display text-lg text-[color:var(--ink)]">{r.value}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Overview tabs ── */
function OverviewSection({ project }: { project: Project }) {
  const [tab, setTab] = useState<Tab>("problem");
  const body: Record<Tab, string> = {
    problem: project.problem,
    solution: project.solution,
    impact: project.impact,
  };

  return (
    <section className="border-t border-[color:var(--border)] py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="eyebrow">Overview</div>
        </Reveal>

        <LayoutGroup id={`tabs-${project.id}`}>
          <div className="mt-8 flex gap-0 border-b border-[color:var(--border)]">
            {(["problem", "solution", "impact"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="relative px-5 py-3 text-left"
              >
                <span className={`eyebrow transition-colors ${tab === t ? "text-[color:var(--ink)]" : "text-[color:var(--warmgray)]"}`}>
                  {t}
                </span>
                {tab === t && (
                  <motion.span
                    layoutId={`tab-line-${project.id}`}
                    className="absolute -bottom-px left-0 right-0 h-[2px] bg-[color:var(--ink)]"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="relative mt-8 min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={tab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="max-w-3xl text-lg leading-relaxed text-[color:var(--warmgray)]"
              >
                {body[tab]}
              </motion.p>
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}

/* ── Showcase ── */
function ShowcaseSection({ project }: { project: Project }) {
  const items = project.showcase ?? [];

  return (
    <section id="showcase" className="border-t border-[color:var(--border)] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="eyebrow">Showcase</div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display-h mt-5 max-w-3xl text-[clamp(2rem,5vw,3.6rem)]">
            Every screen, <em className="italic text-[color:var(--warmgray)]">in context.</em>
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 max-w-7xl space-y-24 px-6 md:mt-28 md:space-y-32">
        {items.map((item, i) => {
          const chapterCount = items.filter((it, j) => it.chapter && j <= i).length;
          return (
            <div key={`${item.seed}-${i}`}>
              {item.chapter && <ChapterDivider chapter={item.chapter} n={chapterCount} />}
              <ShowcaseSlide item={item} index={i} total={items.length} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ChapterDivider({ chapter, n }: { chapter: string; n: number }) {
  return (
    <Reveal>
      <div className="mb-16 flex items-center gap-6">
        <span className="eyebrow shrink-0">Ch. {String(n).padStart(2, "0")}</span>
        <span className="h-px flex-1 bg-[color:var(--border)]" />
        <h3 className="display-h shrink-0 text-[clamp(1.4rem,3vw,2.2rem)] text-[color:var(--ink)]">
          {chapter}
        </h3>
        <span className="h-px flex-1 bg-[color:var(--border)]" />
      </div>
    </Reveal>
  );
}

function ShowcaseSlide({ item, index, total }: { item: ShowcaseItem; index: number; total: number }) {
  const mediaLeft = index % 2 === 0;
  const frame = String(index + 1).padStart(2, "0");

  const media = (
    <div className="relative">
      {/* Soft glow behind */}
      <div className="absolute -inset-6 rounded-3xl bg-[color:var(--purple-deep)]/5 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-[color:var(--border)] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)]">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className={
              item.device === "browser"
                ? "block w-full"
                : "mx-auto block max-h-[640px] w-auto object-contain"
            }
          />
        ) : item.video ? (
          <video
            src={item.video}
            autoPlay muted loop playsInline
            className={
              item.device === "browser"
                ? "block w-full"
                : "mx-auto block max-h-[600px] w-auto object-cover"
            }
          />
        ) : (
          <MockScreen
            device={item.device ?? "mobile"}
            seed={item.seed}
            animated={item.animated}
            className={item.device === "browser" ? "w-full" : "mx-auto w-[min(100%,280px)]"}
          />
        )}
      </div>
      {/* Frame badge */}
      <div className="mt-3 flex items-center justify-between font-mono text-[0.6rem] uppercase tracking-widest text-[color:var(--warmgray)]">
        <span>Frame {frame} / {String(total).padStart(2, "0")}</span>
        <span>
          {item.video ? "Video" : item.device === "browser" ? "Browser" : "Mobile"}
        </span>
      </div>
    </div>
  );

  const text = (
    <div className="flex flex-col justify-center">
      <div className="flex flex-wrap items-center gap-2">
        <span className="eyebrow">Frame {frame}</span>
        {item.video && (
          <span className="inline-flex items-center gap-1.5 chip-outline">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--purple)]" />
            Recording
          </span>
        )}
      </div>
      <h3 className="display-h mt-4 text-[clamp(1.5rem,2.5vw,2.4rem)]">{item.title}</h3>
      <p className="mt-4 text-base leading-[1.75] text-[color:var(--warmgray)] md:text-lg">
        {item.body}
      </p>
      <div className="mt-6 h-px w-12 bg-[color:var(--purple-deep)]/30" />
    </div>
  );

  return (
    <Reveal>
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        {mediaLeft ? (
          <>
            <div className="lg:col-span-7">{media}</div>
            <div className="lg:col-span-5">{text}</div>
          </>
        ) : (
          <>
            <div className="lg:col-span-5">{text}</div>
            <div className="lg:col-span-7">{media}</div>
          </>
        )}
      </div>
    </Reveal>
  );
}

/* ── Features ── */
function FeaturesSection({ project }: { project: Project }) {
  const total = project.features!.length;
  return (
    <section className="border-t border-[color:var(--border)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal><div className="eyebrow">Features</div></Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-h mt-5 text-[clamp(1.8rem,4vw,3.2rem)]">
                What users can <em className="italic text-[color:var(--warmgray)]">do.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="font-display text-[4rem] leading-none text-[color:var(--purple-deep)]/20 md:text-[5rem]">
              {String(total).padStart(2, "0")}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.features!.map((feat, i) => {
            const Icon = FEATURE_ICONS[feat.icon] ?? Globe;
            return (
              <Reveal key={feat.title} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="group relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white p-6 md:p-7"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[color:var(--purple)]/6 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-[color:var(--purple)]/12" />
                  <div className="relative">
                    <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--purple-deep)]/8 transition-transform duration-500 group-hover:-rotate-6">
                      <Icon className="h-5 w-5 text-[color:var(--purple-deep)]" />
                    </div>
                    <div className="font-mono text-[0.6rem] uppercase tracking-widest text-[color:var(--purple-deep)]">
                      {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </div>
                    <h3 className="mt-1.5 font-display text-xl">{feat.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--warmgray)]">
                      {feat.description}
                    </p>
                    {feat.tags && feat.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {feat.tags.map((t) => (
                          <span key={t} className="chip-lilac px-2 py-0.5 text-[11px]">{t}</span>
                        ))}
                      </div>
                    )}
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

/* ── Architecture ── */
function ArchitectureSection({ project }: { project: Project }) {
  return (
    <section className="border-t border-[color:var(--border)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal><div className="eyebrow">Architecture</div></Reveal>
        <Reveal delay={0.08}>
          <h2 className="display-h mt-5 text-[clamp(1.8rem,4vw,3.2rem)]">
            Under the <em className="italic text-[color:var(--warmgray)]">hood.</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {project.architecture!.map((item, i) => {
            const Icon = ARCH_ICONS[i % ARCH_ICONS.length];
            return (
              <Reveal key={item.label} delay={i * 0.05}>
                <div className="flex gap-5 rounded-2xl border border-[color:var(--border)] bg-white p-6 md:p-7">
                  <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--purple-deep)]/8">
                    <Icon className="h-5 w-5 text-[color:var(--purple-deep)]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg">{item.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--warmgray)]">{item.detail}</p>
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

/* ── Capabilities ── */
function CapabilitiesSection({ project }: { project: Project }) {
  return (
    <section className="border-t border-[color:var(--border)] py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal><div className="eyebrow">Capabilities</div></Reveal>
        <Reveal delay={0.08}>
          <h2 className="display-h mt-5 text-[clamp(1.8rem,4vw,3.2rem)]">
            Beyond the <em className="italic text-[color:var(--warmgray)]">core.</em>
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
          {project.capabilities!.map((cap, i) => (
            <Reveal key={cap} delay={i * 0.04}>
              <div className="group flex items-center gap-6 py-5">
                <span className="w-8 shrink-0 font-mono text-[0.6rem] uppercase tracking-widest text-[color:var(--purple-deep)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg transition-all duration-400 group-hover:translate-x-1 group-hover:text-[color:var(--purple-deep)] md:text-xl">
                  {cap}
                </span>
                <ChevronRight className="ml-auto h-4 w-4 text-[color:var(--warmgray)] opacity-0 transition-all duration-400 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Next project ── */
function NextProjectSection({ next }: { next: Project }) {
  return (
    <section className="border-t border-[color:var(--border)] py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="eyebrow">Next Up</div>
        </Reveal>
        <Reveal delay={0.08}>
          <Link
            to="/projects/$id"
            params={{ id: next.id }}
            className="group mt-6 flex items-end justify-between gap-8"
          >
            <h2 className="display-h text-[clamp(2rem,5vw,4.2rem)] transition-colors duration-400 group-hover:text-[color:var(--purple-deep)]">
              {next.title}
            </h2>
            <div className="mb-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] transition-all duration-400 group-hover:border-[color:var(--purple-deep)] group-hover:bg-[color:var(--purple-deep)] group-hover:text-white">
              <ArrowRight className="h-5 w-5 text-[color:var(--warmgray)] transition-colors group-hover:text-white" />
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

