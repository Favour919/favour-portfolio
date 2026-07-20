import { TerminalSquare } from "lucide-react";

const links = [
  { href: "#skills", label: "skills" },
  { href: "#journey", label: "journey" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 border-b border-edge bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm text-gold"
        >
          <TerminalSquare size={16} />
          Dev.favour
        </a>
        <div className="hidden gap-7 font-mono text-sm text-dim sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-ink focus-visible:text-ink focus-visible:outline-none"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
