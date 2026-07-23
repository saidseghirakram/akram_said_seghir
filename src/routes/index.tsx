import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, ArrowUp, Instagram, Linkedin, Youtube, Github, Sparkles, Trophy } from "lucide-react";
import { Grain } from "@/components/Grain";
import { Cursor } from "@/components/Cursor";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { RoleCycle } from "@/components/RoleCycle";
import { CountUp } from "@/components/CountUp";
import { ProjectReel } from "@/components/ProjectReel";
import { SkillsCloud } from "@/components/SkillsCloud";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { ProcessMap } from "@/components/ProcessMap";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Akram4Dev — Akram Said Seghir · Software Engineer" },
      {
        name: "description",
        content:
          "Software Engineer & Frontend Team Leader from Algeria. Building scalable products, startups, and technology experiences under Akram4Dev.",
      },
      { property: "og:title", content: "Akram4Dev — Software Engineer & Product Builder" },
      {
        property: "og:description",
        content: "I transform ideas into scalable digital products.",
      },
    ],
  }),
});

const SERVICES = [
  "Web Applications",
  "Mobile Applications",
  "SaaS Products",
  "Startup MVP Development",
  "Technology Consulting",
];

const TIMELINE = [
  {
    date: "July 2026",
    label: "Software Engineer",
    body: "Transitioned into a full-time Software Engineer role, building on years of freelance and product experience.",
  },
  {
    date: "October 2026 — Present",
    label: "Frontend Team Leader · Fennec Booking",
    body: "Leading frontend engineering, architecture decisions, UI development, and product improvements for a travel technology company.",
  },
  {
    date: "2022 — Present",
    label: "Freelance Software Engineer",
    body: "Building websites, applications, dashboards, and custom software solutions for businesses and startups.",
  },
  {
    date: "July 2027",
    label: "Official Auto-Entrepreneur — Algeria",
    body: "Formalized as an independent auto-entrepreneur, structuring long-term client and startup work.",
  },
];

function Home() {
  return (
    <div id="top" className="relative min-h-screen">
      <Grain />
      <Cursor />
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden pb-32 pt-40 md:pt-56">
        <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[520px] w-[520px] purple-glow opacity-70" />
        <div className="pointer-events-none absolute left-[-8%] bottom-[-10%] h-[360px] w-[360px] purple-glow opacity-40" />

        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="eyebrow flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--purple)]" />
              (Available for Collaborations)
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="display-h mt-8 max-w-6xl text-[clamp(2.6rem,7vw,6.2rem)]">
              <RoleCycle />
              <br />
              building digital products that turn{" "}
              <span className="italic text-[color:var(--warmgray)]">ideas</span> into reality.
            </h1>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-10 max-w-2xl text-lg text-[color:var(--warmgray)] md:text-xl">
              I'm Akram Said Seghir, a Software Engineer passionate about building scalable applications,
              innovative solutions, and technology products.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="btn-primary btn-primary-hover"
              >
                Let's Work Together <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.4 }}
                className="btn-outline btn-outline-hover"
              >
                View My Work <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.5}>
            <div className="mt-24 grid gap-10 border-t border-[color:var(--border)] pt-10 md:grid-cols-3">
              {[
                { n: <CountUp to={2022} />, l: "Freelancing as a software engineer" },
                { n: <CountUp to={2026} />, l: "Became a full-time Software Engineer" },
                {
                  n: (
                    <span className="inline-flex items-baseline gap-2">
                      <Trophy className="h-8 w-8 -translate-y-1" />
                      2<sup className="text-2xl">nd</sup>
                    </span>
                  ),
                  l: "Place · Travel Hackathon 2026",
                },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-display text-5xl text-[color:var(--purple-deep)] md:text-6xl">
                    {s.n}
                  </div>
                  <div className="mt-3 text-sm text-[color:var(--warmgray)]">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-24 flex justify-center">
            <motion.div
              className="h-16 w-px bg-[color:var(--border)]"
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[color:var(--cream-alt)] py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="eyebrow">(01 / 08) — About</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-h mt-6 text-[clamp(2rem,5vw,4rem)]">
              Beyond code. <span className="italic text-[color:var(--purple-deep)]">Building solutions.</span>
            </h2>
          </Reveal>
          <div className="mt-14 space-y-8 text-xl leading-relaxed text-[color:var(--warmgray)] md:text-2xl md:leading-[1.5]">
            {[
              "I'm a Software Engineer and technology entrepreneur from Algeria.",
              "I've been freelancing since 2022, helping businesses and startups turn ideas into real digital products.",
              "In 2026, I became a full-time Software Engineer, and I now lead frontend development at Fennec Booking, building modern travel technology experiences.",
              "Outside engineering, I build startup ideas and create technology content under Akram4Dev.",
            ].map((line, i) => (
              <Reveal key={i} delay={i * 0.1} as="p">
                {line}
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <div className="mt-12 flex flex-wrap gap-3">
              {["build", "lead", "ship", "share"].map((t) => (
                <span key={t} className="chip-lilac">{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="eyebrow">(02 / 08) — Experience</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-h mt-6 text-[clamp(2rem,5vw,4rem)]">A working timeline.</h2>
          </Reveal>

          <div className="relative mt-16 pl-8 md:pl-14">
            <div className="absolute bottom-0 left-2 top-2 w-px bg-gradient-to-b from-[color:var(--purple)] via-[color:var(--border)] to-transparent md:left-4" />
            <div className="space-y-14">
              {TIMELINE.map((t, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="relative">
                    <div className="absolute -left-[26px] top-2 h-3 w-3 rounded-full bg-[color:var(--purple-deep)] ring-4 ring-[color:var(--cream)] md:-left-[38px]" />
                    <div className="card-cream p-8">
                      <div className="eyebrow">{t.date}</div>
                      <h3 className="mt-3 font-display text-2xl md:text-3xl">{t.label}</h3>
                      <p className="mt-3 text-[color:var(--warmgray)]">{t.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-14 inline-flex items-center gap-3 rounded-full border border-[color:var(--purple)] bg-[color:var(--lilac)] px-6 py-4 shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)]">
                <Trophy className="h-5 w-5 text-[color:var(--purple-deep)]" />
                <span className="font-medium text-[color:var(--purple-deep)]">
                  🏆 2nd Place — Travel Hackathon, 2026
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="bg-[color:var(--cream-alt)] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="eyebrow">(03 / 08) — Real Projects</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-h mt-6 max-w-3xl text-[clamp(2rem,5vw,4rem)]">
              Case studies from the <span className="italic text-[color:var(--purple-deep)]">workshop.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[color:var(--warmgray)]">
              A growing library of shipped software, from startup MVPs to production platforms.
            </p>
          </Reveal>
          <div className="mt-16">
            <ProjectReel />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="eyebrow">(04 / 08) — Toolkit</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-h mt-6 max-w-3xl text-[clamp(2rem,5vw,4rem)]">
              An interactive ecosystem of tools I build with.
            </h2>
          </Reveal>
          <div className="mt-16">
            <SkillsCloud />
          </div>
        </div>
      </section>

      {/* CONTENT CREATOR */}
      <section className="bg-[color:var(--cream-alt)] py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="eyebrow">(05 / 08) — Creator</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-h mt-6 text-[clamp(2rem,5vw,4rem)]">
              Sharing technology <span className="italic text-[color:var(--purple-deep)]">with the community.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[color:var(--warmgray)]">
              Through Akram4Dev, I create content about software engineering, AI, startups, and technology.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-4">
              {[
                { i: Instagram, l: "Instagram" },
                { i: Linkedin, l: "LinkedIn" },
                { i: Youtube, l: "YouTube" },
                { i: Sparkles, l: "TikTok" },
              ].map(({ i: Icon, l }) => (
                <a
                  key={l}
                  href="#"
                  className="card-cream group inline-flex items-center gap-3 px-6 py-4 transition-transform hover:-translate-y-1"
                >
                  <Icon className="h-5 w-5 text-[color:var(--purple-deep)]" />
                  <span className="font-medium">{l}</span>
                  <ArrowUpRight className="h-4 w-4 text-[color:var(--warmgray)] transition-colors group-hover:text-[color:var(--purple-deep)]" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* STARTUP BUILDER */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="eyebrow">(06 / 08) — Startup Builder</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-h mt-6 text-[clamp(2rem,5vw,4rem)]">
              From <span className="italic text-[color:var(--purple-deep)]">idea</span> to product.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[color:var(--warmgray)]">
              I don't only build software. I explore problems, validate ideas, and create technology solutions.
            </p>
          </Reveal>
        </div>

        <div className="mt-12">
          <ProcessMap />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[color:var(--cream-alt)] py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="eyebrow">(07 / 08) — Services</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-h mt-6 text-[clamp(2rem,5vw,4rem)]">What I do.</h2>
          </Reveal>

          <div className="mt-16 divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
            {SERVICES.map((s, i) => (
              <Reveal key={s} delay={i * 0.05}>
                <a
                  href="#contact"
                  className="group flex items-center justify-between gap-6 py-8 transition-colors"
                >
                  <div className="flex items-baseline gap-8">
                    <span className="font-mono text-sm text-[color:var(--purple-deep)]">0{i + 1}</span>
                    <span className="font-display text-3xl transition-all duration-500 group-hover:translate-x-2 group-hover:text-[color:var(--purple-deep)] md:text-5xl">
                      {s}
                    </span>
                  </div>
                  <ArrowUpRight className="h-6 w-6 shrink-0 text-[color:var(--warmgray)] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[color:var(--purple-deep)]" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="eyebrow text-center">Words from collaborators</div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12">
              <Testimonials />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[color:var(--cream-alt)] py-32">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="eyebrow">(08 / 08) — FAQ</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-h mt-6 text-[clamp(2rem,5vw,4rem)]">Questions, answered.</h2>
          </Reveal>
          <div className="mt-12">
            <Faq />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="relative overflow-hidden py-40">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 purple-glow" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="eyebrow">(Let's build)</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-h mt-8 text-[clamp(2.8rem,8vw,7rem)]">
              Have an idea?
              <br />
              <span className="italic text-[color:var(--purple-deep)]">Let's turn it into reality.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mx-auto mt-10 max-w-2xl text-lg text-[color:var(--warmgray)]">
              Whether you're building a startup, launching a product, or searching for a technology partner,
              let's create something meaningful together.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <motion.a
                href="mailto:hello@akram4dev.com"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.4 }}
                className="btn-primary btn-primary-hover"
              >
                Let's Work Together <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="mailto:hello@akram4dev.com"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.4 }}
                className="btn-outline btn-outline-hover"
              >
                Start A Project <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[color:var(--border)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
          <div>
            <div className="font-display text-2xl">
              Akram<span className="text-[color:var(--purple-deep)]">4</span>Dev
            </div>
            <p className="mt-4 max-w-xs text-sm text-[color:var(--warmgray)]">
              Software Engineer & Product Builder based in Algeria.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-[color:var(--warmgray)]">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[color:var(--purple)]" />
              Available for new projects
            </div>
          </div>
          <div>
            <div className="eyebrow mb-4">Sitemap</div>
            <ul className="space-y-2 text-sm">
              {[
                ["About", "#about"],
                ["Experience", "#experience"],
                ["Work", "#work"],
                ["Services", "#services"],
                ["FAQ", "#faq"],
              ].map(([l, h]) => (
                <li key={h}><a href={h} className="text-[color:var(--warmgray)] hover:text-[color:var(--purple-deep)]">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-4">Elsewhere</div>
            <div className="flex flex-wrap gap-3">
              {[Instagram, Linkedin, Youtube, Github, Sparkles].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--border)] text-[color:var(--warmgray)] transition-colors hover:border-[color:var(--purple)] hover:text-[color:var(--purple-deep)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="eyebrow mb-4">Curious?</div>
            <a href="#" className="group inline-flex items-center gap-2 font-display text-lg text-[color:var(--purple-deep)]">
              Ask AI about Akram4Dev
              <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
            </a>
          </div>
        </div>
        <div className="border-t border-[color:var(--border)]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-xs text-[color:var(--warmgray)]">
            <span>© {new Date().getFullYear()} Akram Said Seghir. Made with care in Algeria.</span>
            <a href="#top" className="inline-flex items-center gap-2 hover:text-[color:var(--purple-deep)]">
              Back to top <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
