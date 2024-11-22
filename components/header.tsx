"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeToggle from "@/components/theme-toggle";
import { NavLink } from "@/components/nav-link";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="backdrop: fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="container flex max-w-3xl items-center justify-between">
        <div>
          <Link href="/" className="font-serif text-2xl font-bold">
            DN
          </Link>
        </div>
        <ul className="sm flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10">
          <NavLink href="posts" active={pathname.includes("posts")} />
          <NavLink href="projects" active={pathname.includes("projects")} />
          <NavLink href="contact" active={pathname.includes("contact")} />
        </ul>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
