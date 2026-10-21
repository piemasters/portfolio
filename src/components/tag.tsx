import { twMerge } from "tailwind-merge";
import { skillTone } from "#/content/site";

export function Tag({ tag, className }: { tag: string; className?: string }) {
  return (
    <span
      className={twMerge(
        "inline-block border border-line border-l-2 px-3 py-1.5 text-xs tracking-[0.16em] text-ink uppercase",
        skillTone(tag) === "concept" ? "border-l-concept" : "border-l-accent",
        className,
      )}
    >
      {tag}
    </span>
  );
}
