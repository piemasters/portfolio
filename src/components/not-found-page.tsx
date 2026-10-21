import { BackLink } from "#/components/back-link";
import { Page } from "#/components/page";
import { PageTitle } from "#/components/page-title";

export function NotFoundPage() {
  return (
    <Page>
      <PageTitle>404</PageTitle>
      <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">
        That page is not here.
      </h1>
      <BackLink to="/" className="mt-8 text-md">
        Back home
      </BackLink>
    </Page>
  );
}
