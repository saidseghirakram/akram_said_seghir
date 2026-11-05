import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";
import { User, FolderOpen, Mail } from "lucide-react";

type NavLink = { label: string; icon: React.ElementType; href: string; exact?: boolean };

const LINKS: NavLink[] = [
  { label: "About",   icon: User,       href: "/about" },
  { label: "Work",    icon: FolderOpen, href: "/#work" },
  { label: "Contact", icon: Mail,       href: "/#contact" },
];

function NavItem({ link }: { link: NavLink }) {
  const router = useRouterState();
  const base = link.href.split("#")[0];
  const isActive = base.length > 1 && router.location.pathname === base;

  const inner = (
    <>
      <link.icon className="h-3.5 w-3.5 shrink-0" />
      <span className="hidden md:inline">{link.label}</span>
    </>
  );

  const cls = [
    "flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-150",
    isActive
      ? "bg-[color:var(--purple-deep)] text-white"
      : "text-[color:var(--warmgray)] hover:bg-[color:var(--border)] hover:text-[color:var(--ink)]",
  ].join(" ");

  const isHash = link.href.startsWith("/#");

  return isHash ? (
    <a href={link.href} className={cls}>{inner}</a>
  ) : (
    <Link to={link.href} className={cls}>{inner}</Link>
  );
}

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5">
      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-1 rounded-full border border-[color:var(--border)] bg-[color:var(--background)]/90 px-2 py-2 shadow-sm backdrop-blur-xl"
      >
        {/* Avatar */}
        <Link
          to="/"
          className="mr-1 h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-[color:var(--border)] transition-opacity hover:opacity-80"
          aria-label="Home"
        >
          <img
            src="/myphoto.jpg"
            alt="Akram"
            className="h-full w-full object-cover"
            style={{ objectPosition: "50% 20%" }}
          />
        </Link>

        {/* Links */}
        <nav className="flex items-center gap-0.5">
          {LINKS.map((link) => (
            <NavItem key={link.href} link={link} />
          ))}
        </nav>

        {/* CTA */}
        <a
          href="mailto:akramsaidseghir26@gmail.com"
          className="ml-1 flex h-9 items-center justify-center gap-2 rounded-full bg-[color:var(--purple-deep)] px-4 text-sm font-medium text-white transition-all duration-200 hover:bg-[color:var(--purple)] hover:scale-105 active:scale-95"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          <span className="hidden md:inline">Hire me</span>
        </a>
      </motion.div>
    </header>
  );
}
