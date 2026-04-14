import { test, expect } from "@playwright/test";

test("search iphone 17 and click first result", async ({ page }) => {
  // Increase timeout to 60s for slow Amazon pages
  test.setTimeout(60000);

  await page.goto("https://www.amazon.in/", { waitUntil: "domcontentloaded" });

  // Type in the search box
  await page.locator("//input[@id='twotabsearchtextbox']").fill("iphone 17");

  // Press Enter to search (more reliable than clicking button)
  await page.keyboard.press("Enter");

  // Wait for URL to change to search results page
  await page.waitForURL("**/s?k=**", { timeout: 30000 });

  // Take screenshot to debug what Amazon is showing
  await page.screenshot({ path: "amazon-debug.png", fullPage: true });
  console.log("Current URL:", page.url());
  console.log("Page title:", await page.title());

  // Wait for results container
  await page.waitForSelector("[data-component-type='s-search-result']", { timeout: 30000 });

  // Get and click the first product
  const firstProduct = page.locator("[data-component-type='s-search-result'] h2 a").first();
  const productName = await firstProduct.textContent({ timeout: 15000 });
  console.log("First product:", productName?.trim());

  await firstProduct.click();

  // Wait for product detail page
  await page.waitForSelector("#productTitle", { timeout: 30000 });
  const title = await page.textContent("#productTitle");
  console.log("Product title:", title?.trim());
});
