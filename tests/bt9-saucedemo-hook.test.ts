import { test, expect, Page, Locator } from '@playwright/test';
import { timeStamp } from 'node:console';

test.describe('Sauce Demo login / logout flow - Happy case', () => {

  test.beforeAll('Before All',async () => {
    console.log("Start run script - Before All");
  });

  test.beforeEach('Login',async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('input#user-name').fill('standard_user');
    await page.locator('input#password').fill('secret_sauce');
    await page.locator('input[type="submit"]').click();
  });

  test('Test case 01: Verify Login successfully', async ({ page }) => {
      await page.waitForURL("https://www.saucedemo.com/inventory.html");
      await expect(page).toHaveURL(/inventory.html/);
      await expect(page.locator("span.title")).toHaveText("Products - wrong");
  });

  test('Test case 02: Verify Logout successfully', async ({ page }) => {
      await page.locator("button#react-burger-menu-btn").click();
      await page.locator("a#logout_sidebar_link").click();

      await expect(page).toHaveURL("https://www.saucedemo.com/");
      await expect(page.locator("input[value='Login']")).toBeVisible();
  });

  test.afterEach(async ({ page }, testInfo) => {
    const screenshotPath = testInfo.outputPath(
      `${testInfo.title.replace(/\s+/g, '_')}.png`
    );

    console.log("Saving to:", screenshotPath);

    try {
      await page.screenshot({ path: 'screenshots/test' + timeStamp + '.png' });
      console.log("Screenshot done!");
    } catch (error) {
      console.log("Screenshot error:", error);
    }

  });

  test.afterAll('After All',async () => {
    console.log("End script - After All");
  });

});