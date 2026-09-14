import { motion } from "motion/react";

const GROUPS: { label: string; items: string[] }[] = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"] },
  { label: "Backend", items: ["Node.js", "Express", "REST API", "MongoDB", "PostgreSQL", "Firebase", "Supabase"] },
  { label: "Mobile", items: ["React Native", "Expo", "Cross-platform", "Mobile UI/UX"] },
  { label: "AI/ML", items: ["TensorFlow", "scikit-learn", "Python", "LLM Integration"] },
  { label: "Tools", items: ["Git", "GitHub", "Docker", "Figma", "Vercel"] },
  { label: "Concepts", items: ["System Architecture", "API Design", "Product Development", "UI Engineering"] },
];

export function SkillsCloud() {
  return (
    <div className="space-y-10">
      {GROUPS.map((g) => (
        <div key={g.label} className="grid gap-6 md:grid-cols-[180px_1fr]">
          <div className="eyebrow pt-2">{g.label}</div>
          <div className="flex flex-wrap gap-3">
            {g.items.map((s, i) => (
              <motion.span
                key={s}
                initial={{ y: 0 }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 6 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                whileHover={{ y: -6, boxShadow: "0 12px 30px -8px rgba(124,58,237,0.35)" }}
                className="cursor-default rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-2 text-sm font-medium text-[color:var(--ink)] transition-colors hover:border-[color:var(--purple)] hover:text-[color:var(--purple-deep)]"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
