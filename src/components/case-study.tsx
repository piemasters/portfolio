import { BackLink } from "#/components/back-link";
import { ExternalLink } from "#/components/external-link";
import { Page } from "#/components/page";
import { PageTitle } from "#/components/page-title";
import { Tag } from "#/components/tag";
import type { Project } from "#/content/site";

export function CaseStudy({
  project,
  back,
}: {
  project: Project;
  back: { hash: "work" | "projects"; label: string };
}) {
  return (
    <Page>
      <BackLink to="/" hash={back.hash} className="text-sm">
        {back.label}
      </BackLink>
      <img
        src={project.banner}
        alt=""
        width={1600}
        height={900}
        fetchPriority="high"
        className="mt-6 h-52 w-full border border-line object-cover sm:mt-8 sm:h-80 lg:h-104"
      />
      <PageTitle className="mt-10">{project.year}</PageTitle>
      <h1 className="mt-4 max-w-4xl font-serif text-5xl font-medium tracking-tight sm:text-7xl">
        {project.title}
      </h1>
      <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">{project.summary}</p>
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="mt-10 w-full max-w-3xl border border-line"
        />
      ) : null}
      <ul className="mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag}>
            <Tag tag={tag} />
          </li>
        ))}
      </ul>
      <div className="mt-12 max-w-2xl space-y-5 text-lg leading-relaxed">
        {project.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {project.links.length > 0 ? (
        <ul className="mt-10 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <li key={link.href}>
              <ExternalLink
                href={link.href}
                className="border border-line px-4 py-2 text-sm transition-colors hover:border-ink"
              >
                {link.label}
              </ExternalLink>
            </li>
          ))}
        </ul>
      ) : null}
    </Page>
  );
}

export function CaseStudyNotFound() {
  return (
    <Page>
      <PageTitle>Missing</PageTitle>
      <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">
        That project is not in the archive.
      </h1>
      <BackLink to="/" className="mt-8 text-sm">
        Back home
      </BackLink>
    </Page>
  );
}
