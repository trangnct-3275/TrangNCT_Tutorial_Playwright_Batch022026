import { expect, test } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/user.json' });

test('Verify dashboard with saved login state', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(page.getByText('Swag Labs')).toBeVisible();
    await expect(page.getByText('Products')).toBeVisible();
});