import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudy, CaseStudyNotFound } from "#/components/case-study";
import { getWork } from "#/content/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getWork(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  notFoundComponent: CaseStudyNotFound,
  component: WorkPage,
});

function WorkPage() {
  const { project } = Route.useLoaderData();

  return <CaseStudy project={project} back={{ hash: "work", label: "All work" }} />;
}
