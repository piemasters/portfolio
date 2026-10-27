import { expect, test } from "@playwright/test";
import { site } from "../src/content/site";

test("home shows the portfolio sections", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(`${site.name} — ${site.role}`);
  await expect(page.getByRole("heading", { level: 1, name: site.name })).toBeVisible();
  await expect(page.getByRole("img", { name: `Portrait of ${site.name}` })).toBeVisible();
  await expect(page.getByText(site.intro)).toBeVisible();
  const intro = page.locator("main > section").first();
  await expect(intro.getByRole("link", { name: "GitHub" })).toBeVisible();
  await expect(intro.getByRole("link", { name: "LinkedIn" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Selected work" })).toBeVisible();
  await expect(page.locator("#work")).toContainText(countText(site.work.length));

  for (const project of site.work) {
    const link = page.locator("#work").getByRole("link", { name: project.title });
    await expect(link).toBeVisible();
    await expect(link.locator("img")).toHaveAttribute("src", project.thumbnail);
  }

  await expect(page.getByRole("heading", { name: "Projects", exact: true })).toBeVisible();
  await expect(page.locator("#projects")).toContainText(countText(site.projects.length));

  for (const project of site.projects) {
    const link = page.locator("#projects").getByRole("link", { name: project.title });
    await expect(link).toBeVisible();
    await expect(link.locator("img")).toHaveAttribute("src", project.thumbnail);
  }

  await expect(page.getByRole("heading", { name: "About" })).toBeVisible();
  await expect(page.getByText(site.about[0])).toBeVisible();
  for (const detail of site.details) {
    await expect(page.locator("#about").getByText(detail.label, { exact: true })).toBeVisible();
    await expect(page.locator("#about").getByText(detail.value, { exact: true })).toBeVisible();
  }
  await expect(page.getByRole("heading", { name: "Training" })).toBeVisible();
  const training = page.locator("#training");
  await expect(training.getByText(site.training.summary)).toBeVisible();
  await expect(
    training.getByRole("link", { name: `View on ${site.training.label}` }),
  ).toHaveAttribute("href", site.training.href);
  await expect(
    training.getByTitle(`${site.name} training progress on ${site.training.label}`),
  ).toHaveAttribute("src", site.training.href);
  await expect(page.getByRole("heading", { name: "Key skills" })).toBeVisible();
  for (const group of site.skills) {
    await expect(page.locator("#skills").getByRole("heading", { name: group.label })).toBeVisible();
    for (const skill of group.items.slice(0, 6)) {
      await expect(page.locator("#skills").getByText(skill)).toBeVisible();
    }
  }
  await expect(intro.getByRole("link", { name: "GitHub" })).toHaveAttribute("rel", "noreferrer");

  const contact = page.getByRole("navigation", { name: "Contact" });
  for (const social of site.socials) {
    const link = contact.getByRole("link", { name: social.label });
    await expect(link).toHaveAttribute("href", social.href);
    await expect(link).toHaveAttribute("rel", "noreferrer");
  }
});

function countText(count: number) {
  return `${count} ${count === 1 ? "project" : "projects"}`;
}

test("section links move to work, projects, about, skills, and training", async ({ page }) => {
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Sections" });

  await nav.getByRole("link", { name: "Work" }).click();
  await expect(page).toHaveURL(/#work$/);
  await expect(page.locator("#work")).toBeInViewport();

  await nav.getByRole("link", { name: "Projects" }).click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(page.locator("#projects")).toBeInViewport();

  await nav.getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/#about$/);
  await expect(page.locator("#about")).toBeInViewport();

  await nav.getByRole("link", { name: "Skills" }).click();
  await expect(page).toHaveURL(/#skills$/);
  await expect(page.locator("#skills")).toBeInViewport();

  await nav.getByRole("link", { name: "Training" }).click();
  await expect(page).toHaveURL(/#training$/);
  await expect(page.locator("#training")).toBeInViewport();
});
