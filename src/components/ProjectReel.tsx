import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";

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
  const items = PROJECTS.filter((p) => f === "All" || p.category === f);

  return (
    <div>
      <div className="mb-12 flex flex-wrap gap-2">
        {FILTERS.map((label) => (
          <button
            key={label}
            onClick={() => setF(label)}
            className={`rounded-full px-4 py-2 text-sm transition-all ${
              f === label
                ? "bg-[color:var(--purple-deep)] text-[color:var(--cream)]"
                : "border border-[color:var(--border)] text-[color:var(--warmgray)] hover:border-[color:var(--purple)] hover:text-[color:var(--purple-deep)]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-10">
        <AnimatePresence mode="popLayout">
          {items.map((p, idx) => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
              className="card-cream overflow-hidden"
            >
              <div className="grid gap-0 md:grid-cols-5">
                <div
                  className="relative min-h-[260px] md:col-span-2 md:min-h-[420px]"
                  style={{ background: p.gradient }}
                >
                  <div className="absolute inset-0 mix-blend-overlay opacity-40" style={{background:"radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 50%)"}}/>
                  <span className="absolute left-6 top-6 font-mono text-sm text-white/80">({p.n} / 06)</span>
                  <span className="absolute bottom-6 left-6 font-display text-3xl text-white/90">{p.category}</span>
                </div>
                <div className="p-8 md:col-span-3 md:p-12">
                  <h3 className="font-display text-3xl md:text-4xl">{p.title}</h3>
                  <dl className="mt-6 space-y-4 text-[15px] leading-relaxed">
                    <div>
                      <dt className="eyebrow mb-1">Problem</dt>
                      <dd className="text-[color:var(--warmgray)]">{p.problem}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow mb-1">Solution</dt>
                      <dd className="text-[color:var(--warmgray)]">{p.solution}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow mb-1">Impact</dt>
                      <dd className="font-medium text-[color:var(--ink)]">{p.impact}</dd>
                    </div>
                  </dl>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="chip-outline">{s}</span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {p.live && (
                      <a href={p.live} className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--purple-deep)] hover:text-[color:var(--purple-electric)]">
                        Live Demo <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--ink)] hover:text-[color:var(--purple-deep)]">
                        <Github className="h-4 w-4" /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
