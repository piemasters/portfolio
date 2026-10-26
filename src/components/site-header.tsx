import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "#/components/theme-toggle";
import { site } from "#/content/site";

const links = [
  { hash: "work", label: "Work" },
  { hash: "projects", label: "Projects" },
  { hash: "about", label: "About" },
  { hash: "skills", label: "Skills" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link to="/" className="font-serif text-lg tracking-tight text-ink">
          {site.name}
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <nav aria-label="Sections" className="flex items-center gap-3 text-sm sm:gap-5">
            {links.map((link) => (
              <Link
                key={link.hash}
                to="/"
                hash={link.hash}
                activeOptions={{ includeHash: true }}
                className="text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
