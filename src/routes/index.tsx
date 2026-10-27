import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "#/components/external-link";
import { ProjectList } from "#/components/project-list";
import { PageTitle } from "#/components/page-title";
import { SocialIcon } from "#/components/social-icon";
import { site } from "#/content/site";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pt-12 pb-16 sm:px-8 sm:pt-16 sm:pb-24">
        <PageTitle>
          {site.role}
          <span aria-hidden="true"> · </span>
          {site.location}
        </PageTitle>
        <div className="mt-6 flex items-center gap-4 sm:mt-8 sm:gap-8">
          <div className="relative shrink-0">
            <span
              aria-hidden="true"
              className="absolute -top-2 -right-2 size-full rounded-full border border-accent sm:-top-2.5 sm:-right-2.5"
            />
            <img
              src={site.portrait}
              alt={`Portrait of ${site.name}`}
              width={512}
              height={512}
              fetchPriority="high"
              className="relative size-[clamp(5.5rem,30vw,7rem)] rounded-full object-cover shadow-[0_18px_36px_-22px_var(--color-ink)] ring-1 ring-line ring-offset-4 ring-offset-paper sm:size-36"
            />
          </div>
          <div className="@container min-w-0 flex-1">
            <h1 className="font-serif text-[clamp(2.15rem,26cqi,3.75rem)] leading-[0.92] font-medium tracking-tight text-balance text-ink sm:text-[clamp(3.25rem,24cqi,6rem)]">
              {site.name}
            </h1>
          </div>
        </div>
        <p className="mt-8 max-w-xl text-xl leading-relaxed text-muted">{site.intro}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="bg-ink px-5 py-3 text-sm text-paper transition-colors hover:bg-accent"
          >
            Selected work
          </a>
          <SocialLinks />
        </div>
      </section>

      <section id="work" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-8 flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-3xl tracking-tight">Selected work</h2>
            <p className="text-sm text-muted">{countLabel(site.work.length)}</p>
          </div>
          <ProjectList projects={site.work} to="/work/$slug" />
        </div>
      </section>

      <section id="projects" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-8 flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-3xl tracking-tight">Projects</h2>
            <p className="text-sm text-muted">{countLabel(site.projects.length)}</p>
          </div>
          <ProjectList projects={site.projects} to="/projects/$slug" />
        </div>
      </section>

      <section id="about" className="border-t border-line">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-[minmax(0,40rem)_14rem] md:justify-between md:gap-16">
          <div>
            <h2 className="font-serif text-3xl tracking-tight">About</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              {site.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <dl className="grid gap-8 border-t border-line pt-8 md:border-t-0 md:border-l md:pt-2 md:pl-8">
            {site.details.map((detail) => (
              <div key={detail.label}>
                <dt className="text-sm tracking-[0.18em] text-accent uppercase">{detail.label}</dt>
                <dd className="mt-2 font-serif text-xl tracking-tight">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="skills" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <h2 className="font-serif text-3xl tracking-tight">Key skills</h2>
          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {site.skills.map((group) => (
              <div key={group.label}>
                <h3
                  className={`text-sm tracking-[0.18em] uppercase ${group.tone === "concept" ? "text-concept" : "text-accent"}`}
                >
                  {group.label}
                </h3>
                <ul className="mt-5 grid gap-3">
                  {group.items.slice(0, 6).map((skill) => (
                    <li
                      key={skill}
                      className={`border border-line border-l-2 px-4 py-4 font-serif text-2xl tracking-tight transition-[color,background-color,border-color,translate] duration-200 ease-out motion-safe:hover:translate-x-1 ${
                        group.tone === "concept"
                          ? "border-l-concept hover:border-concept hover:bg-concept/8 hover:text-concept"
                          : "border-l-accent hover:border-accent hover:bg-accent/8 hover:text-accent"
                      }`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="training" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col">
              <h2 className="font-serif text-3xl tracking-tight">Training</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{site.training.summary}</p>
            </div>
            <ExternalLink
              href={site.training.href}
              className="text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
            >
              View on {site.training.label}
            </ExternalLink>
          </div>
          <div className="overflow-hidden border border-line bg-paper">
            <iframe
              src={site.training.href}
              title={`${site.name} training progress on ${site.training.label}`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="h-[min(42rem,80vh)] w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function countLabel(count: number) {
  return `${count} ${count === 1 ? "project" : "projects"}`;
}

function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-3 ${className ?? ""}`}>
      {site.socials.map((social) => (
        <li key={social.href}>
          <ExternalLink
            href={social.href}
            className="inline-flex size-12 items-center justify-center border border-line text-muted transition-colors hover:border-ink hover:text-ink"
          >
            <SocialIcon name={social.label} />
            <span className="sr-only">{social.label}</span>
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
}
