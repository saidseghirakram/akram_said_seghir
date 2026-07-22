import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";

const ITEMS = [
  {
    q: "What kind of projects do you take on?",
    a: "Web applications, mobile apps, SaaS products, dashboards, and startup MVPs. I focus on scalable, well-architected products for businesses and founders who care about quality.",
  },
  {
    q: "How do you usually work with a client or team?",
    a: "Async-first, transparent, and product-minded. I lead frontend architecture, ship in tight iterations, and communicate clearly through Notion, Linear, or whatever your team already uses.",
  },
  {
    q: "What's your typical availability?",
    a: "I lead frontend at Fennec Booking full-time and take on select freelance and startup collaborations outside of that. Best to reach out early — my slots book weeks ahead.",
  },
  {
    q: "Do you work on startups pre-funding?",
    a: "Yes — I love pre-funding startups. Depending on the idea, I can take equity, deferred, or hybrid arrangements. Let's talk about the problem first, terms second.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-[color:var(--border)]">
      {ITEMS.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-[color:var(--purple-deep)]"
            >
              <span className="font-display text-xl md:text-2xl">{it.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--border)] text-[color:var(--purple-deep)]"
              >
                <Plus className="h-4 w-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-16 text-[color:var(--warmgray)]">{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
