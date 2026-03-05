import { ProductPage } from '../pages/ProductPage';
import { test, expect } from './fixtures/page.fixture';
test.describe('Test 01: Not save login state', () => {

  test.beforeEach(async ({ loginPage}) => {
    await loginPage.gotoHomePage();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Add Product to Cart', async ({ productPage, cartPage }) => {
    await productPage.gotoProductPage();
    await productPage.addItemToCartByProductName("Sauce Labs Backpack");
    const count = await productPage.getCountOfItemsFromCartIcon();
    expect(count).toBe(1);
    await productPage.gotoCartPage();
    await expect(cartPage.getCartItemByProductName("Sauce Labs Backpack")).toBeVisible();
  });

  test.afterEach(async ({ productPage}) => {
    await productPage.logout();
  });
  
});

test.describe('Test 02: Save login state', () => {

  test.use({ storageState: 'playwright/.auth/user.json' });

  test('Add Product to Cart', async ({ loginPage, productPage, cartPage }) => {    
    await productPage.gotoProductPage();
    await productPage.addItemToCartByProductName("Sauce Labs Backpack");
    const count = await productPage.getCountOfItemsFromCartIcon();
    expect(count).toBe(1);
    
    await productPage.gotoCartPage();
    await expect(cartPage.getCartItemByProductName("Sauce Labs Backpack")).toBeVisible();
  });
  
});