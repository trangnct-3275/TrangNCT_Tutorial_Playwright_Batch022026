import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly menuBurger: Locator;
  readonly logoutLink: Locator;
  readonly cartItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuBurger = page.locator("button#react-burger-menu-btn");
    this.logoutLink = page.locator("a#logout_sidebar_link");
    this.cartItem = page.locator("div.inventory_item");
  
  }

  async gotoCartPage() {
    await this.page.goto("https://www.saucedemo.com/cart.html");
  }

  async clickMenuBurger() {
    await this.menuBurger.click();
  }

  async logout() {
    await this.clickMenuBurger();
    await this.logoutLink.click();
  }

  getCartItemByProductName(productName: string) {
    return this.page
    .locator('.cart_item')
    .filter({ hasText: productName });
  }
}
