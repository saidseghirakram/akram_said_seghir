import { ScrollStackDeck, type ProjectItem } from "@/components/scroll-stack-deck";
import { PROJECTS } from "@/data/projects";

// Warm cream-tinted accent per project
const TINTS: Record<string, string> = {
  elquran: "#E8F3EE",
  fennec: "#EAE5F7",
  "psych-ai": "#EDE8F9",
  "dashboard-management": "#E5EDFA",
  paintiro: "#F9EAE6",
  "driver-app": "#EAE5F7",
  devfest: "#E5EDFA",
  trips: "#E5F3EE",
  athar: "#E2F2ED",
};

const DECK_ITEMS: ProjectItem[] = PROJECTS.filter((p) => !!p.coverImage).map((p) => ({
  id: p.id,
  tabTitle: `${p.n} · ${p.meta?.year ?? p.category}`,
  title: p.title,
  description: p.impact,
  image: p.coverImage!,
  link: `/projects/${p.id}`,
  demo: p.live,
  color: TINTS[p.id] ?? "#EEE8F8",
  metrics: [p.meta?.role, p.meta?.platform, ...p.stack.slice(0, 3)].filter(Boolean) as string[],
  images: [`/mockups/${p.id}.png`],
}));

export function WorkStackDeck() {
  return (
    <ScrollStackDeck
      projects={DECK_ITEMS}
      title=""
      subtitle=""
      scrollIndicatorText=""
      showFooter={false}
      enableLenis={false}
    />
  );
}
