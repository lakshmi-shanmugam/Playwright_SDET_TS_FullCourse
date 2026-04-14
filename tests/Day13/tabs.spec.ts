import { test, expect, Locator, chromium } from "@playwright/test";

//Browser--context---pages
//context--we can have multiple contexts for multiple users/apps for the same browser
//provide a way to operate multiple independent browserr session
//page-->new tab, window or popup
test("multi select dropdown1", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto("https://testautomationpractice.blogspot.com/");
  await expect(page).toHaveTitle("Automation Testing Practice");
  //await page.locator('//button[text()="New Tab"]').click()

  //both statement will excecute both at a time
  const [childPage] = await Promise.all([
    context.waitForEvent("page"), //when ever trigger event, we need page context
    page.locator('button:has-text("New Tab")').click(), //opens new tab
  ]);
  await childPage.waitForLoadState();
  await expect(childPage).toHaveTitle("SDET-QA Blog");

  //approach 1: switch between pages and get titles

  const pages = context.pages();
  console.log("Number of pages created:", pages.length);
  console.log("Parent page title:", await page.title());

  console.log("Child page title:", await childPage.title());

  //or

  console.log("Child page title:", await pages[0].title());

  console.log("Child page title:", await pages[1].title());
});
