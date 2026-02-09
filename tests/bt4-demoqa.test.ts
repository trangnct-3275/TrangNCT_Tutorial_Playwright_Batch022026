import { test, expect } from '@playwright/test';

test('SauceLab Demo', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  

});
