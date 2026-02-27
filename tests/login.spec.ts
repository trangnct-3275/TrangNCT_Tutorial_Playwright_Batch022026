import { test, expect } from './fixtures/page.fixture';

test('login success', async ({ loginPage }) => {
  await loginPage.gotoHomePage();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(loginPage.page).toHaveURL(/inventory/);
});