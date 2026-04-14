import { test, expect, Locator } from "@playwright/test";

// test("print product names", async ({ page }) => {
//   await page.goto("https://demowebshop.tricentis.com/");

//   const products = page.locator("//h2/a[contains(@href,'computer')]");
//   const productTitles = await products.allTextContents();

//   for (const title of productTitles) {
//     console.log(title);
//   }
// });

// test("print product names singe", async ({ page }) => {
//   await page.goto("https://demowebshop.tricentis.com/");

//   const products = page.locator("//h2/a[contains(@href,'computer')]");
//   const firstprodcut = await products.first().textContent();
//   console.log(firstprodcut);

//   const productTitles = await products.allTextContents();

//   for (const title of productTitles) {
//     console.log(title);
//   }
// });
test("print product names singe", async ({ page }) => {
  await page.goto("https://www.amazon.com/");

  const test2 = await page
    .locator("//input[@id='twotabsearchtextbox']")
    .textContent();
  console.log(test2);
});
