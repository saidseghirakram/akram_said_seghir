import { useMemo } from "react";
import { Search, Home, Heart, User, Plus, Star, Play, MapPin } from "lucide-react";

type Device = "mobile" | "browser";

type MockScreenProps = {
  device?: Device;
  seed?: number;
  tone?: string;
  accent?: string;
  animated?: boolean;
  className?: string;
};

function hashSeed(n: number) {
  let x = n >>> 0;
  x = Math.imul(x ^ (x >>> 16), 0x45d9f3b);
  x = Math.imul(x ^ (x >>> 16), 0x45d9f3b);
  x = (x ^ (x >>> 13)) >>> 0;
  return x;
}

function makeRng(seed: number) {
  let a = hashSeed(seed);
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const ROWS = "rgba(26,22,20,0.22)";
const ROWS_SOFT = "rgba(26,22,20,0.12)";
const LIGHT = "rgba(255,255,255,0.85)";
const LIGHT_SOFT = "rgba(255,255,255,0.35)";

function Bars({
  n,
  widths,
  color,
  thin,
}: {
  n: number;
  widths: string[];
  color: string;
  thin?: boolean;
}) {
  return (
    <div className="space-y-2">
      {Array.from({ length: n }).map((_, i) => (
        <div
          key={i}
          className="rounded-full"
          style={{
            height: thin ? 6 : 10,
            width: widths[i % widths.length],
            background: color,
          }}
        />
      ))}
    </div>
  );
}

const PALETTES = [
  { tone: "linear-gradient(165deg,#5b21b6 0%,#7c3aed 58%,#e9d8fd 100%)", accent: "#7c3aed" },
  { tone: "linear-gradient(165deg,#6d28d9 0%,#a855f7 60%,#f6f1e9 100%)", accent: "#a855f7" },
  { tone: "linear-gradient(165deg,#4c1d95 0%,#8b5cf6 55%,#e9d8fd 100%)", accent: "#8b5cf6" },
  { tone: "linear-gradient(165deg,#5b21b6 0%,#9333ea 60%,#f3e8ff 100%)", accent: "#9333ea" },
  { tone: "linear-gradient(165deg,#3b0764 0%,#7c3aed 50%,#d8b4fe 100%)", accent: "#7c3aed" },
  { tone: "linear-gradient(165deg,#6d28d9 0%,#c026d3 55%,#f6f1e9 100%)", accent: "#c026d3" },
  { tone: "linear-gradient(165deg,#059669 0%,#10b981 55%,#d1fae5 100%)", accent: "#059669" },
  { tone: "linear-gradient(165deg,#1d4ed8 0%,#6366f1 55%,#dbeafe 100%)", accent: "#6366f1" },
  { tone: "linear-gradient(165deg,#111827 0%,#374151 50%,#e5e7eb 100%)", accent: "#6366f1" },
  { tone: "linear-gradient(165deg,#be185d 0%,#ec4899 55%,#fce7f3 100%)", accent: "#db2777" },
];

function MockScreen({
  device = "mobile",
  seed = 1,
  tone,
  accent,
  animated = false,
  className,
}: MockScreenProps) {
  const palette = PALETTES[hashSeed(seed) % PALETTES.length];
  const bg = tone ?? palette.tone;
  const ac = accent ?? palette.accent;
  const rand = useMemo(() => makeRng(seed), [seed]);
  const r = () => rand();

  const startHour = 7 + Math.floor(r() * 13);
  const mins = Math.floor(r() * 60)
    .toString()
    .padStart(2, "0");
  const clock = `${startHour}:${mins}`;

  const islandW = 90 + Math.floor(r() * 30);

  if (device === "browser") {
    const url = [
      "fennec.travel",
      "elquran.app",
      "trips-bladi.dz",
      "devfest.medea",
      "psychpanel.ai",
    ][Math.floor(r() * 5)];
    return (
      <div className={`relative overflow-hidden rounded-[1.25rem] ${className ?? ""}`}>
        {/* Chrome */}
        <div className="flex items-center gap-2.5 border-b border-black/10 bg-[#1a1614] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-3 flex flex-1 items-center gap-2 self-stretch rounded-md bg-white/10 px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            <span className="text-[10px] tracking-tight text-white/70">{url}</span>
          </div>
        </div>
        {/* Body */}
        <div className="flex" style={{ background: bg, minHeight: "100%" }}>
          {/* Sidebar */}
          <div className="hidden w-[21%] flex-col gap-2.5 border-r border-black/10 p-3 sm:flex">
            <div className="mb-1 h-3.5 w-3/5 rounded-md" style={{ background: LIGHT }} />
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-md px-2 py-1.5"
                style={{ background: i === 0 ? LIGHT_SOFT : "transparent" }}
              >
                <span
                  className="h-2 w-2 rounded-sm"
                  style={{ background: i === 0 ? LIGHT : LIGHT_SOFT }}
                />
                <span
                  className="h-2 flex-1 rounded-full"
                  style={{ background: i === 0 ? LIGHT : LIGHT_SOFT }}
                />
              </div>
            ))}
          </div>
          {/* Main */}
          <div className="flex-1 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4">
              <span
                className="h-3 w-24 rounded-md"
                style={{ background: LIGHT, boxShadow: "0 1px 0 rgba(0,0,0,0.08)" }}
              />
              <span className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: LIGHT_SOFT }}
                  />
                ))}
              </span>
            </div>
            {/* Hero banner */}
            <div
              className="mt-4 overflow-hidden rounded-xl"
              style={{ background: `linear-gradient(120deg, ${ac}, rgba(255,255,255,0.28))` }}
            >
              <div className="relative p-4">
                <div className="h-2 w-1/2 rounded-full bg-white/90" />
                <div className="mt-2 h-1.5 w-2/5 rounded-full bg-white/50" />
                <div className="mt-3 h-5 w-14 rounded-full bg-white/85" />
              </div>
            </div>
            {/* Cards */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-lg p-2.5"
                  style={{ background: LIGHT_SOFT, border: "1px solid rgba(255,255,255,0.25)" }}
                >
                  <div
                    className="mb-2 h-6 w-6 rounded-md"
                    style={{ background: "rgba(255,255,255,0.5)" }}
                  />
                  <Bars n={2} widths={["55%", "80%"]} color={LIGHT} thin />
                </div>
              ))}
            </div>
            {/* Rows */}
            {animated ? (
              <div className="relative mt-4 overflow-hidden">
                <div className="mock-anim flex gap-3 w-max">
                  {Array.from({ length: 4 }).map((set) =>
                    Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={`${set}-${i}`}
                        className="flex w-28 shrink-0 items-center gap-2 rounded-lg p-2"
                        style={{
                          background: LIGHT_SOFT,
                          border: "1px solid rgba(255,255,255,0.25)",
                        }}
                      >
                        <span className="h-6 w-6 shrink-0 rounded-md" style={{ background: ac }} />
                        <Bars n={2} widths={["70%", "90%"]} color={LIGHT} thin />
                      </div>
                    )),
                  )}
                </div>
              </div>
            ) : (
              <div className="mt-4 space-y-2.5">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg p-2"
                    style={{ background: LIGHT_SOFT, border: "1px solid rgba(255,255,255,0.25)" }}
                  >
                    <span
                      className="h-7 w-7 shrink-0 rounded-md"
                      style={{
                        background:
                          i % 2 === 0
                            ? `linear-gradient(135deg, ${ac}, ${ac}cc)`
                            : "rgba(255,255,255,0.4)",
                      }}
                    />
                    <Bars n={2} widths={["80%", "55%"]} color={LIGHT} thin />
                    <Star className="ml-auto h-3.5 w-3.5" style={{ color: LIGHT_SOFT }} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Watermark index */}
        <span className="pointer-events-none absolute right-3 top-3 font-mono text-[10px] font-medium tracking-widest text-white/60">
          {String(seed).padStart(2, "0")}
        </span>
      </div>
    );
  }

  const showGrid = r() > 0.5;

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-[#1a1614]/20 bg-[#1a1614] p-2 shadow-[0_30px_80px_-30px_rgba(91,33,182,0.45)] ${className ?? ""}`}
    >
      {/* Screen */}
      <div
        className="relative aspect-[9/19] overflow-hidden rounded-[1.55rem]"
        style={{ background: bg }}
      >
        {/* Dynamic island */}
        <div
          className="absolute left-1/2 top-2 z-20 h-[18px] -translate-x-1/2 rounded-full bg-[#140f0c]"
          style={{ width: islandW }}
        />
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-2.5 text-white">
          <span className="font-semibold tracking-tight text-[11px] drop-shadow">{clock}</span>
          <span className="flex items-center gap-1.5">
            <span className="flex items-end gap-[2px]">
              {[4, 6, 8].map((h, i) => (
                <span key={i} className="w-[3px] rounded-sm bg-white" style={{ height: h }} />
              ))}
            </span>
            <span className="rounded-[3px] border border-white p-[2px]">
              <span className="block h-[6px] w-2.5 rounded-[1px] bg-white" />
            </span>
          </span>
        </div>

        {/* App header */}
        <div className="mt-5 flex items-center justify-between px-5">
          <div className="flex items-center gap-2">
            <span
              className="grid h-7 w-7 place-items-center rounded-lg"
              style={{ background: LIGHT }}
            >
              <span className="h-2.5 w-2.5 rounded-sm" style={{ background: ac }} />
            </span>
            <Bars n={1} widths={["72px"]} color={LIGHT} thin />
          </div>
          <span
            className="h-7 w-7 rounded-full"
            style={{ background: LIGHT_SOFT, border: "1px solid rgba(255,255,255,0.3)" }}
          />
        </div>

        {/* Section title */}
        <div className="px-5 pt-4">
          <Bars n={2} widths={["55%", "88%"]} color={LIGHT} />
        </div>

        {/* Search pill */}
        <div
          className="mx-5 mt-4 flex items-center gap-2 rounded-full px-3.5 py-2.5"
          style={{
            background: "rgba(255,255,255,0.28)",
            border: "1px solid rgba(255,255,255,0.35)",
          }}
        >
          <Search className="h-3.5 w-3.5 text-white" />
          <span className="h-2 w-2/3 rounded-full bg-white/70" />
        </div>

        {/* Hero banner */}
        <div
          className="relative mx-5 mt-4 overflow-hidden rounded-2xl p-4"
          style={{ background: `linear-gradient(130deg, ${ac}, rgba(255,255,255,0.4))` }}
        >
          <MapPin className="absolute right-3 top-3 h-4 w-4 text-white/70" />
          <div className="h-2 w-1/2 rounded-full bg-white/95" />
          <div className="mt-2 h-1.5 w-3/5 rounded-full bg-white/60" />
          <div className="mt-3 flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/90">
              <Play className="ml-0.5 h-3 w-3" style={{ color: ac }} />
            </span>
            <span className="h-1.5 w-12 rounded-full bg-white/70" />
          </div>
        </div>

        {/* Quick cards */}
        <div className="mx-5 mt-4 grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-xl p-2.5"
              style={{
                background: "rgba(255,255,255,0.24)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <Bars n={2} widths={["80%", "55%"]} color={LIGHT} thin />
            </div>
          ))}
        </div>

        {/* List / Grid */}
        {showGrid ? (
          <div className="mx-5 mt-4 grid grid-cols-2 gap-2.5">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-xl p-2.5"
                style={{
                  background: "rgba(255,255,255,0.24)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                <div
                  className="mb-2 h-12 w-full rounded-lg"
                  style={{
                    background:
                      i % 2 === 0
                        ? `linear-gradient(135deg, ${ac}, ${ac}b8)`
                        : "rgba(255,255,255,0.45)",
                  }}
                />
                <Bars n={2} widths={["75%", "55%"]} color={LIGHT} thin />
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-5 mt-4 space-y-2.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl p-2"
                style={{
                  background: "rgba(255,255,255,0.22)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                <span
                  className="h-9 w-9 shrink-0 rounded-lg"
                  style={{
                    background:
                      i % 2 === 0
                        ? `linear-gradient(135deg, ${ac}, ${ac}b8)`
                        : "rgba(255,255,255,0.45)",
                  }}
                />
                <Bars n={2} widths={["85%", "60%"]} color={LIGHT} thin />
              </div>
            ))}
          </div>
        )}

        {/* Bottom nav */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-white/20 px-4 pb-2 pt-2.5">
          <Home className="h-4 w-4 text-white" />
          <Search className="h-4 w-4 text-white/60" />
          <span
            className="-mt-5 grid h-10 w-10 place-items-center rounded-full"
            style={{ background: LIGHT, boxShadow: "0 8px 20px -6px rgba(0,0,0,0.35)" }}
          >
            <Plus className="h-5 w-5" style={{ color: ac }} />
          </span>
          <Heart className="h-4 w-4 text-white/60" />
          <User className="h-4 w-4 text-white/60" />
        </div>

        {/* watermark */}
        <span className="pointer-events-none absolute right-3 top-9 z-10 font-mono text-[9px] font-medium tracking-widest text-white/70">
          {String(seed).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

export { MockScreen };
