import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, ArrowUp, Trophy } from "lucide-react";
import { Grain } from "@/components/Grain";
import { Cursor } from "@/components/Cursor";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { WorkStackDeck } from "@/components/WorkStackDeck";
import { ProcessMap } from "@/components/ProcessMap";
import { GravityHero } from "@/components/GravityHero";
import { PageFooter } from "@/components/PageFooter";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Akram4Dev — Akram Said Seghir · Software Engineer" },
      {
        name: "description",
        content: "Software Engineer, Web, Mobile & AI/ML Developer from Algeria. Founder of Techverse. Building scalable products and technology experiences under Akram4Dev.",
      },
      { property: "og:title", content: "Akram4Dev — Software Engineer & Product Builder" },
      { property: "og:description", content: "I transform ideas into scalable digital products." },
    ],
  }),
});

function Home() {
  return (
    <div id="top" className="relative min-h-screen">
      <Grain />
      <Cursor />
      <Nav />

      {/* HERO */}
      <section className="relative h-screen overflow-hidden select-none">
        <GravityHero />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-8 pt-24 text-center">
          <Reveal>
            <div className="mb-6 flex items-center justify-center gap-2.5">
              <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-[color:var(--border)] shadow-sm">
                <img src="/myphoto.jpg" alt="Akram" className="h-full w-full object-cover" style={{ objectPosition: "50% 20%" }} />
              </div>
              <span className="font-mono text-sm text-[color:var(--warmgray)]">
                Hi, I'm <strong className="font-semibold text-[color:var(--ink)]">Akram</strong>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--border)] px-2.5 py-1 text-[0.6rem] font-mono uppercase tracking-widest text-[color:var(--warmgray)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                Available
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="display-h text-[clamp(2.8rem,7vw,6rem)] leading-[1.0]">
              I build products<br />
              that <em className="italic text-[color:var(--warmgray)]">scale</em><br />
              from idea to reality.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[color:var(--warmgray)] opacity-40">
            <span className="font-mono text-[0.6rem] uppercase tracking-widest">Scroll</span>
            <ArrowUp className="h-3.5 w-3.5 rotate-180 animate-bounce" />
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work">
        <WorkStackDeck />
      </section>

      {/* STATS */}
      <section className="border-b border-[color:var(--border)] py-16">
        <Reveal>
          <div className="mx-auto max-w-7xl grid gap-10 px-6 md:grid-cols-3">
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
                <div className="font-display text-5xl text-[color:var(--purple-deep)] md:text-6xl">{s.n}</div>
                <div className="mt-3 text-sm text-[color:var(--warmgray)]">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* STARTUP BUILDER */}
      <section>
        <ProcessMap />
      </section>

      <PageFooter />
    </div>
  );
}
