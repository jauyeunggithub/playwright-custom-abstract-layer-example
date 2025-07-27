import { Page } from "playwright";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Navigate to the Login page (local HTML file in this case)
  async navigate(): Promise<void> {
    await this.page.goto("file://" + __dirname + "/login.html"); // Use file path for local HTML
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
