import Link from "next/link";

import { cn } from "@/lib/utils";

type NavLinkType = { href: string; name?: string; active: boolean };
export const NavLink = ({ href, name, active }: NavLinkType) => {
  return (
    <li
      className={cn("transition-colors hover:text-foreground", {
        "font-semibold text-primary": active,
      })}
    >
      <Link className="capitalize" href={`/${href}`}>
        {name || href}
      </Link>
    </li>
  );
};
