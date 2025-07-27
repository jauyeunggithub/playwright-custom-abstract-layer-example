import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login Test - Success", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();

  // Perform the login action
  await loginPage.login("testuser", "password123");

  // Verify the login was successful
  const isSuccess = await loginPage.isLoginSuccess();
  expect(isSuccess).toBe(true);
});

test("Login Test - Failure", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();

  // Perform the login action with incorrect credentials
  await loginPage.login("wronguser", "wrongpassword");

  // Verify the login failed (no welcome message)
  const isSuccess = await loginPage.isLoginSuccess();
  expect(isSuccess).toBe(false);
});
