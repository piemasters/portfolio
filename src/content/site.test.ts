import { expect, test } from "vite-plus/test";
import { getProject, getWork, site, skillTone } from "./site";

test("returns a known piece of work by slug", () => {
  const project = getWork(site.work[0].slug);
  expect(project?.title).toBe(site.work[0].title);
});

test("returns a known personal project by slug", () => {
  const project = getProject(site.projects[0].slug);
  expect(project?.title).toBe(site.projects[0].title);
});

test("returns undefined for an unknown slug", () => {
  expect(getWork("not-a-project")).toBeUndefined();
  expect(getProject("not-a-project")).toBeUndefined();
});

test("colors named technologies apart from broader tags", () => {
  expect(skillTone("React")).toBe("technology");
  expect(skillTone("TypeScript")).toBe("technology");
  expect(skillTone("User Experience")).toBe("concept");
  expect(skillTone("Design Systems")).toBe("concept");
});
