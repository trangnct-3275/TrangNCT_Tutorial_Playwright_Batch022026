import { ProductPage } from '../pages/ProductPage';
import { test, expect } from './fixtures/page.fixture';
test.describe('Test 01:', () => {

  test.beforeEach(async ({ loginPage}) => {
    await loginPage.gotoHomePage();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('test', async ({ productPage }) => {
    console.log(await productPage.getItemByProductName("Sauce Labs Backpack"));
  });
  
});