import { test, expect, devices } from "@playwright/test";
//npx playwright codegen https://demowebshop.tricentis.com -o tests/Day14/test.spec.ts --device "iPhone 15"
test.use({
  ...devices["iPhone 15"],
});

test("test", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  await page.getByRole("link", { name: "Tricentis Demo Web Shop" }).click();
  await page.getByRole("link", { name: "Log in" }).click();
});
