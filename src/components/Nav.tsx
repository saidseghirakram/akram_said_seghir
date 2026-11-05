import { User, FolderOpen, Zap, Wrench, Mail } from "lucide-react";

const LINKS = [
  { label: "About",    href: "#about",    icon: User },
  { label: "Work",     href: "#work",     icon: FolderOpen },
  { label: "Skills",   href: "#skills",   icon: Zap },
  { label: "Services", href: "#services", icon: Wrench },
  { label: "Contact",  href: "#contact",  icon: Mail },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5">
      <div className="flex items-center gap-1 rounded-full border border-[color:var(--border)] bg-[color:var(--cream)]/90 px-2 py-2 shadow-md backdrop-blur-xl">
        {/* Nav links — icons always visible, text hidden on mobile */}
        <nav className="flex items-center">
          {LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-1.5 rounded-full px-2.5 py-2 md:px-3 text-sm text-[color:var(--warmgray)] transition-colors hover:bg-[color:var(--border)] hover:text-[color:var(--ink)]"
            >
              <Icon className="h-3.5 w-3.5 shrink-0" />
              <span className="hidden md:inline">{label}</span>
            </a>
          ))}
        </nav>

        {/* CTA — circle mail button */}
        <a
          href="#contact"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--purple-deep)] text-white transition-opacity hover:opacity-90"
          aria-label="Hire me"
        >
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
