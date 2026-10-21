import { twMerge } from "tailwind-merge";

export function LeftArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={twMerge(
        "size-4 motion-safe:transition-transform motion-safe:group-hover:-translate-x-0.5",
        className,
      )}
    >
      <path
        d="M10 3 5 8l5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
