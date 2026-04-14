import { test, expect } from "@playwright/test";
test("trace", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  await page.getByRole("link", { name: "Tricentis Demo Web Shop" }).click();

  const timestamp = Date.now();
  //Page screenshot
  //await page.screenshot({path: "screenshots/" + "homepage" + timestamp + ".png",});
  //full page screenshot

  //await page.screenshot({path: "screenshots/" + "fullpage" + timestamp + ".png",fullPage: true,});

  const logo = page.locator("img[alt='Tricentis Demo Web Shop']");

  await logo.screenshot({ path: "screenshots/" + "logo" + timestamp + ".png" });
  //locator snapshots
  await page
    .locator(".product-grid.home-page-product-grid")
    .screenshot({ path: "screenshots/" + "featureshots" + timestamp + ".png" });
});

test("snapshots from config", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();

  await page.getByRole("banner").getByRole("img").click();
  await expect(page.getByRole("menuitem", { name: "Logout" })).toBeVisible();
  await page.getByRole("menuitem", { name: "Logout" }).click();

  await expect(page.getByRole("heading")).toContainText("Login");
});
