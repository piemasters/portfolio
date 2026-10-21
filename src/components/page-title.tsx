import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function PageTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={twMerge("tracking-widest text-accent uppercase", className)}>{children}</p>;
}
