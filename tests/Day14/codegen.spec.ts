import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page
    .getByRole("heading", { name: "Automation Testing Practice" })
    .click();
  await page.getByText("For Selenium, Cypress &").click();
  await page.getByRole("textbox", { name: "Enter Name" }).click();
  await page.getByRole("textbox", { name: "Enter Name" }).fill("Lakshmi");
  await page.getByRole("textbox", { name: "Enter EMail" }).click();
  await page.getByRole("textbox", { name: "Enter EMail" }).fill("Shanmugam");
  await page.getByRole("textbox", { name: "Enter Phone" }).click();
  await page.getByRole("textbox", { name: "Enter Phone" }).fill("111-111-11");
  await page.getByRole("textbox", { name: "Address:" }).click();
  await page.getByRole("textbox", { name: "Address:" }).fill("test street");
  await page.getByRole("radio", { name: "Female" }).check();
  await page.getByRole("checkbox", { name: "Monday" }).check();
  await page.getByRole("checkbox", { name: "Tuesday" }).check();
});
