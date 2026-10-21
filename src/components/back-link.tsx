import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";
import { LeftArrow } from "#/components/left-arrow";

export function BackLink({
  children,
  className,
  hash,
  to,
}: {
  children: ReactNode;
  className?: string;
  hash?: string;
  to: "/";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const stickyTop = Number.parseFloat(getComputedStyle(el).top);
      const next = el.getBoundingClientRect().top <= stickyTop + 1;
      setStuck((current) => (current === next ? current : next));
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <span
      ref={ref}
      className={twMerge(
        "group sticky top-24 z-10 -ml-4 inline-flex w-fit rounded-full border border-transparent motion-safe:transition-[background-color,border-color,translate] motion-safe:duration-200 motion-safe:ease-out",
        stuck && "border-line bg-paper motion-safe:hover:-translate-x-1 hover:border-accent",
        className,
      )}
    >
      <Link to={to} hash={hash} className="inline-flex items-center gap-2 px-4 py-2">
        <LeftArrow className={stuck ? "motion-safe:group-hover:-translate-x-1.5" : undefined} />
        <span
          className={twMerge(
            "transition-[color,text-underline-offset] duration-150 ease-out group-hover:text-accent",
            stuck
              ? "no-underline"
              : "underline underline-offset-4 motion-safe:group-hover:underline-offset-8",
          )}
        >
          {children}
        </span>
      </Link>
    </span>
  );
}
