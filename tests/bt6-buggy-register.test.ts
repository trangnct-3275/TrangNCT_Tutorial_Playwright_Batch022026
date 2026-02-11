import { test, expect } from '@playwright/test';
import { randomInt } from 'crypto';

test('Buggy Web: Register and login with valid data', async ({ page }) => {
  const username = "test." + randomInt(9999);
  const firstName = "Tracy";
  const lastName = "Nguyen";
  const password = "Aa@123456"

  await page.goto("https://buggy.justtestit.org/register");
  
  await expect(page.locator("main h2")).toHaveText("Register with Buggy Cars Rating");

  await page.locator("input#username").fill(username);
  console.log("Username:" + username);
  await page.locator("input#firstName").fill(firstName);
  await page.locator("input#lastName").fill(lastName);
  await page.locator("input#password").fill(password);
  await page.locator("input#confirmPassword").fill(password);

  await page.locator("//button[text()='Register']").click();

  await expect(page.locator("div.alert-success")).toContainText("Registration is successful");  

  await page.locator("input[name='login']").fill(username);
  await page.locator("header input[name='password']").fill(password);
  await page.locator("//button[text()='Login']").click();

  const verifyLogin = page.locator("header span");
  await verifyLogin.waitFor({state: 'visible'});
  await expect(verifyLogin).toContainText(firstName);

});

test('Test case 02: Login with valid data', async ({ page }) => {
  await page.goto("https://buggy.justtestit.org/register");
  
  
});