import { createFileRoute } from "@tanstack/react-router";
import { Grain } from "@/components/Grain";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { SkillsCloud } from "@/components/SkillsCloud";
import { PageFooter } from "@/components/PageFooter";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Akram Said Seghir" },
      {
        name: "description",
        content:
          "Software Engineer from Algeria. Builder of web, mobile and AI products. Founder of Techverse.",
      },
    ],
  }),
});

const TIMELINE = [
  {
    date: "2023 · 2025",
    role: "Master in System Information",
    place: "University Yahia Fares, Médéa",
    body: "Advanced studies in software engineering and system information — specialising in distributed systems, AI integration and product architecture.",
  },
  {
    date: "2023 · Present",
    role: "Founder & Lead Organiser",
    place: "Techverse",
    body: "Built a developer community in Algeria from scratch. Organise workshops, mentor junior engineers and run events that connect tech talent across the region.",
  },
  {
    date: "2021 · Present",
    role: "Freelance Software Engineer",
    place: "Remote",
    body: "Shipped full-stack web and mobile products for clients across MENA and Europe. Focused on React, React Native, Node.js and AI integrations — always aiming for real business impact.",
  },
  {
    date: "2020 · 2023",
    role: "Bachelor in System Information",
    place: "University Yahia Fares, Médéa",
    body: "Foundation in algorithms, data structures and software systems. Graduated with distinction and immediately moved into freelance and community work.",
  },
];

// placeholder images — user will replace with real photos
const PHOTOS = [
  "/myphoto.jpg",
  "/myphoto.jpg",
  "/myphoto.jpg",
  "/myphoto.jpg",
];

function AboutPage() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#fafafa" }}>
      <Grain />
      <Nav />

      {/* ── HERO INTRO ── */}
      <section className="mx-auto max-w-5xl px-6 pb-0 pt-36">
        <Reveal>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[color:var(--warmgray)]">
            (01 / 08) — About
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="display-h mt-5 text-[clamp(2.6rem,6vw,5.2rem)] leading-[1.0]">
            I'm Akram.<br />
            I build things<br />
            that <em className="italic text-[color:var(--warmgray)]">matter.</em>
          </h1>
        </Reveal>
      </section>

      {/* ── PHOTO STRIP ── */}
      <section className="mx-auto mt-16 max-w-5xl px-6">
        <Reveal delay={0.1}>
          <div className="flex items-end gap-4 overflow-hidden">
            {/* Main large photo */}
            <div
              className="relative shrink-0 overflow-hidden rounded-2xl"
              style={{ width: "clamp(200px,32vw,340px)", height: "clamp(260px,42vw,440px)" }}
            >
              <img
                src={PHOTOS[0]}
                alt="Akram"
                className="h-full w-full object-cover"
                style={{ objectPosition: "50% 20%" }}
              />
            </div>

            {/* Tall narrow */}
            <div
              className="relative shrink-0 overflow-hidden rounded-2xl"
              style={{ width: "clamp(130px,18vw,200px)", height: "clamp(300px,48vw,500px)" }}
            >
              <img
                src={PHOTOS[1]}
                alt=""
                className="h-full w-full object-cover"
                style={{ objectPosition: "60% 10%" }}
              />
            </div>

            {/* Short wide */}
            <div
              className="relative shrink-0 overflow-hidden rounded-2xl"
              style={{ width: "clamp(160px,22vw,260px)", height: "clamp(200px,30vw,320px)" }}
            >
              <img
                src={PHOTOS[2]}
                alt=""
                className="h-full w-full object-cover"
                style={{ objectPosition: "50% 30%" }}
              />
            </div>

            {/* Medium */}
            <div
              className="relative shrink-0 overflow-hidden rounded-2xl hidden md:block"
              style={{ width: "clamp(150px,20vw,240px)", height: "clamp(240px,36vw,380px)" }}
            >
              <img
                src={PHOTOS[3]}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── BIO TEXT ── */}
      <section className="mx-auto mt-20 max-w-3xl px-6 pb-24">
        <div className="space-y-10 border-t border-[color:var(--border)] pt-12">

          {[
            {
              label: "WHO I AM",
              text: "I'm a Software Engineer from Médéa, Algeria. I specialise in building web and mobile products — from idea to deployed reality. I work with React, React Native, TypeScript, Node.js and Python, and I love the gap where engineering meets product thinking.",
            },
            {
              label: "WHAT I DO",
              text: "I build full-stack applications, mobile apps and AI-powered tools. My clients get working software, not wireframes. I care deeply about performance, detail and the experience of using something that actually works.",
            },
            {
              label: "MY PROCESS",
              text: "It usually starts with a lot of questions. I try to understand the real problem before writing a single line. Then I move fast — prototype, test, ship, iterate. I prefer working in tight loops with clear feedback over long planning phases.",
            },
            {
              label: "WHEN I'M NOT CODING",
              text: "You'll find me organising events for Techverse, creating content in Arabic for developers across MENA, planning something ambitious, or reading about startups and technology.",
            },
          ].map(({ label, text }, i) => (
            <Reveal key={label} delay={i * 0.06}>
              <div className="grid gap-4 md:grid-cols-[180px_1fr]">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[color:var(--purple-deep)] pt-1 shrink-0">
                  {label}
                </p>
                <p className="text-[1rem] leading-[1.75] text-[color:var(--ink)]/75">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="border-t border-[color:var(--border)]">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[color:var(--warmgray)]">
              (02 / 08) — Experience
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-h mt-5 text-[clamp(2rem,4.5vw,4rem)]">
              A working <em className="italic text-[color:var(--warmgray)]">timeline.</em>
            </h2>
          </Reveal>

          <div className="mt-16 divide-y divide-[color:var(--border)]">
            {TIMELINE.map((t, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="group grid gap-6 py-10 md:grid-cols-[200px_1fr] md:gap-16 md:py-14">
                  <div className="flex items-start justify-between md:flex-col md:justify-start md:gap-2">
                    <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[color:var(--purple-deep)]">
                      {t.date}
                    </span>
                    <span className="font-mono text-[0.6rem] text-[color:var(--warmgray)]/50 md:mt-1">
                      {String(i + 1).padStart(2, "0")} / {String(TIMELINE.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3
                        className="font-display font-medium leading-tight text-[color:var(--ink)] transition-colors duration-300 group-hover:text-[color:var(--purple-deep)]"
                        style={{ fontSize: "clamp(1.3rem,2.5vw,1.9rem)" }}
                      >
                        {t.role}
                      </h3>
                      <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[color:var(--warmgray)]/60">
                        {t.place}
                      </span>
                    </div>
                    <p className="mt-3 max-w-2xl text-[0.93rem] leading-relaxed text-[color:var(--warmgray)]">
                      {t.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLKIT ── */}
      <section id="toolkit" className="border-t border-[color:var(--border)]">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[color:var(--warmgray)]">
              (04 / 08) — Toolkit
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-h mt-5 text-[clamp(2rem,4.5vw,4rem)]">
              An interactive ecosystem<br />
              of tools I <em className="italic text-[color:var(--warmgray)]">build with.</em>
            </h2>
          </Reveal>
          <div className="mt-16">
            <SkillsCloud />
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
