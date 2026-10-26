import { Link } from "@tanstack/react-router";
import { Tag } from "#/components/tag";
import type { Project } from "#/content/site";

export function ProjectList({
  projects,
  to,
}: {
  projects: readonly Project[];
  to: "/work/$slug" | "/projects/$slug";
}) {
  return (
    <ol className="border-b border-line">
      {projects.map((project) => (
        <li key={project.slug}>
          <Link
            to={to}
            params={{ slug: project.slug }}
            className="group grid grid-cols-[5rem_1fr] gap-x-5 gap-y-2 border-t border-line py-7 sm:grid-cols-[6rem_1fr_auto] sm:items-start sm:gap-x-8 sm:py-9"
          >
            <img
              src={project.thumbnail}
              alt=""
              width={480}
              height={480}
              loading="lazy"
              className="size-20 border border-line object-cover transition-colors group-hover:border-accent sm:size-24"
            />
            <span className="min-w-0">
              <span className="block font-serif text-3xl tracking-tight text-ink transition-colors group-hover:text-accent sm:text-4xl">
                {project.title}
              </span>
              <span className="mt-2 block max-w-xl text-base leading-relaxed text-muted">
                {project.summary}
              </span>
              <span className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </span>
            </span>
            <span className="col-start-2 text-sm text-muted sm:col-start-3 sm:row-start-1 sm:text-right">
              {project.year}
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
