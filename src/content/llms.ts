import { site } from "#/content/site";

/** Agent-facing summary of the portfolio. Derived from `site` so it cannot drift. */
export function renderLlmsTxt() {
  const pages = [
    `- [Home](${site.url}/): ${site.role} in ${site.location}`,
    ...site.projects.map(
      (project) => `- [${project.title}](${site.url}/work/${project.slug}): ${project.summary}`,
    ),
  ];
  const details = site.details.map((detail) => `- ${detail.label}: ${detail.value}`);
  const skills = site.skills
    .map((group) => `### ${group.label}\n\n${group.items.map((item) => `- ${item}`).join("\n")}`)
    .join("\n\n");
  const contact = site.socials.map((social) => `- [${social.label}](${social.href})`).join("\n");

  return [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "## Pages",
    "",
    pages.join("\n"),
    "",
    "## About",
    "",
    details.join("\n"),
    "",
    "## Key skills",
    "",
    skills,
    "",
    "## Contact",
    "",
    contact,
    "",
  ].join("\n");
}
