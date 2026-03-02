import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly menuBurger: Locator;
  readonly logoutLink: Locator;
  readonly productItems: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuBurger = page.locator("button#react-burger-menu-btn");
    this.logoutLink = page.locator("a#logout_sidebar_link");
    this.productItems = page.locator("div.inventory_item");
    this.cartIcon = page.locator("span.shopping_cart_badge");
  
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

  async getItemAddToCartByProductName(productName: string): Promise<Locator> {
    const item = await this.getItemByProductName(productName); 
    return item.getByRole("button" , {name: "Add to cart"});
  }

  async getItemRemoveFromCartByProductName(productName: string): Promise<Locator> {
    const item = await this.getItemByProductName(productName);
    return item.getByRole("button", {name: "Remove"})
  }

  async addItemToCartByProductName(productName: string) {
    const button = await this.getItemAddToCartByProductName(productName);
    await button.click();
  }

  async removeItemFromCartByProductName(productName: string) {
    const button = await this.getItemRemoveFromCartByProductName(productName);
    await button.click();
  }

  async getCountOfItemsFromCartIcon(): Promise<number> {
    const cartIcon = this.cartIcon;
    const countText = await cartIcon.textContent();
    return countText ? parseInt(countText, 10) : 0;
  }

  async gotoCartPage() {
    await this.cartIcon.click();
  }



}