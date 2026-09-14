import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const QUOTES = [
  {
    q: "Akram delivered our project ahead of schedule and exceeded all expectations. His technical expertise and communication made the development process seamless.",
    name: "Alex Johnson",
    role: "CTO at TechStart",
  },
  {
    q: "Working with Akram was a game-changer for our product. His ability to translate complex requirements into elegant solutions is remarkable.",
    name: "Sarah Williams",
    role: "Founder, DesignHub",
  },
  {
    q: "I've worked with many developers, but Akram stands out for his attention to detail and problem-solving skills. Highly recommended!",
    name: "Michael Chen",
    role: "Product Manager, InnoTech",
  },
  {
    q: "Akram's work on our platform was exceptional. He brings both technical skill and creative vision to every project.",
    name: "Emily Rodriguez",
    role: "CEO, WebSolutions",
  },
  {
    q: "The website Akram built for us has significantly increased our conversion rates. His understanding of both design and functionality is impressive.",
    name: "David Park",
    role: "Marketing Director, GrowthLabs",
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
