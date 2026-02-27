import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly menuBurger: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuBurger = page.locator("button#react-burger-menu-btn");
    this.logoutLink = page.locator("a#logout_sidebar_link");
  
  }

  async gotoCartPage() {
    await this.page.goto("https://www.saucedemo.com/cart.html");
  }

  async clickMenuBurger() {
    await this.menuBurger.click();
  }

  async logout() {
    this.clickMenuBurger();
    await this.logoutLink.click();
  }


}