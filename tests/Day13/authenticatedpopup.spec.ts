import { test, expect } from "@playwright/test";

test("authenticated popup", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
  await expect(page.locator("p")).toContainText("Congratulations");
});
test("authenticated popup2", async ({ browser }) => {
  const context = await browser.newContext({
    httpCredentials: { username: "admin", password: "admin" },
  });
  const page = await context.newPage();

  await page.goto("https://the-internet.herokuapp.com/basic_auth");
  await expect(page.locator("p")).toContainText("Congratulations");
});
