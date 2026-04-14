import { test, expect, Locator, chromium } from "@playwright/test";

//Browser--context---pages
//context--we can have multiple contexts for multiple users/apps for the same browser
//provide a way to operate multiple independent browserr session
//page-->new tab, window or popup
test("multi select dropdown1", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://testautomationpractice.blogspot.com/");
  await expect(page).toHaveTitle("Automation Testing Practice");
  //multiple popup windows

  //both statement will excecute both at a time

  //   context.waitForEvent("page") for any new page in the context
  // page.waitForEvent("popup") for a popup opened by that page
  await Promise.all([
    page.waitForEvent("popup"), //when ever trigger event, we need page context
    page.locator('//button[text()="Popup Windows"]').click(), //opens new tab
  ]);
  const allPopupWindows = context.pages();

  const pages = context.pages();
  console.log("Number of pages created:", allPopupWindows.length);
  console.log("Parent page title:", await allPopupWindows.title());

  console.log("Child page title:", await allPopupWindows.title());

  for (const pw of allPopupWindows) {
    const title = await pw.title();
    if (title.includes("Playwright")) {
      await pw.locator(".getStarted_Sjson").click();
      await pw.close();
    }
  }
  await page.waitForTimeout(5000);
});
