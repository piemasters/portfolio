import { expect, test } from "vite-plus/test";
import { getProject, site, skillTone } from "./site";

test("returns a known project by slug", () => {
  const project = getProject(site.projects[0].slug);
  expect(project?.title).toBe(site.projects[0].title);
});

test("returns undefined for an unknown slug", () => {
  expect(getProject("not-a-project")).toBeUndefined();
});

test("colors named technologies apart from broader tags", () => {
  expect(skillTone("React")).toBe("technology");
  expect(skillTone("TypeScript")).toBe("technology");
  expect(skillTone("User Experience")).toBe("concept");
  expect(skillTone("Design Systems")).toBe("concept");
});
