import { motion } from "motion/react";

const GROUPS: { label: string; items: string[] }[] = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"] },
  { label: "Backend", items: ["Node.js", "Express", "REST API", "MongoDB", "PostgreSQL", "Firebase", "Supabase"] },
  { label: "Mobile", items: ["React Native", "Expo", "Cross-platform", "Mobile UI/UX"] },
  { label: "AI / ML", items: ["TensorFlow", "scikit-learn", "Python", "LLM Integration"] },
  { label: "Tools", items: ["Git", "GitHub", "Docker", "Figma", "Vercel"] },
  { label: "Concepts", items: ["System Architecture", "API Design", "Product Development", "UI Engineering"] },
];

export function SkillsCloud() {
  return (
    <div className="border-t border-[color:var(--border)]">
      {GROUPS.map((g, gi) => (
        <div
          key={g.label}
          className="grid border-b border-[color:var(--border)] py-8 md:grid-cols-[220px_1fr] md:gap-16 md:py-11"
        >
          {/* category */}
          <div className="eyebrow mb-5 pt-1 md:mb-0">{g.label}</div>

          {/* skills */}
          <div className="flex flex-wrap gap-x-7 gap-y-2">
            {g.items.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: gi * 0.03 + i * 0.05 }}
                whileHover={{ x: 3, color: "var(--purple-deep)" }}
                className="cursor-default font-display text-[clamp(1.35rem,2.2vw,1.75rem)] leading-snug text-[color:var(--ink)] transition-colors duration-200"
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
