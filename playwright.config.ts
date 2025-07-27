import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  retries: 1,
  workers: 1,
  timeout: 30000,
});
