import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  //timeout: 60000, // default is 30s
  //expect: { timeout: 10000 }, // default is 5s
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on",
    headless: true,
    testIdAttribute: "data-pw",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
