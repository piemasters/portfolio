import type { ReactNode } from "react";

export function ExternalLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http://") || href.startsWith("https://");

  return (
    <a href={href} className={className} {...(external ? { rel: "noreferrer" } : {})}>
      {children}
    </a>
  );
}
