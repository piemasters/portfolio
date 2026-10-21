import { twMerge } from "tailwind-merge";
import { site } from "#/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div
        className={twMerge(
          "mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted",
          "sm:flex-row sm:items-center sm:justify-between sm:px-8",
        )}
      >
        <p>
          {site.name}
          <span aria-hidden="true"> · </span>
          {site.location}
        </p>
      </div>
    </footer>
  );
}
