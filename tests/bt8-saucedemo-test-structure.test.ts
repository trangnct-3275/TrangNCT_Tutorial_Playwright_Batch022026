import { test, expect, Page, Locator } from '@playwright/test';
import { timeStamp } from 'node:console';

test.describe('Sauce Demo login / logout flow - Happy case', () => {

  test.beforeEach('Login',async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('input#user-name').fill('standard_user');
    await page.locator('input#password').fill('secret_sauce');
    await page.locator('input[type="submit"]').click();
  });

  test('Test case 01: Verify Login successfully', async ({ page }) => {
      await page.waitForURL("https://www.saucedemo.com/inventory.html");
      await expect(page).toHaveURL(/inventory.html/);
      await expect(page.locator("span.title")).toHaveText("Products");
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

});

test.describe('Sauce Demo login / logout flow - Unhappy case', () => {
  const username = "standard_user";
  const valid_password = "secret_sauce";
  const invalid_password = "wrong_password";
  
  test.beforeEach('Login',async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  async function login(page: Page, username: string, password: string) {
    await page.locator('input#user-name').fill(username);
    await page.locator('input#password').fill(password);
    await page.locator('input[type="submit"]').click();
  }

  test('Wrong password', async ({ page }) => {
    await login(page, username, invalid_password)
    await expect(page.locator('[data-test="error"]'))
        .toContainText('Username and password do not match');

    const errorMsg = await page.locator('[data-test="error"]').textContent();
    console.log(`Error Message: ${errorMsg}`);

    // Assert to Screenshot Fail
    await expect(page).toHaveURL(/inventory.html/);

    });

  test('Empty username', async ({ page }) => {
    await login(page, "", valid_password);
    await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
  });


  test.skip('Locked user - temporarily skip', async ({ page }) => {
    await login(page, "locked_out_user", "secret_sauce");
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });
  
});
