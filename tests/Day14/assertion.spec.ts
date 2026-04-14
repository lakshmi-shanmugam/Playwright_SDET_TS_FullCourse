import { test, expect } from "@playwright/test";
test("assetion", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/registerresult/");
  await expect(page).toHaveURL(
    "https://demowebshop.tricentis.com/registerresult/",
  );

  await page.getByRole("link", { name: "Tricentis Demo Web Shop" }).click();

  //non-retrying assertion

  const title = await page.title();
  expect(title.includes("Demo Web Shop")).toBeTruthy();
  expect(title.includes("Demo Web Shop1")).not.toBeTruthy();
  await page.getByRole("link", { name: "Computers" }).first().click();
  await page
    .getByRole("link", { name: "Picture for category Desktops" })
    .click();

  await page.locator("#small-searchterms").fill("computer");

  await page
    .getByRole("listitem")
    .filter({ hasText: "computer" })
    .first()
    .click();
});
