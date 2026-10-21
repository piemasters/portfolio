import type { ReactNode } from "react";

export function Page({ children }: { children: ReactNode }) {
  return <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">{children}</main>;
}
