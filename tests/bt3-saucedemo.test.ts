import { test, expect } from '@playwright/test';

test('SauceLab Demo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('input#user-name').fill('standard_user');
  await page.locator('input#password').fill('secret_sauce');
  await page.locator('input[type="submit"]').click();

  await page.waitForURL("https://www.saucedemo.com/inventory.html");
  await expect(page).toHaveURL(/inventory.html/);

  await page.reload();
  await expect(page).toHaveURL(/inventory.html/);

});
