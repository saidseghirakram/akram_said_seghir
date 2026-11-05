// Text rides a sine-wave SVG path — no vertical bobbing, the path itself is the wave.

const PERIOD = 640;   // px per wave cycle
const CY     = 90;    // vertical centre
const AMP    = 46;    // amplitude ± from centre
const CYCLES = 10;    // total wave cycles → width = 6400px
const SVG_W  = PERIOD * CYCLES;  // 6400
const SVG_H  = CY * 2;           // 180

/** Build a smooth sine approximation with cubic bezier segments */
function buildWavePath(): string {
  let d = `M 0,${CY}`;
  for (let i = 0; i < CYCLES; i++) {
    const x = i * PERIOD;
    // Up-arc (crest)
    d += ` C ${x + PERIOD * 0.125},${CY - AMP} ${x + PERIOD * 0.375},${CY - AMP} ${x + PERIOD * 0.5},${CY}`;
    // Down-arc (trough)
    d += ` C ${x + PERIOD * 0.625},${CY + AMP} ${x + PERIOD * 0.875},${CY + AMP} ${x + PERIOD},${CY}`;
  }
  return d;
}

const WAVE_PATH = buildWavePath();

// Content that fills ~half the path length so the -50% translate loops seamlessly
const LABEL = "Web Applications  ✦  Mobile Apps  ✦  AI / ML Solutions  ✦  SaaS Products  ✦  Startup MVP  ✦  Tech Consulting  ✦  ";
const CONTENT = LABEL.repeat(5); // repeat enough to fill 6400px

export function ServicesMarquee() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: SVG_H }}
    >
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[#fafafa] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#fafafa] to-transparent" />

      {/* scrolling SVG */}
      <svg
        width={SVG_W}
        height={SVG_H}
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: "block",
          animation: "marquee-left 44s linear infinite",
          willChange: "transform",
        }}
      >
        <defs>
          {/* invisible path the text rides on */}
          <path id="svc-wave" d={WAVE_PATH} fill="none" />
        </defs>

        {/* text riding the wave */}
        <text
          fontFamily="Fraunces, ui-serif, Georgia, serif"
          fontSize="52"
          fontWeight="500"
          letterSpacing="-0.5"
          fill="var(--ink)"
        >
          <textPath href="#svc-wave" startOffset="0">
            {CONTENT}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
