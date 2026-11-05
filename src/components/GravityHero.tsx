import { useEffect, useRef } from "react";
import {
  Code2, Cpu, Layers, Server, Zap, Smartphone, Globe, Sparkles,
  Rocket, Star, Terminal, Database, GitBranch, Flame, Bot,
} from "lucide-react";

type PillDef = {
  label?: string;      // omit for icon-only circles
  icon: React.ElementType;
  bg: string;
  fg: string;
  w: number;
  h: number;
};

const PILLS: PillDef[] = [
  // ── text pills ──────────────────────────────────────────────────────
  { label: "FULL-STACK DEV", icon: Code2,       bg: "#F7905A", fg: "#fff",    w: 200, h: 48 },
  { label: "REACT NATIVE",   icon: Smartphone,  bg: "#86E48E", fg: "#0d2010", w: 185, h: 48 },
  { label: "TYPESCRIPT",     icon: Globe,       bg: "#F7D654", fg: "#3a2900", w: 175, h: 48 },
  { label: "AI & ML",        icon: Sparkles,    bg: "#93C5FD", fg: "#0a2050", w: 148, h: 48 },
  { label: "SAAS BUILDER",   icon: Layers,      bg: "#6ED6C8", fg: "#062320", w: 185, h: 48 },
  { label: "MOBILE APPS",    icon: Cpu,         bg: "#FDA4AF", fg: "#3d0010", w: 178, h: 48 },
  { label: "NODE.JS",        icon: Server,      bg: "#C4B5FD", fg: "#2d1b6b", w: 148, h: 48 },
  { label: "OPEN SOURCE",    icon: Code2,       bg: "#e9d8fd", fg: "#44337a", w: 178, h: 48 },
  { label: "SCALABLE SYS",   icon: Zap,         bg: "#6EE7B7", fg: "#0a2d1e", w: 182, h: 48 },
  // ── icon-only circles ───────────────────────────────────────────────
  { icon: Rocket,     bg: "#FF6B6B", fg: "#fff",    w: 56, h: 56 },
  { icon: Star,       bg: "#FFD93D", fg: "#3a2900", w: 56, h: 56 },
  { icon: Terminal,   bg: "#1a1a2e", fg: "#6EE7B7", w: 56, h: 56 },
  { icon: Database,   bg: "#4ECDC4", fg: "#062320", w: 56, h: 56 },
  { icon: GitBranch,  bg: "#A8E6CF", fg: "#0a2d1e", w: 56, h: 56 },
  { icon: Flame,      bg: "#FF8C42", fg: "#fff",    w: 56, h: 56 },
  { icon: Bot,        bg: "#7C83FD", fg: "#fff",    w: 56, h: 56 },
];

export function GravityHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const cleanupRef   = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const container = containerRef.current;
    if (!container) return;

    import("matter-js").then((Matter) => {
      const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, World } = Matter;

      const W = container.offsetWidth;
      const H = container.offsetHeight;

      const engine  = Engine.create();
      engine.gravity.y = 1.8;

      const world = engine.world;

      // Static boundary walls — floor raised 20px from bottom so pills are visible inside hero
      const thick = 60;
      const floorY = H - 20; // floor sits 20px from section bottom so pills are fully visible
      Composite.add(world, [
        Bodies.rectangle(W / 2,            floorY + thick / 2, W * 2, thick, { isStatic: true, friction: 1 }),
        Bodies.rectangle(-thick / 2,        H / 2,              thick, H * 3, { isStatic: true }),
        Bodies.rectangle(W + thick / 2,     H / 2,              thick, H * 3, { isStatic: true }),
      ]);

      // On mobile show fewer pills so they don't crowd the small screen
      const isMobile = W < 768;
      const activePills = isMobile ? PILLS.slice(0, 6) : PILLS;

      // Pill physics bodies — random x, staggered y so they fall one after another
      const bodies = activePills.map((pill, i) => {
        const x     = pill.w / 2 + Math.random() * (W - pill.w); // fully random, avoid wall overlap
        const y     = -(i * 90) - 60;                            // staggered entry times
        const angle = (Math.random() - 0.5) * 0.8;

        return Bodies.rectangle(x, y, pill.w, pill.h, {
          restitution: 0.3,
          friction:    0.9,
          frictionAir: 0.025,
          chamfer:     { radius: pill.h / 2 },
          angle,
          label: `pill-${i}`,
        });
      });
      Composite.add(world, bodies);

      // Attach mouse to the SECTION (parent of container) so events bubble through
      // from any child element regardless of z-index stacking — this lets users
      // drag pills even when other DOM elements are visually on top.
      const sectionEl = container.parentElement ?? container;
      const mouse = Mouse.create(sectionEl);
      // No offset needed: container is absolute inset-0, same origin as section
      const mc = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.15, render: { visible: false } },
      });
      Composite.add(world, mc);

      // Strip ALL scroll-blocking listeners Matter.js adds:
      // wheel calls event.preventDefault() with passive:false → blocks desktop scroll
      // touch* with passive:false → blocks touch/trackpad scroll
      const m = mouse as any;
      sectionEl.removeEventListener("wheel",      m.mousewheel);
      sectionEl.removeEventListener("mousewheel", m.mousewheel);
      sectionEl.removeEventListener("DOMMouseScroll", m.mousewheel);
      sectionEl.removeEventListener("touchstart", m.mousedown);
      sectionEl.removeEventListener("touchmove",  m.mousemove);
      sectionEl.removeEventListener("touchend",   m.mouseup);

      Events.on(mc, "startdrag", () => { sectionEl.style.cursor = "grabbing"; });
      Events.on(mc, "enddrag",   () => { sectionEl.style.cursor = ""; });

      // Sync DOM positions from physics bodies each step; make them visible on first update
      Events.on(engine, "afterUpdate", () => {
        for (let i = 0; i < bodies.length; i++) {
          const el = pillRefs.current[i];
          if (!el) continue;
          const { x, y } = bodies[i].position;
          const a         = bodies[i].angle;
          el.style.visibility = "visible";
          el.style.left       = `${x}px`;
          el.style.top        = `${y}px`;
          el.style.transform  = `translate(-50%,-50%) rotate(${a}rad)`;
        }
      });

      const runner = Runner.create();
      Runner.run(runner, engine);

      cleanupRef.current = () => {
        Runner.stop(runner);
        Events.off(engine, "afterUpdate");
        World.clear(world, false);
        Engine.clear(engine);
        sectionEl.style.cursor = "";
      };
    });

    return () => { cleanupRef.current?.(); };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      style={{ zIndex: 15, pointerEvents: "none" }}
    >
      {PILLS.map((pill, i) => {
        const Icon = pill.icon;
        const isCircle = !pill.label;
        return (
          <div
            key={i}
            ref={(el) => { pillRefs.current[i] = el; }}
            style={{
              position:        "absolute",
              left:            0,
              top:             0,
              width:           pill.w,
              height:          pill.h,
              borderRadius:    pill.h / 2,
              backgroundColor: pill.bg,
              color:           pill.fg,
              padding:         isCircle ? 0 : "0 18px",
              display:         "flex",
              alignItems:      "center",
              justifyContent:  "center",
              gap:             isCircle ? 0 : "8px",
              visibility:      "hidden",
              pointerEvents:   "none",
              userSelect:      "none",
              willChange:      "transform",
              boxShadow:       "0 4px 20px -4px rgba(0,0,0,0.18)",
              whiteSpace:      "nowrap",
              fontFamily:      "ui-monospace, 'Cascadia Code', monospace",
              fontSize:        "0.72rem",
              fontWeight:      600,
              textTransform:   "uppercase",
              letterSpacing:   "0.08em",
            }}
          >
            {!isCircle && <span>{pill.label}</span>}
            <Icon style={{ width: isCircle ? 22 : 14, height: isCircle ? 22 : 14, flexShrink: 0 }} />
          </div>
        );
      })}
    </div>
  );
}
