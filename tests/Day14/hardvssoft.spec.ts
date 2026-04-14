import { test, expect } from "@playwright/test";
test("assertion", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/registerresult/");

  await expect(page).toHaveURL(
    "https://demowebshop.tricentis.com/registerresult/",
  );
  await expect(page).toHaveTitle("Demo Web Shop");

  const title = page.getByRole("link", { name: "Tricentis Demo Web Shop" });
  await expect(title).toBeVisible();
});
test("assertion soft", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/registerresult/");

  await expect(page).toHaveURL(
    "https://demowebshop.tricentis.com/registerresult/",
  );
  await expect.soft(page).toHaveTitle("Demo Web Shop1");

  const title = page.getByRole("link", { name: "Tricentis Demo Web Shop" });
  await expect(title).toBeVisible();
});
