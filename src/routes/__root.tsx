import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { NotFoundPage } from "#/components/not-found-page";
import { SiteFooter } from "#/components/site-footer";
import { SiteHeader } from "#/components/site-header";
import { shareMeta, socialImage } from "#/content/meta";
import { site, type Project } from "#/content/site";
import { themeBootScript } from "#/content/theme";

import appCss from "../styles.css?url";
import frauncesLatin from "@fontsource-variable/fraunces/files/fraunces-latin-wght-normal.woff2?url";

export const Route = createRootRoute({
  head: ({ matches }) => {
    const missing =
      matches.some((match) => match.status === "notFound") ||
      matches.some((match) => (match.routeId as string) === "/$");
    const project = projectFromMatches(matches);
    const title = project
      ? `${project.title} — ${site.name}`
      : missing
        ? `Not found — ${site.name}`
        : `${site.name} — ${site.role}`;
    const description = project
      ? project.summary
      : missing
        ? "That page is not in this portfolio."
        : site.description;
    const path = project
      ? `/work/${project.slug}`
      : missing
        ? (matches.at(-1)?.pathname ?? "/")
        : "/";
    const image = socialImage(project?.banner);
    const shared = shareMeta({ title, description, path, image });

    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        ...shared.meta,
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        {
          rel: "preload",
          href: frauncesLatin,
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
        ...shared.links,
      ],
    };
  },
  notFoundComponent: NotFoundPage,
  shellComponent: RootDocument,
});

function projectFromMatches(matches: ReadonlyArray<{ loaderData?: unknown }>): Project | undefined {
  for (const match of matches) {
    const data = match.loaderData as { project?: Project } | undefined;
    if (data?.project) return data.project;
  }
  return undefined;
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="bg-paper text-ink antialiased" suppressHydrationWarning>
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
