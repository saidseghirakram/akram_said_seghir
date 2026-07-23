const LINKS = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Skills", "#skills"],
  ["Services", "#services"],
  ["Contact", "#contact"],
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-[color:var(--cream)]/50 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl tracking-tight text-[color:var(--ink)]">
          Akram<span className="text-[color:var(--purple-deep)]">4</span>Dev
        </a>
        <nav className="hidden gap-8 md:flex">
          {LINKS.map(([l, h]) => (
            <a
              key={h}
              href={h}
              className="text-sm text-[color:var(--warmgray)] transition-colors hover:text-[color:var(--purple-deep)]"
            >
              {l}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex chip-lilac">
          Available for work
        </a>
      </div>
    </header>
  );
}
