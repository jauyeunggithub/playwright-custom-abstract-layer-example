import { Page } from "playwright";
import { BasePage } from "./BasePage";
import * as path from "path";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate(): Promise<void> {
    const filePath = path.join(__dirname, "../public/login.html");
    const fileURL = "file://" + filePath.replace(/\\/g, "/");
    await this.page.goto(fileURL);
  }
  // Fill in the login form
  async login(username: string, password: string): Promise<void> {
    await this.type("#username", username);
    await this.type("#password", password);
    await this.click("#loginButton");
  }

  // Verify if the login was successful
  async isLoginSuccess(): Promise<boolean> {
    return await this.page.isVisible("#welcomeMessage");
  }
}
