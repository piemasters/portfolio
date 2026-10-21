import { twMerge } from "tailwind-merge";
import { ExternalLink } from "#/components/external-link";
import { SocialIcon } from "#/components/social-icon";
import { site } from "#/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div
        className={twMerge(
          "mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted",
          "sm:flex-row sm:items-center sm:justify-between sm:px-8",
        )}
      >
        <p>
          {site.name}
          <span aria-hidden="true"> · </span>
          {site.location}
        </p>
        <nav aria-label="Contact">
          <ul className="flex gap-5">
            {site.socials.map((social) => (
              <li key={social.href}>
                <ExternalLink
                  href={social.href}
                  className="group inline-flex items-center gap-2 transition-colors hover:text-ink"
                >
                  <SocialIcon name={social.label} />
                  <span className="underline decoration-line underline-offset-4 group-hover:decoration-ink">
                    {social.label}
                  </span>
                </ExternalLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
