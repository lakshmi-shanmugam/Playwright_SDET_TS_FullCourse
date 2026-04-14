import { test, expect } from "@playwright/test";

// npx playwright codegen https://demowebshop.tricentis.com -o tests/Day14/test.spec.ts
//npx playwright codegen -o tests/Day14/test.spec.ts
test("test", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  await page.getByRole("link", { name: "Tricentis Demo Web Shop" }).click();
  await page
    .getByRole("listitem")
    .filter({ hasText: "Computers Desktops Notebooks" })
    .click();
  await page
    .getByRole("link", { name: "Picture for category Desktops" })
    .click();
  await expect(page.locator("body")).toContainText(
    "Build your own cheap computer",
  );
  await page.getByRole("link", { name: "Electronics" }).first().click();
});
