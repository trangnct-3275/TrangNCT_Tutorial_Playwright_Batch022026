import { test, expect } from '@playwright/test';

test('Form User Registration', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');
  await page.locator('input#username').fill('trang_test');
  await page.locator('input#email').fill('trangtest@gmail.com');

  await page.locator('input#female').check();
  await expect(page.locator('input#female')).toBeChecked();

  await page.locator('input#reading').check();
  await expect(page.locator('input#reading')).toBeChecked();

  
  await page.locator('select#interests').selectOption('science');
  await page.locator('select#country').selectOption('canada');
  await page.waitForTimeout(3000);

  await page.locator('input#dob').fill('1999-03-02');
  await page.waitForTimeout(3000);

  await page.locator('button[type="submit"]').click();

  await expect(page.locator('table#userTable')).toBeVisible();

});
