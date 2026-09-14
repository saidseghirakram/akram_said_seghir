import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ROLES = ["Software Engineer", "Product Builder", "Techverse Founder", "Technology Creator"];

export function RoleCycle() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[i]}
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block italic text-[color:var(--purple-deep)]"
        >
          {ROLES[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
