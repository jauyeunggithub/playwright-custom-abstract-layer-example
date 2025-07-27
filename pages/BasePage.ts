import { Page } from "playwright";

export abstract class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  abstract navigate(): Promise<void>;

  async waitForSelector(selector: string): Promise<void> {
    await this.page.waitForSelector(selector);
  }

  async click(selector: string): Promise<void> {
    await this.page.click(selector);
  }

  async type(selector: string, text: string): Promise<void> {
    await this.page.fill(selector, text);
  }

  async getText(selector: string): Promise<string> {
    return await this.page.innerText(selector);
  }
}
