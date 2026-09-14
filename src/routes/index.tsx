import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, ArrowUp, Instagram, Linkedin, Youtube, Github, Sparkles, Trophy, Mail } from "lucide-react";
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
          "Software Engineer, Web, Mobile & AI/ML Developer from Algeria. Founder of Techverse. Building scalable products and technology experiences under Akram4Dev.",
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
  "AI/ML Solutions",
  "SaaS Products",
  "Startup MVP Development",
  "Technology Consulting",
];

const TIMELINE = [
  {
    date: "2023 — 2025",
    label: "Master's in System Information (Software Engineering)",
    body: "Pursuing advanced studies in software engineering and system information at University Yahia Fares, Médéa, Algeria.",
  },
  {
    date: "2023",
    label: "Founder & Lead Organizer — Techverse",
    body: "Established a tech club to organize workshops, mentor young developers, and foster a tech community in Algeria.",
  },
  {
    date: "2021 — Present",
    label: "Freelancer",
    body: "Developed multiple full-stack web and mobile apps for clients using modern frameworks and tools. Focused on delivering real value and business impact.",
  },
  {
    date: "2020 — 2023",
    label: "Bachelor's in System Information",
    body: "Graduated with a strong foundation in software systems and development at University Yahia Fares, Médéa, Algeria.",
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
          <div className="grid items-center gap-12">
            <div>
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
                  I'm Akram Said Seghir, a Software Engineer from Algeria passionate about building scalable applications,
                  innovative solutions, and technology products. Founder of Techverse.
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
            </div>


          </div>

          {/* Stats */}
          <Reveal delay={0.5}>
            <div className="mt-24 grid gap-10 border-t border-[color:var(--border)] pt-10 md:grid-cols-3">
              {[
                { n: <CountUp to={2021} />, l: "Started freelancing as a software engineer" },
                { n: <CountUp to={2023} />, l: "Founded Techverse developer community" },
                {
                  n: (
                    <span className="inline-flex items-baseline gap-2">
                      <Trophy className="h-8 w-8 -translate-y-1" />
                      5+
                    </span>
                  ),
                  l: "Projects shipped across web, mobile & AI",
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
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="eyebrow">(01 / 08) — About</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-h mt-6 text-[clamp(2rem,5vw,4rem)]">
              Beyond code. <span className="italic text-[color:var(--purple-deep)]">Building solutions.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-12 md:grid-cols-[1fr_auto] md:items-start md:gap-16">
            <div className="space-y-8 text-xl leading-relaxed text-[color:var(--warmgray)] md:text-2xl md:leading-[1.5]">
              {[
                "I'm Akram Said Seghir, a passionate Software Engineer from Algeria with a strong focus on web development, mobile applications, and AI/ML solutions.",
                "I work with modern technologies including React, React Native, TypeScript, Node.js, Firebase, MongoDB, and also integrate machine learning models using Python frameworks like TensorFlow and scikit-learn.",
                "In 2023, I founded Techverse, a tech community that brings together developers and learners to share knowledge and grow together.",
                "I'm also a content creator, sharing tips and tutorials in Arabic to support and inspire the next generation of developers in the MENA region.",
              ].map((line, i) => (
                <Reveal key={i} delay={i * 0.1} as="p">
                  {line}
                </Reveal>
              ))}
              <Reveal delay={0.4}>
                <div className="flex flex-wrap gap-3">
                  {["build", "lead", "ship", "share"].map((t) => (
                    <span key={t} className="chip-lilac">{t}</span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* About Photo */}
            <Reveal delay={0.2}>
              <div className="relative mx-auto md:mx-0">
                <div className="absolute -inset-3 rounded-[1.5rem] bg-[color:var(--purple-deep)]/8 blur-xl" />
                <div className="relative overflow-hidden rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--card)]">
                  <img
                    src="/myphoto.jpg"
                    alt="Akram Said Seghir"
                    className="h-[360px] w-[300px] object-cover md:h-[420px] md:w-[320px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--purple-deep)]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="font-display text-lg text-white">Akram Said Seghir</div>
                    <div className="font-mono text-xs uppercase tracking-widest text-white/70">Software Engineer</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
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
              A growing library of shipped software, from web platforms to mobile apps and AI-powered solutions.
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
              Through Akram4Dev, I create content about software engineering, AI, startups, and technology — sharing tips and tutorials in Arabic to inspire developers across the MENA region.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-4">
              {[
                { i: Instagram, l: "Instagram", href: "https://instagram.com/akram4dev" },
                { i: Linkedin, l: "LinkedIn", href: "https://linkedin.com/in/akram-saidseghir/" },
                { i: Youtube, l: "YouTube", href: "#" },
                { i: Sparkles, l: "TikTok", href: "#" },
              ].map(({ i: Icon, l, href }) => (
                <a
                  key={l}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                href="mailto:akramsaidseghir26@gmail.com"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.4 }}
                className="btn-primary btn-primary-hover"
              >
                Let's Work Together <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="mailto:akramsaidseghir26@gmail.com"
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
              Software Engineer & Product Builder based in Algeria, Medea.
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
                ["Skills", "#skills"],
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
              {[
                { Icon: Github, href: "https://github.com/saidseghirakram" },
                { Icon: Linkedin, href: "https://linkedin.com/in/akram-saidseghir/" },
                { Icon: Instagram, href: "https://instagram.com/akram4dev" },
                { Icon: Youtube, href: "#" },
                { Icon: Sparkles, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--border)] text-[color:var(--warmgray)] transition-colors hover:border-[color:var(--purple)] hover:text-[color:var(--purple-deep)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="eyebrow mb-4">Contact</div>
            <div className="space-y-3">
              <a href="mailto:akramsaidseghir26@gmail.com" className="flex items-center gap-2 text-sm text-[color:var(--warmgray)] hover:text-[color:var(--purple-deep)]">
                <Mail className="h-4 w-4" />
                akramsaidseghir26@gmail.com
              </a>
              <p className="text-sm text-[color:var(--warmgray)]">Algeria, Medea</p>
            </div>
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
