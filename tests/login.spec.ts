import { test, expect } from './fixtures/my-fixture';

test.describe('Login Tests with Custom Fixture', () => {

  test('Invalid password', async ({ loginPage }) => {
    await loginPage.login('standard_user', 'wrong_password');

    await expect(loginPage.errorMessage)
      .toContainText('Username and password do not match');
  });

  test('Empty username', async ({ loginPage }) => {
    await loginPage.login('', 'secret_sauce');

    await expect(loginPage.errorMessage)
      .toContainText('Username is required');
  });

});