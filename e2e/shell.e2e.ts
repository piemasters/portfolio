import { expect, test, type Locator } from "@playwright/test";
import { site } from "../src/content/site";

function bulbGlow(toggle: Locator) {
  return toggle
    .locator(".theme-bulb-glow")
    .evaluate((element) => getComputedStyle(element).opacity);
}

test("llms.txt lists the full site catalog", async ({ request }) => {
  const response = await request.get("/llms.txt");

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"] ?? "").toContain("text/plain");
  const text = await response.text();
  for (const group of site.skills) {
    for (const item of group.items) {
      expect(text).toContain(`- ${item}`);
    }
  }
  for (const social of site.socials) {
    expect(text).toContain(`[${social.label}](${social.href})`);
  }
});

test("a missing agent catalog answers not found", async ({ request }) => {
  for (const path of ["/.well-known/ai-catalog.json", "/.well-known/ard.json"]) {
    const response = await request.get(path);

    expect(response.status()).toBe(404);
    expect(await response.text()).toContain("That page is not here.");
  }
});

test("an unknown page shows the site not-found message", async ({ page }) => {
  const response = await page.goto("/missing-page");

  expect(response?.status()).toBe(404);
  await expect(page).toHaveTitle(`Not found — ${site.name}`);
  await expect(page.getByRole("heading", { name: "That page is not here." })).toBeVisible();

  await page.getByRole("link", { name: "Back home" }).click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole("heading", { level: 1, name: site.name })).toBeVisible();
});

test("color theme follows the system and remembers a choice", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");

  const root = page.locator("html");
  const toggle = page.getByRole("button", { name: "Switch color theme" });

  await expect(root).toHaveAttribute("data-theme", "dark");
  await expect(root).toHaveCSS("background-color", "rgb(22, 19, 17)");
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute("content", "#161311");
  await expect.poll(() => bulbGlow(toggle)).toBe("0");
  await page.waitForFunction(() => {
    const button = document.querySelector('button[aria-label="Switch color theme"]');
    return (
      !!button && Object.getOwnPropertyNames(button).some((name) => name.startsWith("__reactProps"))
    );
  });

  await toggle.click();
  await page.mouse.move(0, 0);
  await expect(root).toHaveAttribute("data-theme", "light");
  await expect(root).toHaveCSS("background-color", "rgb(244, 240, 230)");
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute("content", "#f4f0e6");
  await expect.poll(() => bulbGlow(toggle)).toBe("0.9");

  await page.reload();
  await expect(root).toHaveAttribute("data-theme", "light");
  await expect(root).toHaveCSS("background-color", "rgb(244, 240, 230)");
});

test("the layout stays usable on a phone", async ({ page }) => {
  const project = site.work[0];

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1, name: site.name })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Sections" })).toBeVisible();

  await page.getByRole("link", { name: project.title }).click();
  await expect(page).toHaveURL(new RegExp(`/work/${project.slug}$`));
  await expect(page.getByRole("heading", { level: 1, name: project.title })).toBeVisible();
});
