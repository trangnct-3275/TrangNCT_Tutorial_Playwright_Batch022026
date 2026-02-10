import { test, expect } from '@playwright/test';

test('DemoQA - Valid data', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  
  await page.locator('input#firstName').fill("Trang");
  await page.locator('input#lastName').fill("Nguyen");
  await page.locator('input#userEmail').fill("tracy_test@gmail.com");

  await page.locator('//label[text()="Female"]').check();

  await page.locator('input#userNumber').fill("0918408076");

  await page.locator('input#dateOfBirthInput').click();
  await page.locator('select.react-datepicker__year-select').selectOption('1999');
  await page.locator('select.react-datepicker__month-select').selectOption('June');
  await page.locator('//div[text()="16"]').click();

  await page.locator('//label[text()="Reading"]').check();

  await page.locator('//h5[text()="Student Registration Form"]').hover();

  await page.locator('button[type="submit"]').click();

  await expect(page.locator('div.modal-content div.h4')).toHaveText("Thanks for submitting the form");

});