import { test, expect } from "@playwright/test";

//npx playwright show-trace test-results/Day15-tracing-snapshots-from-config-chromium/trace.zip

test("snapshots from config", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();

  await page.getByRole("banner").getByRole("img").click();
  await expect(page.getByText("Logout")).toBeVisible();
  await page.getByRole("menuitem", { name: "Logout" }).click();

  await expect(page.getByRole("heading")).toContainText("Login");
});
