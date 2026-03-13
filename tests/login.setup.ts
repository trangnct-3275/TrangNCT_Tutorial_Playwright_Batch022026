import { test, expect } from './fixtures/page.fixture';

test('login success', async ({ loginPage, page }) => {
  await loginPage.gotoHomePage();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(loginPage.page).toHaveURL(/inventory/);
  
  await page.context().storageState({ path: 'playwright/.auth/user.json' });
  console.log('login success');

});