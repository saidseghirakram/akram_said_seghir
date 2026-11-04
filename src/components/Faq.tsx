import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ITEMS = [
  {
    q: "What kind of projects do you take on?",
    a: "Web applications, mobile apps, AI/ML solutions, SaaS products, dashboards, and startup MVPs. I focus on scalable, well-architected products for businesses and founders who care about quality.",
  },
  {
    q: "What technologies do you work with?",
    a: "I work with React, Next.js, TypeScript, Node.js, React Native, MongoDB, PostgreSQL, Firebase, Supabase, and AI/ML frameworks like TensorFlow and scikit-learn. I also integrate LLMs into applications.",
  },
  {
    q: "Do you work on startups pre-funding?",
    a: "Yes, I love pre-funding startups. As the founder of Techverse, I'm passionate about helping developers and entrepreneurs bring their ideas to life. Let's talk about the problem first, terms second.",
  },
  {
    q: "Are you available for freelance work?",
    a: "Yes! I'm available for freelance projects and exciting opportunities. I've been freelancing since 2021, building web and mobile apps for clients worldwide. Feel free to reach out.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-[color:var(--border)]">
      {ITEMS.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className="border-b border-[color:var(--border)]">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-start gap-8 py-9 text-left md:gap-16"
            >
              {/* index */}
              <span className="mt-1 shrink-0 font-mono text-[0.68rem] text-[color:var(--warmgray)] opacity-40 transition-opacity duration-200 group-hover:opacity-70">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* question */}
              <span
                className="flex-1 font-display leading-tight text-[color:var(--ink)] transition-colors duration-300 group-hover:text-[color:var(--purple-deep)]"
                style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)" }}
              >
                {it.q}
              </span>

              {/* indicator */}
              <span className="mt-1 shrink-0 font-mono text-sm text-[color:var(--purple-deep)] opacity-50 transition-all duration-300 group-hover:opacity-100">
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  +
                </motion.span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-9 pl-14 pr-10 text-[0.97rem] leading-relaxed text-[color:var(--warmgray)] md:pl-24">
                    {it.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
