import { expect, test } from "@playwright/test";
import { site } from "../src/content/site";

test("a project opens its own page", async ({ page }) => {
  const project = site.work.find((item) => item.links.length > 0) ?? site.work[0];
  const link = project.links[0];
  if (!link) throw new Error("expected a work item with an external link");

  await page.goto("/");
  await page.getByRole("link", { name: project.title }).click();

  await expect(page).toHaveURL(new RegExp(`/work/${project.slug}$`));
  await expect(page).toHaveTitle(`${project.title} — ${site.name}`);
  await expect(page.getByRole("heading", { level: 1, name: project.title })).toBeVisible();
  await expect(page.locator("main img").first()).toHaveAttribute("src", project.banner);
  await expect(page.getByText(project.body[0])).toBeVisible();
  if ("image" in project && typeof project.image === "string") {
    await expect(page.getByRole("img", { name: project.title })).toBeVisible();
  }
  await expect(page.getByRole("link", { name: link.label })).toHaveAttribute("rel", "noreferrer");

  await page.getByRole("link", { name: "All work" }).click();
  await expect(page).toHaveURL(/#work$/);
  await expect(page.locator("#work")).toBeInViewport();
});

test("a personal project opens from the projects section", async ({ page }) => {
  const project = site.projects[0];

  await page.goto("/");
  await page.locator("#projects").getByRole("link", { name: project.title }).click();

  await expect(page).toHaveURL(new RegExp(`/projects/${project.slug}$`));
  await expect(page).toHaveTitle(`${project.title} — ${site.name}`);
  await expect(page.getByRole("heading", { level: 1, name: project.title })).toBeVisible();
  await expect(page.locator("main img").first()).toHaveAttribute("src", project.banner);

  await page.getByRole("link", { name: "All projects" }).click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(page.locator("#projects")).toBeInViewport();
});

test("every work page shows its banner", async ({ page }) => {
  for (const project of site.work) {
    await page.goto(`/work/${project.slug}`);
    await expect(page.getByRole("heading", { level: 1, name: project.title })).toBeVisible();
    await expect(page.locator("main img").first()).toHaveAttribute("src", project.banner);
  }
});

test("an unknown project shows the archive message", async ({ page }) => {
  await page.goto("/work/not-a-project");

  await expect(page).toHaveTitle(`Not found — ${site.name}`);
  await expect(
    page.getByRole("heading", { name: "That project is not in the archive." }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Back home" }).click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole("heading", { level: 1, name: site.name })).toBeVisible();
});
