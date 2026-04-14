import { test, expect } from "@playwright/test";
//npx playwright codegen https://demowebshop.tricentis.com -o tests/Day14/test1.spec2.ts --browser firefox
test("test", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  await page.getByRole("link", { name: "Tricentis Demo Web Shop" }).click();
  await page.getByRole("link", { name: "Books" }).first().click();
  await page.getByRole("link", { name: "Electronics" }).first().click();
});
