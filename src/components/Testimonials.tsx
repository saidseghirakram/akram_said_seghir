import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const QUOTES = [
  {
    q: "Akram doesn't just write code — he thinks like a product owner. He shipped our MVP in weeks and it still feels premium months later.",
    name: "Startup Founder",
    role: "Travel Tech · Algiers",
  },
  {
    q: "Rare combination of engineering rigor and design sensitivity. Every detail felt intentional.",
    name: "Product Lead",
    role: "SaaS Client",
  },
  {
    q: "Led our frontend from zero to a real production platform. Calm, precise, fast.",
    name: "Engineering Manager",
    role: "Fennec Booking",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % QUOTES.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="card-cream relative mx-auto max-w-4xl overflow-hidden p-10 md:p-16">
      <div className="absolute -left-16 -top-16 h-64 w-64 purple-glow" />
      <div className="relative min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-2xl leading-snug md:text-3xl">
              "{QUOTES[i].q}"
            </p>
            <footer className="mt-8">
              <div className="font-medium text-[color:var(--ink)]">{QUOTES[i].name}</div>
              <div className="text-sm text-[color:var(--warmgray)]">{QUOTES[i].role}</div>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
      <div className="mt-8 flex gap-2">
        {QUOTES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Testimonial ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-10 bg-[color:var(--purple-deep)]" : "w-4 bg-[color:var(--border)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
