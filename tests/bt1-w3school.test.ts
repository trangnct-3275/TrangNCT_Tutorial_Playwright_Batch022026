import { test, expect } from '@playwright/test';

test('Open W3school page', async ({ page }) => {
  await page.goto('https://www.w3schools.com/');
  await page.fill('#tnb-google-search-input', 'testuser');
  await page.locator('#tnb-google-search-icon').click();
});
