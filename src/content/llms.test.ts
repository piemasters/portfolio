import { readFileSync } from "node:fs";
import { expect, test } from "vite-plus/test";
import { renderLlmsTxt } from "./llms";
import { site } from "./site";

test("llms.txt lists every page, skill, and contact link", () => {
  const text = renderLlmsTxt();

  expect(text.startsWith(`# ${site.name}\n`)).toBe(true);
  expect(text).toContain(`> ${site.description}`);
  expect(text).toContain(`- [Home](${site.url}/): ${site.role} in ${site.location}`);

  for (const project of site.projects) {
    expect(text).toContain(
      `- [${project.title}](${site.url}/work/${project.slug}): ${project.summary}`,
    );
  }
  for (const detail of site.details) {
    expect(text).toContain(`- ${detail.label}: ${detail.value}`);
  }
  for (const group of site.skills) {
    expect(text).toContain(`### ${group.label}`);
    for (const item of group.items) {
      expect(text).toContain(`- ${item}`);
    }
  }
  for (const social of site.socials) {
    expect(text).toContain(`- [${social.label}](${social.href})`);
  }
});

test("the published llms.txt matches the site content", () => {
  expect(readFileSync("public/llms.txt", "utf8")).toBe(renderLlmsTxt());
});
