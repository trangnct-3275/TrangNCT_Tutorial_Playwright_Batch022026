import { expect, test as setup } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Create auth directory
  const authDir = path.dirname(authFile);
  if (!fs.existsSync(authDir)) {
    fs.mkdirSync(authDir, { recursive: true });
    console.log('Created auth directory');
  }
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.waitForURL('**/inventory.html');

  await expect(page.getByText('Swag Labs')).toBeVisible();
  await expect(page.getByText('Products')).toBeVisible();

  // Save auth state to file
  await page.context().storageState({ path: authFile });
  console.log('Auth state saved to:', authFile);

  // Verify file được tạo
  if (fs.existsSync(authFile)) {
    console.log('Auth file created successfully!');
  }
});