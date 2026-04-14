import { test, expect } from "@playwright/test";
test("authenticated popup", async ({ page }) => {
  test.setTimeout(50000);
  //test.slow()//90 sec
  await page.goto("https://testautomationpractice.blogspot.com/", {
    timeout: 10000,
  });
  await expect(page.getByText("GUI Elements")).toBeVisible();

  await page.getByPlaceholder("Enter Name").fill("Lakshmi", { force: true });
});
