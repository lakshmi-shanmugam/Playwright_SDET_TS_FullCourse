import { test, expect, Locator, chromium } from "@playwright/test";

//Browser--context---pages
//context--we can have multiple contexts for multiple users/apps for the same browser
//provide a way to operate multiple independent browserr session
//page-->new tab, window or popup
test("multi select dropdown1", async ({ browser }) => {
  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto("https://testautomationpractice.blogspot.com/");
});

test("multi select dropdown2", async ({ context }) => {
  const page = await context.newPage();

  await page.goto("https://testautomationpractice.blogspot.com/");
});
test("multi select dropdown3", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
});

test("multi select dropdown4", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://testautomationpractice.blogspot.com/");
});
test("multi select dropdown5", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const page1 = await context.newPage();
  const page2 = await context.newPage();
  console.log("No of pages created:", context.pages().length);
  await page1.goto("https://testautomationpractice.blogspot.com/");

  await expect(page1).toHaveTitle("Automation Testing Practice");
  await page2.goto("https://www.pavantestingtools.com/");
  await expect(page2).toHaveTitle("SDET-QA Blog");
});
