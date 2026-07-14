import { expect, test } from "@playwright/test";

test("health endpoint reports ok", async ({ request }) => {
  const response = await request.get("/api/v1/health");
  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  expect(body.status).toBe("ok");
  expect(body.service).toBe("eduverse");
});

test("home page renders the platform name", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "EduVerse" })).toBeVisible();
});
