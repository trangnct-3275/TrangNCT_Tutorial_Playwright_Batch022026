import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly menuBurger: Locator;
  readonly logoutLink: Locator;
  readonly productItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuBurger = page.locator("button#react-burger-menu-btn");
    this.logoutLink = page.locator("a#logout_sidebar_link");
    this.productItems = page.locator("div.inventory_item")
  
  }

  async gotoProductPage() {
    await this.page.goto("https://www.saucedemo.com/inventory.html");
  }

  async clickMenuBurger() {
    await this.menuBurger.click();
  }

  async logout() {
    this.clickMenuBurger();
    await this.logoutLink.click();
  }

  async getItemByProductName(productName: string): Promise<Locator> {
    return this.productItems.filter({
      has: this.page.locator('.inventory_item_name', 
        { 
          hasText: productName
        }),
    });
  }

  async addItemToCartByProductName(productName: string) {
    //await this.page.locator(`button[data-test='add-to-cart-sauce-${productName}']`).click();
  }


}