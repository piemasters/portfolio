import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudy, CaseStudyNotFound } from "#/components/case-study";
import { getProject } from "#/content/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  notFoundComponent: CaseStudyNotFound,
  component: PersonalProjectPage,
});

function PersonalProjectPage() {
  const { project } = Route.useLoaderData();

  return <CaseStudy project={project} back={{ hash: "projects", label: "All projects" }} />;
}
