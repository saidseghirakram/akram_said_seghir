import { motion } from "motion/react";
import { ArrowUpRight, Github, Linkedin, Instagram, Youtube, Mail, ArrowUp } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const SOCIALS = [
  { icon: Github,    href: "https://github.com/saidseghirakram",          label: "GitHub" },
  { icon: Linkedin,  href: "https://linkedin.com/in/akram-saidseghir/",   label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/akram4dev",             label: "Instagram" },
  { icon: Youtube,   href: "#",                                           label: "YouTube" },
];

const LINKS = [
  { label: "About",      href: "/about" },
  { label: "Experience", href: "/about#experience" },
  { label: "Work",       href: "/#work" },
  { label: "Toolkit",    href: "/about#toolkit" },
];

export function PageFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* ── CTA ZONE (dark) ── */}
      <div className="relative overflow-hidden bg-[#0f0d0b] px-6 py-28 md:py-40">
        {/* Purple glow blobs */}
        <div className="pointer-events-none absolute left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--purple-deep)]/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-[color:var(--purple-electric)]/12 blur-[80px]" />

        {/* Oversized background word */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 select-none text-center font-display leading-none"
          style={{
            fontSize: "clamp(6rem,18vw,18rem)",
            WebkitTextStroke: "1px rgba(255,255,255,0.03)",
            color: "transparent",
          }}
        >
          Let's Build
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-white/30">
              Available for new projects
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2
              className="display-h mt-6 text-white"
              style={{ fontSize: "clamp(3rem,8vw,7rem)", lineHeight: 1 }}
            >
              Have an{" "}
              <em className="italic text-[color:var(--purple-electric)]">idea?</em>
              <br />
              Let's build it.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-8 max-w-xl text-lg text-white/50">
              Whether you're launching a startup, scaling a product, or searching for a
              technology partner — let's create something that matters.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="mailto:akramsaidseghir26@gmail.com"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 font-medium text-[#0f0d0b] shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-shadow hover:shadow-[0_0_60px_rgba(168,85,247,0.5)]"
              >
                <Mail className="h-4 w-4" />
                Let's Work Together
              </motion.a>
              <motion.a
                href="mailto:akramsaidseghir26@gmail.com"
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/20 px-7 py-4 font-medium text-white/80 backdrop-blur-sm transition-colors hover:border-white/40 hover:text-white"
              >
                Start A Project <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </div>
          </Reveal>

          {/* Email displayed large */}
          <Reveal delay={0.32}>
            <a
              href="mailto:akramsaidseghir26@gmail.com"
              className="mt-16 inline-block font-mono text-[0.72rem] uppercase tracking-widest text-white/25 transition-colors hover:text-white/50"
            >
              akramsaidseghir26@gmail.com
            </a>
          </Reveal>
        </div>
      </div>

      {/* ── FOOTER GRID ── */}
      <div className="bg-[#0a0908] px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <a href="/" className="font-display text-2xl text-white/90 tracking-tight">
                Akram<span className="text-[color:var(--purple-electric)]">4</span>Dev
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/35">
                Software Engineer & Product Builder based in Algeria, Médéa. Building scalable
                digital products since 2021.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs text-white/30">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                Available for new projects
              </div>
            </div>

            {/* Pages */}
            <div>
              <p className="mb-4 font-mono text-[0.6rem] uppercase tracking-widest text-white/30">
                Pages
              </p>
              <ul className="space-y-3">
                {LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-sm text-white/50 transition-colors hover:text-white/90"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="mb-4 font-mono text-[0.6rem] uppercase tracking-widest text-white/30">
                Contact
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:akramsaidseghir26@gmail.com"
                    className="text-sm text-white/50 transition-colors hover:text-white/90"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/akram-saidseghir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 transition-colors hover:text-white/90"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <span className="text-sm text-white/30">Algeria, Médéa</span>
                </li>
              </ul>
            </div>

            {/* Social icons */}
            <div>
              <p className="mb-4 font-mono text-[0.6rem] uppercase tracking-widest text-white/30">
                Elsewhere
              </p>
              <div className="flex flex-wrap gap-2.5">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/40 transition-all hover:border-white/30 hover:text-white/80"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex items-center justify-between border-t border-white/8 pt-6">
            <span className="text-xs text-white/25">
              © {year} Akram Said Seghir · Made with care in Algeria.
            </span>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 text-xs text-white/25 transition-colors hover:text-white/60"
            >
              Back to top <ArrowUp className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
